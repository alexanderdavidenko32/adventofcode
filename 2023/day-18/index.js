import fs from 'fs';

const input = fs.readFileSync('in1.txt', 'utf8');

const timeLabel = 'AOC 2023. day 18';

const directions = {
    U: [-1, 0],
    R: [0, 1],
    D: [1, 0],
    L: [0, -1]
}

const dirMap = {
    0: 'R',
    1: 'D',
    2: 'L',
    3: 'U',
}

function part1() {
    let res = 0;
    const inputArr = parseInput(input);

    const trench = dig(inputArr);

    const shoelaceArea = getShoelaceArea(trench.xs, trench.ys);

    // pick's theorem https://en.wikipedia.org/wiki/Pick's_theorem
    res = trench.boundaryPoints + (shoelaceArea + 1 - trench.boundaryPoints / 2)

    console.log(res);
}

function parseInput(inputText) {
    return inputText.split('\n').map(line => {
        const [dir, countStr, colorStr] = line.split(' ');
        const color = colorStr.substring(1, colorStr.length - 1);

        return [directions[dir], +countStr, color];
    });
}

function part2() {
    let res = 0;
    const inputArr = parseInput2(input);

    const trench = dig(inputArr);

    const shoelaceArea = getShoelaceArea(trench.xs, trench.ys);

    // pick's theorem https://en.wikipedia.org/wiki/Pick's_theorem
    res = trench.boundaryPoints + (shoelaceArea + 1 - trench.boundaryPoints / 2)

    console.log(res);
}

function parseInput2(inputText) {
    return inputText.split('\n').map(line => {
        const [,, colorStr] = line.split(' ');
        const color = colorStr.substring(2, colorStr.length - 1);
        const countStr = color.substring(0, color.length - 1);
        const count = parseInt(countStr, 16);

        const dir = dirMap[color[color.length - 1]];


        return [directions[dir], count, color];
    });
}

function dig(moves) {
    const res = {
        boundaryPoints: 0,
        xs: [],
        ys: []
    };

    let px = 0;
    let py = 0;

    for (let i = 0; i < moves.length; i++) {
        const [direction, steps] = moves[i];
        const [dx, dy] = direction;

        px = px + dx * steps;
        py = py + dy * steps;

        res.xs.push(px);
        res.ys.push(py);

        res.boundaryPoints += steps;
    }

    return res;
}

// shoelace formula https://en.wikipedia.org/wiki/Shoelace_formula
function getShoelaceArea(xs, ys) {
    let area = 0;
    let sum = 0;

    for (let i = 0; i < xs.length - 1; i++) {
        sum += xs[i] * ys[i + 1] - xs[i + 1] * ys[i]
    }

    area = sum / 2;

    return Math.abs(area);
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
