import fs from 'fs';

(() => {
    const day = '19';

    const input1 = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

    const timeLabel = 'AOC 2023. day ' + day;

    const input = `r, wr, b, g, bwu, rb, gb, br

brwrr
bggr
gbbr
rrbgbr
ubwu
bwurrg
brgr
bbrgwb`;

    const [towels, designs] = input1.split('\n\n');
    const MEMO = new Map([["", 1]]);

    function part1() {
        const towelsArr = towels.replaceAll(' ', '').split(',');
        const designsArr = designs.split('\n');
        let res = 0;

        for (let i = 0; i < designsArr.length; i++) {
            const isPossible = checkIfStringStartsWith(designsArr[i], towelsArr);

            if (isPossible) {
                res++;
            }
        }
        console.log(res);
    }

    function part2() {
        const towelsArr = towels.replaceAll(' ', '').split(',');
        const designsArr = designs.split('\n');

        const res = designsArr.map(
            design => checkIfStringStartsWith(design, towelsArr)
        );
        console.log(res.reduce((prev, curr) => prev + curr, 0));
    }


    function checkIfStringStartsWith(str, towelsArr) {
        if (MEMO.has(str)) {
            return MEMO.get(str);
        }

        let count = 0;

        for (let i = 0; i < towelsArr.length; i++) {
            const towel = towelsArr[i];

            if (str.startsWith(towel)) {
                const substr = str.slice(towel.length);

                count += checkIfStringStartsWith(substr, towelsArr);
            }
        }

        MEMO.set(str, count);
        return count;
    }

    console.time(timeLabel);
    part1();
    part2();
    console.timeEnd(timeLabel);
})();