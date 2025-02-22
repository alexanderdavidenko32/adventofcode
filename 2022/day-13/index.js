import fs from 'fs';

const day = '13';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2022. day ' + day;


function part1() {
    let res;
    const pairs = parseInput(input);

    res = getCount(pairs);

    console.log(res);
}

function parseInput(inputText) {
    return inputText.split('\n\n').map(line => {
        const [leftStr, rightStr] = line.split('\n');

        const left = parseArr(leftStr);
        const right = parseArr(rightStr);

        return {left, right};
    });
}

function parseArr(arrStr) {
    return JSON.parse(arrStr);
}

function getCount(pairs) {
    const res = [];

    for (let i = 0; i < pairs.length; i++) {
        if (isOrdered(pairs[i])) {
            res.push(i + 1);
        }
    }

    return res.reduce((acc, curr) => acc + curr, 0);
}

function isOrdered(pair) {
    const {left, right} = pair;

    const maxLength = Math.max(left?.length, right?.length);

    for (let i = 0; i < maxLength; i++) {
        let leftItem = left[i];
        let rightItem = right[i];

        if (leftItem !== undefined && rightItem === undefined) {
            return false;
        }
        if (leftItem === undefined && rightItem !== undefined) {
            return true;
        }

        // integers case
        if (Number.isInteger(leftItem) && Number.isInteger(rightItem)) {
            if  (leftItem < rightItem) {
                return true;
            } else if (leftItem > rightItem) {
                return false
            }

            continue;
        }

        // any of the items is integer
        if (Number.isInteger(leftItem)) {
            leftItem = [leftItem];
        }

        if (Number.isInteger(rightItem)) {
            rightItem = [rightItem];
        }

        // both arrays
        if (Array.isArray(leftItem) && Array.isArray(rightItem)) {
            const res = isOrdered({left: leftItem, right: rightItem});

            if (res === true) {
                return true;
            }

            if (res === false) {
                return false;
            }
        }
    }

    return null;
}

function part2() {
    let res;
    const pairs = parseInput2(input);
    const key1 = [[2]];
    const key2 = [[6]];
    pairs.push(key1);
    pairs.push(key2);

    sortPairs(pairs);
    res = getDecoderKey(pairs, key1, key2);

    console.log(res);
}

function parseInput2(inputText) {
    const res = [];
    inputText.split('\n\n').forEach(line => {
        const [leftStr, rightStr] = line.split('\n');

        const left = parseArr(leftStr);
        const right = parseArr(rightStr);

        res.push(left);
        res.push(right);
    });

    return res;
}
function sortPairs(pairs) {
    pairs.sort((a, b) => {
        const ret = isOrdered({left: a, right: b});
        if (ret === true) {
            return -1;
        } else if (ret === false) {
            return 1;
        }

        return 0;
    });
}

function getDecoderKey(pairs, key1, key2) {
    let res = 1;

    for (let i = 0; i < pairs.length; i++) {
        if (pairs[i] === key1 || pairs[i] === key2) {
            res *= i + 1;
        }
    }

    return res;
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
