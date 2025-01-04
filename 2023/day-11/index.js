const fs = require('fs');

const input = fs.readFileSync('in1.txt', 'utf8');

const timeLabel = 'AOC 2023. day 11';

function part1() {
    let res = 0;
    const maze = parseInput(input);
    const expanded = findExpandedRowsAndCols(maze);

    const coords = findAllCoords(maze);

    const paths = findPaths(coords, expanded, 2);

    res = paths.reduce((acc, cur) => acc + cur, 0);

    console.log(res);
}

function parseInput(inputText) {
    return inputText.split('\n').map(line => line.split(''));
}

function findExpandedRowsAndCols(maze) {
    const rows = [];
    const cols = [];

    for (let i = 0; i < maze.length; i++) {
        let isEmpty = true;

        for (let j = 0; j < maze[i].length; j++) {
            if (maze[i][j] !== '.') {
                isEmpty = false;
            }
        }

        if (isEmpty) {
            rows.push(i);
        }
    }

    for (let i = 0; i < maze[0].length; i++) {
        let isEmpty = true;

        for (let j = 0; j < maze.length; j++) {
            if (maze[j][i] !== '.') {
                isEmpty = false;
            }
        }

        if (isEmpty) {
            cols.push(i);
        }
    }

    return [rows, cols];
}

function findAllCoords(maze) {
    const res = [];

    for (let i = 0; i < maze.length; i++) {

        for (let j = 0; j < maze[i].length; j++) {
            if (maze[i][j] === '#') {
                res.push([i, j]);
            }
        }
    }

    return res;
}

function findPaths(coords, expanded, pathExpansion) {
    const set = new Set();
    const res = [];

    const [rows, cols] = expanded;

    for (let i = 0; i < coords.length; i++) {
        const [sx, sy] = coords[i];

        for (let j = 1; j < coords.length; j++) {
            const [cx, cy] = coords[j];

            if (coords[i] === coords[j]) {
                continue;
            }

            const key = `${sx}:${sy}-${cx}:${cy}`;
            const key1 = `${cx}:${cy}-${sx}:${sy}`;

            if (set.has(key) || set.has(key1)) {
                continue;
            }

            let path = Math.abs(sx - cx) + Math.abs(sy - cy);

            const minX = Math.min(sx, cx);
            const maxX = Math.max(sx, cx);
            const minY = Math.min(sy, cy);
            const maxY = Math.max(sy, cy);

            for (let k = 0; k < rows.length; k++) {
                let row = rows[k];

                if (minX < row && row < maxX) {
                    path += pathExpansion - 1;
                }
            }

            for (let k = 0; k < cols.length; k++) {
                let col = cols[k];

                if (minY < col && col < maxY) {
                    path += pathExpansion - 1;
                }
            }

            set.add(key);
            res.push(path);
        }
    }

    return res;
}

function renderArr(arr) {
    return arr.map(item => item.join('')).join('\n');
}

function part2() {
    let res = 0;
    const maze = parseInput(input);
    const expanded = findExpandedRowsAndCols(maze);

    const coords = findAllCoords(maze);

    const paths = findPaths(coords, expanded, 1000000);

    res = paths.reduce((acc, cur) => acc + cur, 0);

    console.log(res);
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
