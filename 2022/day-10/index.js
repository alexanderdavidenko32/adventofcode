import fs from 'fs';

const day = '10';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2022. day ' + day;

function part1() {
    let res;
    const ops = parseInput(input);

    res = calculate(ops);

    console.log(res);
}

function parseInput(inputText) {
    return inputText.split('\n').map((line) => {
        const [operator, valueStr] = line.split(' ');
        const value = valueStr ? Number(valueStr) : null;

        return [operator, value];
    });
}

function calculate(ops) {
    let iteration = 0;
    let X = 1;
    let res = 0;

    while (ops.length) {
        const [operator, value] = ops.shift();

        if (operator === 'noop') {
            iteration++;
            res += checkIteration(iteration, X);
            continue;
        }

        iteration++;
        res += checkIteration(iteration, X);

        iteration++;
        res += checkIteration(iteration, X);

        X += value;
    }

    return res;
}

function checkIteration(iteration, X) {
    const iterations = [20, 60, 100, 140, 180, 220];

    for (let item of iterations) {
        if (iteration === item) {
            return iteration * X;
        }
    }

    return 0;
}

function part2() {
    let res = [];

    const ops = parseInput(input);

    res = renderLines(ops)

    console.log(renderArray(res));
}

function renderLines(ops) {
    let iteration = 0;
    let X = 1;
    let res = [];
    let line = '';

    while (ops.length) {
        const [operator, value] = ops.shift();

        if (operator === 'noop') {
            line += renderSprite(iteration, X);
            iteration++;

            if (iteration % 40 === 0) {
                res.push(line);
                line = '';
            }
            continue;
        }

        line += renderSprite(iteration, X);
        iteration++;

        if (iteration % 40 === 0) {
            res.push(line);
            line = '';
        }

        line += renderSprite(iteration, X);
        iteration++;

        if (iteration % 40 === 0) {
            res.push(line);
            line = '';
        }

        X += value;
    }

    return res;
}

function renderSprite(iteration, X) {
    const crtIndex = iteration % 40;
    if (X - 1 <= crtIndex && crtIndex <= X + 1) {
        return '#';
    }

    return ' ';
}

function renderArray(arr) {
    return arr.join('\n');
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
