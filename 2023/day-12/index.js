import fs from 'fs';

const input = fs.readFileSync('in1.txt', 'utf8');

const timeLabel = 'AOC 2023. day 12';

function part1() {
    let res = 0;
    const inputArr = parseInput(input);

    for (let i = 0; i < inputArr.length; i++) {
        const subRes = calculatePermutations(inputArr[i][0], inputArr[i][1]);
        res += subRes;
    }
    console.log(res);
}

function parseInput(inputText) {
    return inputText.split('\n').map(line => {
        const [str, numsText] = line.split(' ');
        const nums = numsText.split(',');

        return [str, nums.map(item => +item)];
    });
}

function calculatePermutations(str, groups, deep = 0, memo = {}) {

    const key = `${str},${deep}`;

    if (!str) {
        return groups.length === 0 ? 1 : 0;
    }

    if (memo[key] !== undefined) {
        return memo[key];
    }

    if (!groups.length) {
        if (str.includes('#')) {
            return 0;
        } else {
            return 1;
        }
    }

    let result = 0;

    if (str[0] === '.' || str[0] === '?') {
        result += calculatePermutations(str.substring(1), groups, deep + 1, memo);
    }

    const currentGroup = groups[0];
    const currentStr = str.substring(0, currentGroup);
    if (
        (str[0] === '#' || str[0] === '?') &&
        str.length >= currentGroup &&
        !currentStr.includes('.') &&
        str[currentGroup] !== '#'
    ) {
        const newGroups = [...groups];
        newGroups.shift();
        result += calculatePermutations(str.substring(currentGroup + 1), newGroups, deep + 1, memo);
    }

    memo[key] = result;

    return result;
}

function part2() {
    let res = 0;
    const inputArr = parseInput2(input);

    for (let i = 0; i < inputArr.length; i++) {
        const subRes = calculatePermutations(inputArr[i][0], inputArr[i][1]);
        res += subRes;
    }
    console.log(res);
}

function parseInput2(inputText) {
    return inputText.split('\n').map(line => {
        const [str, numsText] = line.split(' ');
        const nums = numsText.split(',').map(Number);

        let newStr = str;
        let newNums = [...nums];

        for (let i = 0; i < 4; i++) {
            newStr += '?' + str;
            newNums = [...newNums, ...nums];
        }

        return [newStr, newNums];
    });
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
