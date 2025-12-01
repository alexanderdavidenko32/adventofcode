import fs from 'fs';

(() => {
    const day = '07';

    const input1 = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

    const timeLabel = 'AOC 2024. day ' + day;

    const input = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`;

    const inputSplit = input1.split('\n').map(item => item.split(': '));

    function part1() {
        let sum = 0;

        for (let i = 0; i < inputSplit.length; i++) {
            const item = inputSplit[i];

            const inputTestValue = +item[0];
            const numbers = item[1].split(' ').map(num => +num);

            if (recursiveTotal([...numbers], 0, inputTestValue)) {
                sum += inputTestValue;
            }
        }

        console.log('part1 sum', sum);
    }

    function recursiveTotal(arr, total, target) {
        if (arr.length === 0) {
            return total === target;
        }

        const item = arr.shift();

        return recursiveTotal([...arr], total + item, target) || recursiveTotal([...arr], total * item, target);
    }

    function part2() {
        let sum = 0;

        for (let i = 0; i < inputSplit.length; i++) {
            const item = inputSplit[i];

            const inputTestValue = +item[0];
            const numbers = item[1].split(' ').map(num => +num);

            if (recursiveTotal2([...numbers], 0, inputTestValue)) {
                sum += inputTestValue;
            }
        }

        console.log('part2 sum', sum);
    }


    function recursiveTotal2(arr, total, target) {
        if (arr.length === 0) {
            return total === target;
        }

        const item = arr.shift();

        return recursiveTotal2([...arr], +`${total}${item}`, target) || recursiveTotal2([...arr], total + item, target) || recursiveTotal2([...arr], total * item, target);
    }

    console.time(timeLabel);
    part1();
    part2();
    console.timeEnd(timeLabel);

})();