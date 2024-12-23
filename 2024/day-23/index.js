const fs = require('fs');

const input = fs.readFileSync('in2.txt', 'utf8');

const inputArr = input.split('\n').map(item => item.split('-'));

function part1() {
    const graph = createGraph(inputArr)

    const [groups, res] = getGroups(graph);
    console.log(res);
}

function createGraph(inputArr) {
    const res = {};

    for (let i = 0; i < inputArr.length; i++) {
        const [left, right] = inputArr[i];

        res[left] = [...(res[left] || []), right];
        res[right] = [...(res[right] || []), left];
    }

    return res;
}

function getGroups(graph) {
    const set = new Set();
    let res = 0;

    for (let key in graph) {
        for (let key1 of graph[key]) {
            for (let key2 of graph[key1]) {
                if (key === key2) {
                    continue;
                }

                if (graph[key2].includes(key)) {
                    const arr = [key, key1, key2];
                    arr.sort();

                    const item = `${arr[0]},${arr[1]},${arr[2]}`;

                    if (!set.has(item) && arr.some(item => item.startsWith('t'))) {
                        res++;
                    }

                    set.add(item);
                }
            }
        }
    }

    return [set, res];
}

function part2() {
    const graph = createGraph(inputArr)

    const res = findMaxClique(graph);
    console.log(res);
}


function findMaxClique(connections) {
    let maxClique = [];
    function bronKerbosch(R, P, X) {
        if (P.length === 0 && X.length === 0) {
            if (R.length > maxClique.length) {
                maxClique = [...R];
            }
            return;
        }
        const pivot = Array.from(P.length ? P : X)[0];
        const pivotNeighbors = connections[pivot];

        for (const v of P) {
            if (!pivotNeighbors.includes(v)) {
                const vNeighbors = connections[v];
                bronKerbosch(
                    [...R, v],
                    [...P].filter(n => vNeighbors.includes(n)),
                    [...X].filter(n => vNeighbors.includes(n))
                );
                delete P[v];
                X.push(v);
            }
        }
    }
    bronKerbosch(
        [],
        Object.keys(connections),
        []
    );
    return maxClique.sort().join(',');
}

part1();
part2();