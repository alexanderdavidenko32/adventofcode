import fs from 'fs';

const input = fs.readFileSync('in4.txt', 'utf8');

const timeLabel = 'AOC 2023. day 10';

const directions = {
    N: [-1, 0],
    E: [0, 1],
    S: [1, 0],
    W: [0, -1]
}

const pipes = new Set(['F', '-', 'J', '|', 'L', '7']);

function part1() {
    let res = 0;
    const maze = parseInput(input);

    const startCoords = findCharCoords(maze, 'S');
    const startingPointPipe = getStartingPointPipe(maze, startCoords);

    maze[startCoords[0]][startCoords[1]] = startingPointPipe;

    const [, loopLength] = findLoop(maze, startCoords);

    res = Math.ceil(loopLength / 2);

    console.log(res);
}

function parseInput(inputText) {
    return inputText.split('\n').map(line => line.split(''));
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

function getStartingPointPipe(maze, startCoords) {
    const [x, y] = startCoords;

    const possibleTopChars = new Set(['7', '|', 'F']);
    const possibleBottomChars = new Set(['J', '|', 'L']);
    const possibleRightChars = new Set(['J', '-', '7']);
    const possibleLeftChars = new Set(['F', '-', 'L']);

    const topChar = maze[x - 1]?.[y];
    const rightChar = maze[x][y + 1];
    const leftChar = maze[x][y - 1];
    const bottomChar = maze[x + 1]?.[y];

    if (possibleTopChars.has(topChar) && possibleRightChars.has(rightChar)) {
        return 'L';
    }

    if (possibleRightChars.has(rightChar) && possibleBottomChars.has(bottomChar)) {
        return 'F';
    }

    if (possibleBottomChars.has(bottomChar) && possibleLeftChars.has(leftChar)) {
        return '7';
    }

    if (possibleLeftChars.has(leftChar) && possibleTopChars.has(topChar)) {
        return 'J';
    }

    if (leftChar === '-' && rightChar === '-') {
        return '-';
    }

    if (leftChar === '|' && rightChar === '|') {
        return '|';
    }
}

function findLoop(maze, startCoords) {
    const [sx, sy] = startCoords;
    const initialDirection = getInitialDirection(maze, startCoords); //directions.N;
    const queue = [[startCoords, [], initialDirection, 0]]; // coords, history, direction, stepCount

    while (queue.length) {
        const [[x, y], history, direction, stepCount] = queue.shift();

        if (x === sx && y === sy && stepCount > 0) {
            return [history, stepCount];
        }

        const char = maze[x][y];

        if (!isPipe(char)) {
            continue;
        }

        let newDirection = getNewDirection(char, direction);

        if (!newDirection) { // wrong pipe
            continue;
        }

        const [dx, dy] = newDirection;

        const nx = x + dx;
        const ny = y + dy;

        queue.push([[nx, ny], [...history, [x, y]], newDirection, stepCount + 1]);
    }
}

function isPipe(char) {
    return pipes.has(char);
}

function getInitialDirection(maze, startCoords) {
    const char = maze[startCoords[0]][startCoords[1]];

    if (char === '-') {
        return directions.E;
    }

    return directions.N;
}

function getNewDirection(char, direction) {
    if (char === '-' || char === '|') {
        return direction;
    }

    if (direction === directions.N) {
        if (char === '7') {
            return directions.W;
        }

        if (char === 'F') {
            return directions.E;
        }
    }

    if (direction === directions.E) {
        if (char === '7') {
            return directions.S;
        }
        if (char === 'J') {
            return directions.N;
        }
    }

    if (direction === directions.S) {
        if (char === 'L') {
            return directions.E;
        }

        if (char === 'J') {
            return directions.W;
        }
    }

    if (direction === directions.W) {
        if (char === 'F') {
            return directions.S;
        }
        if (char === 'L') {
            return directions.N;
        }
    }
}

function part2() {
    let res = 0;
    const maze = parseInput(input);

    const startCoords = findCharCoords(maze, 'S');
    const startingPointPipe = getStartingPointPipe(maze, startCoords);

    maze[startCoords[0]][startCoords[1]] = startingPointPipe;

    const [history] = findLoop(maze, startCoords);

    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[0].length; j++) {
            if (hasInArray(history, i, j)) {
                continue;
            }
            if (pointInPolygon(history, [i, j])) {
                res++;
            }
        }
    }
    console.log(res);
}

// Ray casting method
// see more info here https://www.naukri.com/code360/library/check-if-a-point-lies-in-the-interior-of-a-polygon
// Checking if a point lies inside a polygon
function pointInPolygon(polygon, point) {
    // X and Y coordinates of the point
    const [x, y] = point;

    // Total number of vertices in the polygon
    const numVertices = polygon.length;

    // Flag to store if the point is inside the polygon or not
    let inside = false;

    // First vertex of the polygon
    let [p1x, p1y] = polygon[0];

    // Loop through each vertex in the polygon
    for (let i = 1; i <= numVertices; i++) {
        let [p2x, p2y] = polygon[i % numVertices]; // Current vertex

        // Check if the point is below the lower edge of the polygon
        if (y > Math.min(p1y, p2y)) {

            // Check if the point is above the upper edge of the polygon
            if (y <= Math.max(p1y, p2y)) {

                // Check if the point is on the left of the polygon
                if (x <= Math.max(p1x, p2x)) {

                    /*
                    Calculate the intersection of the line passing through
                    the two vertices and the horizontal line passing through the point
                    */
                    let xIntersection = (y - p1y) * (p2x - p1x) / (p2y - p1y) + p1x;

                    // Check if the line passes through the point or if the two vertices are at the same x-coordinate
                    if (p1x === p2x || x <= xIntersection) {

                        // Flip the inside flag
                        inside = !inside;
                    }
                }
            }
        }

        // Set the current vertex as the previous vertex for the next iteration
        p1x = p2x;
        p1y = p2y;
    }

    // Return the inside flag as the result
    return inside;
}


function hasInArray(history, x, y) {
    return history.some(([hx, hy]) => hx === x && hy === y);
}


console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
