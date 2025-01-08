import fs from 'fs';

const input = fs.readFileSync('in1.txt', 'utf8');

const timeLabel = 'AOC 2023. day 09';

function part1() {
    let res = 0;
    const history = parseInput(input);

    for (let i = 0; i < history.length; i++) {
        const nextNumber = getDiff(history[i]);
        res += nextNumber;
    }

    console.log(res);
}

function parseInput(inputText) {
    return inputText.split('\n').map(line => line.split(' ').map(item => +item));
}

function getDiff(arr) {
    const diffs = [];
    let isAllZeros = true;

    for (let i = 0; i < arr.length - 1; i++) {
        const diff = arr[i + 1] - arr[i];

        if (diff !== 0) {
            isAllZeros = false;
        }

        diffs.push(diff);
    }

    const lastElement = arr[arr.length - 1];

    if (isAllZeros) {
        return lastElement;
    } else {
        const diff = getDiff(diffs);
        return lastElement + diff;
    }
}

function getDiff2(arr) {
    const diffs = [];
    let isAllZeros = true;

    for (let i = 0; i < arr.length - 1; i++) {
        const diff = arr[i + 1] - arr[i];

        if (diff !== 0) {
            isAllZeros = false;
        }

        diffs.push(diff);
    }

    const firstElement = arr[0];

    if (isAllZeros) {
        return firstElement;
    } else {
        const diff = getDiff2(diffs);
        return firstElement - diff;
    }
}

function part2() {
    let res = 0;
    const history = parseInput(input);

    for (let i = 0; i < history.length; i++) {
        const nextNumber = getDiff2(history[i]);
        res += nextNumber;
    }

    console.log(res);
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
