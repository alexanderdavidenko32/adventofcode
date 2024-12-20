(() => {
    const input = '125 17';
    const input1 = '0 7 198844 5687836 58 2478 25475 894';

    const inputArray = input1.split(' ');

    function part1() {
        const res = 0;

        let arr = inputArray;

        for (let i = 0; i < 25; i++) {
            arr = blink(arr);
        }

        console.log(arr.length);
    }

    function part2() {
        const res = 0;
        const cache = {};

        for (let value of inputArray) {
            cache[value] = 1;
        }

        for (let i = 0; i < 75; i++) {
            blink2(cache);
        }

        const values = Object.values(cache);
        const sum = values.reduce((prev, current) => prev + current, 0);

        console.log(sum);
    }

    function blink(array) {
        const res = [];

        for (let i = 0; i < array.length; i++) {
            const item = array[i];

            if (item === '0') {
                res.push('1');
                continue;
            }

            if (item.length % 2 === 0) {
                const half = item.length / 2;
                const substr1 = item.substring(0, half);
                const substr2 = +item.substring(half, item.length);

                res.push(substr1)
                res.push(substr2.toString());

                continue;
            }

            const power = +item * 2024;

            res.push(power.toString());
        }

        return res;
    }


    function blink2(cache) {
        const array = Object.keys(cache);
        const values = Object.values(cache);

        for (let i = 0; i < array.length; i++) {
            const item = array[i];
            const count = values[i];

            if (cache[item] === 0) {
                continue;
            }

            if (item === '0') {
                cache[1] = (+(cache[1] || 0)) + count;
                cache[0] -= count;

                continue;
            }

            if (item.length % 2 === 0) {
                const half = item.length / 2;
                const substr1 = item.substring(0, half);
                const substr2 = +item.substring(half, item.length);

                cache[substr1] = (+(cache[substr1] || 0)) + count;
                cache[substr2] = (+(cache[substr2] || 0)) + count;
                cache[item] -= count;

                continue;
            }

            const power = +item * 2024;

            cache[power] = (+(cache[power] || 0)) + count;
            cache[item] -= count;
        }
    }

    part1();
    part2();
})();