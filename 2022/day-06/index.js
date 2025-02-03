import fs from 'fs';

const day = '06';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2022. day ' + day;

function part1() {
    let res;
    const str = parseInput(input);

    res = getStartOfAPacket(str, 4);

    console.log(res);
}

function parseInput(inputText) {
    return inputText;
}

function getStartOfAPacket(str, count) {
    for (let i = 0; i < str.length - count; i++) {
        const substr = str.substring(i, i + count);

        const set = new Set(substr);

        if (set.size === count) {
            return i + count;
        }
    }
}
function part2() {
    let res = 0;
    const str = parseInput(input);

    res = getStartOfAPacket(str, 14);

    console.log(res);
}


console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
