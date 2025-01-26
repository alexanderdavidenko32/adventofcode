import fs from 'fs';

const day = '03';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2022. day ' + day;

function part1() {
    let res = 0;
    const items = parseInput(input);

    const same = getSameChars(items);

    res = getTotal(same);

    console.log(res);
}

function parseInput(inputText) {
    return inputText.split('\n');
}

function getSameChars(items) {
    const res = [];

    for (let item of items) {
        const leftSide = item.slice(0, Math.floor(item.length / 2));
        const rightSide = item.slice(Math.floor(item.length / 2), item.length);

        const leftSet = new Set(leftSide);
        const rightSet = new Set(rightSide);

        res.push([...leftSet.intersection(rightSet)]);
    }

    return res.flat();
}

function getTotal(same) {
    let res = 0;
    const aCharcode = 'a'.charCodeAt(0);
    const ACharcode = 'A'.charCodeAt(0);

    for (let item of same) {
        const charCode = item.charCodeAt(0);
        let diff;

        if (charCode >= aCharcode) {

            diff = charCode - aCharcode + 1;
        } else {
            diff = charCode - ACharcode + 27;
        }

        res += diff;
    }

    return res;
}

function part2() {
    let res = 0;
    const items = parseInput(input);

    const same = getSameChars2(items);

    res = getTotal(same);

    console.log(res);
}

function getSameChars2(items) {
    const res = [];

    for (let i = 0; i < items.length; i += 3) {
        const set1 = new Set(items[i]);
        const set2 = new Set(items[i + 1]);
        const set3 = new Set(items[i + 2]);

        const intersection1and2 = set1.intersection(set2);


        res.push([...intersection1and2.intersection(set3)]);
    }

    return res.flat();
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
