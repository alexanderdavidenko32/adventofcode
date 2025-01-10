import fs from 'fs';

(() => {
    const day = '02';

    const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

    const timeLabel = 'AOC 2023. day ' + day;

    const input1 = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

    const input3 = `43 43 44 45 48 48 51 51
60 64 67 68 71 72 73 72
26 33 34 36 38 45 44
99 99 97 94 90 87 85 88`;

    console.time(timeLabel);

    const array = input.split('\n');

    let res = array.filter(row => {
        const rowArray = row.split(' ').map(item => +item);

        if (isSafe(rowArray)) {
            return true;
        }
    });

    console.log(res.length);

     res = array.filter(row => {
        const rowArray = row.split(' ').map(item => +item);

        if (isSafe(rowArray)) {
            return true;
        } else {
            for (let i = 0; i < rowArray.length; i++) {
                const copy = [...rowArray].filter((item, index) => index !== i);
                const isSafeSubArray = isSafe(copy);

                if (isSafeSubArray) {
                    return true
                }
            }

            return false;
        }
    });

    console.log(res.length);

    function isSafe(array) {
        const diffs = [];

        for (let i = 0; i < array.length - 1; i++) {
            const diff = array[i] - array[i + 1];

            diffs.push(diff);
        }

        return diffs.every(item => item > -4 && item < 0) || diffs.every(item => 0 < item && item < 4);
    }

    console.timeEnd(timeLabel);
})();