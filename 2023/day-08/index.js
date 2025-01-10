import fs from 'fs';

const day = '08';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2023. day ' + day;

function part1() {
    const [steps, tree] = parseInput(input);

    const res = getCountOfSteps(steps, tree, 'AAA');

    console.log(res);
}

function parseInput(inputText) {
    const [steps, treeText] = inputText.split('\n\n');
    const tree = {};

    treeText.split('\n').forEach((line) => {
        const [node, refs] = line.split(' = ');
        const [ref1Text, ref2Text] = refs.split(', ');
        const [,ref1] = ref1Text.split('(');
        const [ref2] = ref2Text.split(')');

        tree[node] = [ref1, ref2];
    });

    const newSteps = steps.replaceAll('L', 0).replaceAll('R', 1);

    return [newSteps, tree, steps];
}

function getCountOfSteps(steps, tree, startPoint) {
    let stepIndex = 0;

    const queue = [[startPoint, 0]];// node, step count

    while (queue.length) {
        const [currentNode, count] = queue.shift();

        if (currentNode === 'ZZZ') {
            return count;
        }

        const nextStep = steps[stepIndex];
        const nextNode = tree[currentNode][nextStep];

        queue.push([nextNode, count + 1]);

        if (stepIndex >= steps.length - 1) {
            stepIndex = 0;
        } else {
            stepIndex++;
        }
    }
}

function part2() {
    const [steps, tree] = parseInput(input);

    const startPoints = getStartingPoints(tree);

    const counts = [];
    for (let i = 0; i < startPoints.length; i++) {
        const startingPoint = startPoints[i];

        let count = getCountOfSteps2(steps, tree, startingPoint);

        counts.push(count);
    }

    let res = lcm(counts);

    console.log(res);
}


function getCountOfSteps2(steps, tree, startPoint) {
    let stepIndex = 0;

    const queue = [[startPoint, 0]];// node, step count

    while (queue.length) {
        const [currentNode, count] = queue.shift();

        if (currentNode.endsWith('Z')) {
            return count;
        }

        const nextStep = steps[stepIndex];
        const nextNode = tree[currentNode][nextStep];

        queue.push([nextNode, count + 1]);

        if (stepIndex >= steps.length - 1) {
            stepIndex = 0;
        } else {
            stepIndex++;
        }
    }
}

function getStartingPoints(tree) {
    return Object.keys(tree).filter(key => key.endsWith('A'));
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcmOfTwo(a, b) {
    return (a * b) / gcd(a, b);
}

function lcm(numbers) {
    let lcm = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        lcm = lcmOfTwo(lcm, numbers[i]);
    }

    return lcm;
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
