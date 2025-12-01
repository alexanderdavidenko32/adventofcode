import fs from 'fs';

(() => {
    const day = '14';

    const input3 = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

    const timeLabel = 'AOC 2024. day ' + day;

    const input = `p=0,4 v=3,-3
p=6,3 v=-1,-3
p=10,3 v=-1,2
p=2,0 v=2,-1
p=0,0 v=1,3
p=3,0 v=-2,-2
p=7,6 v=-1,-3
p=3,0 v=-1,-2
p=9,3 v=2,3
p=7,3 v=-1,2
p=2,4 v=2,-3
p=9,5 v=-3,-3`;
    const input1 = `p=2,4 v=2,-3`;

    const input2 = `p=3,0 v=-2,-2
p=3,0 v=-1,-2`;

    const delay = (delayInms) => {
        return new Promise(resolve => setTimeout(resolve, delayInms));
    };

    class Point {
        x;
        y;
        vx;
        vy;

        constructor(x, y, vx, vy) {
            this.x = x;
            this.y = y;
            this.vx = vx;
            this.vy = vy;
        }
    }

    const pointRe = /p=(-?\d{1,3}),(-?\d{1,3})/;
    const velocityRe = /v=(-?\d{1,3}),(-?\d{1,3})/;
    // const pre = document.querySelector('pre');

    const inputArr = input3.split('\n').map(item => {
        const [point, velocity] = item.split(' ');
        const pointParams = pointRe.exec(point);
        const velocityParams = velocityRe.exec(velocity);

        return new Point(+pointParams[1], +pointParams[2], +velocityParams[1], +velocityParams[2])
    });

    function part1() {
        const maxX = 101;
        const maxY = 103;
        const seconds = 100;

        const intersectionsArray = createEmptyArray(maxX, maxY);


        for (let i = 0; i < inputArr.length; i++) {
            calculateCoords(inputArr[i], seconds, maxX, maxY);
        }

        fillIntersectionsArray(intersectionsArray, inputArr);

        const res = calculateSafetyFactor(intersectionsArray, maxX, maxY);
        console.log(res)
    }

    async function part2() {
        const maxX = 101;
        const maxY = 103;
        let seconds = 0;
        let intersectionsArray;
        console.log('start part 2 calculation');

        let minSf = Infinity;
        let res = 0;

        while (seconds < 7765) {
            intersectionsArray = createEmptyArray(maxX, maxY);
            const inputArr = input3.split('\n').map(item => {
                const [point, velocity] = item.split(' ');
                const pointParams = pointRe.exec(point);
                const velocityParams = velocityRe.exec(velocity);

                return new Point(+pointParams[1], +pointParams[2], +velocityParams[1], +velocityParams[2])
            });

            for (let i = 0; i < inputArr.length; i++) {
                calculateCoords(inputArr[i], seconds, maxX, maxY);
            }

            fillIntersectionsArray(intersectionsArray, inputArr);

            if (hasCristmassTree(intersectionsArray)) {
                addToThePage(seconds, renderPlots(intersectionsArray));
                // console.log(renderPlots(intersectionsArray));
                // console.log(seconds, res);
                break;
                // await delay(250);
            }

            addToThePage(seconds, renderPlots(intersectionsArray));
            // console.log(renderPlots(intersectionsArray));
            seconds++;


        }

        console.log(seconds);
    }

    function calculateCoords(point, seconds, maxX, maxY) {
        let x = (point.x + seconds * point.vx) % maxX;
        let y = (point.y + seconds * point.vy) % maxY;

        if (x < 0) {
            x = maxX + x;
        }

        if (y < 0) {
            y = maxY + y;
        }

        point.x = x;
        point.y = y;
    }

    function calculateSafetyFactor(arr, maxX, maxY) {
        let res = 1;
        const midX = Math.floor(maxX / 2);
        const midY = Math.floor(maxY / 2);

        res *= calculateSumOfRobotsInQuadrant(arr, 0, midX, 0, midY);
        res *= calculateSumOfRobotsInQuadrant(arr, midX + 1, maxX, midY + 1, maxY);
        res *= calculateSumOfRobotsInQuadrant(arr, 0, midX, midY + 1, maxY);
        res *= calculateSumOfRobotsInQuadrant(arr, midX + 1, maxX, 0, midY);

        return res;
    }

    function calculateSumOfRobotsInQuadrant(arr, startX, endX, startY, endY) {
        let res = 0;

        for (let i = startY; i < endY; i++) {

            for (let j = startX; j < endX; j++) {
                if (arr[i][j] === 0) {
                    continue;
                }

                res += arr[i][j];
            }
        }
        return res;
    }

    function createEmptyArray(maxX, maxY) {
        const arr = [];

        for (let i = 0; i < maxY; i++) {
            const subArr = new Array(maxX).fill(0);
            arr.push(subArr);
        }

        return arr;
    }

    function fillIntersectionsArray(array, points) {
        for (let i = 0; i < points.length; i++) {
            const point = points[i];
            array[point.y][point.x]++;
        }
    }

    function renderPlots(arr) {

        return arr.map(
            item => item.join('').replaceAll('0', '.')
        ).join('\n');
    }

    function addToThePage(seconds, str) {
        // pre.innerText = seconds + '\n' + str;
    }

    function hasCristmassTree(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[0].length; j++) {
                if (arr[i][j] > 1) {
                    return false;
                }
            }
        }

        return true;
    }

    console.time(timeLabel);
    part1();
    part2();
    console.timeEnd(timeLabel);
})();