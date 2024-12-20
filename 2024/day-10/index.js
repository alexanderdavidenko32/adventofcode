(() => {
    const input = `89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732`;
    const input2 = `1237651012319765432345545498010145891010
0348943105408894001056654584321036712329
9432342236717433145677723675490121903478
8541051549826522238988812106789030876569
7650760678434011032349900125699845686788
6789898730569545601456987234016768798697
4372123621078438780767076543223609894556
5201014532321029892898123456104510983045
6102306545452310121234010767040125672130
7985430696101402100765109898234534343421
8976521787210569011843210982129653254321
8907823474389678123954301011018762169870
7010910567478012335869832109800121078765
6327823498565723546778789236789630989034
5436910989367874695219654345676547876123
6785403873456965784301105654565670945210
5690342762106543287012234787654981234678
4301201659014690196543989898943272221589
5210112348323787017432170101032102100450
1290010167654896528903061232589043678321
0381201233210743434012354345672154509100
5470300344984652143023403456983893210234
6565415455675430032110512987870765210985
7432326966556721243329601070121894387876
8901457877876898358478732112434721296901
9450962340945876569569540003965780105432
2365871651232903478757651654875698987321
1671010787891212349808932787034567076670
0982107896500301256710149890123498125583
1210212783410450901223456781210321034492
0398347894323467814345069890323498503301
3457656321301556030196178765432567412212
6569845490219698123287234076781064565801
7078780185428787654876543189899873278921
8129698276538988140989812278734765103210
9234567345445679031256701345625654014765
0103216548765678120349810566010103425894
0987607239854581234569809870987912436723
1234568120123290107678712561296876543010
2109879011234103238932103450345689832123`;

    const inputArr = input2.split('\n').map(item => item.split('').map(str => +str));


    function part1() {
        const coords = getAllTrailheadsCoords(inputArr);
        let res = 0;

        for (let i = 0; i < coords.length; i++) {
            res += calculateAllTrailHeads(inputArr, coords[i], new Set());
        }

        console.log(res);
    };

    function part2() {
        const coords = getAllTrailheadsCoords(inputArr);
        let res = 0;

        for (let i = 0; i < coords.length; i++) {
            res += calculateAllTrailHeads2(inputArr, coords[i]);
        }

        console.log(res);
    };

    function getAllTrailheadsCoords(map) {
        const res = [];

        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[0].length; j++) {
                if (map[i][j] === 0) {
                    res.push([i, j]);
                }
            }
        }

        return res;
    }

    function calculateAllTrailHeads(map, currentPoint, set) {
        let res = 0;

        const [x, y] = currentPoint;

        if (map[x][y] === 9)  {
            set.add(`${x},${y}`);
            return 1;
        }

        if (map[x][y] + 1 === map[x - 1]?.[y]) {
            res += calculateAllTrailHeads(map, [x - 1, y], set);
        }

        if (map[x][y] + 1 === map[x][y + 1]) {
            res += calculateAllTrailHeads(map, [x, y + 1], set);
        }

        if (map[x][y] + 1 === map[x + 1]?.[y]) {
            res += calculateAllTrailHeads(map, [x + 1, y], set);
        }

        if (map[x][y] + 1 === map[x][y - 1]) {
            res += calculateAllTrailHeads(map, [x, y - 1], set);
        }

        // return res;
        return set.size;
    }


    function calculateAllTrailHeads2(map, currentPoint) {
        let res = 0;

        const [x, y] = currentPoint;

        if (map[x][y] === 9)  {
            return 1;
        }

        if (map[x][y] + 1 === map[x - 1]?.[y]) {
            res += calculateAllTrailHeads2(map, [x - 1, y]);
        }

        if (map[x][y] + 1 === map[x][y + 1]) {
            res += calculateAllTrailHeads2(map, [x, y + 1]);
        }

        if (map[x][y] + 1 === map[x + 1]?.[y]) {
            res += calculateAllTrailHeads2(map, [x + 1, y]);
        }

        if (map[x][y] + 1 === map[x][y - 1]) {
            res += calculateAllTrailHeads2(map, [x, y - 1]);
        }

        return res;
        // return set.size;
    }
    part1();
    part2();
})();