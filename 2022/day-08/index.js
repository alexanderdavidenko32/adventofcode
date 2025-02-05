import fs from 'fs';

const day = '08';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2022. day ' + day;

const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

function part1() {
    let res;
    const map = parseInput(input);

    res = countVisible(map);

    console.log(res);
}

function parseInput(inputText) {
    return inputText.split('\n').map((line) => line.split('').map(Number));
}

function countVisible(map) {
    let res = (map.length - 1) * 2 + (map[0].length - 1) * 2;

    for (let i = 1; i < map.length - 1; i++) {
        for (let j = 1; j < map[0].length - 1; j++) {
            if (isVisible(map, [i, j])) {
                res++;
            }
        }
    }

    return res;
}

function isVisible(map, coords) {
    for (let direction of directions) {
        if (isVisibleFromDirection(map, coords, direction)) {
            return true;
        }
    }

    return false;
}

function isVisibleFromDirection(map, coords, direction) {
    const [r, c] = coords;
    const [dr, dc] = direction;

    let cr = dr + r;
    let cc = dc + c;

    while (inBoundaries(map, [cr, cc])) {
        if (map[cr][cc] >= map[r][c]) {
            return false;
        }

        cr += dr;
        cc += dc;
    }

    return true;
}

function inBoundaries(maze, point) {
    const [x, y] = point;

    return x >= 0 && y >= 0 && x < maze.length && y < maze[0].length;
}


function part2() {
    let res = 0;

    const map = parseInput(input);

    res = getMaxScenicScore(map);

    console.log(res);
}

function getMaxScenicScore(map) {
    let res = 0;

    for (let i = 1; i < map.length - 1; i++) {
        for (let j = 1; j < map[0].length - 1; j++) {
            const score = getScenicScore(map, [i, j]);

            res = Math.max(res, score);
        }
    }

    return res;
}

function getScenicScore(map, coords) {
    let res = 1;

    for (let direction of directions) {
        res *= getScenicScoreFromDirection(map, coords, direction);
    }

    return res;
}

function getScenicScoreFromDirection(map, coords, direction) {
    const [r, c] = coords;
    const [dr, dc] = direction;

    let cr = dr + r;
    let cc = dc + c;

    let res = 0;

    while (inBoundaries(map, [cr, cc])) {
        res++;

        if (map[cr][cc] >= map[r][c]) {
            break;
        }

        cr += dr;
        cc += dc;
    }

    return res;
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
