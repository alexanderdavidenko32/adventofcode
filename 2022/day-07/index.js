import fs from 'fs';

const day = '07';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2022. day ' + day;

function part1() {
    let res;
    const commands = parseInput(input);

    const fs = runCommands(commands);

    calculateSizes(fs);
    res = getSizesMax(fs, 100000);

    console.log(res);
}

function parseInput(inputText) {
    return inputText.split('\n').map((line) => line.split(' '));
}

function runCommands(commands) {
    const fs = {};

    let currentDir = fs;

    for (const command of commands) {
        if (command[0] === '$') {
            if (command[1] === 'cd') {
                if (currentDir[command[2]]) {
                    currentDir = currentDir[command[2]]
                }
            }
            if (command[1] === 'ls') {
                continue;
            }
            continue;
        }

        if (command[0] === 'dir') {
            currentDir[command[1]] = {
                '..': currentDir
            }

            continue;
        }

        currentDir['files'] = currentDir['files'] || [];
        if (!currentDir['files'].find(item => item.name === command[1])) {
            currentDir['files'].push({
                size: +command[0],
                name: command[1]
            });
        }
    }

    return fs;
}

function calculateSizes(dir) {
    const dirSize = dir.files?.reduce((prev, file) => {
        return prev  + file.size;
    }, 0) || 0;

    const nestedSizes = [];

    for (let subDirName in dir) {
        if (subDirName === '..' || subDirName === 'files') {
            continue;
        }

        nestedSizes.push(calculateSizes(dir[subDirName]));
    }

    dir.totalDirSize = dirSize + nestedSizes.reduce((prev, curr) => prev + curr, 0);

    return dir.totalDirSize;
}

function getSizesMax(dir, max) {
    const queue = [dir];
    let res = 0;

    while (queue.length) {
        const currentDir = queue.shift();

        if (currentDir.totalDirSize <= max) {
            res += currentDir.totalDirSize;
        }

        for (let subDirName in currentDir) {
            if (subDirName === '..' || subDirName === 'files' || subDirName === 'totalDirSize') {
                continue;
            }

            queue.push(currentDir[subDirName]);
        }
    }

    return res;
}

function part2() {
    let res = 0;
    const commands = parseInput(input);

    const fs = runCommands(commands);

    calculateSizes(fs);

    const expectedFreeSize = 70000000 - fs.totalDirSize;
    const maxSize = 30000000 - expectedFreeSize

    const dirs = getDirsWithSizeGreater(fs, maxSize);

    res = getSmallestDirSize(dirs);

    console.log(res);
}


function getDirsWithSizeGreater(dir, max) {
    const queue = [dir];
    let res = [];

    while (queue.length) {
        const currentDir = queue.shift();

        if (currentDir.totalDirSize >= max) {
            res.push(currentDir);
        }

        for (let subDirName in currentDir) {
            if (subDirName === '..' || subDirName === 'files' || subDirName === 'totalDirSize') {
                continue;
            }

            queue.push(currentDir[subDirName]);
        }
    }

    return res;
}

function getSmallestDirSize(dirs) {
    return dirs.sort((a, b) => a.totalDirSize - b.totalDirSize)[0].totalDirSize;
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
