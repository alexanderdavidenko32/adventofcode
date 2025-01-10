import fs from 'fs';

(() => {
        const day = '04';

        const input0 = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

        const timeLabel = 'AOC 2023. day ' + day;
        const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;
        const input2 = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

        function part1() {
            const inputArr = input0.split('\n');
            let count = 0;

            for (let i = 0; i < inputArr.length; i++) {
                const row = inputArr[i];

                for (let j = 0; j < row.length; j++) {
                    const item = row[j];

                    // horizontal
                    if (item === 'X' && row[j + 1] === 'M' && row[j + 2] === 'A' && row[j + 3] === 'S') {
                        count++;
                    }

                    if (item === 'S' && row[j + 1] === 'A' && row[j + 2] === 'M' && row[j + 3] === 'X') {
                        count++;
                    }

                    //vertical
                    if (inputArr[i][j] === 'X' && inputArr[i + 1]?.[j] === 'M' && inputArr[i + 2]?.[j] === 'A' && inputArr[i + 3]?.[j] === 'S') {
                        count++;
                    }
                    if (inputArr[i][j] === 'S' && inputArr[i + 1]?.[j] === 'A' && inputArr[i + 2]?.[j] === 'M' && inputArr[i + 3]?.[j] === 'X') {
                        count++;
                    }

                    //diagonal
                    if (inputArr[i][j] === 'X' && inputArr[i + 1]?.[j + 1] === 'M' && inputArr[i + 2]?.[j + 2] === 'A' && inputArr[i + 3]?.[j + 3] === 'S') {
                        count++;
                    }

                    if (inputArr[i][j] === 'S' && inputArr[i + 1]?.[j + 1] === 'A' && inputArr[i + 2]?.[j + 2] === 'M' && inputArr[i + 3]?.[j + 3] === 'X') {
                        count++;
                    }

                    // diagonal 2
                    if (inputArr[i][j] === 'X' && inputArr[i + 1]?.[j - 1] === 'M' && inputArr[i + 2]?.[j - 2] === 'A' && inputArr[i + 3]?.[j - 3] === 'S') {
                        count++;
                    }

                    if (inputArr[i][j] === 'S' && inputArr[i + 1]?.[j - 1] === 'A' && inputArr[i + 2]?.[j - 2] === 'M' && inputArr[i + 3]?.[j - 3] === 'X') {
                        count++;
                    }

                }
            }

            console.log(count);
        }

        function part2() {
            const inputArr = input0.split('\n');
            let count = 0;

            for (let i = 0; i < inputArr.length; i++) {
                const row = inputArr[i];

                for (let j = 0; j < row.length; j++) {
                    if (inputArr[i][j] === 'A') {
                        if ((inputArr[i - 1]?.[j - 1] === 'M' && inputArr[i + 1]?.[j + 1] === 'S' || inputArr[i - 1]?.[j - 1] === 'S' && inputArr[i + 1]?.[j + 1] === 'M') && (inputArr[i + 1]?.[j - 1] === 'M' && inputArr[i - 1]?.[j + 1] === 'S' || inputArr[i + 1]?.[j - 1] === 'S' && inputArr[i - 1]?.[j + 1] === 'M')) {
                            count++;
                        }
                    }
                }
            }

            console.log(count);
        }

        console.time(timeLabel);
        part1();
        part2();
        console.timeEnd(timeLabel);
    }
)();
