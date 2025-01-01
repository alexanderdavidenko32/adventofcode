const fs = require('fs');

const input = fs.readFileSync('in1.txt', 'utf8');

const timeLabel = 'AOC 2023. day 07';

const cardToHexMap = {
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    'T': 'A',
    'J': 'B',
    'Q': 'C',
    'K': 'D',
    'A': 'E',
}


const cardToHexMap2 = {
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    'T': 'A',
    'J': '1', // changed to 1
    'Q': 'C',
    'K': 'D',
    'A': 'E',
}

function part1() {
    let res = 0;

    const inputArr = parseInput(input);
    const sorted = inputArr.toSorted((a, b) => {
        if (a[3] === b[3]) {
            return a[2] - b[2];
        }

        return a[3] - b[3];
    });

    for (let i = 0; i < sorted.length; i++) {
        res += sorted[i][1] * (i + 1);
    }

    console.log(res);
}

function parseInput(inputArr) {
    return inputArr.split('\n').map(line => {
        const [hand, bidText] =  line.split(' ');
        const handHex = handToHex(hand);
        const handType = getHandType(hand);

        return [hand, +bidText, parseInt(handHex, 16), handType];
    });
}

function handToHex(hand) {
    let res = '0x';

    for (let i = 0; i < hand.length; i++) {
        res += cardToHexMap[hand[i]];
    }
    return res;
}

function getHandType(hand) {
    const map = {};

    for (let i = 0; i < hand.length; i++) {
        map[hand[i]] = (map[hand[i]] || 0) + 1;
    }

    const counts = Object.values(map).sort((a, b) => b - a);

    if (counts[0] === 5) {
        return 6;
    }

    if (counts[0] === 4) {
        return 5;
    }

    if (counts[0] === 3 && counts[1] === 2) {
        return 4;
    }

    if (counts[0] === 3 && counts[1] === 1) {
        return 3;
    }

    if (counts[0] === 2 && counts[1] === 2) {
        return 2;
    }

    if (counts[0] === 2 && counts[1] === 1) {
        return 1;
    }

    return 0;
}

function part2() {

    let res = 0;

    const inputArr = parseInput2(input);
    const sorted = inputArr.toSorted((a, b) => {
        if (a[3] === b[3]) {
            return a[2] - b[2];
        }

        return a[3] - b[3];
    });

    for (let i = 0; i < sorted.length; i++) {
        res += sorted[i][1] * (i + 1);
    }

    console.log(res);
}

function parseInput2(inputArr) {
    return inputArr.split('\n').map(line => {
        const [hand, bidText] =  line.split(' ');
        const handHex = handToHex2(hand);
        const handType = getHandType2(hand);

        return [hand, +bidText, parseInt(handHex, 16), handType];
    });
}

function handToHex2(hand) {
    let res = '0x';

    for (let i = 0; i < hand.length; i++) {
        res += cardToHexMap2[hand[i]];
    }
    return res;
}

function getHandType2(hand) {
    const map = {
        'J': 0
    };

    for (let i = 0; i < hand.length; i++) {
        map[hand[i]] = (map[hand[i]] || 0) + 1;
    }

    let counts = [0];

    for (let key in map) {
        if (key === 'J') {
            continue;
        }
        counts.push(map[key]);
    }

    counts.sort((a, b) => b - a)

    counts[0] += map['J'];

    if (counts[0] === 5) {
        return 6;
    }

    if (counts[0] === 4) {
        return 5;
    }

    if (counts[0] === 3 && counts[1] === 2) {
        return 4;
    }

    if (counts[0] === 3 && counts[1] === 1) {
        return 3;
    }

    if (counts[0] === 2 && counts[1] === 2) {
        return 2;
    }

    if (counts[0] === 2 && counts[1] === 1) {
        return 1;
    }

    return 0;
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
