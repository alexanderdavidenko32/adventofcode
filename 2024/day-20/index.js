import fs from 'fs';

const day = '20';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2024. day ' + day;

const directions = {
    N: [-1, 0],
    E: [0, 1],
    S: [1, 0],
    W: [0, -1]
}

function part1(input, maxDistance) {
    const inputArr = input.split('\n').map(item => item.split(''));

    const start = findCharCoords(inputArr, 'S');
    const end = findCharCoords(inputArr, 'E');

    inputArr[start[0]][start[1]] = '.';
    inputArr[end[0]][end[1]] = '.';

    const filledArray = createEmptyArray(inputArr.length, inputArr[0].length);

    const path = calculatePath(inputArr, start, end, filledArray);


    let count = 0;
    for (let i = 0; i < path.length - 1; i++) {
        for (let j =  i + 1; j < path.length; j++) {
            const distance = Math.abs(path[i][0] - path[j][0]) + Math.abs(path[i][1] - path[j][1]);

            const saved = j - i - distance
            if (saved >= 100 && distance <= maxDistance) {
                count++;
            }
        }
    }

    console.log(count);
}


function part2(input, maxDistance) {
    part1(input, maxDistance);
}

function createEmptyArray(maxX, maxY) {
    const arr = [];

    for (let i = 0; i < maxY; i++) {
        const subArr = new Array(maxX).fill(0);
        arr.push(subArr);
    }

    return arr;
}

function calculatePath(maze, start) {
    const queue = [];
    const [sx, sy] = start;
    const visited = [];

    queue.push([[sx, sy], 0]); // [x,y], sum

    while (queue.length) {
        const [coords, sum] = queue.shift();
        const [x, y] = coords;

        if (maze[x][y] === '.') {
            visited.push([x, y]);
            maze[x][y] = sum;

            for (let direction in directions) {
                const [dx, dy] = directions[direction];
                const nx = dx + x;
                const ny = dy + y;

                queue.push([[nx, ny], sum + 1]);
            }
        }
    }

    return visited;
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

function renderArr(arr) {
    return arr.map(item => item.join('')).join('\n');
}

console.time(timeLabel);
part1(input, 2);
part2(input, 20);
console.timeEnd(timeLabel);