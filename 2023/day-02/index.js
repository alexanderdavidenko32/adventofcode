const fs = require('fs');

const input = fs.readFileSync('in1.txt', 'utf8');

const inputs = input.split('\n');

function part1() {
    let sum = 0;
    const maxRed = 12;
    const maxGreen = 13;
    const maxBlue = 14;

    for (let i = 0; i < inputs.length; i++) {
        const game = parseGame(inputs[i]);

        if (game.red <= maxRed && game.green <= maxGreen && game.blue <= maxBlue) {
            sum += +game.id;
        }
    }

    console.log(sum);
}

function parseGame(text) {
    const game = {};

    const [gameText, gameConditionsText] = text.split(': ');
    const [,gameId] = gameText.split(' ');

    game.id = gameId;

    const gamesTexts = gameConditionsText.split('; ');

    gamesTexts.forEach((gameText) => {
        const cubesTexts = gameText.split(', ');

        cubesTexts.forEach((cubeText) => {
            const [count, color] = cubeText.split(' ');

            game[color] = Math.max(game[color] || 0, count);
        })
    })

    return game;
}

function part2() {
    let sum = 0;

    for (let i = 0; i < inputs.length; i++) {
        const game = parseGame(inputs[i]);

        sum += game.red * game.green * game.blue;
    }

    console.log(sum);
}

part1();
part2();