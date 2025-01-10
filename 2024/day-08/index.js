import fs from 'fs';

(() => {
    const day = '08';

    const input1 = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

    const timeLabel = 'AOC 2023. day ' + day;

    const input = `............
........0...
.....0......
.......0....
....0.......
......A.....
............
............
........A...
.........A..
............
............`;

    const inputArr = input1.split('\n').map(item => item.split(''));
    const inputArr2 = input1.split('\n').map(item => item.split(''));

    function part1() {
        const map = fillAntennasMap();
        const set = new Set();
        const maxX = inputArr.length - 1;
        const maxY = inputArr[0].length - 1;

        for (const antenna in map) {
            const item = map[antenna];

            while (item.length > 1) {
                for (let i = 1; i < item.length; i++) {
                    const coords = calculateAntinodePositions({
                        x: item[0][0],
                        y: item[0][1]
                    }, {
                        x: item[i][0],
                        y: item[i][1]
                    });

                    if (isInField(coords[0], maxX, maxY)) {
                        set.add(`${coords[0].x},${coords[0].y}`);
                        inputArr2[coords[0].x][coords[0].y] = '#'
                    }

                    if (isInField(coords[1], maxX, maxY)) {
                        set.add(`${coords[1].x},${coords[1].y}`);
                        inputArr2[coords[1].x][coords[1].y] = '#'
                    }
                }

                item.shift();
            }
        }
        console.log(set.size);
    }

    function part2() {
        const map = fillAntennasMap();
        const set = new Set();
        const maxX = inputArr.length - 1;
        const maxY = inputArr[0].length - 1;

        for (const antenna in map) {
            const item = map[antenna];

            while (item.length > 1) {
                for (let i = 1; i < item.length; i++) {
                    const deltaX = item[0][0] - item[i][0];
                    const deltaY = item[0][1] - item[i][1];

                    const position = [{
                        x: item[0][0],
                        y: item[0][1]
                    }, {
                        x: item[i][0],
                        y: item[i][1]
                    }];

                    while (isInField(position[0], maxX, maxY)) {
                        set.add(`${position[0].x},${position[0].y}`);

                        inputArr2[position[0].x][position[0].y] = '#';
                        position[0] = {
                            x: position[0].x + deltaX,
                            y: position[0].y + deltaY
                        }

                    }


                    while (isInField(position[1], maxX, maxY)) {
                        set.add(`${position[1].x},${position[1].y}`);
                        inputArr2[position[1].x][position[1].y] = '#';
                        position[1] = {
                            x: position[1].x - deltaX,
                            y: position[1].y - deltaY
                        }

                    }
                }

                item.shift();
            }
        }
        console.log(set.size);
    }

    function fillAntennasMap() {
        const map = {};

        for (let i = 0; i < inputArr.length; i++) {
            for (let j = 0; j < inputArr[0].length; j++) {
                const item = inputArr[i][j];

                const isAntenna = item !== '.';

                if (isAntenna) {
                    if (map[item]) {
                        map[item].push([i, j]);
                    } else {
                        map[item] = [[i,j]];
                    }
                }
            }
        }

        return map;
    }

    function calculateAntinodePositions(a, b) {
        const deltaX = b.x - a.x;
        const deltaY = b.y - a.y;
        const antinode1 = { x: a.x - deltaX, y: a.y - deltaY };
        const antinode2 = { x: b.x + deltaX, y: b.y + deltaY };

        return [antinode1, antinode2];
    }

    function isInField(coords, maxX, maxY) {
        if (coords.x < 0 || coords.y < 0 || coords.x > maxX || coords.y > maxY) {
            return false;
        }

        return true;
    }

    console.time(timeLabel);
    part1();
    part2();
    console.timeEnd(timeLabel);
})();