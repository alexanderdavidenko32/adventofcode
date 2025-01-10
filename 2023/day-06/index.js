import fs from 'fs';

const day = '06';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2023. day ' + day;

const inputArr = input.split('\n');

function part1() {
    let res = 1;

    const [times, distances] = parseInput(inputArr);

    for (let i = 0; i < times.length; i++) {
        const time = times[i];
        const distance = distances[i];

        res *= calculateWays(time, distance);
    }

    console.log(res);
}

function parseInput(inputArr) {
    const [timeArr, distanceArr] = inputArr.map((item) => item.split(': '));

    const times = timeArr[1].split(' ').filter(item => item !== '').map(item => +item);
    const distances = distanceArr[1].split(' ').filter(item => item !== '').map(item => +item);

    return [times, distances];
}

function calculateWays(time, distance) {
    let ways = 0;
    for (let i = 0; i <= time; i++) {
        const newDistance = i * (time - i);

        if (newDistance > distance) {
            ways++;
        }
    }

    return ways;
}

function part2() {
    let res = 1;

    const [time, distance] = parseInput2(inputArr);

    res *= calculateWays(time, distance);

    console.log(res);
}

function parseInput2(inputArr) {
    const [timeArr, distanceArr] = inputArr.map((item) => item.split(': '));

    const times = timeArr[1].split(' ').filter(item => item !== '').reduce((prev, curr) => prev + curr, '');
    const distances = distanceArr[1].split(' ').filter(item => item !== '').reduce((prev, curr) => prev + curr, '');

    return [+times, +distances];
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
