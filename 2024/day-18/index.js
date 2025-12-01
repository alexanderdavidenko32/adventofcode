import fs from 'fs';

(() => {
    const day = '18';

    const input1 = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

    const timeLabel = 'AOC 2024. day ' + day;

    const input = `5,4
4,2
4,5
3,0
2,1
6,3
2,4
1,5
0,6
3,3
2,6
5,1
1,2
5,5
2,5
6,5
1,4
0,4
6,4
1,1
6,1
1,0
0,5
1,6
2,0`;

    const inputArray = input1.split('\n').map(item => item.split(',').map(str => +str));
    // const matrixSize = 7;
    const matrixSize = 71;
    // const itemsCount = 12;
    const itemsCount = 1024;

    const directions = {
        N: [-1, 0],
        E: [0, 1],
        S: [1, 0],
        W: [0, -1]
    }


    function part1() {
        const maze = generateMaze(inputArray, matrixSize, itemsCount);

        // console.log(renderArray(maze));
        const paths = getPath(maze, matrixSize);
        const minPath = getMinPath(paths);

        // console.log(renderArray(maze));

        console.log(minPath);
    }

    function part2() {
        const inputArray = input1.split('\n').map(item => item.split(',').map(str => +str));
        // const matrixSize = 7;
        const matrixSize = 71;

        let left = 0;
        let right = inputArray.length;
        let maze;

        while (left <= right) {
            const middle = Math.floor(left + ((right - left) / 2));

            maze = generateMaze(inputArray, matrixSize, middle);

            const paths = getPath(maze, matrixSize);

            if (paths.length > 0)  {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
            // const minPath = getMinPath(paths);

        }

        // console.log(renderArray(maze));

        console.log(inputArray[right].join());
    }

    function getMinPath(paths) {
        let min = paths[0];

        for (let i = 0; i < paths.length; i++) {
            if (min > paths[i]) {
                min = paths[i];
            }
        }
        return min;
    }

    function getPath(maze, matrixSize) {

        const queue = [];
        const visited = []

        queue.push([[0, 0], 0]); // [x, y], sum

        const res = [];

        while (queue.length) {
            const [coords, sum] = queue.shift();
            const [x, y] = coords;

            if (notInBounds(maze, x, y)) {
                continue;
            }

            if (isVisited(visited, x, y) || maze[y][x] === '#') {
                continue;
            }

            if (x === matrixSize - 1 && y === matrixSize - 1) {
                res.push(sum);
                continue
            }

            for (const direction in directions) {
                const [dx, dy] = directions[direction];
                const nx = x + dx;
                const ny = y + dy;

                queue.push([[nx, ny], sum + 1]);
            }

            visited.push([x, y]);
        }

        return res;
    }

    function isVisited(visited, x, y) {
        return visited.some(item => item[0] === x && item[1] === y);
    }

    function notInBounds(maze, x, y) {
        return x >= maze.length || y >= maze.length || x < 0 || y < 0;
    }

    function generateMaze(inputArray, matrixSize, itemsCount) {
        const arr = createEmptyArray(matrixSize, matrixSize);

        for (let i = 0; i < itemsCount; i++) {
            const [x, y] = inputArray[i];
            if (x >= matrixSize || y >= matrixSize) {
                continue;
            }
            arr[y][x] = '#'
        }

        return arr;
    }

    function renderArray(arr) {
        return arr.map(
            item => item.join('')
        ).join('\n');
    }

    function createEmptyArray(maxX, maxY) {
        const arr = [];

        for (let i = 0; i < maxY; i++) {
            const subArr = new Array(maxX).fill('.');
            arr.push(subArr);
        }

        return arr;
    }

    console.time(timeLabel);
    part1();
    part2();
    console.timeEnd(timeLabel);
})();