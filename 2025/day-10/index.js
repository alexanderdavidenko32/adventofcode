import fs from 'fs';

const day = '10';
// const day = '10-test';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2025. day ' + day;

function part1() {
    let result = 0;

    const machines = parseInput(input);

    result = calculateResult(machines);

    console.log(result);
}

function calculateResult(machines) {
    let result = 0;

    for (let i = 0; i < machines.length; i++) {
        const [expected, available] = machines[i];

        result += calculateMinimumPresses(expected, available, 1);
    }

    return result;
}

function calculateMinimumPresses(expected, available, step) {
    let result = Infinity;

    for (let i = 0; i < available.length; i++) {
        const button = available[i];
        if (expected === button) {
            return step;
        }

        const newExpected = expected ^ button;
        const newAvailable = available.slice(i + 1);
        result = Math.min(
            result,
            calculateMinimumPresses(newExpected, newAvailable, step + 1),
        );
    }

    return result;
}

function parseInput(input) {
    return input.split('\n').map((line) => {
        const [lightsStr, rest] = line.split(']')

        const lightsArray = lightsStr.replace('[', '').split('').map((light) => light === '#' ? 1 : 0);
        const lights = parseInt(lightsArray.join(''), 2);
        const [buttonsStr, joltageStr] = rest.split('{');

        const buttons = buttonsStr.trim().split(' ').map((button, index) => {
            // return button.replace(/[()]/g, '').split(',').map(Number);
            const initialButton = Array.from({length: lightsArray.length}).fill('0');

            return parseInt(
                button.replace(/[()]/g, '').split(',')
                .map(Number)
                .reduce((acc, curr) => {
                    acc[curr] = '1';
                    return acc;
                }, initialButton).join(''),
                2
            );
        });
        const initialJoltage = Array.from({length: lightsArray.length}).fill('0');

        const joltage = parseInt(joltageStr.replace('}', '').split(',')
            .map(Number)
            .reduce((acc, curr) => {
                acc[curr] = '1';
                return acc;
            }, initialJoltage).join(''),
            2
        );

        return [lights, buttons, joltage];
    });
}

function parseInput2(input) {
    return input.split('\n').map((line) => {
        const [lightsStr, rest] = line.split(']')

        const lightsArray = lightsStr.replace('[', '').split('').map((light) => light === '#' ? 1 : 0);
        const lights = parseInt(lightsArray.join(''), 2);
        const [buttonsStr, joltageStr] = rest.split('{');

        const buttons = buttonsStr.trim().split(' ').map((button, index) => {
            return button.replace(/[()]/g, '').split(',')
                .map(Number)
        });
        const joltage = joltageStr.replace('}', '').split(',').map(Number)

        return [lights, buttons, joltage];
    });
}

function part2() {
    let result = 0;

    const machines = parseInput2(input);

    result = calculateResult2(machines);

    console.log(result);
}

function calculateResult2(machines) {
    let result = 0;

    for (let i = 0; i < machines.length; i++) {
        const machine = machines[i];

        result += findMinimumJoltagePresses(machine);
    }

    return result;
}

// solution from https://gitlab.com/sunderee/advent-of-code-typescript/-/blob/master/src/solutions/2025/day10.ts
function findMinimumJoltagePresses(machine) {
    const [, buttonWiring, joltageRequirements] = machine;
    const numberOfCounters = joltageRequirements.length;
    const numberOfButtons = buttonWiring.length;

    const matrix = Array(numberOfCounters)
        .fill(0)
        .map(() => Array(numberOfButtons).fill(0));

    const strictBounds = new Array(numberOfButtons).fill(Infinity);

    for (let j = 0; j < numberOfButtons; j++) {
        const wiring = buttonWiring[j];
        if (wiring !== undefined && wiring.length > 0) {
            for (const item of wiring) {
                if (item < numberOfCounters) {
                    matrix[item][j] = 1;
                    if (joltageRequirements[item] < strictBounds[j]) {
                        strictBounds[j] = joltageRequirements[item];
                    }
                }
            }
        } else {
            strictBounds[j] = 0;
        }
    }

    for (let j = 0; j < numberOfButtons; j++) {
        if (strictBounds[j] === Infinity) {
            strictBounds[j] = 0;
        }
    }

    const target = [...joltageRequirements];
    return solveRestrictedSystem(matrix, target, strictBounds, numberOfButtons, numberOfCounters);
}

function solveRestrictedSystem(
    matrix,
    target,
    bounds,
    numberOfColumns,
    numberOfRows,
) {
    const matrixCopy = matrix.map((row) => [...row]);
    const rhs = [...target];

    const pivotColumnIndices = [];

    let pivotRow = 0;
    const columnToPivotRow = new Map();

    for (let columnIndex = 0; columnIndex < numberOfColumns && pivotRow < numberOfRows; columnIndex++) {
        let rowSelection = pivotRow;
        while (rowSelection < numberOfRows && Math.abs(matrixCopy[rowSelection][columnIndex]) < 1e-9) {
            rowSelection++;
        }

        if (rowSelection === numberOfRows) {
            continue;
        }

        [matrixCopy[pivotRow], matrixCopy[rowSelection]] = [matrixCopy[rowSelection], matrixCopy[pivotRow]];
        [rhs[pivotRow], rhs[rowSelection]] = [rhs[rowSelection], rhs[pivotRow]];

        const pivotVal = matrixCopy[pivotRow][columnIndex];
        for (let j = columnIndex; j < numberOfColumns; j++) {
            matrixCopy[pivotRow][j] /= pivotVal;
        }
        rhs[pivotRow] /= pivotVal;

        for (let i = 0; i < numberOfRows; i++) {
            if (i !== pivotRow) {
                const factor = matrixCopy[i][columnIndex];
                if (Math.abs(factor) > 1e-9) {
                    for (let j = columnIndex; j < numberOfColumns; j++) {
                        matrixCopy[i][j] -= factor * matrixCopy[pivotRow][j];
                    }

                    rhs[i] -= factor * rhs[pivotRow];
                }
            }
        }

        pivotColumnIndices.push(columnIndex);
        columnToPivotRow.set(columnIndex, pivotRow);
        pivotRow++;
    }

    const freeVariables = [];
    const isPivot = new Set(pivotColumnIndices);

    for (let j = 0; j < numberOfColumns; j++) {
        if (!isPivot.has(j)) {
            freeVariables.push(j);
        }
    }

    for (let i = pivotRow; i < numberOfRows; i++) {
        if (Math.abs(rhs[i]) > 1e-4) {
            return 0;
        }
    }

    let minimumPresses = Infinity;
    const currentSolution = new Array(numberOfColumns).fill(0);

    const search = (freeVarListIdx, currentCost) => {
        if (currentCost >= minimumPresses) {
            return;
        }

        if (freeVarListIdx === freeVariables.length) {
            let derivedCost = currentCost;
            let possible = true;

            for (let i = pivotColumnIndices.length - 1; i >= 0; i--) {
                const pivotColumnIndex = pivotColumnIndices[i];
                const pivotRowIndex = columnToPivotRow.get(pivotColumnIndex);

                let derivedValue = rhs[pivotRowIndex];

                for (let j = pivotColumnIndex + 1; j < numberOfColumns; j++) {
                    if (Math.abs(matrixCopy[pivotRowIndex][j]) > 1e-9) {
                        derivedValue -= matrixCopy[pivotRowIndex][j] * currentSolution[j];
                    }
                }

                if (Math.abs(derivedValue - Math.round(derivedValue)) > 1e-4) {
                    possible = false;
                    break;
                }
                derivedValue = Math.round(derivedValue);

                if (derivedValue < 0) {
                    possible = false;
                    break;
                }

                if (derivedValue > bounds[pivotColumnIndex]) {
                    possible = false;
                    break;
                }

                currentSolution[pivotColumnIndex] = derivedValue;
                derivedCost += derivedValue;
                if (derivedCost >= minimumPresses) {
                    possible = false;
                    break;
                }
            }

            if (possible) {
                minimumPresses = derivedCost;
            }

            return;
        }

        const freeVariableIndex = freeVariables[freeVarListIdx];
        const freeVariableBound = bounds[freeVariableIndex];

        for (let val = 0; val <= freeVariableBound; val++) {
            currentSolution[freeVariableIndex] = val;
            search(freeVarListIdx + 1, currentCost + val);
        }
    };

    search(0, 0);
    return minimumPresses === Infinity ? 0 : minimumPresses;
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
