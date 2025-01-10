import fs from 'fs';

(() => {
    const day = '15';

    const input0 = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

    const timeLabel = 'AOC 2023. day ' + day;

    const input = `########
#..O.O.#
##@.O..#
#...O..#
#.#.O..#
#...O..#
#......#
########`;
    const moves = `<^^>>>vv<v>>v<<`;

    const input1 = `########
#..O.O.#
##O.O..#
#.O.O..#
#.@.O..#
#...O..#
#......#
########`;
    const moves1 = `^^`;

    const input2 = `##########
#..O..O.O#
#......O.#
#.OO..O.O#
#..O@..O.#
#O#..O...#
#O..O..O.#
#.OO.O.OO#
#....O...#
##########`;
    const moves2 = `<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^
vvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v
><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<
<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^
^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><
^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^
>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^
<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>
^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>
v^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^`;

    const input4 = `#######
#...#.#
#.....#
#..OO@#
#..O..#
#.....#
#######`;
    const moves4 = `<vv<<^^<<^^`;

    const input5 = `#######
#.....#
#..O..#
#.O...#
#..O..#
#..O@.#
#..O..#
#.....#
#######`;

    const moves5 = '<>vv<<^^^';

    // const pre = document.querySelector('pre');

    const delay = (delayInms) => {
        return new Promise(resolve => setTimeout(resolve, delayInms));
    };

    const [input3, moves3] = input0.split('\n\n');

    const inputArr = input3.split('\n').map(item => item.split(''));

    const inputArr2 = input3.split('\n');
    const robotMoves = moves3.replace('\n', '');

    function part1() {
        const [x, y] = findRobotPosition(inputArr);
        const robotPosition = {
            x,
            y
        }


        calculateMoves(inputArr, robotPosition, robotMoves);
    }

    function calculateMoves(arr, robotPosition, moves) {
        for (let i = 0; i < moves.length; i++) {
            const move = moves[i];

            calculateMove(arr, robotPosition, move);
        }

        const res = calculateDistances(arr);
        // console.log(renderArray(arr));
        console.log(res);
    }

    function calculateMove(arr, robotPosition, move) {
        const {x, y} = robotPosition;

        switch (move) {
            case '^':
                calculateMoveRobotToCoords(arr, x, y, x - 1, y, move, robotPosition);
                break;
            case '>':
                calculateMoveRobotToCoords(arr, x, y, x, y + 1, move, robotPosition);
                break;
            case 'v':
                calculateMoveRobotToCoords(arr, x, y, x + 1, y, move, robotPosition);
                break;
            case '<':
                calculateMoveRobotToCoords(arr, x, y, x, y - 1, move, robotPosition);
                break;
        }
    }

    function calculateMoveRobotToCoords(arr, x, y, toX, toY, move, robotPosition) {
        if (isWall(arr, toX, toY)) {
            return;
        }
        if (isEmpty(arr, toX, toY)) {
            arr[toX][toY] = '@';
            arr[x][y] = '.';

            robotPosition.x = toX;
            robotPosition.y = toY;
            return;
        }
        if (isBox(arr, toX, toY)) {
            if (moveBox(arr, toX, toY, move)) {
                arr[toX][toY] = '@';
                arr[x][y] = '.';

                robotPosition.x = toX;
                robotPosition.y = toY;
            }
        }
    }

    function isWall(arr, x, y) {
        return arr[x][y] === '#';
    }

    function isEmpty(arr, x, y) {
        return arr[x][y] === '.';
    }

    function isBox(arr, x, y) {
        return arr[x][y] === 'O';
    }

    function moveBox(arr, x, y, move) {
        switch (move) {
            case '^':
                return moveBoxGeneric(arr, x, y, x - 1, y, move);
                break;
            case '>':
                return moveBoxGeneric(arr, x, y, x, y + 1, move);
                break;
            case 'v':
                return moveBoxGeneric(arr, x, y, x + 1, y, move);
                break;
            case '<':
                return moveBoxGeneric(arr, x, y, x, y - 1, move);
                break;
        }
    }

    function moveBoxGeneric(arr, x, y, toX, toY, move) {
        if (isWall(arr, toX, toY)) {
            return false;
        }
        if (isEmpty(arr, toX, toY)) {
            arr[toX][toY] = 'O';
            arr[x][y] = '.';
            return true;
        } else {
            if (moveBox(arr, toX, toY, move)) {
                arr[toX][toY] = 'O';
                arr[x][y] = '.';
                return true;
            } else {
                return false;
            }
        }
    }

    function findRobotPosition(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[0].length; j++) {
                if (arr[i][j] === '@') {
                    return [i, j];
                }
            }
        }

        return [-1, -1];
    }

    function createEmptyArray(maxX, maxY) {
        const arr = [];

        for (let i = 0; i < maxY; i++) {
            const subArr = new Array(maxX).fill(0);
            arr.push(subArr);
        }

        return arr;
    }

    function renderArray(arr) {
        return arr.map(
            item => item.join('')
        ).join('\n');
    }

    function calculateDistances(arr) {
        let res = 0

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[0].length; j++) {
                if (arr[i][j] === 'O') {
                    res += 100 * i + j;
                }
            }
        }

        return res;
    }

    function part2() {
        const arr = widerWarehouse(inputArr2);
        // console.log(renderArray(arr));

        const [x, y] = findRobotPosition(arr);
        const robotPosition = {
            x,
            y
        }

        calculateMoves2(arr, robotPosition, robotMoves);
    }

    function widerWarehouse(arr) {
        const res = [];
        for (let i = 0; i < arr.length; i++) {
            const walls = arr[i].replaceAll('#', '##');
            const boxes = walls.replaceAll('O', '[]');
            const dots = boxes.replaceAll('.', '..');
            const robot = dots.replaceAll('@', '@.');
            res.push(robot.split(''));
        }

        return res;
    }


    function addToThePage(seconds, str) {
        // pre.innerText = seconds + '\n' + str;
    }

    async function calculateMoves2(arr, robotPosition, moves) {
        for (let i = 0; i < moves.length; i++) {
            const move = moves[i];

            calculateMove2(arr, robotPosition, move);
            // addToThePage(i, renderArray(arr));

            // await delay(250);
        }

        const res = calculateDistances2(arr);
        // console.log(renderArray(arr));
        console.log(res);
    }

    function calculateMove2(arr, robotPosition, move) {
        const {x, y} = robotPosition;



        switch (move) {
            case '^':
                calculateMoveRobotToCoords2(arr, x, y, x - 1, y, move, robotPosition);
                break;
            case '>':
                calculateMoveRobotToCoords2(arr, x, y, x, y + 1, move, robotPosition);
                break;
            case 'v':
                calculateMoveRobotToCoords2(arr, x, y, x + 1, y, move, robotPosition);
                break;
            case '<':
                calculateMoveRobotToCoords2(arr, x, y, x, y - 1, move, robotPosition);
                break;
        }
    }

    function calculateMoveRobotToCoords2(arr, x, y, toX, toY, move, robotPosition) {
        if (isWall(arr, toX, toY)) {
            return;
        }
        if (isEmpty(arr, toX, toY)) {
            arr[toX][toY] = '@';
            arr[x][y] = '.';

            robotPosition.x = toX;
            robotPosition.y = toY;
            return;
        }
        if (isBox2(arr, toX, toY)) {
            const [x1, y1, x2, y2] = getBoxCoords(arr, toX, toY);

            if (!canMoveBox(arr, x1, y1, x2, y2, move)) {
                return;
            }

            if (moveBox2(arr, x1, y1, x2, y2, move)) {
                arr[toX][toY] = '@';
                arr[x][y] = '.';

                robotPosition.x = toX;
                robotPosition.y = toY;
            }
        }
    }

    function isBox2(arr, x, y) {
        return arr[x][y] === '[' || arr[x][y] ===']';
    }

    function getBoxCoords(arr, x, y) {
        const boxChar = arr[x][y];

        let x1 = x;
        let x2 = x;
        let y1 = y;
        let y2 = y;

        switch (boxChar) {
            case '[':
                x1 = x;
                y1 = y;
                x2 = x;
                y2 = y +1
                break;
            case ']':
                x1 = x;
                y1 = y - 1;
                x2 = x;
                y2 = y;
                break;
            default:
                return false;
        }

        return [x1, y1, x2, y2];
    }

    function moveBox2(arr, x1, y1, x2, y2, move) {
        switch (move) {
            case '^':
                return moveBoxGeneric2(arr, x1, y1, x2, y2, move);
                break;
            case '>':
                return moveBoxGeneric2(arr, x1, y1, x2, y2, move);
                break;
            case 'v':
                return moveBoxGeneric2(arr, x1, y1, x2, y2, move);
                break;
            case '<':
                return moveBoxGeneric2(arr, x1, y1, x2, y2, move);
                break;
        }
    }

    function canMoveBox(arr, x1, y1, x2, y2, move) {
        switch (move) {
            case '^':
                if (arr[x1 - 1][y1] === '#' || arr[x2 - 1][y2] === '#') {
                    return false;
                }

                if (arr[x1 - 1][y1] === ']' && arr[x2 - 1][y2] === '[') {
                    const coords1 = getBoxCoords(arr, x1 - 1, y1);
                    const coords2 = getBoxCoords(arr, x2 - 1, y2);

                    return canMoveBox(arr, coords1[0], coords1[1], coords1[2], coords1[3], move) && canMoveBox(arr, coords2[0], coords2[1], coords2[2], coords2[3], move);
                }


                if (arr[x1 - 1][y1] === ']' && arr[x2 - 1][y2] === '.') {
                    const coords1 = getBoxCoords(arr, x1 - 1, y1);

                    return canMoveBox(arr, coords1[0], coords1[1], coords1[2], coords1[3], move);
                }

                if (arr[x1 - 1][y1] === '.' && arr[x2 - 1][y2] === '[') {
                    const coords2 = getBoxCoords(arr, x2 - 1, y2);

                    return canMoveBox(arr, coords2[0], coords2[1], coords2[2], coords2[3], move);
                }


                if (arr[x1 - 1][y1] === '[' && arr[x2 - 1][y2] === ']') {
                    const coords1 = getBoxCoords(arr, x1 - 1, y1);

                    return canMoveBox(arr, coords1[0], coords1[1], coords1[2], coords1[3], move);
                }

                break;
            case '>':
                return true;
                break;
            case 'v':

                if (arr[x1 + 1][y1] === '#' || arr[x2 + 1][y2] === '#') {
                    return false;
                }

                if (arr[x1 + 1][y1] === ']' && arr[x2 + 1][y2] === '[') {
                    const coords1 = getBoxCoords(arr, x1 + 1, y1);
                    const coords2 = getBoxCoords(arr, x2 + 1, y2);

                    return canMoveBox(arr, coords1[0], coords1[1], coords1[2], coords1[3], move) && canMoveBox(arr, coords2[0], coords2[1], coords2[2], coords2[3], move);
                }


                if (arr[x1 + 1][y1] === ']' && arr[x2 + 1][y2] === '.') {
                    const coords1 = getBoxCoords(arr, x1 + 1, y1);

                    return canMoveBox(arr, coords1[0], coords1[1], coords1[2], coords1[3], move);
                }

                if (arr[x1 + 1][y1] === '.' && arr[x2 + 1][y2] === '[') {
                    const coords2 = getBoxCoords(arr, x2 + 1, y2);

                    return canMoveBox(arr, coords2[0], coords2[1], coords2[2], coords2[3], move);
                }


                if (arr[x1 + 1][y1] === '[' && arr[x2 + 1][y2] === ']') {
                    const coords1 = getBoxCoords(arr, x1 + 1, y1);

                    return canMoveBox(arr, coords1[0], coords1[1], coords1[2], coords1[3], move);
                }
                break;
            case '<':
                return true;
                break;
        }

        return true;
    }

    function moveBoxGeneric2(arr, x1, y1, x2, y2, move) {
        const boxChar = arr[x1][y1];

        let toX1;
        let toX2;
        let toY1;
        let toY2;

        switch (move) {
            case '^':
                toX1 = x1 - 1;
                toY1 = y1;
                toX2 = x2 - 1;
                toY2 = y2;
                break;
            case '>':
                toX1 = x1;
                toY1 = y1 + 1;
                toX2 = x2;
                toY2 = y2 + 1;
                break;
            case 'v':
                toX1 = x1 + 1;
                toY1 = y1;
                toX2 = x2 + 1;
                toY2 = y2;
                break;
            case '<':

                toX1 = x1;
                toY1 = y1 - 1;
                toX2 = x2;
                toY2 = y2 - 1;
                break;
        }


        if (isWall(arr, toX1, toY1) || isWall(arr, toX2, toY2)) {
            return false;
        }

        if (isEmpty(arr, toX1, toY1) && isEmpty(arr, toX2, toY2) ||
            (move === '<' && isEmpty(arr, toX1, toY1) && arr[toX2][toY2] === '[') ||
            (move === '>' && isEmpty(arr, toX2, toY2) && arr[toX1][toY1] === ']')
        ) {
            arr[x1][y1] = '.';
            arr[x2][y2] = '.';
            arr[toX1][toY1] = '[';
            arr[toX2][toY2] = ']';
            return true;
        }

        if (arr[toX1][toY1] === ']' && arr[toX2][toY2] === '[' && (move === '^' || move === 'v') ){
            if (moveBox2(arr, toX1, toY1 - 1, toX1, toY1, move) && moveBox2(arr, toX2, toY2, toX2, toY2 + 1, move)) {
                arr[x1][y1] = '.';
                arr[x2][y2] = '.';
                arr[toX1][toY1] = '[';
                arr[toX2][toY2] = ']';
                return true;
            } else {
                return false;
            }
        }

        if (move === '>' && boxChar === '[') {
            if (moveBox2(arr, toX2, toY2, toX2, toY2 + 1, move)) {
                arr[x1][y1] = '.';
                arr[x2][y2] = '.';
                arr[toX1][toY1] = '[';
                arr[toX2][toY2] = ']';
                return true;
            } else {
                return false;
            }
        }
        const [newToX1, newToY1, newToX2, newToY2] = getBoxCoords(arr, toX1, toY1) || getBoxCoords(arr, toX2, toY2);
        if (moveBox2(arr, newToX1, newToY1, newToX2, newToY2, move)) {
            arr[x1][y1] = '.';
            arr[x2][y2] = '.';
            arr[toX1][toY1] = '[';
            arr[toX2][toY2] = ']';
            return true;
        } else {
            return false;
        }
    }

    function calculateDistances2(arr) {
        let res = 0

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[0].length; j++) {
                if (arr[i][j] === '[') {
                    res += 100 * i + j;
                }
            }
        }

        return res;
    }

    console.time(timeLabel);
    part1();
    part2();
    console.timeEnd(timeLabel);
})();