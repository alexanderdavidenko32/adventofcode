import fs from 'fs';

const day = '11';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2022. day ' + day;

function part1() {
    let res;
    const monkeys = parseInput(input);

    calculateRounds(monkeys, 20);

    res = mostActive(monkeys);

    console.log(res);
}

function parseInput(inputText) {
    const monkeys = {};

    inputText.split('\n\n').map((monkeyStr) => {
        const [monkeyIdLine, startingItemsLine, operationLine, testLine, trueLine, falseLine] = monkeyStr.split('\n');

        const [, monkeyId] = monkeyIdLine.replace(':', '').split(' ');
        const [, startingItemsStr] = startingItemsLine.split('items: ');
        const startingItems = startingItemsStr.split(', ').map(Number);
        const [, operationStr] = operationLine.split('new = ');
        const operations = operationStr.split(' ');
        const [, testStr] = testLine.split(' by ');
        const test = Number(testStr);
        const [, trueMonkeyId] = trueLine.split('monkey ');
        const [, falseMonkeyId] = falseLine.split('monkey ');


        const monkey = {
            startingItems,
            operations,
            test,
            trueMonkeyId,
            falseMonkeyId,
            inspectCount: 0
        }

        monkeys[monkeyId] = monkey;
    });

    return monkeys;
}

function calculateRounds(monkeys, rounds) {
    for (let i = 0; i < rounds; i++) {
        calculateRound(monkeys);
    }
}

function calculateRound(monkeys) {
    for (let monkeyId in monkeys) {
        const monkey = monkeys[monkeyId];

        while (monkey.startingItems.length) {
            const startingItem = monkey.startingItems.shift();
            const multiplier = monkey.operations[2] === 'old' ? startingItem : Number(monkey.operations[2]);
            const operation = monkey.operations[1];

            let newItem = 0;

            if (operation === '*') {
                newItem = startingItem * multiplier;
            }

            if (operation === '+') {
                newItem = startingItem + multiplier;
            }

            newItem = Math.floor(newItem / 3);

            const passesTest = newItem % monkey.test === 0;

            if (passesTest) {
                monkeys[monkey.trueMonkeyId].startingItems.push(newItem);
            } else {
                monkeys[monkey.falseMonkeyId].startingItems.push(newItem);
            }

            monkey.inspectCount++;
        }
    }
}

function mostActive(monkeys) {
    const counts = [];

    for (let monkeyId in monkeys) {
        let monkey = monkeys[monkeyId];

        counts.push(monkey.inspectCount);
    }

    counts.sort((a, b) => b - a);

    return counts[0] * counts[1];
}

function part2() {
    let res = 0;

    const monkeys = parseInput(input);

    calculateRounds2(monkeys, 10000);

    res = mostActive(monkeys);

    console.log(res);
}

function calculateRounds2(monkeys, rounds) {
    let superModulo = 1;

    for (let monkeyId in monkeys) {
        const monkey = monkeys[monkeyId];

        superModulo *= monkey.test;
    }

    for (let i = 0; i < rounds; i++) {
        calculateRound2(monkeys, superModulo);
    }
}


function calculateRound2(monkeys, superModulo) {
    for (let monkeyId in monkeys) {
        const monkey = monkeys[monkeyId];

        while (monkey.startingItems.length) {
            let startingItem = monkey.startingItems.shift();
            const multiplier = monkey.operations[2] === 'old' ? startingItem : Number(monkey.operations[2]);
            const operation = monkey.operations[1];

            let newItem = 0;

            if (operation === '*') {
                newItem = startingItem * multiplier;
            }

            if (operation === '+') {
                newItem = startingItem + multiplier;
            }

            newItem = newItem % superModulo;

            const passesTest = newItem % monkey.test === 0;

            if (passesTest) {
                monkeys[monkey.trueMonkeyId].startingItems.push(newItem);
            } else {
                monkeys[monkey.falseMonkeyId].startingItems.push(newItem);
            }

            monkey.inspectCount++;
        }
    }
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
