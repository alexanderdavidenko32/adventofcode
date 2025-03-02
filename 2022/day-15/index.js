import fs from 'fs';

const day = '15';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2022. day ' + day;


function part1() {
    let res;
    const line = 2000000;
    // const line = 10;
    const coords = parseInput(input);

    res = calculatePositions(coords, line);

    console.log(res);
}

function parseInput(inputText) {
    return inputText.split('\n').map(line => {
        const [sensorStr, beaconStr] = line.split(':');
        const [sensorXStr, sensorYStr] = sensorStr.split(', ');
        const [, sensorX] = sensorXStr.split('=');
        const [, sensorY] = sensorYStr.split('=');
        const [beaconXStr, beaconYStr] = beaconStr.split(', ');
        const [, beaconX] = beaconXStr.split('=');
        const [, beaconY] = beaconYStr.split('=');

        return [+sensorX, +sensorY, +beaconX, +beaconY];
    });
}

function calculatePositions(coords, line) {
    const res = new Set();
    const allBeaconsItems = coords.filter(([sx, sy, bx, by]) => by === line).map(([sx, sy, bx, by]) => bx);
    const allBeacons = new Set(allBeaconsItems);

    for (let i = 0; i < coords.length; i++) {
        const [sx, sy, bx, by] = coords[i];
        const radius = Math.abs(sx - bx) + Math.abs(sy - by);
        const distanceToLine = Math.abs(sy - line);

        if (distanceToLine <= radius) {
            const leftDistance = Math.abs(distanceToLine - radius);

            for (let j = sx - leftDistance; j <= sx + leftDistance; j++) {

                if (!allBeacons.has(j)) {
                    res.add(j)
                }
            }
        }
    }

    return res.size;
}

function part2() {
    let res;
    const coords = parseInput(input);

    res = calculatePosition(coords);

    console.log(res);
}


function calculatePosition(coords) {
    // const max = 20;
    const max = 4000000;

    for (let i = 0; i < max; i++) {
        for (let j = 0; j < max; j++) {
            let noBeacons = true;

            for (let k = 0; k < coords.length, j < max; k++) {
                if (!coords[k]) {
                    break;
                }

                const [sx, sy, bx, by] = coords[k];
                const beaconToSignal = getDistance([sx, sy], [bx, by]);
                const currentToSignal = getDistance([sx, sy], [i, j]);

                if (beaconToSignal >= currentToSignal) {
                    let offset = beaconToSignal - currentToSignal;
                    j += offset;

                    noBeacons = false;
                    break
                }
            }

            if (noBeacons) {
                return i * 4000000 + j;
            }
        }
    }
}

function getDistance(signal, beacon) {
    const deltaX = Math.abs(signal[0] - beacon[0]);
    const deltaY = Math.abs(signal[1] - beacon[1]);

    return deltaX + deltaY;
}
console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
