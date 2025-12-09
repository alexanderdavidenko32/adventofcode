import fs from 'fs';

const day = '08';
// const day = '08-test';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2025. day ' + day;

function part1() {
    let result = 0;

    const coordinates = parseInput(input);

    const distances = calculateDistances(coordinates);

    result = calculateCircuits(coordinates, distances);

    console.log(result);
}

function calculateDistances(coordinates) {
    const result = [];
    for (let i = 0; i < coordinates.length; i++) {
        for (let j = i; j < coordinates.length; j++) {
            const coord2 = coordinates[j];
            const coord1 = coordinates[i];

            if (coord1 === coord2) {
                continue;
            }
            const distance = Math.sqrt(
                Math.pow(coord1[0] - coord2[0], 2) +
                Math.pow(coord1[1] - coord2[1], 2) +
                Math.pow(coord1[2] - coord2[2], 2)
            );

            result.push([coord1.join(','), coord2.join(','), distance]);
        }
    }

    return result;
}

function calculateCircuits(coords, distances) {
    let result = 1;

    distances.sort((a, b) => a[2] - b[2]);

    const graph = [];
    graph.size = [];

    // setting up the graph for union set
    for (let i = 0; i < coords.length; i++) {
        const coord = coords[i].join(',');
        graph[coord] = coord;
        graph.size[coord] = 1;
    }

    for (let i = 0; i < 1000; i++) {
        const [point1, point2] = distances[i];

        union(graph, point1, point2);
    }

    const sizes = {};
    for (let key of Object.keys(graph)) {
        const root = find(graph, key);
        sizes[root] = unionSize(graph, graph[key]);
    }

    const sizeValues = Object.values(sizes).sort((a, b) => b - a);

    for (let i = 0; i < 3; i++) {
        result *= sizeValues[i];
    }

    return result;
}

function find(graph, target) {
    if (target === graph[target]) {
        return target;
    }
    return find(graph, graph[target]);
}

function union(graph, x, y) {
    const xRes = find(graph, x);
    const yRes = find(graph, y);

    if (xRes !== yRes) {
        graph[yRes] = xRes;
        graph.size[xRes] += graph.size[yRes];
    }
}

function unionSize(graph, x) {
    const xRes = find(graph, x);
    return graph.size[xRes];
}

function parseInput(input) {
    return input.split('\n').map((line) => line.split(',').map(Number));
}

function part2() {
    let result = 0;

    const coordinates = parseInput(input);

    const distances = calculateDistances(coordinates);

    result = calculateCircuits2(coordinates, distances);

    console.log(result);
}

function calculateCircuits2(coords, distances) {
    distances.sort((a, b) => a[2] - b[2]);

    const graph = [];
    graph.size = [];

    // setting up the graph for union set
    for (let i = 0; i < coords.length; i++) {
        const coord = coords[i].join(',');
        graph[coord] = coord;
        graph.size[coord] = 1;
    }

    let first = 0;
    let second = 0;

    for (let i = 0; i < distances.length; i++) {
        const [point1, point2] = distances[i];

        const rootFirst = find(graph, point1);
        const rootSecond = find(graph, point2);

        if (rootFirst !== rootSecond) {
            union(graph, point1, point2);

            first = point1;
            second = point2;
        }
    }

    const [x1] = first.split(',');
    const [x2] = second.split(',');

    return +x1 * +x2;
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
