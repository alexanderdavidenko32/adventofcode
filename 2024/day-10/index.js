import fs from 'fs';

(() => {
    const day = '10';

    const input2 = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

    const timeLabel = 'AOC 2023. day ' + day;

    const input = `89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732`;

    const inputArr = input2.split('\n').map(item => item.split('').map(str => +str));


    function part1() {
        const coords = getAllTrailheadsCoords(inputArr);
        let res = 0;

        for (let i = 0; i < coords.length; i++) {
            res += calculateAllTrailHeads(inputArr, coords[i], new Set());
        }

        console.log(res);
    };

    function part2() {
        const coords = getAllTrailheadsCoords(inputArr);
        let res = 0;

        for (let i = 0; i < coords.length; i++) {
            res += calculateAllTrailHeads2(inputArr, coords[i]);
        }

        console.log(res);
    };

    function getAllTrailheadsCoords(map) {
        const res = [];

        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[0].length; j++) {
                if (map[i][j] === 0) {
                    res.push([i, j]);
                }
            }
        }

        return res;
    }

    function calculateAllTrailHeads(map, currentPoint, set) {
        let res = 0;

        const [x, y] = currentPoint;

        if (map[x][y] === 9)  {
            set.add(`${x},${y}`);
            return 1;
        }

        if (map[x][y] + 1 === map[x - 1]?.[y]) {
            res += calculateAllTrailHeads(map, [x - 1, y], set);
        }

        if (map[x][y] + 1 === map[x][y + 1]) {
            res += calculateAllTrailHeads(map, [x, y + 1], set);
        }

        if (map[x][y] + 1 === map[x + 1]?.[y]) {
            res += calculateAllTrailHeads(map, [x + 1, y], set);
        }

        if (map[x][y] + 1 === map[x][y - 1]) {
            res += calculateAllTrailHeads(map, [x, y - 1], set);
        }

        // return res;
        return set.size;
    }


    function calculateAllTrailHeads2(map, currentPoint) {
        let res = 0;

        const [x, y] = currentPoint;

        if (map[x][y] === 9)  {
            return 1;
        }

        if (map[x][y] + 1 === map[x - 1]?.[y]) {
            res += calculateAllTrailHeads2(map, [x - 1, y]);
        }

        if (map[x][y] + 1 === map[x][y + 1]) {
            res += calculateAllTrailHeads2(map, [x, y + 1]);
        }

        if (map[x][y] + 1 === map[x + 1]?.[y]) {
            res += calculateAllTrailHeads2(map, [x + 1, y]);
        }

        if (map[x][y] + 1 === map[x][y - 1]) {
            res += calculateAllTrailHeads2(map, [x, y - 1]);
        }

        return res;
        // return set.size;
    }
    console.time(timeLabel);
    part1();
    part2();
    console.timeEnd(timeLabel);
})();