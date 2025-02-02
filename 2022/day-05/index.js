import fs from 'fs';

const day = '05';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2022. day ' + day;

function part1() {
    let res;
    const [crates, moves] = parseInput(input);

    moveCrates(crates, moves);

    res = getTopItems(crates);

    console.log(res);
}

function parseInput(inputText) {
    const [cratesStr, movesStr] = inputText.split('\n\n');

    const cratesLines = cratesStr.split('\n');
    const stackIndexesLine = cratesLines[cratesLines.length - 1];

    const crates = {};

    for (let i = 0; i < stackIndexesLine.length; i++) {
        const char = stackIndexesLine[i];

        if (char !== ' ') {
            const index = Number(char);
            crates[index] = [];

            for (let j = cratesLines.length - 2; j >= 0; j--) {
                if (!cratesLines[j][i] || cratesLines[j][i] === ' ') {
                    continue;
                }
                crates[index].push(cratesLines[j][i]);
            }
        }
    }

    const moves = movesStr.split('\n').map(line => {
        const [, count, ,from, , to] = line.split(' ');

        return [+count, +from, +to];
    })

    return [crates, moves];
}

function moveCrates(crates, moves) {
    for (let i = 0; i < moves.length; i++) {
        const [count, from, to] = moves[i];

        const toMove = crates[from].slice(-count);
        crates[from].splice(-count, count);

        crates[to].push(...toMove.reverse());
    }
}

function getTopItems(crates) {
    let res = '';

    for (let key in crates) {
        const last = crates[key].pop();
        res += last;
    }

    return res;
}


function part2() {
    let res = 0;
    const [crates, moves] = parseInput(input);

    moveCrates9001(crates, moves);

    res = getTopItems(crates);

    console.log(res);
}

function moveCrates9001(crates, moves) {
    for (let i = 0; i < moves.length; i++) {
        const [count, from, to] = moves[i];

        const toMove = crates[from].slice(-count);
        crates[from].splice(-count, count);

        crates[to].push(...toMove);
    }
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
