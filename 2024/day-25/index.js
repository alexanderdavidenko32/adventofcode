import fs from 'fs';

const input = fs.readFileSync('in2.txt', 'utf8');

const inputArr = input.split('\n\n').map(item => item.split('\n').map(subItem => subItem.split('')));


function part1() {
    let result = 0;

    const [locks, keys] = parseInput(inputArr);

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        for (let j = 0; j < locks.length; j++) {
            const lock = locks[j];

            const isFit = lock.every((item, index) => item + key[index] <= 5);

            if (isFit) {
                result++;
            }
        }

    }

    console.log(result);
}

function parseInput(arr) {

    const lockArrs = arr.filter(item => item[0].every(cell => cell === '#'));
    const keyArrs = arr.filter(item => item[item.length - 1].every(cell => cell === '#'));

    const locks = getCounts(lockArrs);
    const keys = getCounts(keyArrs);

    return [locks, keys];
}

function getCounts(arr) {
    return arr.map(lock => {
        const res = [];
        for (let j = 0; j < lock[0].length; j++) {
            let count = 0;

            for (let i = 0; i < lock.length; i++) {
                if (lock[i][j] === '#') {
                    count++;
                }
            }
            res.push(count - 1);
        }

        return res;
    })
}
function part2() {
}

part1();
part2();