const fs = require('fs');

const input = fs.readFileSync('in1.txt', 'utf8');

const inputArr = input.split('\n\n');

function part1() {
    let res = [];
    const memo = {};

    const [seeds, maps] = parseAlmanac(inputArr);

    for (let i = 0; i < seeds.length; i++) {
        const dest = getMapValue(maps, seeds[i], 0, memo);
        res.push(dest);
    }

    console.log(Math.min(...res));
}

function parseAlmanac(inputArr) {
    const seeds = inputArr[0].split(': ')[1].split(' ').map(item => +item);

    const maps = [];
    for (let i = 1; i < inputArr.length; i++) {
        const map = [];

        const [mapHeader, mapText] = inputArr[i].split(':\n');
        mapText.split('\n').forEach((item) => {
            map.push(item.split(' ').map(i => +i));
        })
        maps.push(map);
    }
    return [seeds, maps];
}

function getMapValue(mapArr, source, level, memo) {
    const map = mapArr[level];

    if (level > mapArr.length - 1) {
        return source;
    }

    const key = `${source},${level}`;
    if (memo[key]) {
        return memo[key];
    }

    for (let i = 0; i < map.length; i++) {
        const [destinationStart, sourceStart, range] = map[i];

        if (source >= sourceStart && source < sourceStart + range) {
            const diff = source - sourceStart;
            const res = getMapValue(mapArr, destinationStart + diff, level + 1, memo);
            memo[key] = res;
            return res;
        }
    }

    const res = getMapValue(mapArr, source, level + 1, memo);
    memo[key] = res;
    return res;
}

function part2() {
    const [seeds, maps] = parseAlmanac(inputArr);
    const seedRanges = getSeedRanges(seeds);

    const maps1 = [...maps].reverse();
    const memo = {};

    const seedsFound = [];

    for (let level = 6; level >= 0; level--) {
        for (let i = 0; i < maps1[level].length; i++) {
            const [location] = maps1[level][i];

            const seed = getMapValueInversed(maps1,  location, level, memo);

            if (isSeedPresent(seed, seedRanges)) {
                seedsFound.push(seed);
            }
        }
    }

    const res = []

    for (let i = 0; i < seedsFound.length; i++) {
        const dest = getMapValue(maps, seedsFound[i], 0, memo);
        res.push(dest);
    }

    console.log(Math.min(...res));
}


function getMapValueInversed(mapArr, destination, level, memo) {
    const map = mapArr[level];

    if (level > mapArr.length - 1) {
        return destination;
    }

    for (let i = 0; i < map.length; i++) {
        const [destinationStart, sourceStart, range] = map[i];

        if (destination >= destinationStart && destination < destinationStart + range) {
            const diff = destination - destinationStart;
            return getMapValueInversed(mapArr, sourceStart + diff, level + 1, memo);

        }
    }

    return getMapValueInversed(mapArr, destination, level + 1, memo);
}

function getSeedRanges(seeds) {
    const ranges = [];

    for (let i = 0; i < seeds.length; i+=2) {
        const seed = seeds[i];
        const range = seeds[i + 1];
        ranges.push([seed, seed + range]);
    }

    return ranges;
}

function isSeedPresent(seed, seedRanges) {
    return seedRanges.some(([start, end]) => start <= seed && seed <= end);
}

console.time('AOC 2023. day 05');
part1();
part2();
console.timeEnd('AOC 2023. day 05');
