(() => {
    const input = `............
........0...
.....0......
.......0....
....0.......
......A.....
............
............
........A...
.........A..
............
............`;
    const input1 = `.....................U.........w..................
l.................................................
...........o.a................U...w...............
............................................W.....
..........T....................s.............7....
.............................................W....
.........T..............4....n.d.H.........5......
......T.....oj...U.....n...w......H...........z...
.G..x..........................E.....V..H.........
.........a....................d....s.......7w.....
...j....r.............o.............V.......d...W.
.......r..J.Goa.U...............n................z
.........Jj.........M..........Pv.................
...J...........t..3..M..............sLV...........
...................t................n.............
....r...........X...........M........v............
...x....t......I......a.PM...............W........
...........1.Bj....I........vO.h.dL...............
.........6....Rr......B...X........h..5v.L..z.....
......1G...........x.....3B.......5...............
.................B....0..........4..E.............
.....................X.....5..h....P....f.....D...
.......1........J.....eK..........................
..................I....R....K...........k.........
......G..................O........................
...........H...9...............K8.P.4..k..E.......
............1....3.............8.F.............f..
.........................4........................
.l...........X............9.......................
....N.................R...t.e.....................
...g............3..R.........e....h.........f.....
...........................e......i...............
................2...I.7..9..O.....s.........k.....
....................6...9E.............F..O.......
........................KN........................
.......g......................Z.........F..f...Y..
...........................A....i.................
...........6g...b........8.......y.....S..........
..l.....6.....m...............8...................
....u..m...b...............p...A..................
..............b.p........................k........
....m......2...........Z..y....i..................
........g2.....b.........i....D..ZF...............
......2.0...........p............N..........A.....
...m.............S...y........A...Z...N...........
..S..l..........................................Y.
........S....0u.................y......DY.........
...........0.........................D............
.................u...................p...Y........
.......u..........................................`;

    const inputArr = input1.split('\n').map(item => item.split(''));
    const inputArr2 = input1.split('\n').map(item => item.split(''));

    function part1() {
        const map = fillAntennasMap();
        const set = new Set();
        const maxX = inputArr.length - 1;
        const maxY = inputArr[0].length - 1;

        for (antenna in map) {
            const item = map[antenna];

            while (item.length > 1) {
                for (let i = 1; i < item.length; i++) {
                    const coords = calculateAntinodePositions({
                        x: item[0][0],
                        y: item[0][1]
                    }, {
                        x: item[i][0],
                        y: item[i][1]
                    });

                    if (isInField(coords[0], maxX, maxY)) {
                        set.add(`${coords[0].x},${coords[0].y}`);
                        inputArr2[coords[0].x][coords[0].y] = '#'
                    }

                    if (isInField(coords[1], maxX, maxY)) {
                        set.add(`${coords[1].x},${coords[1].y}`);
                        inputArr2[coords[1].x][coords[1].y] = '#'
                    }
                }

                item.shift();
            }
        }
        console.log(inputArr2.map(item => item.join('')).join('\n'));
        console.log(set.size);
    }

    function part2() {
        const map = fillAntennasMap();
        const set = new Set();
        const maxX = inputArr.length - 1;
        const maxY = inputArr[0].length - 1;

        for (antenna in map) {
            const item = map[antenna];

            while (item.length > 1) {
                for (let i = 1; i < item.length; i++) {
                    const deltaX = item[0][0] - item[i][0];
                    const deltaY = item[0][1] - item[i][1];

                    const position = [{
                        x: item[0][0],
                        y: item[0][1]
                    }, {
                        x: item[i][0],
                        y: item[i][1]
                    }];

                    while (isInField(position[0], maxX, maxY)) {
                        set.add(`${position[0].x},${position[0].y}`);

                        inputArr2[position[0].x][position[0].y] = '#';
                        position[0] = {
                            x: position[0].x + deltaX,
                            y: position[0].y + deltaY
                        }

                    }


                    while (isInField(position[1], maxX, maxY)) {
                        set.add(`${position[1].x},${position[1].y}`);
                        inputArr2[position[1].x][position[1].y] = '#';
                        position[1] = {
                            x: position[1].x - deltaX,
                            y: position[1].y - deltaY
                        }

                    }
                }

                item.shift();
            }
        }
        console.log(inputArr2.map(item => item.join('')).join('\n'));
        console.log(set.size);
    }

    function fillAntennasMap() {
        const map = {};

        for (let i = 0; i < inputArr.length; i++) {
            for (let j = 0; j < inputArr[0].length; j++) {
                const item = inputArr[i][j];

                const isAntenna = item !== '.';

                if (isAntenna) {
                    if (map[item]) {
                        map[item].push([i, j]);
                    } else {
                        map[item] = [[i,j]];
                    }
                }
            }
        }

        return map;
    }

    function calculateAntinodePositions(a, b) {
        const deltaX = b.x - a.x;
        const deltaY = b.y - a.y;
        const antinode1 = { x: a.x - deltaX, y: a.y - deltaY };
        const antinode2 = { x: b.x + deltaX, y: b.y + deltaY };

        return [antinode1, antinode2];
    }

    function isInField(coords, maxX, maxY) {
        if (coords.x < 0 || coords.y < 0 || coords.x > maxX || coords.y > maxY) {
            return false;
        }

        return true;
    }

    part1();
    part2();
})();