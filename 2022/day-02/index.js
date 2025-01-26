import fs from 'fs';

const day = '02';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2022. day ' + day;

function part1() {
    let res = 0;
    const winMap = createWinMap();
    const game = parseInput(input);

    res = getTotal(game, winMap);

    console.log(res);
}

function parseInput(inputText) {
    return inputText.split('\n').map(line => line.replace(' ', ''));
}

function createWinMap() {
    const playerOne = 'ABC';
    const playerTwo = {
        X: 1,
        Y: 2,
        Z: 3,
    };

    const res = {}

    for (const p1 of playerOne) {
        for (const p2 in playerTwo) {
            let result = 0;
            const selected = playerTwo[p2];

            // rock
            if (p1 === 'A') {
                //rock
                if (p2 === 'X') {
                    result = 3 + selected;
                }

                //paper
                if (p2 === 'Y') {
                    result = 6 + selected;
                }

                //scissors
                if (p2 === 'Z') {
                    result = 0 + selected;
                }
            }

            // paper
            if (p1 === 'B') {
                //rock
                if (p2 === 'X') {
                    result = 0 + selected;
                }

                //paper
                if (p2 === 'Y') {
                    result = 3 + selected;
                }

                //scissors
                if (p2 === 'Z') {
                    result = 6 + selected;
                }
            }

            // scissors
            if (p1 === 'C') {
                //rock
                if (p2 === 'X') {
                    result = 6 + selected;
                }

                //paper
                if (p2 === 'Y') {
                    result = 0 + selected;
                }

                //scissors
                if (p2 === 'Z') {
                    result = 3 + selected;
                }
            }

            res[`${p1}${p2}`] = result;
        }
    }

    return res;
}

function getTotal(game, winMap) {
    let res = 0;

    for (let play of game) {
        res += winMap[play];
    }

    return res;
}

function part2() {
    let res = 0;

    const winMap = createWinMap2();
    const game = parseInput(input);

    res = getTotal(game, winMap);

    console.log(res);
}

function createWinMap2() {
    const playerOne = 'ABC';
    const playerTwo = {
        X: 0,
        Y: 3,
        Z: 6,
    };
    const rock = 1;
    const paper = 2;
    const scissors = 3;

    const res = {}

    for (const p1 of playerOne) {
        for (const p2 in playerTwo) {
            let result = 0;
            const selected = playerTwo[p2];

            // rock
            if (p1 === 'A') {
                //loose
                if (p2 === 'X') {
                    result = scissors + selected;
                }

                //draw
                if (p2 === 'Y') {
                    result = rock + selected;
                }

                //win
                if (p2 === 'Z') {
                    result = paper + selected;
                }
            }

            // paper
            if (p1 === 'B') {
                //loose
                if (p2 === 'X') {
                    result = rock + selected;
                }

                //draw
                if (p2 === 'Y') {
                    result = paper + selected;
                }

                //win
                if (p2 === 'Z') {
                    result = scissors + selected;
                }
            }

            // scissors
            if (p1 === 'C') {
                //loose
                if (p2 === 'X') {
                    result = paper + selected;
                }

                //draw
                if (p2 === 'Y') {
                    result = scissors + selected;
                }

                //win
                if (p2 === 'Z') {
                    result = rock + selected;
                }
            }


            res[`${p1}${p2}`] = result;
        }
    }

    return res;
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
