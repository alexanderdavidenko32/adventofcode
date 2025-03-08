import fs from 'fs';

const day = '16';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2022. day ' + day;

function part1() {
    let res;
    const valves = parseInput(input);

    const distances = getDistances(valves);
    const nonZeroValues = getNonZeroValues(valves);
    const rates = getRates(distances, 'AA', 30, nonZeroValues);

    res = calculateRates(rates, valves);

    console.log(res);
}

function parseInput(inputText) {
    const res = {};

    inputText.split('\n').forEach(line => {
        const [valveStr, tunnelsStr] = line.split('; ');
        const [leftValveStr, rate] = valveStr.split(' rate=');
        const [, valve] = leftValveStr.split(' ');
        const [,,,, ...valves]  = tunnelsStr.replaceAll(',', '').split(' ');

        res[valve] = {
            rate: +rate,
            valves,
            isOpen: false
        }
    });

    return res;
}

function bfs(nodes, starting, ending) {
    if (starting === ending) {
        return [starting];
    }

    const queue = [[starting]];
    const visited = [starting];

    while (queue.length) {
        let path = queue.shift();
        let node = path[path.length - 1];

        for (let nei of nodes[node].valves) {
            if (visited.includes(nei)) {
                continue;
            }

            if (nei === ending) {
                return [...path, nei];
            }

            visited.push(nei);
            queue.push([...path, nei]);
        }
    }

    return [];
}

function getDistances(valves) {
    let distances = {};

    Object.keys(valves).forEach(start => {
        Object.keys(valves).forEach(end => {
            if (!distances[start]) {
                distances[start] = {}
            }

            distances[start][end] = bfs(valves, start, end).length - 1;
        });
    });

    return distances;
}

function getNonZeroValues(valves) {
    return Object.keys(valves).filter(key => valves[key].rate > 0);
}

function getRates(distances, start, minutes, left, opened = {}) {
    const rates = [opened];

    for (let i = 0; i < left.length; i++) {
        const other = left[i];

        let newMinutes = minutes - distances[start][other] - 1;
        if (newMinutes < 1) {
            continue;
        }

        let newOpened = JSON.parse(JSON.stringify(opened));

        newOpened[other] = newMinutes;

        let newLeft = [...left];

        newLeft.splice(i, 1);
        rates.push(...getRates(distances, other, newMinutes, newLeft, newOpened));
    }

    return rates
}

function calculateRates(rates, valves) {
    return rates.map(path => {
        return Object.entries(path).reduce((acc, [key, value]) => {
            return acc + valves[key].rate * value;
        }, 0);
    }).sort((a, b) => b - a)[0];
}

function part2() {
    let res;
    const valves = parseInput(input);

    const distances = getDistances(valves);
    const nonZeroValues = getNonZeroValues(valves);
    const rates = getRates(distances, 'AA', 26, nonZeroValues);

    const maxScores = getMaxScores(valves, rates);

    res = getHighest(maxScores);

    console.log(res);
}

function getMaxScores(valves, rates) {
    let maxScores = {};

    for (let i = 0; i < rates.length; i++) {
        const rate = rates[i];

        let key = Object.keys(rate).sort().join(',');
        let score = Object.entries(rate).reduce((acc, [key, value]) => acc + valves[key].rate * value, 0);

        if (maxScores[key] == null) {
            maxScores[key] = -Infinity;
        }

        maxScores[key] = Math.max(score, maxScores[key]);
    }

    return maxScores;
}

function getHighest(maxScores) {
    let highest = -Infinity;

    Object.keys(maxScores).forEach(player => {
        Object.keys(maxScores).forEach(elephant => {
            let allValves = new Set();
            let playerList = player.split(',');

            playerList.forEach(valve => allValves.add(valve));

            let elephantList = elephant.split(',');

            elephantList.forEach(valve => allValves.add(valve));

            if (allValves.size === (playerList.length + elephantList.length)) {
                highest = Math.max(maxScores[player] + maxScores[elephant], highest);
            }
        });
    });

    return highest;
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
