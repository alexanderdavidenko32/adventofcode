import fs from 'fs';

const day = '22';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2023. day ' + day;

function part1() {
    let res = 0;

    const bricks = parseInput(input);

    bricks.sort((a, b) => a[2] - b[2]);

    for (let j = 0; j < bricks.length; j++) {
        let maxZ = 1;

        for (let i = 0; i < j; i++) {
            const check = bricks[i];

            if (overlaps(bricks[j], check)) {
                maxZ = Math.max(maxZ, check[5] + 1);
            }
        }
        bricks[j][5] -= bricks[j][2] - maxZ;
        bricks[j][2] = maxZ;
    }

    bricks.sort((a, b) => a[2] - b[2]);


    const kSupportsV = new Array(bricks.length).fill(null).map(() => []);
    const vSupportsK = new Array(bricks.length).fill(null).map(() => []);

    for (let j = 0; j < bricks.length; j++) {
        const upper = bricks[j];

        for (let i = 0; i < j; i++) {
            const lower = bricks[i];
            if (overlaps(lower, upper) && upper[2] === lower[5] + 1) {
                kSupportsV[i].push(j);
                vSupportsK[j].push(i);
            }
        }
    }

    kSupportsV.forEach(bricks => {
        bricks.every(j => vSupportsK[j].length > 1) ? res++ : null;
    });

    console.log(res);
}

function parseInput(inputText) {
    return inputText.split('\n').map(line => line.replace('~', ',').split(',').map(Number));
}

function overlaps(a, b) {
    return Math.max(a[0], b[0]) <= Math.min(a[3], b[3]) && Math.max(a[1], b[1]) <= Math.min(a[4], b[4]);
}

function part2() {
    let res = 0;

    const bricks = parseInput(input);

    bricks.sort((a, b) => a[2] - b[2]);

    for (let j = 0; j < bricks.length; j++) {
        let maxZ = 1;

        for (let i = 0; i < j; i++) {
            const check = bricks[i];

            if (overlaps(bricks[j], check)) {
                maxZ = Math.max(maxZ, check[5] + 1);
            }
        }
        bricks[j][5] -= bricks[j][2] - maxZ;
        bricks[j][2] = maxZ;
    }

    bricks.sort((a, b) => a[2] - b[2]);


    const kSupportsV = new Array(bricks.length).fill(null).map(() => []);
    const vSupportsK = new Array(bricks.length).fill(null).map(() => []);

    for (let j = 0; j < bricks.length; j++) {
        const upper = bricks[j];

        for (let i = 0; i < j; i++) {
            const lower = bricks[i];
            if (overlaps(lower, upper) && upper[2] === lower[5] + 1) {
                kSupportsV[i].push(j);
                vSupportsK[j].push(i);
            }
        }
    }

    for (let i = 0; i < bricks.length; i++) {
        let total = 0;
        let set = new Set();
        set.add(i);

        let sublist = kSupportsV.slice(i);
        sublist.forEach(bricks => {
            for (let brick of bricks) {
                if (vSupportsK[brick].every( b => set.has(b) )) {
                    if (!set.has(brick)) {
                        set.add(brick);
                        total++;
                    }
                }
            }
        });
        res += total;
    }

    console.log(res);
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
