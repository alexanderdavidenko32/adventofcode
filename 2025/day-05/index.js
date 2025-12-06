import fs from 'fs';

const day = '05';
// const day = '05-test';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2025. day ' + day;


function part1() {
    let result = 0;

    const [ranges, ingredients] = parseInput(input);

    result = getFreshIngredientsCount(ranges, ingredients);

    console.log(result);
}

function getFreshIngredientsCount(ranges, ingredients) {
    let result = 0;

    for (let i = 0; i < ingredients.length; i++) {
        const ingredient = ingredients[i];

        for (let j = 0; j < ranges.length; j++) {
            const [start, end] = ranges[j];
            if (start <= ingredient && ingredient <= end) {
                result++;
                break;
            }
        }
    }

    return result;
}

function parseInput(input) {
    const [rangesStr, ingredientsStr] = input.split('\n\n');

    const ranges = rangesStr.split('\n').map(range => {
        return range.split('-').map(Number);
    });

    const ingredients = ingredientsStr.split('\n').map(Number);

    return [ranges, ingredients];
}

function part2() {
    let result = 0;

    const [ranges] = parseInput(input);

    result = calculateTotalIngredients(ranges);

    console.log(result);
}

function calculateTotalIngredients(ranges) {
    let result = 0;

    ranges.sort((a, b) => a[0] - b[0]);

    const mergedRanges = [];

    let [currentStart, currentEnd] = ranges[0];

    for (let i = 1; i < ranges.length; i++) {
        const [rangeStart, rangeEnd] = ranges[i];

        if ((currentStart <= rangeStart && currentEnd >= rangeStart) || (currentEnd + 1 === rangeStart)) {
            currentEnd = Math.max(currentEnd, rangeEnd);
            continue;
        }

        mergedRanges.push([currentStart, currentEnd]);

        currentStart = rangeStart;
        currentEnd = rangeEnd;
    }

    // don't forget to add the last item
    mergedRanges.push([currentStart, currentEnd]);

    result = getTotalIngredients(mergedRanges);

    return result;
}

function getTotalIngredients(ranges) {
    let result = 0;

    for (let i = 0; i < ranges.length; i++) {
        const [start, end] = ranges[i];

        result += end - start + 1;
    }

    return result;
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
