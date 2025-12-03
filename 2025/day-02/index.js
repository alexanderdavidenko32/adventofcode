import fs from 'fs';

const day = '02';
// const day = '02-test';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2025. day ' + day;

const inputArr = input.split(',');


function part1() {
    let result = 0;

    const ids = parseInput(inputArr);

    result = calculateInvalidIds(ids);

    console.log(result);
}

function parseInput(arr) {
    return arr.map(item => {
        const [start, end] = item.split('-');
        return [+start, +end];
    });
}

function calculateInvalidIds(ids) {
    const result = [];

    for (let i = 0; i < ids.length; i++) {
        const [start, end] = ids[i];

        for (let j = start; j <= end; j++) {
            if (!isValid(String(j))) {
                result.push(j);
            }
        }
    }

    return result.reduce((acc, curr) => acc + curr, 0);
}

function isValid(id) {
    const length = id.length;

    if (length % 2 !== 0) {
        return true;
    }

    const halfLength = length / 2;

    for (let i = 0; i < length / 2; i++) {
        if (id[i] !== id[i + halfLength]) {
            return true;
        }
    }

    return false;
}

function part2() {
    let result = 0;

    const ids = parseInput(inputArr);

    result = calculateInvalidIds2(ids);

    console.log(result);
}


function calculateInvalidIds2(ids) {
    const result = [];

    for (let i = 0; i < ids.length; i++) {
        const [start, end] = ids[i];

        for (let j = start; j <= end; j++) {
            if (isInValid(String(j))) {
                result.push(j);
            }
        }
    }

    return result.reduce((acc, curr) => acc + curr, 0);
}

function isInValid(str, start = 0, length = 1) {
    if (start > str.length / 2) {
        return false;
    }

    if (length > str.length / 2) {
        return false;
    }

    if (str.length < 2) {
        return false;
    }

    const pattern = str.substring(start, length);

    if (str.split(pattern).length - 1 === str.length / pattern.length) {
        return true;
    }

    return isInValid(str, start, length + 1);
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);