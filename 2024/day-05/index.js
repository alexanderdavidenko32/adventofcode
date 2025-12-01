import fs from 'fs';

(() => {
    const day = '05';

    const inputRules1 = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

    const timeLabel = 'AOC 2024. day ' + day;

    const inputRules = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13`;
    const inputUpdates = `75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`;

    function part1() {
        const [inputRules0, inputUpdates0] = inputRules1.split('\n\n');
        const rawRules = inputRules0.split('\n');
        const rules = rawRules.map(rule => rule.split('|'));
        const updates = inputUpdates0.split('\n').map(update => update.split(','));

        let res = 0;

        for (let i = 0; i < updates.length; i++) {
            const update = updates[i];
            if (isValid(update, rules)) {
                const middle = Math.floor(update.length / 2)
                res += +update[middle];
            }
        }

        console.log(res);
    }

    function part2() {
        const [inputRules0, inputUpdates0] = inputRules1.split('\n\n');
        const rawRules = inputRules0.split('\n');
        const rules = rawRules.map(rule => rule.split('|'));
        const updates = inputUpdates0.split('\n').map(update => update.split(','));

        let res = 0;

        for (let i = 0; i < updates.length; i++) {
            const update = updates[i];
            if (!isValid(update, rules)) {
                const sortedUpdate = sort(update, rawRules);
                const middle = Math.floor(sortedUpdate.length / 2);
                res += +sortedUpdate[middle];
            }
        }

        console.log(res);
    }


    function isValid(update, rules) {
        for (let i = 0; i < rules.length; i++) {
            const rule = rules[i];
            const indexLeft = update.indexOf(rule[0]);
            const indexRight = update.indexOf(rule[1]);

            if (indexLeft === -1 || indexRight === -1) {
                continue;
            }

            if (indexLeft > indexRight) {
                return false;
            }
        }

        return true;
    }

    function sort(update, rawRules) {
        const res = [...update];

        res.sort((a, b) => {
            const compareRule = `${a}|${b}`;

            const indexLeft = rawRules.indexOf(compareRule);
            if (indexLeft > 0) {
                return -1;
            }

            const compareRule2 = `${b}|${a}`;
            const found = rawRules.indexOf(compareRule2);
            if (found) {
                return 1;
            }

            return 0;
        });
        return res
    }

    console.time(timeLabel);
    part1();
    part2();
    console.timeEnd(timeLabel);
})();