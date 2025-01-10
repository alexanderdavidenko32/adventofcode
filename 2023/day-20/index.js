import fs from 'fs';

const day = '20';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2023. day ' + day;


function part1() {
    let res = 0;
    const totals = {
        0: 0,
        1: 0,
    }

    const config = parseInput(input);

    for (let i = 0; i < 1000; i++) {
        pushTheButton(config, totals);
    }

    res = totals["0"] * totals["1"];
    console.log(res);
}

function parseInput(inputText) {
    const lines = inputText.split('\n');

    const res = {
        button: {
            type: 'broadcaster',
            outputs: ['broadcaster']
        },
        output: {
            type: 'output',
            outputs: []
        }
    };

    lines.map(line => {
        const [nameStr, outputsStr] = line.split(' -> ');
        const outputs = outputsStr.split(', ');

        let name;
        let type;


        if (nameStr === 'broadcaster') {
            name = nameStr;
            type = 'broadcaster';
        }

        if (nameStr[0] === '%') {
            name = nameStr.substring(1);
            type = '%';
        }

        if (nameStr[0] === '&') {
            name = nameStr.substring(1);
            type = '&';
        }

        res[name] = {
            type,
            outputs,
            isOn: false,
            memo: {}
        }
    });

    const allConjunctions = [];

    for (let name in res) {
        const module = res[name];

        if (module.type === '&') {
            allConjunctions.push(name);
        }
    }

    for (let name in res) {
        const module = res[name];

        const outputs = module.outputs;

        for (let conjunction of allConjunctions) {
            if (outputs.includes(conjunction)) {
                res[conjunction].memo[name] = 0;
            }
        }

    }

    return res

}

function pushTheButton(config, totals) {
    const queue = [['button', 0, '']]; //module, pulse, prevModule

    while (queue.length) {
        const [moduleName, pulse, prevModule] = queue.shift();

        const module = config[moduleName];

        if (!module) {
            continue;
        }
        const type = module.type;
        const outputs = module.outputs;

        if (type === 'broadcaster') {
            for (let i = 0; i < outputs.length; i++) {
                const output = outputs[i];

                queue.push([output, pulse, moduleName]);

                totals[pulse]++;
            }
        }

        if (type === '%') {
            const isOn = config[moduleName].isOn;

            if (pulse === 0) {
                const newPulse = isOn ? 0 : 1;

                for (let i = 0; i < outputs.length; i++) {
                    const output = outputs[i];

                    queue.push([output, newPulse, moduleName]);

                    totals[newPulse]++;
                }

                config[moduleName].isOn = !isOn;
            }
        }

        if (type === '&') {
            config[moduleName].memo[prevModule] = pulse;

            const isAllHigh = Object.values(config[moduleName].memo).every(item => item);

            const newPulse = isAllHigh ? 0 : 1;

            for (let i = 0; i < outputs.length; i++) {
                const output = outputs[i];

                queue.push([output, newPulse, moduleName]);

                totals[newPulse]++;
            }
        }
    }
}


function part2() {
    let res = 0;

    const config = parseInput(input);

    let finalLayer;

    for (let moduleName in config) {
        if (config[moduleName].outputs.includes('rx')) {
            finalLayer = moduleName;
        }
    }

    const semiFinalLayers = [];

    for (let moduleName in config) {
        if (config[moduleName].outputs.includes(finalLayer)) {
            semiFinalLayers.push(moduleName);
        }
    }

    const cycleLengths = [];

    let i = 0;
    while (true) {

        i++;
        pushTheButton2(config, semiFinalLayers, i, cycleLengths);

        if (semiFinalLayers.length === 0) {
            res = lcm(cycleLengths);
            break;
        }
    }

    console.log(res);
}

function pushTheButton2(config, semiFinalLayers, buttonPushNumber, cycleLengths) {
    const queue = [['button', 0, '']]; //module, pulse, prevModule

    while (queue.length) {
        const [moduleName, pulse, prevModule] = queue.shift();

        const module = config[moduleName];

        if (moduleName === 'rx' && pulse === 0) {
            return true;
        }

        if (!module) {
            continue;
        }

        const type = module.type;
        const outputs = module.outputs;

        if (type === 'broadcaster') {
            for (let i = 0; i < outputs.length; i++) {
                const output = outputs[i];

                queue.push([output, pulse, moduleName]);
            }
        }

        if (type === '%') {
            const isOn = config[moduleName].isOn;

            if (pulse === 0) {
                const newPulse = isOn ? 0 : 1;

                for (let i = 0; i < outputs.length; i++) {
                    const output = outputs[i];

                    queue.push([output, newPulse, moduleName]);
                }

                config[moduleName].isOn = !isOn;
            }
        }

        if (type === '&') {
            config[moduleName].memo[prevModule] = pulse;

            const isAllHigh = Object.values(config[moduleName].memo).every(item => item);

            const newPulse = isAllHigh ? 0 : 1;

            for (let i = 0; i < outputs.length; i++) {
                const output = outputs[i];

                queue.push([output, newPulse, moduleName]);

                const index = semiFinalLayers.indexOf(moduleName);
                if (index > -1 && newPulse === 1) {
                    cycleLengths.push(buttonPushNumber);

                    semiFinalLayers.splice(index, 1);
                }
            }
        }
    }

    return false
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcmOfTwo(a, b) {
    return (a * b) / gcd(a, b);
}

function lcm(numbers) {
    let lcm = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        lcm = lcmOfTwo(lcm, numbers[i]);
    }

    return lcm;
}


console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
