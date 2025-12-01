import fs from 'fs';

const day = '01';
// const day = '01-test';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2025. day ' + day;

const inputArr = input.split('\n');


function part1() {
    let result = 0;

    const moves = parseInput(inputArr);

    result = calculateZeroEnds(moves)

    console.log(result);
}

function calculateZeroEnds(moves) {
    let result = 0;
    let current = 50;
    const MAX = 100;

    moves.
        map(([direction, distance]) => {
            let res;

            if (direction === 'R') {
                res = (current + distance) % MAX;
            } else {
                res = (current - distance + MAX) % MAX;
            }

            current = res;

            if (res === 0) {
                result++;
            }
        });

    return result;
}

function parseInput(arr) {
    const res = arr.map((el, i) => {
        return [el[0], +el.substring(1)];
    });

    return res;
}
function part2() {
    let result = 0;

    const moves = parseInput(inputArr);

    result = calculateZeroEnds2(moves)

    console.log(result);
}


function calculateZeroEnds2(moves) {
    let result = 0;
    let current = 50;
    const MAX = 100;

    moves.
    map(([direction, distance]) => {
        let position;
        const zeroTimes = Math.floor(distance / MAX);
        const newDistance = distance % MAX;

        if (direction === 'R') {
            const sum = current + newDistance;

            position = sum % MAX;

            if (sum > MAX) {
                result++;
            }
        } else {
            const diff = current - newDistance;
            position = (diff + MAX) % MAX;

            if (diff < 0 && current !== 0) {
                result++;
            }
        }

        current = position;

        if (position === 0) {
            result++;
        }

        result += zeroTimes;
    });

    return result;
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);