import fs from 'fs';

const day = '23';

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
    const startCoords = findCharCoords(maze, 0, '.');
    const endCoords = findCharCoords(maze,maze.length - 1, '.');

    const graph = getGraph(maze);

    res = getSteps(graph, startCoords, endCoords);

    console.log(res);
}

function getGraph(maze) {
    const graph = {};

    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[0].length; j++) {
            if (maze[i][j] === '.') {
                for (let direction in directions) {
                    const [dx, dy] = directions[direction];
                    const nx = i + dx;
                    const ny = j + dy;

                    if (!inBoundaries(maze, [nx, ny])) {
                        continue;
                    }

                    if (maze[nx][ny] === '.') {
                        graph[`${i}:${j}`] = (graph[`${i}:${j}`] || new Set());
                        graph[`${i}:${j}`].add(`${nx}:${ny}`);
                        graph[`${nx}:${ny}`] = (graph[`${nx}:${ny}`] || new Set());
                        graph[`${nx}:${ny}`].add( `${i}:${j}`);
                    }
                }
            }

            if (maze[i][j] === '>') {
                graph[`${i}:${j}`] = (graph[`${i}:${j}`] || new Set());
                graph[`${i}:${j}`].add(`${i}:${j + 1}`);
                graph[`${i}:${j - 1}`] = (graph[`${i}:${j - 1}`] || new Set());
                graph[`${i}:${j - 1}`].add(`${i}:${j}`);
            }

            if (maze[i][j] === 'v') {
                graph[`${i}:${j}`] = (graph[`${i}:${j}`] || new Set());
                graph[`${i}:${j}`].add(`${i + 1}:${j}`);
                graph[`${i - 1}:${j}`] = (graph[`${i - 1}:${j}`] || new Set());
                graph[`${i - 1}:${j}`].add(`${i}:${j}`);
            }
        }
    }

    return graph;
}

function getSteps(graph, startingPoint, endCoords) {
    const [ex, ey] = endCoords;
    const queue = [[startingPoint, 0]]; // point, step

    let res = 0;

    const visited = new Set();

    while (queue.length) {
        const [[x, y], step] = queue.pop();

        const key = `${x}:${y}`;

        if (step === -1) {
            visited.delete(key);
            continue;
        }

        if (x === ex && y === ey) {
            res = Math.max(res, step);
            continue;
        }

        if (visited.has(key)) {
            continue;
        }

        visited.add(key);

        queue.push([[x, y], -1]);

        for (let point of graph[key]) {
            const [nx, ny] = point.split(':').map(Number);
            queue.push([[nx, ny], step + 1]);
        }
    }

    return res;
}

function getGraph2(maze) {
    const graph = {};

    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[0].length; j++) {
            if (maze[i][j] === '.' || maze[i][j] === '>' || maze[i][j] === 'v') {
                for (let direction in directions) {
                    const [dx, dy] = directions[direction];
                    const nx = i + dx;
                    const ny = j + dy;

                    if (!inBoundaries(maze, [nx, ny])) {
                        continue;
                    }

                    if (maze[nx][ny] === '.' || maze[nx][ny] === '>' || maze[nx][ny] === 'v') {
                        graph[`${i}:${j}`] = (graph[`${i}:${j}`] || new Set());
                        graph[`${i}:${j}`].add(`${nx}:${ny}-1`);
                        graph[`${nx}:${ny}`] = (graph[`${nx}:${ny}`] || new Set());
                        graph[`${nx}:${ny}`].add( `${i}:${j}-1`);
                    }
                }
            }
        }
    }

    return graph;
}

function inBoundaries(maze, point) {
    const [x, y] = point;

    return x >= 0 && y >= 0 && x < maze.length && y < maze[0].length;
}

function findCharCoords(arr, line, char) {
    for (let i = line; i < arr.length; i++) {
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
    const startCoords = findCharCoords(maze, 0, '.');
    const endCoords = findCharCoords(maze,maze.length - 1, '.');
    const graph = getGraph2(maze);

    removeEdges(graph);

    res = getSteps2(graph, startCoords, endCoords);

    console.log(res);
}

// edge contraction https://en.wikipedia.org/wiki/Edge_contraction
function removeEdges(graph) {
    while (true) {
        for (const node in graph) {
            const edge = [...graph[node]];
            if (edge.length === 2) {
                const [ax, ay, as] = unwrapEdge(edge[0]);
                const [bx, by, bs] = unwrapEdge(edge[1]);

                const prevNode = `${ax}:${ay}`;
                const nextNode = `${bx}:${by}`;

                graph[`${prevNode}`].delete(`${node}-${as}`);
                graph[`${nextNode}`].delete(`${node}-${bs}`);

                graph[`${prevNode}`].add(`${nextNode}-${as + bs}`);
                graph[`${nextNode}`].add(`${prevNode}-${as + bs}`);

                delete graph[node];
            }
        }

        break;
    }
}

function unwrapEdge(edge) {
    const [x, rest] = edge.split(':');
    const [y, size] = rest.split('-');

    return [x, y, size].map(Number);
}


function getSteps2(graph, startingPoint, endCoords) {
    const [ex, ey] = endCoords;
    const queue = [[startingPoint, 0]]; // point, step

    let res = 0;

    const visited = new Set();

    while (queue.length) {
        const [[x, y], step] = queue.pop();

        const key = `${x}:${y}`;

        if (step === -1) {
            visited.delete(key);
            continue;
        }

        if (x === ex && y === ey) {
            res = Math.max(res, step);
            continue;
        }

        if (visited.has(key)) {
            continue;
        }

        visited.add(key);

        queue.push([[x, y], -1]);

        for (let edge of graph[key]) {
            const [nx, ny, steps] = unwrapEdge(edge);
            queue.push([[nx, ny], step + steps]);
        }
    }

    return res;
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
