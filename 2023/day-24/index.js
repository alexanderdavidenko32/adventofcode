import fs from 'fs';

const day = '24';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2023. day ' + day;

function part1() {
    let res = 0;
    // const range = [7, 27];
    const range = [200000000000000, 400000000000000];

    const hailstones = parseInput(input);

    res = getIntersections(hailstones, range);


    console.log(res);
}

function parseInput(inputText) {
    return inputText.split('\n').map(line => line.split(' @ ').map(item => item.split(', ').map(Number)));
}

function getIntersections(hailstones, range) {
    let res = 0;

    for (let i = 0; i < hailstones.length; i++) {
        const [ax, ay] = hailstones[i][0];
        const [avx, avy] = hailstones[i][1];

        const am = avy / avx;

        for (let j = i + 1; j < hailstones.length; j++) {
            const [bx, by] = hailstones[j][0];
            const [bvx, bvy] = hailstones[j][1];

            const bm = bvy / bvx;

            const x = (am * ax - bm * bx + by - ay) / (am - bm);
            const y = am * (x - ax) + ay;

            const ta = (x - ax) / avx;
            const tb = (x - bx) / bvx;

            if (ta <= 0 || tb <= 0) {
                continue;
            }

            if (!inArea(x, y, range)) {
                continue;
            }

            res++;
        }
    }

    return res;
}

function inArea(x, y, range) {
    return inRange(x, range) && inRange(y, range);
}

function inRange(x, range) {
    return x >= range[0] && x <= range[1];
}

function part2() {
    let res = 0;
    const inputArray = parseInput2(input);

    res = getSum(inputArray);

    console.log(res);
}

function parseInput2(input) {
    return input.split('\n').map(line => line.match(/-?\d+/g).map(BigInt));
}

function add(A, B, hailstones, n) {
    const [px0, py0, pz0, vx0, vy0, vz0] = hailstones[0];
    const [pxN, pyN, pzN, vxN, vyN, vzN] = hailstones[n];

    A.push([vy0 - vyN, vxN - vx0, 0n, pyN - py0, px0 - pxN, 0n]);
    B.push(px0 * vy0 - py0 * vx0 - pxN * vyN + pyN * vxN);
    A.push([vz0 - vzN, 0n, vxN - vx0, pzN - pz0, 0n, px0 - pxN]);
    B.push(px0 * vz0 - pz0 * vx0 - pxN * vzN + pzN * vxN);
}

function det(m) {
    if (m.length === 0) {
        return 1n;
    }

    let [l, ...r] = m;

    r = l.map((n, i) => n * det(
            r.map(row => row.toSpliced(i, 1))
        )
    );

    return r.reduce((a, b, i) => (i % 2 ? a - b : a + b), 0n);
}

function cramer(A, B) {
    const detA = det(A);
    return A.map((_, i) => det(
        A.map(
            (r, j) => r.toSpliced(i, 1, B[j])
        )
    ) / detA);
}

function getSum(hailstones) {
    const A = [];
    const B = [];

    for (let i = 1; i <= 3; i++) {
        add(A, B, hailstones, i);
    }
    const [pxr, pyr, pzr] = cramer(A, B);
    return pxr + pyr + pzr;
}


console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
