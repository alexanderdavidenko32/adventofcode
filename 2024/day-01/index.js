import fs from 'fs';

(() => {
    const day = '01';

    const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

    const timeLabel = 'AOC 2023. day ' + day;

    console.time(timeLabel);

    const firstArr = [];
    const secondArr = [];
    const secondArrMap = {};
    const initialArr = input.split('\n').forEach(item => {
        const tmp = item.split('   ');

        firstArr.push(tmp[0]);
        secondArr.push(tmp[1]);
        secondArrMap[tmp[1]] = (secondArrMap[tmp[1]] || 0) + 1;
    });

    firstArr.sort();
    secondArr.sort();

    let res1 = 0;
    let res2 = 0;
    for (let i = 0; i < firstArr.length; i++) {
        res1 += Math.abs(firstArr[i] - secondArr[i]);
        res2 += firstArr[i] * (secondArrMap[firstArr[i]] || 0);
    }

    console.log(res1);
    console.log(res2);

    console.timeEnd(timeLabel);
})();