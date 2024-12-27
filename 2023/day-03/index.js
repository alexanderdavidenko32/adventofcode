const fs = require('fs');

const input = fs.readFileSync('in1.txt', 'utf8');

const inputArr = input.split('\n').map(item => item.split(''));

const nums = ['1','2','3','4','5','6','7','8','9','0'];
function part1() {
    let sum = 0;

    for (let i = 0; i < inputArr.length; i++) {
        let stack = [];

        let isPartNumber = false;
        for (let j = 0; j < inputArr[i].length; j++) {
            const cell = inputArr[i][j];
            const isNum = nums.includes(cell);

            if (isNum) {
                isPartNumber = isPartNumber || checkIsPartNumber(inputArr, i, j);
                stack.push(cell);
            } else {
                if (isPartNumber) {
                    sum += parseInt(stack.join(''));
                }

                isPartNumber = false;
                stack = [];
            }
        }

        if (isPartNumber) {
            sum += parseInt(stack.join(''));
        }
    }

    console.log(sum);
}
function checkIsPartNumber(arr, i, j) {
    const check = [
        arr[i][j + 1] || '.',
        arr[i][j - 1] || '.',
        arr[i - 1]?.[j] || '.',
        arr[i + 1]?.[j] || '.',
        arr[i + 1]?.[j + 1] || '.',
        arr[i + 1]?.[j - 1] || '.',
        arr[i - 1]?.[j + 1] || '.',
        arr[i - 1]?.[j - 1] || '.',
    ];
    return check.filter(item => item !== '.').some(item => !nums.includes(item));
}

function part2() {
    let sum = 0;
    const map = {};

    for (let i = 0; i < inputArr.length; i++) {
        let stack = [];

        let gearCoords = null;
        for (let j = 0; j < inputArr[i].length; j++) {
            const cell = inputArr[i][j];
            const isNum = nums.includes(cell);

            if (isNum) {
                gearCoords = gearCoords || getGearCoords(inputArr, i, j);
                stack.push(cell);
            } else {
                if (gearCoords) {
                    const num = stack.join('');
                    const key = `${gearCoords[0]},${gearCoords[1]}`;
                    map[key] = [...(map[key] || []), num];
                }

                gearCoords = null;
                stack = [];
            }
        }

        if (gearCoords) {
            const num = stack.join('');
            const key = `${gearCoords[0]},${gearCoords[1]}`;
            map[key] = [...(map[key] || []), num];
        }
    }

    for (let key in map) {
        if (map[key].length === 2) {
            sum += map[key][0] * map[key][1];
        }
    }
    console.log(sum);
}

function getGearCoords(inputArr, i, j) {
    const possibleCoords = [
        [i, j + 1],
        [i, j - 1],
        [i - 1, j],
        [i + 1, j],
        [i + 1, j + 1],
        [i + 1, j - 1],
        [i - 1, j + 1],
        [i - 1, j - 1],
    ]

    for (let i = 0; i < possibleCoords.length; i++) {
        const coord = possibleCoords[i];
        if (isGear(inputArr[coord[0]]?.[coord[1]])) {
            return coord;
        }
    }
}

function isGear(char) {
    return char === '*';
}

part1();
part2();