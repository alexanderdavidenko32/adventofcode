import fs from 'fs';

const input = fs.readFileSync('in1.txt', 'utf8');

const timeLabel = 'AOC 2023. day 14';

const directions = {
    N: [-1, 0],
    E: [0, 1],
    S: [1, 0],
    W: [0, -1]
}

const directionsMap = ['N', 'W', 'S', 'E'];

function part1() {
    let res = 0;
    const inputArr = parseInput(input);

    tilt(inputArr, directions.N);

    res = calculateLoad(inputArr);

    console.log(res);
}

function parseInput(inputText) {
    return inputText.split('\n').map(line => {
        return line.split('');
    });
}

function tilt(arr, direction) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            const cell = arr[i][j];

            if (cell === 'O') {
                move(arr, [i, j], direction);
            }
        }
    }
}

function calculateLoad(arr) {
    let res = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            const cell = arr[i][j];
            if (cell === 'O') {
                res += arr.length - i;
            }
        }
    }

    return res;
}

function move(arr, cell, direction) {
    const [dx, dy] = direction;
    const [x, y] = cell;
    const nx = dx + x;
    const ny = dy + y;

    if (!arr[nx]?.[ny]) { // boundaries
        return false;
    }

    if (arr[nx][ny] === '#') {
        return false;
    }

    if (arr[nx][ny] === '.') {
        arr[nx][ny] = 'O';
        arr[x][y] = '.';

        move(arr, [nx, ny], direction);

        return true;
    }

    if (arr[nx][ny] === 'O') {
        if (move(arr, [nx, ny], direction)) {
            arr[nx][ny] = 'O';
            arr[x][y] = '.';

            return true;
        } else {
            return false;
        }
    }
}

function part2() {
    let res = 0;
    const inputArr = parseInput(input);

    cycle(inputArr)

    res = calculateLoad(inputArr);

    console.log(res);
}

function cycle(inputArr) {
    const cycles = 1000000000;
    const memo = {};

    for (let i = 0; i < cycles; i++) {
        const matrixSnapShot = arrayToString(inputArr);


        if (memo[matrixSnapShot] !== undefined) {
            const repeatedIteration = memo[matrixSnapShot];
            const cycleLength = i - repeatedIteration;

            const cyclesLeft = Math.floor((cycles - i) / cycleLength);
            i += cyclesLeft * cycleLength;
        } else {
            memo[matrixSnapShot] = i;
        }

        for  (let j = 0; j < directionsMap.length; j++) {
            const directionName = directionsMap[j % 4];
            const direction = directions[directionName];

            tilt(inputArr, direction);
        }
    }
}

function arrayToString(arr) {
    return arr.map(item => item.join('')).join('');
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
