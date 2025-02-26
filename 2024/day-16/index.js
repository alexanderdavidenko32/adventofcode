import fs from 'fs';

(() => {
        const day = '16';

        const input3 = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

        const timeLabel = 'AOC 2023. day ' + day;

        const input = `###############
#.......#....E#
#.#.###.#.###.#
#.....#.#...#.#
#.###.#####.#.#
#.#.#.......#.#
#.#.#####.###.#
#...........#.#
###.#.#####.#.#
#...#.....#.#.#
#.#.#.###.#.#.#
#.....#...#.#.#
#.###.#.#.#.#.#
#S..#.....#...#
###############`;

        const input2 = `#################
#...#...#...#..E#
#.#.#.#.#.#.#.#.#
#.#.#.#...#...#.#
#.#.#.#.###.#.#.#
#...#.#.#.....#.#
#.#.#.#.#.#####.#
#.#...#.#.#.....#
#.#.#####.#.###.#
#.#.#.......#...#
#.#.###.#####.###
#.#.#...#.....#.#
#.#.#.#####.###.#
#.#.#.........#.#
#.#.#.#########.#
#S#.............#
#################`;

        const input4 = `###########################
#######################..E#
######################..#.#
#####################..##.#
####################..###.#
###################..##...#
##################..###.###
#################..####...#
################..#######.#
###############..##.......#
##############..###.#######
#############..####.......#
############..###########.#
###########..##...........#
##########..###.###########
#########..####...........#
########..###############.#
#######..##...............#
######..###.###############
#####..####...............#
####..###################.#
###..##...................#
##..###.###################
#..####...................#
#.#######################.#
#S........................#
###########################`;
        const input5 = `####################################################
#......................................#..........E#
#......................................#...........#
#....................#.................#...........#
#....................#.................#...........#
#....................#.................#...........#
#....................#.................#...........#
#....................#.................#...........#
#....................#.................#...........#
#....................#.................#...........#
#....................#.................#...........#
#....................#.............................#
#S...................#.............................#
####################################################`;
        const input6 = `############
#.......#.E#
#...#...#..#
#...#...#..#
#S..#......#
############`;

        const inputArr = input3.split('\n').map(item => item.split(''));

        const directions = {
            N: [-1, 0],
            E: [0, 1],
            S: [1, 0],
            W: [0, -1]
        }

        function part1(arr) {
            const startPoint = findCharCoords(arr, 'S');
            const endPoint = findCharCoords(arr, 'E');
            const direction = directions.E;
            const visited = new Set();

            const res = calculateWeight(arr, [...startPoint, direction, [startPoint], 0]);
            let min = getMinPathLength(res);

            console.log(min);
            // console.log(renderArr(arr));
        }

        function getMinPathLength(res) {
            let min = Infinity;

            for (let i = 0; i < res.length; i++) {
                if (min > res[i][1]) {
                    min = res[i][1];
                }
            }

            return min;
        }

        function part2(arr) {
            const startPoint = findCharCoords(arr, 'S');
            const endPoint = findCharCoords(arr, 'E');
            const direction = directions.E;
            const visited = new Set();

            const res = calculateWeight(arr, [...startPoint, direction, [startPoint], 0]);
            let min = getMinPathLength(res);

            const filtered = res.filter(item => item[1] === min);
            const set = new Set();

            for(let i = 0; i < filtered.length; i++) {
                for (let j = 0; j < filtered[i][0].length; j++) {
                    const item = filtered[i][0][j];

                    const coords = `${item[0]},${item[1]}`;

                    set.add(coords);
                }
            }

            const sa= [...set];
            for (let i = 0; i < sa.length; i++) {
                const [x, y] = sa[i].split(',')

                arr[+x][+y] = 'O';
            }
            console.log(set.size);
            // console.log(renderArr(arr));
        }


        function calculateWeight(arr, startPoint, direction) {
            const queue = [];
            const visited = {};
            const routes = [];

            queue.push(startPoint);

            while (queue.length) {
                const point = queue.shift();

                const [x,y,direction,history,currScore] = point;

                if (arr[x][y] === 'E') {
                    routes.push([history, currScore]);
                    continue;
                }

                const pointCoords = `${x},${y}:${direction[0]},${direction[1]}`;
                if (visited[pointCoords] && visited[pointCoords] < currScore) {
                    continue;
                }

                visited[pointCoords] = currScore;

                for (let dir in directions) {
                    const [dx,dy] = directions[dir];

                    const nx = x + dx;
                    const ny = y + dy;

                    const tile = arr[nx][ny];

                    const coords = `${nx},${ny}`;

                    if (tile === '#') {
                        continue;
                    }

                    if (!history.some(item => item[0] === nx && item[1] === ny)) {
                        if (directions[dir] === direction) {
                            queue.push([nx, ny, directions[dir], [...history, [nx, ny]], currScore + 1]);
                        } else {
                            queue.push([nx, ny, directions[dir], [...history, [nx, ny]], currScore + 1001]);
                        }
                    }
                }

            }

            return routes;
        }

        function findCharCoords(arr, char) {
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[0].length; j++) {
                    if (arr[i][j] === char) {
                        return [i, j];
                    }
                }
            }

            return [-1, -1];
        }

        function renderArr(arr) {

            return arr.map(item => item.join('')).join('\n');
        }

        console.time(timeLabel);
        part1(inputArr);
        part2(inputArr);
        console.timeEnd(timeLabel);
    }
)();
