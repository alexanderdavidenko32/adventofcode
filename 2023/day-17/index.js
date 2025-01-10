import { Heap } from 'heap-js';
import fs from 'fs';

const day = 17;

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2023. day ' + day;

const directions = {
    N: [-1, 0],
    E: [0, 1],
    S: [1, 0],
    W: [0, -1]
}

const possibleDirections = {
    [directions.N]: [
        directions.N,
        directions.E,
        directions.W
    ],
    [directions.E]: [
        directions.E,
        directions.N,
        directions.S
    ],
    [directions.S]: [
        directions.S,
        directions.E,
        directions.W,
    ],
    [directions.W]: [
        directions.W,
        directions.S,
        directions.N,
    ]
}

function part1() {
    let res = 0;
    const inputArr = parseInput(input);

    res = run(inputArr, [0, 0], 1, 3);

    console.log(res);
}

function parseInput(inputText) {
    return inputText.split('\n').map(line => line.split('').map(Number));
}

function inBoundaries(maze, point) {
    const [x, y] = point;

    return x >= 0 && y >= 0 && x < maze.length && y < maze[0].length;
}

function part2() {
    let res = 0;
    const inputArr = parseInput(input);

    res = run(inputArr, [0, 0], 4, 10);

    console.log(res);
}


function run(maze, start, minLine, maxLine) {
    const q = new Heap((a, b) => a[1] - b[1]);

    const visited = new Set();

    q.push([start, 0, 0, directions.S]);// point, totalHeat, straightLineCount, direction
    q.push([start, 0, 0, directions.E]);// point, totalHeat, straightLineCount, direction

    while (q.length) {
        const [point, heat, straightLineCount, direction] = q.pop();
        const [x, y] = point;

        if (!inBoundaries(maze, point)) {
            continue;
        }

        if (straightLineCount > maxLine) {
            continue;
        }


        if (x === maze.length - 1 && y === maze[0].length - 1 && straightLineCount >= minLine) {
            return heat;
        }

        const key = `${x}:${y}-${direction[0]}:${direction[1]}-${straightLineCount}`;

        if (visited.has(key)) {
            continue
        }

        visited.add(key);

        if (straightLineCount < minLine) {
            const [dx, dy] = direction;
            const nx = dx + x;
            const ny = dy + y;

            const newStraightLineCount = straightLineCount + 1;

            if (!inBoundaries(maze, [nx, ny])) {
                continue;
            }
            const nextCell = maze[nx][ny];

            q.push([[nx, ny], heat + nextCell, newStraightLineCount, direction]);
        }

        if  (straightLineCount >= minLine) {
            const newDirections = possibleDirections[direction];

            for (let newDirection of newDirections) {
                const [dx, dy] = newDirection;
                const nx = dx + x;
                const ny = dy + y;

                if (!inBoundaries(maze, [nx, ny])) {
                    continue;
                }
                const nextCell = maze[nx][ny];

                const newStraightLineCount = direction === newDirection ? straightLineCount + 1 : 1;

                q.push([[nx, ny], heat + nextCell, newStraightLineCount, newDirection]);
            }
        }

    }
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
