import fs from 'fs';

const day = '04';
// const day = '04-test';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2025. day ' + day;

const inputArr = input.split('\n');


function part1() {
    let result = 0;
    const max = 4;

    const grid = parseInput(inputArr);
    result = calculatePossibleRolls(grid, max);

    console.log(result);
}

function parseInput(arr) {
    return arr.map(item => {
        return item.split('');
    });
}

function calculatePossibleRolls(grid, max) {
    let result = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            const count = getAdjustedRolls(grid, i, j);

            if (count < max) {
                result++;
            }
        }
    }

    return result;
}

function getAdjustedRolls(grid, i, j) {
    const result = [];

    if (grid[i][j] !== '@') {
        return Infinity;
    }

    result.push(grid[i - 1]?.[j - 1] ?? '.');
    result.push(grid[i - 1]?.[j] ?? '.');
    result.push(grid[i - 1]?.[j + 1] ?? '.');
    result.push(grid[i]?.[j - 1] ?? '.');
    result.push(grid[i]?.[j + 1] ?? '.');
    result.push(grid[i + 1]?.[j - 1] ?? '.');
    result.push(grid[i + 1]?.[j] ?? '.');
    result.push(grid[i + 1]?.[j + 1] ?? '.');

    return result.filter(item => item === '@').length;
}


function renderArray(arr) {
    return arr.map(
        item => item.join('')
    ).join('\n');
}

function part2() {
    let result = 0;
    let max = 4;

    const grid = parseInput(inputArr);

    result = calculatePossibleRollsTotal(grid, max);

    console.log(result);
}

function calculatePossibleRollsTotal(grid, max) {
    let result = 0;
    let rollsToRemove = 0;

    do {
        rollsToRemove = calculatePossibleRolls2(grid, max);
        result += rollsToRemove;
    } while (rollsToRemove > 0)

    return result;
}


function calculatePossibleRolls2(grid, max) {
    let result = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            const count = getAdjustedRolls2(grid, i, j);

            if (count < max) {
                grid[i][j] = 'X';
                result++;
            }
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (grid[i][j] === 'X') {
                grid[i][j] = '.';
            }
        }
    }

    return result;
}

function getAdjustedRolls2(grid, i, j) {
    const result = [];

    if (grid[i][j] !== '@') {
        return Infinity;
    }

    result.push(grid[i - 1]?.[j - 1] ?? '.');
    result.push(grid[i - 1]?.[j] ?? '.');
    result.push(grid[i - 1]?.[j + 1] ?? '.');
    result.push(grid[i]?.[j - 1] ?? '.');
    result.push(grid[i]?.[j + 1] ?? '.');
    result.push(grid[i + 1]?.[j - 1] ?? '.');
    result.push(grid[i + 1]?.[j] ?? '.');
    result.push(grid[i + 1]?.[j + 1] ?? '.');

    return result.filter(item => item === '@' || item === 'X').length;
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
