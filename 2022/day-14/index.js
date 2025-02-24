import fs from 'fs';

const day = '14';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2022. day ' + day;


function part1() {
    let res;
    const coords = parseInput(input);
    const [maxX, maxY] = getMaxCoords(coords);

    const scan = createScan(maxX, maxY);

    fillScan(scan, coords);

    res = calculateFill(scan, maxY);

    // console.log(renderArr(scan))
    console.log(res);
}
function renderArr(arr) {
    return arr.map(item => item.join('').substring(420)).join('\n');
}

function parseInput(inputText) {
    return inputText.split('\n').map(line => {
        const coordsStr = line.split(' -> ');
        return coordsStr.map(str => str.split(',').map(Number));
    });
}

function getMaxCoords(coords) {
    let maxX = -Infinity;
    let maxY = -Infinity;

    for (let line of coords) {
        for (let [x, y] of line) {
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
        }
    }

    return [maxX, maxY];
}

function fillScan(scan, coords) {
    for (let line of coords) {
        for (let i = 1; i < line.length; i++) {
            const [x, y] = line[i];
            const [px, py] = line[i - 1];

            const dx = x - px;
            const dy = y - py;

            if (dx !== 0) {
                const sign = Math.sign(dx);
                for (let i = 0; i <= Math.abs(dx); i++) {
                    const nx = px + i * sign;
                    scan[py][nx] = '#';
                }
            }
            if (dy !== 0) {
                const sign = Math.sign(dy);
                for (let i = 0; i <= Math.abs(dy); i++) {
                    const ny = py + i * sign;
                    scan[ny][px] = '#';
                }
            }
        }
    }
}

function createScan(maxX, maxY) {
    const scan = Array.from({length: maxY + 3}).map((_, i) => Array.from({length: maxX + 10}).map((_, i) => '.'));

    scan[0][500] = '+';

    return scan;
}

function calculateFill(scan, maxY) {
    const sr = 0;
    const sc = 500;

    let i = 0;
    while (true) {
        const [rr, rc] = findRest(scan, sr, sc, maxY);
        if (rr > maxY) {
            return i;
        }
        i++;
    }
}

function findRest(scan, sr, sc, maxY) {
    let nr = sr + 1;
    let nc = sc;

    if (nr > maxY) {
        return [nr, nc];
    }

    if (scan[nr][nc] === '.') {
        return findRest(scan, nr, nc, maxY);
    }

    if (scan[nr][nc - 1] === '.') {
        return findRest(scan, nr, nc - 1, maxY);
    }

    if (scan[nr][nc + 1] === '.') {
        return findRest(scan, nr, nc + 1, maxY);
    }

    if (scan[nr][nc] === '#') {
        scan[sr][sc] = 'O';
        return [nr, nc];
    }

    scan[sr][sc] = 'O';
    return [sr, sc];
}

function part2() {
    let res;
    const coords = parseInput(input);
    const [maxX, maxY] = getMaxCoords(coords);

    const scan = createScan2(maxX, maxY);

    fillScan(scan, coords);

    res = calculateFill2(scan, maxY);

    // console.log(renderArr(scan))
    console.log(res);
}

function createScan2(maxX, maxY) {
    const scan = Array.from({length: maxY + 3}).map((_, i) => Array.from({length: maxX * 2}).map((_, i) => '.'));

    for (let i = 0; i < maxX * 2; i++) {
        scan[maxY + 2][i] = '#';
    }

    return scan;
}


function calculateFill2(scan, maxY) {
    const sr = 0;
    const sc = 500;

    let i = 0;
    while (true) {
        const [rr, rc] = findRest2(scan, sr, sc, maxY);
        if (rr === sr && rc === sc) {
            return i + 1;
        }
        i++;
    }
}

function findRest2(scan, sr, sc, maxY) {
    let nr = sr + 1;
    let nc = sc;

    if (scan[nr][nc] === '.') {
        return findRest2(scan, nr, nc, maxY);
    }

    if (scan[nr][nc - 1] === '.') {
        return findRest2(scan, nr, nc - 1, maxY);
    }

    if (scan[nr][nc + 1] === '.') {
        return findRest2(scan, nr, nc + 1, maxY);
    }

    if (scan[nr][nc] === '#') {
        scan[sr][sc] = 'O';
        return [nr, nc];
    }

    scan[sr][sc] = 'O';
    return [sr, sc];
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
