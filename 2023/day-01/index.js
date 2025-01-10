import fs from 'fs';

const day = '01';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2023. day ' + day;

const inputs = input.split('\n');

function part1() {
    let sum = 0;

    for (let i = 0; i < inputs.length; i++) {
        const num = findNumber(inputs[i]);

        sum += num;
    }

    console.log(sum);
}

function findNumber(text) {
    const res = [];

    for (let i = 0; i < text.length; i++) {
        const char = parseInt(text[i]);
        if (!isNaN(char)) {
            res.push(char);
            break
        }
    }

    for (let i = text.length - 1; i >= 0; i--) {
        const char = parseInt(text[i]);
        if (!isNaN(char)) {
            res.push(char);
            break;
        }
    }

    return parseInt(res.join(''));
}

function part2() {
    let sum = 0;
    const numbersMap = {
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    }

    for (let i = 0; i < inputs.length; i++) {
        const inputStr = replaceTextNumbers(inputs[i], numbersMap);
        const num = findNumber(inputStr);

        sum += num;
    }

    console.log(sum);
}

function replaceTextNumbers(text, numbersMap) {
    let minWordIndex = text.length;
    let minReversedWordIndex = text.length;

    let minWord = 'one';
    let maxWord = 'one';

    let minNumIndex = text.length;
    let minReversedNumIndex = text.length;

    const reversedText = text.split('').reverse().join('');

    for (let word in numbersMap) {
        const reversedWord = word.split('').reverse().join('');
        const wordIndex = text.indexOf(word);
        const reversedWordIndex = reversedText.indexOf(reversedWord);

        if (wordIndex > -1 && minWordIndex > wordIndex) {
            minWordIndex = wordIndex;
            minWord = word;
        }

        if (reversedWordIndex > -1 && minReversedWordIndex > reversedWordIndex) {
            minReversedWordIndex = reversedWordIndex;
            maxWord = reversedWord;
        }
    }

    for (let i = 0; i < 10; i++) {
        const numIndex = text.indexOf(i);
        const reversedNumIndex = reversedText.indexOf(i);

        if (numIndex > -1) {
            minNumIndex = Math.min(minNumIndex, numIndex);
        }

        if (reversedNumIndex > -1) {
            minReversedNumIndex = Math.min(minReversedNumIndex, reversedNumIndex);
        }
    }

    if (minNumIndex > -1 && minWordIndex < minNumIndex) {
        text = text.replace(minWord, numbersMap[minWord]);
    }

    if (minReversedNumIndex > -1 && minReversedWordIndex < minReversedNumIndex) {
        text = text.split('').reverse().join('').replace(maxWord, numbersMap[maxWord.split('').reverse().join('')]).split('').reverse().join('');
    }

    return text;
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);