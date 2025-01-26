import fs from 'fs';

const day = '25';

const input = fs.readFileSync(`../inputs/${day}.txt`, 'utf8');

const timeLabel = 'AOC 2023. day ' + day;

function part1() {
    let res = 0;

    const graph = parseInput(input);

    res = getMinCut(graph);

    console.log(res);
}

function parseInput(inputText) {
    let nodes = [];
    let edges = [];
    let indexes = {};

    inputText.split('\n').forEach((str) => {
        const [left, right] = str.split(": ");
        const u = add(left, indexes, nodes);

        right.split(" ").forEach((c) => {
            const v = add(c, indexes, nodes);
            edges.push([u, v]);
        });
    });

    return { nodes, edges };
}

function add(u, indexes, nodes) {
    if (!(u in indexes)) {
        indexes[u] = nodes.length;
        nodes.push(u);
    }
    return indexes[u];
}

function getMinCut(graph) {
    const {nodes, edges} = graph;

    const V = nodes.length;
    const E = edges.length;
    let g = new Graph(V, E);
    g.edge = edges.map(([u, v]) => new Edge(u, v));

    let k = 0;
    let res;
    let components;

    while (k < 1000) {
        k++;

        [res, components] = kargerMinCut(g);

        if (res === 3) {
            break;
        }
    }

    let list = {};
    components.forEach((c) => {
        if (!(c in list)) {
            list[c] = 0;
        }

        list[c]++;
    });

    return Object.values(list).reduce((a, b) => a * b, 1);
}

// took from https://www.geeksforgeeks.org/introduction-and-implementation-of-kargers-algorithm-for-minimum-cut/
class Edge {
    constructor(s, d) {
        this.src = s;
        this.dest = d;
    }
}

class Graph {
    constructor(v, e) {
        this.V = v;
        this.E = e;
        this.edge = [];
    }
}

class subset {
    constructor(p, r) {
        this.parent = p;
        this.rank = r;
    }
}

function kargerMinCut(graph) {
    let V = graph.V;
    let E = graph.E;
    let edge = graph.edge;

    let subsets = [];

    for (let v = 0; v < V; v++) {
        subsets[v] = new subset(v, 0);
    }

    let vertices = V;

    while (vertices > 2) {
        // let i = Math.floor(Math.random() * 10) % E;
        let i = Math.floor(Math.random() * (E - 1));

        let subset1 = find(subsets, edge[i].src);
        let subset2 = find(subsets, edge[i].dest);

        if (subset1 === subset2) {
            continue;
        } else {
            // console.log("Contracting edge " + edge[i].src + "-" + edge[i].dest);
            vertices--;
            Union(subsets, subset1, subset2);
        }
    }

    let cutedges = 0;
    for (let i = 0; i < E; i++) {
        let subset1 = find(subsets, edge[i].src);
        let subset2 = find(subsets, edge[i].dest);
        if (subset1 !== subset2) {
            cutedges++;
        }
    }

    const components = new Array(V).fill(0).map((_, i) => find(subsets, i));

    return [cutedges, components];
}

function find(subsets, i) {
    if (subsets[i].parent !== i) {
        subsets[i].parent = find(subsets, subsets[i].parent);
    }
    return subsets[i].parent;
}

function Union(subsets, x, y) {
    let xroot = find(subsets, x);
    let yroot = find(subsets, y);

    if (subsets[xroot].rank < subsets[yroot].rank) {
        subsets[xroot].parent = yroot;
    } else if (subsets[xroot].rank > subsets[yroot].rank) {
        subsets[yroot].parent = xroot;
    } else {
        subsets[yroot].parent = xroot;
        subsets[xroot].rank++;
    }
}


console.time(timeLabel);
part1();
console.timeEnd(timeLabel);
