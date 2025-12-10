import fs from 'fs';

const day = '09';
// const day = '09-test';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2025. day ' + day;

function part1() {
    let result = 0;

    const coordinates = parseInput(input);

    result = calculateDistances(coordinates);

    console.log(result);
}

function calculateDistances(coordinates) {
    let result = 0;
    for (let i = 0; i < coordinates.length; i++) {
        for (let j = i; j < coordinates.length; j++) {
            const coord2 = coordinates[j];
            const coord1 = coordinates[i];

            if (coord1 === coord2) {
                continue;
            }
            const area = Math.abs(coord1[0] - coord2[0] + 1) * Math.abs(coord1[1] - coord2[1] + 1);

            result = Math.max(result, area);
        }
    }

    return result;
}

function parseInput(input) {
    return input.split('\n').map((line) => line.split(',').map(Number));
}

function part2() {
    let result = 0;

    const coordinates = parseInput(input);

    result = calculateDistances2(coordinates);

    console.log(result);
}

function calculateDistances2(coordinates) {
    console.log(coordinates)
    let result = 0;

    const perimeter = [];

    for (let i = 0; i < coordinates.length; i++) {
        const [x1, y1] = coordinates[i];
        const [x2, y2] = coordinates[(i + 1) % coordinates.length];

        if (y1 === y2) {
            const min = Math.min(x1, x2);
            const max = Math.max(x1, x2) + 1;
            for (let x = min; x < max; x++) {
                perimeter.push([x, y1]);
            }
        } else {
            const min = Math.min(y1, y2);
            const max = Math.max(y1, y2) + 1;

            for (let y = min; y < max; y++) {
                perimeter.push([x1, y]);
            }
        }
    }

    for (let i = 0; i < coordinates.length; i++) {
        for (let j = i + 1; j < coordinates.length; j++) {
            const coord1 = coordinates[i];
            const coord2 = coordinates[j];

            const [x1, y1] = coord1;
            const [x2, y2] = coord2;

            const area = (Math.abs(coord1[0] - coord2[0]) + 1) * (Math.abs(coord1[1] - coord2[1]) + 1);

            if (area < result) {
                continue;
            }

            const minX = Math.min(x1, x2);
            const minY = Math.min(y1, y2);
            const maxX = Math.max(x1, x2);
            const maxY = Math.max(y1, y2);

            let hasConflict = false;
            for (const [px, py] of perimeter) {
                if (
                    (minX < px && px < maxX) &&
                    (minY < py && py < maxY)
                ) {
                    hasConflict = true;
                    break;
                }
            }

            if (!hasConflict) {
                result = area;
            }
        }
    }

    return result;
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
