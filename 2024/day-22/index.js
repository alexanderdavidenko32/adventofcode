const fs = require('fs');

const input = fs.readFileSync('in1.txt', 'utf8');


function part1() {
    const inputArr = input.split('\n').map(item => BigInt(item));

    const res = [];

    for (let i = 0; i < inputArr.length; i++) {
        let secretNum = inputArr[i];

        for (let j = 0; j < 2000; j++) {
            secretNum = calculate(secretNum);
        }

        res.push(secretNum);
    }

    const sum = res.reduce((acc, cur) => acc + cur, 0n);
    console.log(sum);
}

function calculate(secretNum) {
    const pow = secretNum * 64n;

    secretNum = mix(secretNum, pow);

    secretNum = prune(secretNum);

    const divided = secretNum / 32n;

    secretNum = mix(secretNum, divided);

    secretNum = prune(secretNum);

    const pow2 = secretNum * 2048n;

    secretNum = mix(secretNum, pow2);

    secretNum = prune(secretNum);

    return secretNum;
}

function mix(secretNum, mixValue) {
    return secretNum ^ mixValue;
}

function prune(value) {
    return value % 16777216n;
}

function part2() {
    const inputArr = input.split('\n').map(item => BigInt(item));

    const sequences = [];

    for (let i = 0; i < inputArr.length; i++) {
        let secretNum = inputArr[i];
        const sequence = [];
        let prev = secretNum % 10n;

        for (let j = 0; j < 2000; j++) {
            secretNum = calculate(secretNum);

            const price = secretNum % 10n;
            const diff = price - prev;

            sequence.push([diff, price]);
            prev = price;
        }

        sequences.push(sequence);
    }

    const sequenceMap = {};
    for (let i = 0; i < sequences.length; i++) {
        const visited = new Set();

        for (let j = 3; j < sequences[i].length; j++) {
            const sequence = sequences[i];

            const key = `${sequence[j - 3][0]},${sequence[j - 2][0]},${sequence[j - 1][0]},${sequence[j][0]}`;

            if (!visited.has(key)) {
                sequenceMap[key] = (sequenceMap[key] || 0n) + sequence[j][1];
                visited.add(key);
            }
        }
    }

    let max = 0n;
    for (let sequence in sequenceMap) {
        if (sequenceMap[sequence] > max) {
            max = sequenceMap[sequence];
        }
    }

    console.log(max);
}

part1();
part2();