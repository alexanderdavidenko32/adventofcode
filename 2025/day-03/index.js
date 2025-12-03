import fs from 'fs';

const day = '03';
// const day = '03-test';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2025. day ' + day;

const inputArr = input.split('\n');


function part1() {
    let result = 0;

    const banks = parseInput(inputArr);

    result = findJoltages(banks);

    console.log(result);
}

function findJoltages(banks, size = 2) {
    const result = [];

    for (let i = 0; i < banks.length; i++) {
        const joltage = findFirstLeftMaximum(banks[i], size);

        result.push(+joltage);
    }

    return result.reduce((acc, current) => acc + current, 0);
}

function findFirstLeftMaximum(bank, size = 2) {
    if (size === 0) {
        return '';
    }
    if (bank.length < size) {
        return '';
    }
    const start = bank.length - 1 - size + 1;
    let maxIndex = start;

    for (let i = start; i >= 0; i--) {
        if (bank[i] >= bank[maxIndex]) {
            maxIndex = i;
        }
    }

    return '' + bank[maxIndex] + findFirstLeftMaximum(bank.slice(maxIndex + 1), size - 1);
}

function parseInput(arr) {
    return arr.map(item => {
        return item.split('').map(Number);
    });
}

function part2() {
    let result = 0;

    const banks = parseInput(inputArr);

    result = findJoltages(banks, 12);

    console.log(result);
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);