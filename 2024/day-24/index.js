import fs from 'fs';

const day = '24';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2024. day ' + day;

const [wires, logic] = input.split('\n\n');
const wiresArr = wires.split('\n').map(item => item.split(': '));

const opsRe = /(.*?) (AND|OR|XOR) (.*)/
const logicArr = logic.split('\n').map(item => {
    const [ops, target] = item.split(' -> ');
    const opsRes = opsRe.exec(ops);

    return [
        opsRes[1],
        opsRes[2],
        opsRes[3],
        target,
    ]
});



function part1() {
    const wiresMap = fillWiresMap({}, wiresArr);

    const stack = [...logicArr];

    while (stack.length) {
        const item = stack.shift();

        const op1 = item[0];
        const op2 = item[2];
        const operation = item[1];

        const target = item[3];

        if (wiresMap[op1] === undefined || wiresMap[op2] === undefined) {
            stack.push(item);
            continue;
        }

        let calcResults;

        if (operation === 'AND') {
            calcResults = wiresMap[op1] && wiresMap[op2];
        }

        if (operation === 'OR') {
            calcResults = wiresMap[op1] || wiresMap[op2];
        }

        if (operation === 'XOR') {
            calcResults = wiresMap[op1] ^ wiresMap[op2];
        }

        wiresMap[target] = calcResults;
    }

    const result = getResult(wiresMap);
    const convertedResult = parseInt(result, 2);
    console.log(convertedResult);
}

function fillWiresMap(map, wiresArr) {
    for (let i = 0; i < wiresArr.length; i++) {
        const wire = wiresArr[i];
        map[wire[0]] = +wire[1];
    }

    return map;
}

function getResult(resultsMap) {
    const results = [];

    for (let key in resultsMap) {
        if (key.startsWith('z')) {
            results.push([key, resultsMap[key]]);
        }
    }
    results.sort((a, b) => {
        return parseInt(b[0].replace('z', '')) - parseInt(a[0].replace('z', ''))
    });

    return results.reduce((acc, curr) => acc + curr[1].toString(), '');
}

function part2() {
    const instructions = logicArr.map(item => ({
        first: item[0],
        operation: item[1],
        second: item[2],
        target: item[3],
    }))
    const incorrect = [];
    for (let i = 0; i < 45; i++) {
        const id = i.toString().padStart(2, '0');

        const xorInstr = instructions.find(instr => ((instr.first === `x${id}` && instr.second === `y${id}`) || (instr.second === `x${id}` && instr.first === `y${id}`)) && instr.operation === `XOR`);
        const andInstr = instructions.find(instr => ((instr.first === `x${id}` && instr.second === `y${id}`) || (instr.second === `x${id}` && instr.first === `y${id}`)) && instr.operation === `AND`);
        const zInstr = instructions.find(instr => instr.target === `z${id}`);

        if (xorInstr === undefined || andInstr === undefined || zInstr === undefined) {
            continue;
        }

        // each z must be connected to an XOR
        if (zInstr.operation !== 'XOR') {
            incorrect.push(zInstr.target);
        }

        // each AND must go to an OR (besides the first case as it starts the carry flag)
        const orInstr = instructions.find(instr => instr.first === andInstr.target || instr.second === andInstr.target);

        if (orInstr !== undefined && orInstr.operation !== 'OR' && i > 0) {
            incorrect.push(andInstr.target);
        }

        // the first XOR must go to XOR or AND
        const after = instructions.find(instr => instr.first === xorInstr.target || instr.second === xorInstr.target);

        if (after !== undefined && after.operation === 'OR') {
            incorrect.push(xorInstr.target);
        }
    }

    // each XOR must be connected to an x, y, or z
    incorrect.push(...instructions.filter(instr => !instr.first[0].match(/[xy]/g) && !instr.second[0].match(/[xy]/g) && !instr.target[0].match(/[z]/g) && instr.operation === 'XOR').map(instr => instr.target));

    const res = incorrect.sort().join(',');

    console.log(res);
}

console.time(timeLabel);
part1();
part2();
console.timeEnd(timeLabel);