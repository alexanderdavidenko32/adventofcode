import fs from 'fs';

const day = '21';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2023. day ' + day;

const directions = {
    N: [-1, 0],
    E: [0, 1],
    S: [1, 0],
    W: [0, -1]
}

function part1() {
    let res = 0;

    const maze = parseInput(input);
    const coords = findCharCoords(maze, 'S');

    res = getPlots(maze, coords, 64);

    console.log(res);
}

function getPlots(maze, startingPoint, maxSteps) {
    const queue = [[startingPoint, 0]]; // point, step

    const res = [];

    const mazeSize = maze.length;

    const dist = {};

    while (queue.length) {
        const [[x, y], step] = queue.shift();

        if (step >= maxSteps) {
            let count = 0;
            for (let d in dist) {
                if (dist[d] <= maxSteps && dist[d] % 2 === maxSteps % 2) {
                    count++;
                }
            }

            return count;
        }

        for (let dir in directions) {
            const [dx, dy] = directions[dir];

            const nx = dx + x;
            const ny = dy + y;

            // to calculate cases when nx or ny is negative
            const virtualNx = (nx + mazeSize * mazeSize) % mazeSize;
            const virtualNy = (ny + mazeSize * mazeSize) % mazeSize;

            if (maze[virtualNx][virtualNy] === '#') {
                continue;
            }

            const key = `${nx}:${ny}`;
            if (!dist[key]) {

                dist[key] = (dist[`${x}:${y}`] || 0) + 1;
                queue.push([[nx, ny], step + 1]);
            }

        }
    }

    return res;
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

function parseInput(inputText) {
    return inputText.split('\n');
}

function part2() {
    let res = 0;

    const maze = parseInput(input);
    const coords = findCharCoords(maze, 'S');

    const mazeSize = maze.length; //131
    const stepsToTheEdge = Math.floor(mazeSize / 2); //65
    const steps = 26501365;

    const values = [
        getPlots(maze, coords, stepsToTheEdge),
        getPlots(maze, coords, stepsToTheEdge + mazeSize),
        getPlots(maze, coords,stepsToTheEdge + mazeSize * 2)
    ];

    const poly = simplifiedLagrange(values);
    const target = (steps - stepsToTheEdge) / mazeSize;

    res = poly.a * target * target + poly.b * target + poly.c;

    console.log(res);
}

/**
 * Lagrange's Interpolation formula for ax^2 + bx + c with x=[0,1,2] and y=[y0,y1,y2] we have
 *   f(x) = (x^2-3x+2) * y0/2 - (x^2-2x)*y1 + (x^2-x) * y2/2
 * so the coefficients are:
 * a = y0/2 - y1 + y2/2
 * b = -3*y0/2 + 2*y1 - y2/2
 * c = y0
 */
const simplifiedLagrange = (values) => {
    return {
        a: values[0] / 2 - values[1] + values[2] / 2,
        b: -3 * (values[0] / 2) + 2 * values[1] - values[2] / 2,
        c: values[0],
    };
};


console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
