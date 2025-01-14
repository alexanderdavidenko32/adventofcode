import fs from 'fs';

(() => {
        const day = '06';

        const input1 = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

        const timeLabel = 'AOC 2023. day ' + day;

        const input = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`;
        const inputArr = input1.split('\n');
        const inputArr2 = inputArr.map(item => item.split(''));

        function getStartPosition() {
            for (let i = 0; i < inputArr.length; i++) {
                const item = inputArr[i];

                const index = item.indexOf('^');

                if (index > -1) {
                    return {x: i, y: index};
                }
            }
            return {x: 0, y: 0};
        }

        function part1() {
            let direction = 'up';
            const pos = getStartPosition();
            const set = new Set([`${pos.x}:${pos.y}`]);

            while (true) {
                if (pos.x === 0 || pos.y === 0 || pos.x === inputArr.length - 1 || pos.y === inputArr[0].length - 1) {
                    return set.size;
                }
                if (direction === 'up') {
                    if (inputArr[pos.x - 1][pos.y] !== '#') {
                        pos.x--;
                        set.add(`${pos.x}:${pos.y}`);
                        inputArr2[pos.x][pos.y] = '^';
                    } else {
                        direction = 'right';
                    }
                }
                if (direction === 'right') {
                    if (inputArr[pos.x][pos.y + 1] !== '#') {
                        pos.y++;
                        set.add(`${pos.x}:${pos.y}`);
                        inputArr2[pos.x][pos.y] = '>';
                    } else {
                        direction = 'down';
                    }
                }
                if (direction === 'down') {
                    if (inputArr[pos.x + 1][pos.y] !== '#') {
                        pos.x++;
                        set.add(`${pos.x}:${pos.y}`);
                        inputArr2[pos.x][pos.y] = 'X';
                    } else {
                        direction = 'left';
                    }
                }

                if (direction === 'left') {
                    if (inputArr[pos.x][pos.y - 1] !== '#') {
                        pos.y--;
                        set.add(`${pos.x}:${pos.y}`);
                        inputArr2[pos.x][pos.y] = '<';
                    } else {
                        direction = 'up';
                    }
                }
            }
        }

        const set2 = new Set();
        let res = new Set();

        const directions = {
            N: [-1, 0],
            E: [0, 1],
            S: [1, 0],
            W: [0, -1]
        }

        function part2(maze) {
            const path = new Set();
            let direction = directions.N;
            const pos = getStartPosition();

            while (true) {
                const [dx, dy] = direction;
                const nx = pos.x + dx;
                const ny = pos.y + dy;

                if (notInBounds({x: nx, y: ny}, maze)) {
                    break;
                }

                const current = maze[nx]?.[ny];

                switch (direction) {
                    case directions.N:
                        if (current === '#') {
                            direction = directions.E;
                        } else {
                            path.add(`${nx},${ny}`);
                            pos.x--;
                        }
                        break;
                    case directions.E:
                        if (current === '#') {
                            direction = directions.S;
                        } else {
                            path.add(`${nx},${ny}`);
                            pos.y++;
                        }
                        break;
                    case directions.S:
                        if (current === '#') {
                            direction = directions.W;
                        } else {
                            path.add(`${nx},${ny}`);
                            pos.x++;
                        }
                        break;
                    case directions.W:
                        if (current === '#') {
                            direction = directions.N;
                        } else {
                            path.add(`${nx},${ny}`);
                            pos.y--;
                        }
                        break;
                }
            }

            let count = 0;
            [...path].forEach(item => {
                const set = new Set();
                const newMaze = inputArr.map(item => item.split(''));
                const [x, y] = item.split(',').map(item => +item);

                newMaze[x][y] = '#';

                let current = getStartPosition();
                newMaze[current.x][current.y] = '.';

                let direction = directions.N;

                while (newMaze[current.x]?.[current.y] === '.') {
                    let [dx, dy] = direction;

                    while (newMaze[current.x]?.[current.y] === '.') {
                        current.x += dx;
                        current.y += dy;
                    }

                    if(notInBounds(current, newMaze)) {
                        break;
                    }

                    const coords = `${current.x},${current.y}:${dx},${dy}`;

                    if (set.has(coords)) {
                        count++;
                        break
                    }

                    set.add(coords);

                    current.x -= dx;
                    current.y -= dy;

                    direction = getNextDirection(direction);
                }

            })

            // console.log(renderArr(newMaze));
            console.log(count);

        }

        function checkLoop(position, direction, maze) {
            const set = new Set();
            let pos = {
                x: position.x,
                y: position.y,
            };

            while (true) {
                const [dx, dy] = direction;
                const nx = pos.x + dx;
                const ny = pos.y + dy;



                if (set.has(`${pos.x}:${pos.y},${dx}:${dy}`)) {
                    return true;
                }
                if (notInBounds(pos, maze)) {
                    return false;
                }
                switch (direction) {
                    case directions.N:
                        if (maze[nx]?.[ny] === '#') {
                            direction = directions.E;
                        } else {
                            set.add(`${pos.x}:${pos.y},${dx}:${dy}`);
                            pos.x--;
                        }
                        break;
                    case directions.E:
                        if (maze[nx]?.[ny] === '#') {
                            direction = directions.S;
                        } else {
                            set.add(`${pos.x}:${pos.y},${dx}:${dy}`);
                            pos.y++;
                        }
                        break;
                    case directions.S:
                        if (maze[nx]?.[ny] === '#') {
                            direction = directions.W;
                        } else {
                            set.add(`${pos.x}:${pos.y},${dx}:${dy}`);
                            pos.x++;
                        }
                        break;
                    case directions.W:
                        if (maze[nx]?.[ny] === '#') {
                            direction = directions.N;
                        } else {
                            set.add(`${pos.x}:${pos.y},${dx}:${dy}`);
                            pos.y--;
                        }
                        break;
                }
            }

        }

        function notInBounds(pos, maze) {
            if (pos.x < 0 || pos.y < 0 || pos.x >= maze.length || pos.y >= maze[0].length) {
                return true;
            }
            return false
        }

        function renderArr(arr) {
            return arr.map(item => item.join('')).join('\n');
        }

        function getNextDirection(direction) {
            switch (direction) {
                case directions.N:
                    return directions.E;
                case directions.E:
                    return directions.S;
                case directions.S:
                    return directions.W;
                case directions.W:
                    return directions.N;
            }
        }

        console.time(timeLabel);
        console.log(part1());
        console.log(part2(inputArr));
        console.timeEnd(timeLabel);
    }


)()
