import fs from 'fs';

(() => {
        const day = '09';

        const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

        const timeLabel = 'AOC 2024. day ' + day;
        const input1 = `2333133121414131402`;

        class Node {
            id;
            value;

            constructor(id, value) {
                this.id = id;
                this.value = value;
            }

            toString() {
                return this.id;
            }
        }

        function part1() {
            const arr = [];

            for (let i = 0; i < input.length; i++) {
                const item = +input[i];
                if (i % 2 !== 0) {
                    for (let j = 0; j < item; j++) {
                        arr.push(new Node('.','.'));
                    }
                } else {
                    for (let j = 0; j < item; j++) {
                        arr.push(new Node(i / 2,item));
                    }
                }
            }

            let i = 0;
            let j = arr.length - 1;

            while (i < j) {
                if (arr[i].id !== '.') {
                    i++;
                    continue;
                }

                if (arr[j].id === '.') {
                    j--;
                    continue;
                }

                if (arr[i].id === '.' && arr[j].id !== '.') {
                    const tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                }
            }

            console.log(calculateSum(arr));
        }

        function part2() {
            const arr = [];

            for (let i = 0; i < input.length; i++) {
                const item = +input[i];
                if (i % 2 !== 0) {
                    arr.push(new Node('.',item));
                } else {
                    arr.push(new Node(i / 2,item));
                }
            }

            for (let i = arr.length - 1; i >= 0; i--) {
                const {id, value} = arr[i];

                if (id === '.') {
                    continue;
                }

                const newPosition = getNewPosition(arr, arr[i], i);

                if (newPosition === -1) {
                    continue;
                }

                arr[i].id = '.';
                arr[newPosition].value -= value;
                arr.splice(newPosition, 0, new Node(id,value));
            }

            console.log(calculateSum2(arr));
        }

        function getNewPosition(arr, item, index) {
            for (let i = 0; i < index; i++) {
                if (arr[i].id === '.' && arr[i].value >= item.value) {
                    return i;
                }
            }

            return -1;
        }

        function calculateSum(array) {
            let sum = 0;

            for (let i = 0; i < array.length; i++) {
                const item = array[i];

                if (item.id === '.') {
                    continue;
                }

                sum += i * item.id;
            }

            return sum;
        }

        function calculateSum2(array) {
            let res = 0;
            let realIndex = 0;

            const arr2 = array.filter(item => item.value > 0);

            for (let i = 0; i < arr2.length; i++) {
                const item = arr2[i];

                if (item.id === '.') {
                    realIndex += item.value;
                    continue;
                }

                for (let j = 0; j < item.value; j++) {
                    res += item.id * (realIndex + j);
                }

                realIndex += item.value;
            }

            return res;
        }

        function arrayToString(array) {
            let res = '';

            for (let i = 0; i < array.length; i++) {
                const item = array[i];

                for (let j = 0; j < item.value; j++) {
                    res += item.id;
                }
            }

            return res;
        }

        console.time(timeLabel);
        part1();
        part2();
        console.timeEnd(timeLabel);

    }
)();
