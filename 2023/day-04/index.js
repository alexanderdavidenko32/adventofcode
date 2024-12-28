const fs = require('fs');

const input = fs.readFileSync('in1.txt', 'utf8');

const inputArr = input.split('\n');

function part1() {
    let sum = 0;


    const cards = parseCards(inputArr);

    for (let i = 0; i < cards.length; i++) {
        const cardSum = calculateCardSum(cards[i]);

        sum += cardSum;
    }

    console.log(sum);
}

function parseCards(inputArr) {
    const cards = inputArr.map(item => {
        const [cardIdText, numsText] = item.split(': ');

        const [winningNumsText, yourNumsText] = numsText.split(' | ');
        const winningNums = winningNumsText.split(' ').filter(num => num !== '').map(num => +num);
        const yourNums = yourNumsText.split(' ').filter(num => num !== '').map(num => +num);

        return [winningNums, yourNums];
    });

    return cards;
}

function calculateCardSum(card) {
    const [winningNums, yourNums] = card;

    const winningSet = new Set([...winningNums]);
    const yourSet = new Set([...yourNums]);

    const intersection = winningSet.intersection(yourSet);

    if (!intersection.size) {
        return 0;
    }
    return 2 ** (intersection.size - 1);
}

function calculateCardCount(card) {
    const [winningNums, yourNums] = card;

    const winningSet = new Set([...winningNums]);
    const yourSet = new Set([...yourNums]);

    const intersection = winningSet.intersection(yourSet);

    return intersection.size;
}
function part2() {
    const cardMap = {};


    const cards = parseCards(inputArr);

    for (let i = 0; i < cards.length; i++) {
        const cardSum = calculateCardCount(cards[i]);

        const cardId = i + 1;
        if (cardSum) {
            cardMap[cardId] = (cardMap[cardId] || 0) + 1;

            for (let j = 1; j <= cardSum; j++) {
                cardMap[cardId + j] = (cardMap[cardId + j] || 0) + cardMap[cardId];
            }
        } else {
            cardMap[cardId] = (cardMap[cardId] || 0) + 1;
        }
    }

    const sum = Object.values(cardMap).reduce((acc, cur) => acc + cur, 0);
    console.log(sum);
}


part1();
part2();