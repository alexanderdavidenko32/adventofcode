import fs from 'fs';

(() => {
    const day = '17';

    const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

    const timeLabel = 'AOC 2024. day ' + day;

    const [registerLine, programLine] = input.split('\n\n');
    let [regA, regB, regC] = registerLine.split('\n').map(line => {
        const [, reg] = line.split(': ');

        return BigInt(reg);
    })

    const [, programStr] = programLine.split(': ');
    const program = programStr


    const programArr  = program.split(',').map(item => BigInt(+item));

    function part1() {
        const out = [];
        let i = 0n;

        while (i < programArr.length) {
            const opcode = programArr[i];
            const literal = programArr[i + 1n];

            i = run(opcode, literal, out, i);
        }

        console.log(out.join())

    }

    function part2() {
        const out = [];
        let i = 0;
        let j = 0;
        let newRegA = 0n;
        let checkIndex = 1;

        regA = 0n;
        regB = 0n;
        regC = 0n;


        for (let i = 0; ; i++) {

            const res = execute().join();

            if (res.substring(res.length - checkIndex) === program.substring(program.length - checkIndex)) {

                if (res === program) {
                    console.log(newRegA);
                    return;
                }

                checkIndex += 2;
                newRegA *= 8n;

            } else {
                newRegA++;
            }

            regA = newRegA;
        }
    }

    function execute() {
        const out = [];
        let i = 0n;
        let j = 0n;

        while (i < programArr.length) {
            const lastOutLength = out.length;
            const opcode = programArr[i];
            const literal = programArr[i + 1n];

            i = run(opcode, literal, out, i);
        }

        return out;
    }

    function run(opcode, literal, out, i) {
        const combo = getCombo(literal);

        switch (opcode) {
            case 0n:
                regA = regA / (2n ** combo);
                break;
            case 1n:
                regB = regB ^ literal;
                break;
            case 2n:
                regB = combo % 8n;
                break;
            case 3n:
                if (regA === 0n) {
                    break;
                }
                return literal;
                break;
            case 4n:
                regB = regB ^ regC;
                break;
            case 5n:
                out.push(combo % 8n);
                break;
            case 6n:
                regB = regA / (2n ** combo);
                break;
            case 7n:
                regC = regA / (2n ** combo);
                break;

        }

        return i + 2n;

    }

    function getCombo(literal) {
        switch (literal) {
            case 0n:
            case 1n:
            case 2n:
            case 3n:
                return literal;
            case 4n:
                return regA;
            case 5n:
                return regB;
            case 6n:
                return regC;
            case 7n:
                throw 'wrong literal!';

        }
    }

    console.time(timeLabel);
    part1();
    part2();
    console.timeEnd(timeLabel);
})();
