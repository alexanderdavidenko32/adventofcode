import fs from 'fs';

const day = '11';
// const day = '11-test';
// const day = '11-test2';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2025. day ' + day;

function part1() {
    let result = 0;

    const devices = parseInput(input);

    result = traverse(devices, 'you', 'out');

    console.log(result);
}

function traverse(devices, device, end, visited = new Set(), score = {}) {
    let result = 0;

    if (device === end) {
        return 1;
    }

    if (visited.has(device)) {
        return 0;
    }

    if (device in score) {
        return score[device];
    }

    visited.add(device);

    const edges = devices[device] || [];

    for (let i = 0; i < edges.length; i++) {
        const nextDevice = edges[i];
        result += traverse(devices, nextDevice, end, visited, score);

    }
    visited.delete(device);
    score[device] = result;

    return result
}

function parseInput(input) {
    const result = {};
    input.split('\n').map((line) => {
        const [vertex, edgesStr] = line.split(': ');

        const edges = edgesStr.split(' ');
        result[vertex] = edges;
    });

    return result;
}

function part2() {
    let result = 0;

    const devices = parseInput(input);

    result = findAllPaths2(devices);

    console.log(result);
}

function findAllPaths2(devices) {
    const count1 = traverse(devices, 'svr', 'fft');
    const count2 = traverse(devices, 'fft', 'dac');
    const count3 = traverse(devices, 'dac', 'out');

    const count4 = traverse(devices, 'svr', 'dac');
    const count5 = traverse(devices, 'dac', 'fft');
    const count6 = traverse(devices, 'fft', 'out');

    return count1 * count2 * count3 + count4 * count5 * count6;
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
