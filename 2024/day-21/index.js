const fs = require('fs');

const input = fs.readFileSync('in1.txt', 'utf8');

const directions = [
    [-1, 0, '^'], //N
    [0, 1, '>'], //E
    [1, 0, 'v'], //S
    [0, -1, '<'] //W
]

const keypad = `789
456
123
 0A`;

const robotButtons = ` ^A
<v>`;

const robotButtonsArr = robotButtons.split('\n');


function calculateRobots(countOfRobots) {
    const inputArr = input.split('\n');
    const keypadArr = keypad.split('\n');

    let sum = 0;

    const memo = {};

    for (let i = 0; i < inputArr.length; i++) {
        const combination = inputArr[i];

        const length = run(keypadArr, combination, memo, countOfRobots);

        const num = parseInt(combination);

        sum += num * length;
    }

    console.log(sum);
}

function run(maze, combination, memo, depth) {
    const key = `${combination}:${depth}`;
    if (memo[key]) {
        return memo[key];
    }

    let start = 'A';
    let length = 0;

    for (let i = 0; i < combination.length; i++) {
        const end = combination[i]

        const paths = getKeypadPath(maze, start, end);

        if (depth === 0) {
            length += paths[0].length;
        } else {
            length += Math.min(...paths.map(path => run(robotButtonsArr, path, memo, depth - 1)));
        }

        start = end;
    }

    memo[key] = length;
    return length
}

function getKeypadPath(keypadArr, startChar, endChar) {
    const queue = [];

    const [sx, sy] = findCharCoords(keypadArr, startChar);

    const history = [];

    queue.push([[sx, sy], '', '']); //current, history
    while (queue.length > 0) {
        const [current, hist, pathCell] = queue.shift();
        const [cx, cy] = current;
        const cell = keypadArr[cx]?.[cy];

        if (cell === ' ' || !cell) {
            continue;
        }
        if (cell === endChar) {
            history.push(hist + 'A');
            continue;
        }

        for (let i = 0; i < directions.length; i++) {
            const [dx, dy, dir] = directions[i];
            const nx = dx + cx;
            const ny = dy + cy;

            if (!pathCell.includes(cell)) {
                queue.push([[nx, ny], hist + dir, pathCell + cell]);
            }
        }
    }

    const min = Math.min(...history.map(item => item.length));

    const filteredMin = history.filter(item => item.length === min);

    return filteredMin;
}

function findCharCoords(arr, char) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === char) {
                return [i, j];
            }
        }
    }

    return [-1, -1];
}

function part1() {
    calculateRobots(2);
}
function part2() {
    calculateRobots(25);
}

part1();
part2();