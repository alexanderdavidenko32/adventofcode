import fs from 'fs';

const day = '12';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2022. day ' + day;

const directions = {
    N: [-1, 0],
    E: [0, 1],
    S: [1, 0],
    W: [0, -1]
}

function part1() {
    let res;
    const maze = parseInput(input);

    const start = findCharCoords(maze, 'S');
    const end = findCharCoords(maze, 'E');

    updateDefaultValues(maze, start, end);

    res = calculateSteps(maze, start, end);

    console.log(res);
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

function updateDefaultValues(maze, start, end) {
    const [sr, sc] = start;
    const [er, ec] = end;

    maze[sr][sc] = 'a';
    maze[er][ec] = 'z';
}

function calculateSteps(maze, start, end) {
    let res = Infinity;

    const [er, ec] = end;
    const sKey = `${start[0]}:${start[1]}`;
    const queue = [[start, 0, [start]]]; // coords, steps, path

    const visited = new Set([sKey]);

    while (queue.length) {
        const [[r, c], steps, path] = queue.shift();

        if (r === er && c === ec) {
            // renderPath(maze, path);

            return path.length - 1;
        }

        const weight = maze[r][c].charCodeAt(0);

        for (let direction in directions) {
            const [dr, dc] = directions[direction];
            const nr = dr + r;
            const nc = dc + c;

            if (!inBoundaries(maze, [nr, nc])) {
                continue;
            }

            const key = `${nr}:${nc}`;

            if (visited.has(key)) {
                continue;
            }


            const nextWeight = maze[nr][nc].charCodeAt(0);
            const diff = nextWeight - weight;

            if (diff < 2) {
                queue.push([[nr, nc], steps + 1, [...path, [nr, nc]]]);
                visited.add(key);
            }
        }
    }

    return res;
}

function renderPath(maze, path) {
    const newMaze = Array.from({ length: maze.length }, () => Array.from({ length: maze[0].length }, () => ' '));
    for (let [x, y] of path) {
        newMaze[x][y] = maze[x][y];
    }

    console.log(renderArray(newMaze));
}

function renderArray(arr) {
    return arr.map(
        item => item.join('')
    ).join('\n');
}
function inBoundaries(maze, point) {
    const [x, y] = point;

    return x >= 0 && y >= 0 && x < maze.length && y < maze[0].length;
}

function parseInput(inputText) {
    return inputText.split('\n').map(line => line.split(''));
}

function part2() {
    let res = 0;

    const maze = parseInput(input);

    const start = findCharCoords(maze, 'S');
    const end = findCharCoords(maze, 'E');

    updateDefaultValues(maze, start, end);

    res = getMinSteps(maze, start, end);

    console.log(res);
}

function getMinSteps(maze, start, end) {
    let res = Infinity;

    for (let i = 0; i < maze.length; i++) {
        res = Math.min(res, calculateSteps(maze, [i, 0], end))
    }

    return res;
}


console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
