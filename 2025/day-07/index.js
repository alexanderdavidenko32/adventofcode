import fs from 'fs';

const day = '07';
// const day = '07-test';
// const day = '07-test2';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2025. day ' + day;


function part1() {
    let result = 0;

    const tachyonManifold = parseInput(input);

    result = calculateBeamSplits(tachyonManifold);

    console.log(result);
}

function calculateBeamSplits(tachyonManifold) {
    let result = 0;
    const startIndex = Math.floor(tachyonManifold[0].length / 2);

    tachyonManifold[0][startIndex] = '|';

    for (let i = 1; i < tachyonManifold.length; i++) {
        for (let j = 0; j < tachyonManifold[0].length; j++) {
            const cell = tachyonManifold[i][j];
            const upperCell = tachyonManifold[i - 1][j];

            if (upperCell === '|') {
                if (cell === '.') {
                    tachyonManifold[i][j] = '|';
                }
                if (cell === '^') {
                    tachyonManifold[i][j - 1] = '|';
                    tachyonManifold[i][j + 1] = '|';

                    result++;
                }
            }
        }
    }

    return result;
}

function renderArray(arr) {
    return arr.map(
        item => item.join('')
    ).join('\n');
}

function parseInput(input) {
    return input.split('\n').map((line) => line.split(''));
}

function part2() {
    let result = 0;

    const tachyonManifold = parseInput(input);

    prepareManifold(tachyonManifold);

    result = calculateTimelines(tachyonManifold, tachyonManifold[0], 1);

    console.log(result);
}

function prepareManifold(tachyonManifold) {

    const startIndex = Math.floor(tachyonManifold[0].length / 2);

    tachyonManifold[0][startIndex] = '|';
}

function calculateTimelines(tachyonManifold, prevRow, currentRowIndex, cache = {}) {
    let result = 0;

    const prevRowStr = prevRow.join();

    if (cache[prevRowStr]) {
        return cache[prevRowStr];
    }

    if (currentRowIndex === tachyonManifold .length - 1) {
        return 1;
    }
    const currentRow = [...tachyonManifold[currentRowIndex]];

    for (let i = 0; i < tachyonManifold[0].length; i++) {
        const cell = currentRow[i];
        const upperCell = prevRow[i];

        if (upperCell === '|') {
            if (cell === '.') {
                currentRow[i] = '|';
            }
        }
    }

    const nextRow = [...tachyonManifold[currentRowIndex + 1]];

    for (let i = 0; i < tachyonManifold[0].length; i++) {
        const cell = nextRow[i];
        const upperCell = currentRow[i];

        if (upperCell === '|') {
            if (cell === '^') {
                const leftTimeline = [...nextRow];
                leftTimeline[i - 1] = '|';
                result += calculateTimelines(tachyonManifold, leftTimeline, currentRowIndex + 2, cache);

                const rightTimeline = [...nextRow];
                rightTimeline[i + 1] = '|';
                result += calculateTimelines(tachyonManifold, rightTimeline, currentRowIndex + 2, cache);
            } else {
                const straightTimeline = [...nextRow];
                straightTimeline[i] = '|';
                result += calculateTimelines(tachyonManifold, straightTimeline, currentRowIndex + 2, cache);
            }
        }
    }

    cache[prevRowStr] = (cache[prevRowStr] ?? 0) + result;

    return result;
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
