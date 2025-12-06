import fs from 'fs';

const day = '06';
// const day = '06-test';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2025. day ' + day;


function part1() {
    let result = 0;

    const lines = parseInput(input);

    result = doMath(lines);

    console.log(result);
}

function parseInput(input) {
    const linesStrs = input.split('\n');

    const lines = linesStrs.map(line => {
        return line.replaceAll(/\s{2,}/g, ' ').trim().split(' ');
    })

    return lines;
}


function doMath(input) {
    let result = 0;
    const operations = input[input.length - 1];

    for (let i = 0; i < input[0].length; i++) {
        let sum = 0;
        let prod = 1;

        for (let j = 0; j < input.length - 1; j++) {
            const num = +input[j][i];
            if (operations[i] === '+') {
                sum += num;
            } else {
                prod *= num;
            }
        }

        if (operations[i] === '+') {
            result += sum;
        } else {
            result += prod
        }
    }

    return result;
}

function part2() {
    let result = 0;

    const lines = parseInput2(input);

    result = doMath2(lines);

    console.log(result);
}


function parseInput2(input) {
    return input.split('\n');
}

function doMath2(input) {
    let result = 0;

    const maxWidth = getMaxWidthOfLine(input);

    const nums = [];
    for (let i = 0; i < maxWidth; i++) {

        let tmpResult = '';
        for (let j = 0; j < input.length - 1; j++) {
            const num = input[j][i];
            if (num !== undefined && num !== ' ') {
                tmpResult += num;
            }
        }

        nums.push(tmpResult);
    }

    const operations = input[input.length - 1].replaceAll(/\s{2,}/g, ' ').trim().split(' ');

    let currentOperationIndex = 0;
    let currentOperation = operations[currentOperationIndex];
    let tempResult = [];

    for (let i = 0; i < nums.length; i++) {
        const numStr = nums[i];
        const num = +numStr;

        if (numStr !== '') {
            tempResult.push(num);
        }

        if (numStr === '' || i === nums.length - 1) {
            if (currentOperation === '+') {
                result += tempResult.reduce((acc, curr) => acc + curr, 0);
            } else {
                result += tempResult.reduce((acc, curr) => acc * curr, 1);
            }

            currentOperationIndex++;
            currentOperation = operations[currentOperationIndex];
            tempResult = [];
        }
    }

    return result;
}

function getMaxWidthOfLine(input) {
    return input.reduce((acc, curr) => Math.max(acc, curr.length), 0);
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
