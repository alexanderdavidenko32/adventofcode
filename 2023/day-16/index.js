const fs = require('fs');

const input = fs.readFileSync('in1.txt', 'utf8');

const timeLabel = 'AOC 2023. day 16';

const directions = {
    N: [-1, 0],
    E: [0, 1],
    S: [1, 0],
    W: [0, -1]
}

const directionTransitions = {
    '/': {
        [directions.N]: directions.E,
        [directions.W]: directions.S,
        [directions.E]: directions.N,
        [directions.S]: directions.W,
    },
    '\\': {
        [directions.E]: directions.S,
        [directions.N]: directions.W,
        [directions.S]: directions.E,
        [directions.W]: directions.N,
    }
}

function part1() {
    let res = 0;
    const inputArr = parseInput(input);

    res = run(inputArr, [0, 0], directions.E);

    console.log(res.size);
}

function parseInput(inputText) {
    return inputText.split('\n').map(line => line.split(''));
}

function run(maze, start, startDirection) {
    const queue = [[start, startDirection]]; // point, direction
    const visited = new Set();
    const globalHistory = new Set();

    while (queue.length) {
        const [point, direction] = queue.shift();
        const [x, y] = point;

        if (!inBoundaries(maze, point)) {
            continue;
        }

        const cell = maze[x][y];
        const key = `${x}:${y}`;
        const historyKey = `${x}:${y}-${direction[0]}:${direction[1]}`;

        if (globalHistory.has(historyKey)) {
            continue;
        }

        visited.add(key);
        globalHistory.add(historyKey);

        if (cell === '.') {
            const [dx, dy] = direction;
            const nx = dx + x;
            const ny = dy + y;

            queue.push([[nx, ny], direction]);
            continue;
        }

        if (cell === '/' || cell === '\\') {
            const newDirection = directionTransitions[cell][direction];

            const [dx, dy] = newDirection;
            const nx = dx + x;
            const ny = dy + y;

            queue.push([[nx, ny], newDirection]);
            continue;
        }

        if (cell === '|') {
            if (direction === directions.N || direction === directions.S) {
                const [dx, dy] = direction;
                const nx = dx + x;
                const ny = dy + y;

                queue.push([[nx, ny], direction]);
            } else {
                const [dx1, dy1] = directions.N;
                const nx1 = dx1 + x;
                const ny1 = dy1 + y;

                queue.push([[nx1, ny1], directions.N]);

                const [dx2, dy2] = directions.S;
                const nx2 = dx2 + x;
                const ny2 = dy2 + y;

                queue.push([[nx2, ny2], directions.S]);
            }
            continue;
        }

        if (cell === '-') {
            if (direction === directions.W || direction === directions.E) {
                const [dx, dy] = direction;
                const nx = dx + x;
                const ny = dy + y;

                queue.push([[nx, ny], direction]);
            } else {
                const [dx1, dy1] = directions.W;
                const nx1 = dx1 + x;
                const ny1 = dy1 + y;

                queue.push([[nx1, ny1], directions.W]);

                const [dx2, dy2] = directions.E;
                const nx2 = dx2 + x;
                const ny2 = dy2 + y;

                queue.push([[nx2, ny2], directions.E]);
            }
            continue;
        }
    }

    return visited;
}

function inBoundaries(maze, point) {
    const [x, y] = point;

    return x >= 0 && y >= 0 && x < maze.length && y < maze[0].length;
}

function part2() {
    let res = 0;
    const inputArr = parseInput(input);

    for (let i = 0; i < inputArr[0].length; i++) {
        const top = run(inputArr, [0, i], directions.S);
        const bottom = run(inputArr, [inputArr.length - 1, i], directions.N);

        res = Math.max(res, top.size, bottom.size);
    }
    for (let i = 0; i < inputArr.length; i++) {
        const left = run(inputArr, [i, 0], directions.E);
        const right = run(inputArr, [i, inputArr[0].length - 1], directions.W);

        res = Math.max(res, left.size, right.size);
    }

    console.log(res);
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
