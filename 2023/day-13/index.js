import fs from 'fs';

const day = 13;

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2023. day ' + day;

function part1() {
    let res = 0;
    const inputArr = parseInput(input);

    for (let i = 0; i < inputArr.length; i++) {
        const pattern = inputArr[i];
        const count = findCount(pattern);
        res += count;
    }
    console.log(res);
}

function parseInput(inputText) {
    return inputText.split('\n\n').map(pattern => {
        return pattern.split('\n');
    });
}

function findCount(pattern) {
    const res = findHorizontalMirror(pattern);

    if (res !== -1) {
        return res * 100;
    }

    return findVerticalMirror(pattern);
}

function rotate(pattern) {
    const res = [];

    for (let j = 0; j < pattern[0].length; j++) {
        let line = '';
        for (let i = 0; i < pattern.length; i++) {
            line = pattern[i][j] + line;
        }

        res.push(line);
    }

    return res;
}

function findVerticalMirror(pattern) {
    const rotated = rotate(pattern);

    return findHorizontalMirror(rotated);
}

function findHorizontalMirror(pattern) {
    let topRow = -1;

    for (let i = 0; i < pattern.length - 1; i++) {
        if (pattern[i] !== pattern[i + 1]) {
            continue;
        }

        if (isNotMirror(pattern, i)) {
            continue;
        }

        topRow = i + 1;
        return topRow;
    }

    return topRow;
}

function isNotMirror(pattern, start) {
    let s = start;
    let e = start + 1;

    while (true) {

        if (s < 0) {
            return false;
        }

        if (e === pattern.length) {
            return false;
        }

        if (pattern[s] !== pattern[e]) {
            return true;
        }

        s--;
        e++;
    }
}

function part2() {
    let res = 0;
    const inputArr = parseInput(input);

    for (let i = 0; i < inputArr.length; i++) {
        const pattern = inputArr[i];
        const count = findCount2(pattern);
        res += count;
    }
    console.log(res);
}

function findCount2(pattern) {
    const res = findHorizontalMirror2(pattern);

    if (res !== -1) {
        return res * 100;
    }

    return findVerticalMirror2(pattern);
}


function findVerticalMirror2(pattern) {
    const rotated = rotate(pattern);

    return findHorizontalMirror2(rotated);
}

function findHorizontalMirror2(pattern) {
    let topRow = -1;

    for (let i = 0; i < pattern.length - 1; i++) {
        if (isNotMirror2(pattern, i)) {
            continue;
        }

        topRow = i + 1;

        return topRow;
    }

    return topRow;
}

function isNotMirror2(pattern, start) {
    let s = start;
    let e = start + 1;

    // mirror should contain exactly 1 smudge
    let smudgesCount = 0;

    while (true) {
        if (s < 0) {
            return smudgesCount !== 1;
        }

        if (e === pattern.length) {
            return smudgesCount !== 1;
        }

        smudgesCount += getSmudgesCount(pattern, s, e);

        s--;
        e++;
    }
}

function getSmudgesCount(pattern, start, end) {
    let count = 0;
    for (let i = 0; i < pattern[0].length; i++) {
        if (pattern[start][i] !== pattern[end][i]) {
            count++;
        }

        if (count > 1) {
            return count;
        }
    }

    return count;
}


console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
