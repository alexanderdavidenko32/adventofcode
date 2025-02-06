import fs from 'fs';

const day = '09';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2022. day ' + day;

const directions = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0]
}

function part1() {
    let res;
    const knots = Array.from({length: 2}).map(() => [0, 0]); // Head, Tail

    const moves = parseInput(input);

    res = moveKnots(moves, knots);

    console.log(res);
}

function parseInput(inputText) {
    return inputText.split('\n').map((line) => {
        const [dir, stepsStr] = line.split(' ');

        return [dir, Number(stepsStr)];
    });
}

function moveKnots(moves, knots) {
    const visited = new Set();

    for (let move of moves) {
        const [dir, steps] = move;

        for (let i = 0; i < steps; i++) {
            moveKnot(dir, knots, 0, visited);
        }
    }
    return visited.size;
}

function moveKnot(dir, knots, index, visited) {
    const [dx, dy] = directions[dir];

    const knot = knots[index];

    const [x, y] = knot;

    let nx;
    let ny;

    if (index === knots.length) {
        return;
    }

    if (index === 0) {
        nx = dx + x;
        ny = dy + y;
    } else {
        const head = knots[index - 1];
        const [hx, hy] = head;

        if (isHeadFar(knot, head)) {
            nx = x;
            ny = y;

            const distX = hx - x;
            const distY = hy - y;

            if (Math.abs(distX) === 2) {
                nx = x + Math.sign(distX);

                if (Math.abs(distY) !== 0) {
                    ny = y + Math.sign(distY);
                }
            }

            if (Math.abs(distY) === 2){
                ny = y + Math.sign(distY);

                if (Math.abs(distX) !== 0){
                    nx = x + Math.sign(distX);
                }
            }

        } else {
            nx = x;
            ny = y;
        }
    }

    knot[0] = nx;
    knot[1] = ny;

    if (index === knots.length - 1) {
        visited.add(`${nx}:${ny}`);
    }

    if (index !== knots.length - 1) {
        moveKnot(dir, knots, index + 1, visited);
    }
}

function isHeadFar(knot, head) {
    const [x, y] = knot;
    const [hx, hy] = head;

    if (Math.abs(x - hx) > 1 || Math.abs(y - hy) > 1) {
        return true;
    }

    return false;
}

function part2() {
    let res = 0;
    const knots = Array.from({length: 10}).map(() => [0, 0]); // Head, Tails

    const moves = parseInput(input);

    res = moveKnots(moves, knots);

    console.log(res);
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
