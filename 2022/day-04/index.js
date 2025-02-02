import fs from 'fs';

const day = '04';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2022. day ' + day;

function part1() {
    let res = 0;
    const items = parseInput(input);

    res = getCountOfOverlaps(items);

    console.log(res);
}

function parseInput(inputText) {
    return inputText.split('\n').map(line => {
        const [firstStr, secondStr] = line.split(',');
        const [fs, fe] = firstStr.split('-').map(Number);
        const [ss, se] = secondStr.split('-').map(Number);

        return [fs, fe, ss, se];
    });
}

function getCountOfOverlaps(items) {
    let res = 0;

    for (let i = 0; i < items.length; i++) {
        const [fs, fe, ss, se] = items[i];

        if (
            (fs <= ss && fe >= se) ||
            (ss <= fs && se >= fe)
        ) {
            res++;
        }
    }

    return res;
}

function part2() {
    let res = 0;
    const items = parseInput(input);


    res = getCountOfOverlapsAtAll(items);

    console.log(res);
}

function getCountOfOverlapsAtAll(items) {
    let res = 0;

    for (let i = 0; i < items.length; i++) {
        const [fs, fe, ss, se] = items[i];

        if (
            (fs <= ss && fe >= se) ||
            (ss <= fs && se >= fe) ||

            (fs <= ss && fe >= ss) ||
            (ss <= fs && se >= fs) ||

            (fe >= se && fs <= se) ||
            (se >= fe && ss <= fe)
        ) {
            res++;
        }
    }

    return res;
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
