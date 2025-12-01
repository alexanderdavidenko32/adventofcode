import fs from 'fs';

(() => {
    const day = '13';

    const input1 = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

    const timeLabel = 'AOC 2024. day ' + day;

    const input = `Button A: X+94, Y+34
Button B: X+22, Y+67
Prize: X=8400, Y=5400

Button A: X+26, Y+66
Button B: X+67, Y+21
Prize: X=12748, Y=12176

Button A: X+17, Y+86
Button B: X+84, Y+37
Prize: X=7870, Y=6450

Button A: X+69, Y+23
Button B: X+27, Y+71
Prize: X=18641, Y=10279`;

    const regex = /Button A: X\+(\d{1,3}), Y\+(\d{1,3})Button B: X\+(\d{1,3}), Y\+(\d{1,3})Prize: X=(\d{1,5}), Y=(\d{1,5})/ig

    const inputArr = input1.split('\n\n').map(item => {
        const split = item.split('\n');

        const btnARe = /Button A: X\+(\d{1,3}), Y\+(\d{1,3})/g;
        const btnA = btnARe.exec(item);

        const btnBRe = /Button B: X\+(\d{1,3}), Y\+(\d{1,3})/g;
        const btnB = btnBRe.exec(item);


        const targetRe = /Prize: X=(\d{1,5}), Y=(\d{1,5})/g;
        const target = targetRe.exec(item);

        return {
            A: {
                x: +btnA[1],
                y: +btnA[2]
            },
            B: {
                x: +btnB[1],
                y: +btnB[2]
            },
            target: {
                x: +target[1],
                y: +target[2]
            }
        }
    });

    function part1() {
        // console.log(inputArr);

        let tokens = 0;

        for (let i = 0; i < inputArr.length; i++) {
            tokens  += calculateMinPresses(inputArr[i]);
        }

        console.log(tokens);
    }

    function part2() {
        let tokens = 0;
        const offset = 10000000000000;

        for (let i = 0; i < inputArr.length; i++) {
            tokens  += calculateMinPresses2(inputArr[i], offset);
        }

        console.log(tokens);
    }

    function calculateMinPresses(item) {
        const d = item.A.x * item.B.y - item.B.x * item.A.y;
        const da = item.target.x * item.B.y - item.B.x * item.target.y;
        const db = item.A.x * item.target.y - item.target.x * item.A.y;
        const targetA = da / d;
        const targetB = db / d;

        if (targetA % 1 === 0 && targetB % 1 === 0) {
            return targetA * 3 + targetB;
        }

        return 0;
    }


    function calculateMinPresses2(item, offset) {
        item.target.x += offset;
        item.target.y += offset;

        const d = item.A.x * item.B.y - item.B.x * item.A.y;
        const da = item.target.x * item.B.y - item.B.x * item.target.y;
        const db = item.A.x * item.target.y - item.target.x * item.A.y;
        const targetA = da / d;
        const targetB = db / d;

        if (targetA % 1 === 0 && targetB % 1 === 0) {
            return targetA * 3 + targetB;
        }

        return 0;
    }


    console.time(timeLabel);
    part1();
    part2();
    console.timeEnd(timeLabel);
})();