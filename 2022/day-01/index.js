import fs from 'fs';

const day = '01';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2022. day ' + day;

function part1() {
    let res = 0;

    const inventories = parseInput(input);

    res = getMaxOfInventories(inventories);

    console.log(res);
}

function parseInput(inputText) {
    return inputText.split('\n\n').map((groups) => groups.split('\n').map(Number));
}

function getMaxOfInventories(inventories) {
    let max = 0;

    for (let inventory of inventories) {
        let total = inventory.reduce((acc, curr) => acc + curr, 0);

        max = Math.max(max, total);
    }

    return max;
}

function part2() {
    let res = 0;

    const inventories = parseInput(input);

    res = getTopThree(inventories);

    console.log(res);
}

function getTopThree(inventories) {
    let totals = [];

    for (let inventory of inventories) {
        let total = inventory.reduce((acc, curr) => acc + curr, 0);

        totals.push(total);
    }

    totals.sort((a, b) => b - a);

    const topThree = totals.slice(0, 3);

    return topThree.reduce((acc, curr) => acc + curr, 0);
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
