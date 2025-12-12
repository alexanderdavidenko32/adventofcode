import fs from 'fs';

const day = '12';
// const day = '12-test';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2025. day ' + day;

function part1() {
    let result = 0;

    const [shapes, regions] = parseInput(input);

    result = calculateRegions(shapes, regions);

    console.log(result);
}

function calculateRegions(shapes, regions) {
    let result = 0;

    for (let i = 0; i < regions.length; i++) {
        const region = regions[i];

        let expectedSize = 0;

        for (let j = 0; j < region.expectedShapes.length; j++) {
            const expectedShape = region.expectedShapes[j];

            const sizeOfExpectedShapes = shapes[j] * expectedShape;

            expectedSize += sizeOfExpectedShapes;
        }

        if (region.area >= expectedSize) {
            result++
        }
    }

    return result;
}


function parseInput(input) {
    const results = input.split('\n\n');
    const shapes = [];
    const regions = [];

    for (let i = 0; i < results.length - 1; i++) {
        const shapeStr = results[i].split('\n');
        let shape = [];

        for (let j = 1; j < shapeStr.length; j++) {
            shape.push(shapeStr[j]);
        }

        shapes.push(shape.join('').replace(/\./g, '').length);

    }

    const regionsStr = results[results.length - 1].split('\n');

    for (let i = 0; i < regionsStr.length; i++) {
        const [size, rest] = regionsStr[i].split(': ');

        const [width, height] = size.split('x').map(Number);
        const area = width * height;
        const expectedShapes = rest.split(' ').map(Number);

        regions.push({ area, width, height, expectedShapes });
    }
    return [shapes, regions];
}

console.time(timeLabel);
part1();
console.timeEnd(timeLabel);
