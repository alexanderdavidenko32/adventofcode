import fs from 'fs';

( () => {
        const day = '03';

        const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

        const timeLabel = 'AOC 2024. day ' + day;

        const input1 = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;
        function part1() {
            let total = 0;

            input.match(/mul\((\d{1,3}),(\d{1,3})\)/g).forEach(mul => {
                    const [res,left,right] = /mul\((\d{1,3}),(\d{1,3})\)/g.exec(mul)

                    total += +left * +right;
                }
            )

            console.log(total);
        }

        function part2() {
            let total = 0;
            let tmpInput = input;
            const stack = ['do()'];

            for (let i = 0; i < input.length - 3; i++) {
                const [res,left,right] = /^mul\((\d{1,3}),(\d{1,3})\)/.exec(tmpInput) || [];
                const [doRes] = /^do\(\)/.exec(tmpInput) || [];
                const [dontRes] = /^don't\(\)/.exec(tmpInput) || [];

                if (doRes) {
                    stack.push(doRes);
                }

                if (dontRes) {
                    stack.push(dontRes);
                }

                const lastStackValue = stack[stack.length - 1];

                const isDo = lastStackValue === 'do()';

                if (res && isDo) {
                    total += +left * +right;
                }

                tmpInput = tmpInput.substring(1, tmpInput.length);

            }
            console.log(total);
        }

        console.time(timeLabel);
        part1();
        part2();
        console.timeEnd(timeLabel);
    }
)()
