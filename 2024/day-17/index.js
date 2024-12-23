(() => {
    // let regA = 729;
    // let regB = 0;
    // let regC = 0;
    // const program = '0,1,5,4,3,0';

    /// part1
    let regA = 18427963n;
    let regB = 0n;
    let regC = 0n;
    const program = '2,4,1,1,7,5,0,3,4,3,1,6,5,5,3,0';

    // let regA = 0;
    // let regA = 117440;
    // let regB = 0;
    // let regC = 0;
    // const program = '0,3,5,4,3,0';

// Register A: 2024
// Register B: 0
// Register C: 0

// Program: 0,3,5,4,3,0

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

    part1();
    part2();
})();
