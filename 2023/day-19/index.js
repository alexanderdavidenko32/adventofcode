import fs from 'fs';

const input = fs.readFileSync('in1.txt', 'utf8');

const timeLabel = 'AOC 2023. day 19';


function part1() {
    let res = 0;
    const [workflows, parts] = parseInput(input);

    res = process(workflows, parts);

    console.log(res);
}

function parseInput(inputText) {
    const [workflowsStr, partsStr] = inputText.split('\n\n');

    const workflows = {}

    workflowsStr.split('\n').map(line => {
        const [name, conditionStr] = line.split('{');

        const conditionStr1 = conditionStr.replace('}', '');

        const conditionStrs = conditionStr1.split(',');

        const conditions = conditionStrs.map(condition => {
            if (condition.includes('<')) {
                const [name, valueStr] = condition.split('<');

                const [value, nextName] = valueStr.split(':');

                return {
                    checkName: name,
                    operator: '<',
                    value: +value,
                    nextName,
                }
            }

            if (condition.includes('>')) {
                const [name, valueStr] = condition.split('>');

                const [value, nextName] = valueStr.split(':');

                return {
                    checkName: name,
                    operator: '>',
                    value: +value,
                    nextName,
                }
            }

            return {
                nextName: condition,
            }
        });

        workflows[name] = conditions;
    });

    const parts = partsStr.split('\n').map(line => {
        const partObj = {};
        const newLine = line.replace('{', '').replace('}', '');

        const partsStrs = newLine.split(',');

        partsStrs.map(part => {
            const [name, value] = part.split('=');

            partObj[name] = +value;
        })

        return partObj;
    });

    return [workflows, parts];

}

function process(workflows, parts) {
    let res = 0;

    for (const part of parts) {
        res += processPart(workflows, part);
    }

    return res;
}

function processPart(workflows, part) {
    const queue = ['in'];

    while (queue.length) {
        const workflowName = queue.shift();

        if (workflowName === 'A') {
            return part.x + part.m + part.a + part.s;
        }

        if (workflowName === 'R') {
            return 0;
        }

        const conditionsResult = runConditions(workflows[workflowName], part);
        queue.push(conditionsResult);
    }
}

function runConditions(conditions, part) {
    for (const condition of conditions) {
        if (!condition.checkName) {
            return condition.nextName;
        }

        if (condition.operator === '<' && part[condition.checkName] < condition.value) {
            return condition.nextName;
        }

        if (condition.operator === '>' && part[condition.checkName] > condition.value) {
            return condition.nextName;
        }
    }
}

function part2() {
    let res = 0;
    const [workflows] = parseInput(input);
    const xmas = {
        xmin: 1,
        xmax: 4000,
        mmin: 1,
        mmax: 4000,
        amin: 1,
        amax: 4000,
        smin: 1,
        smax: 4000,
    }

    res = findDistinctCombinations(workflows, 'in', xmas);

    console.log(res);
}

function findDistinctCombinations(workflows, workflowName, xmas) {
    let res = 0;

    if (workflowName === 'R') {
        return 0;
    }

    if (workflowName === 'A') {
        return (1 + xmas.xmax - xmas.xmin) * (1 + xmas.mmax - xmas.mmin) * (1 + xmas.amax - xmas.amin) * (1 + xmas.smax - xmas.smin);
    }

    const conditions = workflows[workflowName];

    for (const condition of conditions) {
        const newXmas = {...xmas};

        if (condition.operator === '<') {
            newXmas[condition.checkName + 'max'] = Math.min(condition.value - 1, newXmas[condition.checkName + 'max']);

            res += findDistinctCombinations(workflows, condition.nextName, newXmas);

            // for the next conditions we calculate what is left
            xmas[condition.checkName + 'min'] = condition.value;
        }

        if (condition.operator === '>') {
            newXmas[condition.checkName + 'min'] = Math.max(condition.value + 1, newXmas[condition.checkName + 'min']);

            res += findDistinctCombinations(workflows, condition.nextName, newXmas);

            // for the next conditions we calculate what is left
            xmas[condition.checkName + 'max'] = condition.value;
        }

        if (!condition.operator) {
            res += findDistinctCombinations(workflows, condition.nextName, newXmas);
        }
    }

    return res;
}


console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);
