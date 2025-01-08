import fs from 'fs';

const input = fs.readFileSync('in1.txt', 'utf8');

const timeLabel = 'AOC 2023. day 15';

function part1() {
    let res = 0;
    const inputArr = parseInput(input);

    for (let i = 0; i < inputArr.length; i++) {
        const item = inputArr[i];

        const hash = calculateHash(item);

        res += hash;
    }

    console.log(res);
}

function parseInput(inputText) {
    return inputText.split(',');
}

function calculateHash(str) {
    let currentValue = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        const charCode = char.charCodeAt(0);

        currentValue += charCode;
        currentValue *= 17;
        currentValue %= 256;
    }

    return currentValue;
}

function part2() {
    let res = 0;
    const inputArr = parseInput2(input);
    const sequence = {};

    for (let i = 0; i < inputArr.length; i++) {
        const operation = inputArr[i];

        addToSequence(sequence, operation);

        res = calculateTotalFocusingPower(sequence);
    }

    console.log(res);
}

function parseInput2(inputText) {
    const opRe = /(.*)([-=])(\d?)/
    return inputText.split(',').map(operation => {
        const res = opRe.exec(operation);

        return [res[1], res[2], +res[3]];
    });
}

function addToSequence(sequence, operation) {
    const [label, op, focalLength] = operation;

    const hash = calculateHash(label);

    let box = sequence[hash] || [];

    if (op === '-') {
        box = box.filter(item => item.label !== label);
    }

    if (op === '=') {

        const foundOperation = box.find((item) => item.label === label);

        if (foundOperation) {
            foundOperation.focalLength = focalLength;
        } else {
            box.push({
                label,
                focalLength,
            });
        }
    }

    sequence[hash] = box;
}

function calculateTotalFocusingPower(sequence) {
    let res = 0;

    for (let boxKey in sequence) {
        const boxPosition = +boxKey + 1;

        const box = sequence[boxKey];

        for (let i = 0; i < box.length; i++) {
            const lensPosition = i + 1;
            const {focalLength} = box[i];

            res += boxPosition * lensPosition *  focalLength;
        }
    }

    return res;
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
