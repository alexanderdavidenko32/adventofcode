(() => {
    const input = `p=0,4 v=3,-3
p=6,3 v=-1,-3
p=10,3 v=-1,2
p=2,0 v=2,-1
p=0,0 v=1,3
p=3,0 v=-2,-2
p=7,6 v=-1,-3
p=3,0 v=-1,-2
p=9,3 v=2,3
p=7,3 v=-1,2
p=2,4 v=2,-3
p=9,5 v=-3,-3`;
    const input1 = `p=2,4 v=2,-3`;

    const input2 = `p=3,0 v=-2,-2
p=3,0 v=-1,-2`;

    const input3 = `p=92,72 v=-49,-72
p=51,21 v=67,-50
p=0,53 v=27,-81
p=74,99 v=47,-42
p=10,40 v=19,-8
p=69,16 v=-21,30
p=19,28 v=-86,-76
p=69,0 v=-89,-74
p=82,15 v=1,24
p=30,49 v=3,-77
p=55,67 v=80,91
p=86,21 v=22,75
p=25,0 v=-14,83
p=64,91 v=-92,80
p=7,52 v=-74,-96
p=14,88 v=91,-23
p=37,27 v=-73,19
p=69,48 v=-92,4
p=63,22 v=-52,-41
p=50,82 v=45,-36
p=15,1 v=-65,-68
p=99,31 v=-50,-69
p=90,25 v=51,-66
p=57,62 v=-38,-4
p=33,17 v=-7,5
p=85,29 v=-71,30
p=73,39 v=-99,27
p=63,14 v=34,-46
p=30,70 v=50,61
p=38,13 v=12,-50
p=2,67 v=-82,-81
p=35,37 v=16,56
p=64,70 v=-4,-85
p=7,66 v=-49,15
p=92,16 v=61,-68
p=90,7 v=-21,-82
p=55,6 v=-80,9
p=89,80 v=77,-30
p=17,100 v=11,24
p=8,2 v=19,-64
p=67,49 v=-29,-92
p=100,37 v=-53,-95
p=69,44 v=26,-59
p=33,67 v=37,44
p=31,53 v=-1,-11
p=85,69 v=-71,-92
p=15,2 v=90,-1
p=81,62 v=-20,40
p=15,41 v=32,-29
p=79,37 v=56,-8
p=29,52 v=-72,9
p=32,17 v=-77,-13
p=90,82 v=69,-67
p=65,80 v=72,-97
p=0,3 v=-99,43
p=63,8 v=67,-65
p=35,68 v=62,-63
p=37,34 v=-20,-41
p=20,46 v=3,89
p=92,99 v=15,-48
p=78,33 v=52,41
p=24,0 v=5,-40
p=70,33 v=9,38
p=83,46 v=48,-40
p=24,86 v=88,-41
p=67,70 v=15,94
p=15,52 v=38,28
p=13,39 v=-98,-69
p=22,79 v=-39,-41
p=63,28 v=59,-6
p=56,22 v=21,-57
p=62,32 v=-88,60
p=86,101 v=1,-42
p=54,81 v=4,-71
p=12,26 v=-52,90
p=99,54 v=39,11
p=34,72 v=20,-3
p=85,79 v=18,84
p=60,59 v=-51,52
p=73,12 v=13,-68
p=45,5 v=-90,-63
p=19,86 v=70,-93
p=97,83 v=-95,47
p=75,65 v=68,-30
p=95,70 v=31,-26
p=82,40 v=-8,-77
p=22,17 v=-35,86
p=50,36 v=-47,-68
p=12,44 v=-27,96
p=21,2 v=-40,-2
p=58,64 v=-46,33
p=90,61 v=-47,3
p=100,82 v=65,32
p=42,66 v=24,-81
p=13,42 v=40,8
p=66,54 v=-64,-68
p=66,27 v=52,-60
p=29,6 v=-22,-90
p=43,82 v=-21,-75
p=20,45 v=49,8
p=11,58 v=-44,-55
p=81,58 v=26,-44
p=40,70 v=-46,-32
p=59,36 v=-54,-80
p=54,27 v=46,-58
p=96,71 v=-36,10
p=59,19 v=66,-92
p=5,59 v=-98,-34
p=3,33 v=2,-69
p=34,13 v=67,72
p=52,94 v=16,-16
p=92,64 v=-87,-59
p=32,47 v=-77,55
p=60,87 v=-38,36
p=45,77 v=71,91
p=49,50 v=-46,15
p=67,87 v=76,36
p=79,30 v=1,89
p=60,23 v=30,42
p=85,4 v=-86,2
p=46,102 v=-84,65
p=7,102 v=19,87
p=84,75 v=-24,-67
p=75,51 v=81,-62
p=53,31 v=-93,1
p=48,38 v=67,82
p=91,61 v=-44,-30
p=46,50 v=12,-58
p=100,34 v=-2,36
p=86,69 v=77,-55
p=40,15 v=-33,79
p=35,90 v=54,69
p=15,61 v=45,41
p=8,49 v=59,-69
p=57,25 v=-53,95
p=39,85 v=-68,-82
p=26,31 v=-7,-61
p=28,95 v=-86,-93
p=27,31 v=-14,85
p=70,66 v=26,-81
p=83,71 v=58,-67
p=15,98 v=62,46
p=51,49 v=55,7
p=28,50 v=68,-76
p=34,27 v=-68,38
p=44,24 v=86,6
p=100,12 v=-74,-21
p=30,33 v=82,66
p=56,51 v=-34,63
p=55,32 v=42,16
p=27,88 v=7,65
p=72,9 v=-24,83
p=73,17 v=76,94
p=43,58 v=-30,33
p=85,93 v=-3,32
p=90,15 v=94,27
p=88,10 v=-72,85
p=48,89 v=8,-45
p=7,82 v=-40,-49
p=97,51 v=44,15
p=88,35 v=35,-10
p=80,66 v=98,66
p=11,3 v=-52,81
p=70,59 v=26,33
p=17,54 v=28,-99
p=61,25 v=-84,-50
p=61,67 v=-12,-77
p=76,24 v=26,42
p=1,24 v=-78,53
p=95,62 v=41,48
p=48,25 v=67,27
p=3,87 v=-11,47
p=0,1 v=-99,39
p=98,23 v=-30,-73
p=89,73 v=65,-94
p=0,70 v=6,-19
p=51,45 v=-97,89
p=42,36 v=-68,-3
p=93,21 v=40,-87
p=16,62 v=-24,-36
p=48,5 v=-13,-90
p=96,68 v=78,-45
p=96,19 v=-20,-11
p=20,64 v=-35,96
p=76,1 v=72,61
p=21,30 v=78,33
p=38,59 v=12,-81
p=44,68 v=-89,33
p=20,39 v=78,-5
p=10,42 v=95,30
p=8,46 v=2,44
p=97,4 v=-44,20
p=66,80 v=-42,78
p=86,23 v=-87,42
p=51,54 v=-55,48
p=15,96 v=-49,-3
p=37,63 v=4,-8
p=12,39 v=31,-70
p=98,3 v=98,43
p=61,1 v=24,-41
p=51,77 v=15,-24
p=6,26 v=19,16
p=49,14 v=-11,20
p=89,15 v=86,72
p=29,5 v=95,-94
p=74,8 v=-82,53
p=23,36 v=19,-29
p=0,12 v=44,-24
p=37,73 v=81,57
p=100,80 v=-45,-47
p=17,71 v=91,-63
p=75,40 v=-87,34
p=55,44 v=-17,96
p=70,54 v=18,89
p=56,67 v=84,-24
p=12,42 v=-57,13
p=57,21 v=-17,-87
p=2,96 v=-82,21
p=47,89 v=-59,2
p=19,59 v=-88,-67
p=37,3 v=16,-87
p=21,21 v=66,97
p=23,93 v=-39,10
p=48,71 v=76,3
p=20,42 v=58,83
p=84,25 v=2,27
p=35,66 v=62,-37
p=5,11 v=57,-83
p=60,71 v=-75,-96
p=43,67 v=3,-63
p=73,15 v=26,29
p=79,46 v=-41,-3
p=78,93 v=73,46
p=65,8 v=5,18
p=10,33 v=-23,67
p=93,44 v=-49,-69
p=59,71 v=-50,-33
p=70,61 v=-83,62
p=50,32 v=-3,-30
p=84,10 v=-62,13
p=86,39 v=48,-4
p=65,1 v=38,-20
p=2,3 v=-99,-42
p=60,102 v=-35,60
p=38,8 v=37,-20
p=16,70 v=-7,62
p=98,74 v=-64,-40
p=76,86 v=-69,71
p=24,51 v=-35,-4
p=5,88 v=-61,10
p=79,39 v=-20,-95
p=49,28 v=-9,-6
p=70,77 v=-63,-3
p=25,51 v=32,-62
p=63,18 v=88,1
p=58,28 v=-76,-43
p=84,45 v=-74,34
p=26,85 v=-39,-42
p=74,86 v=59,-82
p=27,28 v=-77,-14
p=88,28 v=-33,-54
p=83,15 v=-79,42
p=96,21 v=-15,-25
p=94,12 v=-70,-76
p=37,101 v=-14,-12
p=22,64 v=-27,36
p=29,75 v=-69,54
p=78,27 v=-86,-54
p=49,76 v=-42,-38
p=64,95 v=-63,-75
p=30,11 v=-63,28
p=16,96 v=57,-75
p=61,63 v=38,-26
p=24,64 v=-94,44
p=77,56 v=-93,-77
p=16,48 v=-48,-22
p=21,57 v=40,-84
p=0,26 v=-32,-76
p=33,76 v=33,18
p=59,99 v=81,32
p=26,61 v=-56,-96
p=78,34 v=52,-25
p=48,29 v=4,67
p=67,34 v=-96,24
p=86,27 v=-70,-2
p=76,80 v=-37,-1
p=39,1 v=-38,-97
p=90,97 v=-51,-5
p=62,41 v=-93,-10
p=9,69 v=-83,34
p=64,47 v=17,-91
p=80,19 v=26,-61
p=69,83 v=64,-19
p=28,77 v=-35,51
p=75,35 v=46,42
p=87,64 v=56,7
p=60,52 v=50,-40
p=68,61 v=60,18
p=34,96 v=-43,98
p=5,66 v=44,1
p=32,47 v=-69,41
p=97,67 v=60,-57
p=69,2 v=72,61
p=24,42 v=24,67
p=89,99 v=22,-34
p=84,65 v=98,-84
p=75,89 v=47,-41
p=78,29 v=-51,56
p=90,73 v=2,-63
p=43,43 v=67,-3
p=63,22 v=-88,-57
p=46,8 v=79,-67
p=49,65 v=-30,87
p=62,24 v=59,16
p=41,65 v=54,88
p=87,76 v=-36,69
p=83,70 v=48,-33
p=39,92 v=-7,-63
p=37,36 v=37,-69
p=36,47 v=88,-48
p=12,53 v=44,-85
p=47,6 v=77,71
p=62,88 v=17,-38
p=78,65 v=76,-77
p=68,97 v=82,41
p=27,71 v=63,-76
p=33,15 v=12,-35
p=83,37 v=-79,-95
p=90,55 v=26,15
p=82,7 v=-72,4
p=29,31 v=-72,64
p=92,98 v=-40,83
p=56,18 v=-72,-13
p=72,97 v=-15,91
p=1,4 v=82,83
p=59,77 v=59,-85
p=69,39 v=13,19
p=78,84 v=1,3
p=95,10 v=-79,75
p=77,66 v=-96,-8
p=65,54 v=-29,59
p=67,62 v=81,66
p=84,85 v=-62,-42
p=90,27 v=70,92
p=20,66 v=-73,58
p=31,82 v=79,-89
p=56,59 v=-21,-96
p=5,14 v=19,16
p=18,30 v=-61,-72
p=62,65 v=-23,87
p=56,17 v=-42,31
p=40,71 v=-42,22
p=63,83 v=70,-74
p=87,0 v=92,-24
p=89,50 v=-3,4
p=37,0 v=58,-20
p=65,49 v=95,-24
p=39,45 v=-47,-58
p=6,93 v=73,-64
p=40,33 v=3,37
p=46,1 v=50,-97
p=1,62 v=-88,-96
p=63,91 v=76,-97
p=18,4 v=72,-7
p=14,71 v=53,-26
p=55,51 v=-59,-77
p=44,90 v=-93,-86
p=47,75 v=89,7
p=3,34 v=-99,-91
p=10,7 v=-40,-57
p=98,102 v=-91,83
p=38,50 v=42,12
p=5,1 v=82,57
p=11,34 v=30,-21
p=34,39 v=-5,-24
p=22,9 v=-61,-35
p=73,48 v=-35,51
p=94,81 v=43,58
p=96,37 v=60,-55
p=35,4 v=70,97
p=17,21 v=-6,-61
p=35,1 v=6,-70
p=31,71 v=43,-10
p=28,97 v=56,30
p=95,71 v=-36,10
p=19,90 v=11,-23
p=16,19 v=-77,56
p=82,28 v=77,97
p=86,101 v=-58,-27
p=58,73 v=18,68
p=43,18 v=33,-17
p=64,59 v=65,77
p=9,94 v=-61,-49
p=5,3 v=44,90
p=93,61 v=-28,-77
p=15,41 v=-27,-14
p=12,100 v=-6,-23
p=94,21 v=6,35
p=67,95 v=76,-27
p=41,10 v=-51,31
p=85,54 v=-83,55
p=38,0 v=41,-53
p=69,42 v=-12,-84
p=16,74 v=89,-54
p=4,23 v=-47,-61
p=65,100 v=17,-5
p=52,101 v=-85,94
p=92,55 v=-62,-7
p=35,102 v=45,87
p=72,45 v=89,-29
p=87,20 v=18,-43
p=82,14 v=11,91
p=45,87 v=46,91
p=79,64 v=-75,66
p=85,76 v=-7,12
p=28,2 v=15,-16
p=7,31 v=-31,-18
p=28,48 v=-35,-22
p=21,11 v=37,46
p=46,40 v=4,45
p=40,24 v=14,-17
p=68,79 v=-29,69
p=49,39 v=96,70
p=59,80 v=-46,36
p=65,75 v=55,-56
p=8,53 v=32,-85
p=33,101 v=64,-87
p=75,77 v=-96,58
p=48,58 v=-9,-33
p=77,13 v=-62,-53
p=39,57 v=-98,-31
p=56,45 v=-79,-84
p=82,40 v=-83,23
p=87,69 v=81,-48
p=32,14 v=-72,-42
p=89,18 v=94,-6
p=24,64 v=75,-77
p=19,12 v=-44,-64
p=12,59 v=-93,39
p=92,6 v=-41,70
p=97,63 v=94,77
p=58,101 v=67,-16
p=12,58 v=43,44
p=35,16 v=92,20
p=36,71 v=-1,-37
p=92,0 v=-32,13
p=7,72 v=81,-81
p=85,47 v=-45,15
p=7,26 v=-40,-69
p=31,63 v=-98,-92
p=57,45 v=-73,69
p=53,76 v=-88,22
p=70,96 v=64,-4
p=48,21 v=-47,-25
p=73,28 v=93,52
p=38,71 v=-8,-19
p=18,43 v=28,-84
p=61,78 v=-46,60
p=81,41 v=69,-4
p=78,92 v=-11,-59
p=72,58 v=26,35
p=35,57 v=62,4
p=60,97 v=55,87
p=5,101 v=64,-1
p=14,102 v=-82,6
p=48,18 v=70,24
p=18,30 v=-27,-87
p=50,59 v=-58,64
p=36,7 v=25,16
p=5,47 v=-15,-73
p=78,45 v=43,-18
p=55,26 v=-13,5
p=46,102 v=-89,6
p=87,62 v=-97,43
p=42,85 v=30,-97
p=87,4 v=-62,94
p=58,23 v=34,75
p=53,93 v=-76,28
p=16,9 v=-48,-35
p=100,26 v=18,-83
p=93,9 v=42,-60
p=71,53 v=-16,96
p=17,70 v=-27,-15
p=84,19 v=-79,5
p=56,77 v=-68,84
p=29,21 v=-1,-76
p=69,19 v=-40,10
p=96,82 v=78,-1
p=74,98 v=72,-45
p=58,65 v=-17,-99
p=84,4 v=96,19
p=10,2 v=-11,-39
p=60,83 v=50,73
p=76,19 v=89,42
p=29,13 v=-68,-63
p=29,59 v=24,-19
p=10,101 v=-78,-12
p=28,80 v=-8,49
p=19,10 v=32,-86
p=31,95 v=37,87`;
    const delay = (delayInms) => {
        return new Promise(resolve => setTimeout(resolve, delayInms));
    };

    class Point {
        x;
        y;
        vx;
        vy;

        constructor(x, y, vx, vy) {
            this.x = x;
            this.y = y;
            this.vx = vx;
            this.vy = vy;
        }
    }

    const pointRe = /p=(-?\d{1,3}),(-?\d{1,3})/;
    const velocityRe = /v=(-?\d{1,3}),(-?\d{1,3})/;
    // const pre = document.querySelector('pre');

    const inputArr = input3.split('\n').map(item => {
        const [point, velocity] = item.split(' ');
        const pointParams = pointRe.exec(point);
        const velocityParams = velocityRe.exec(velocity);

        return new Point(+pointParams[1], +pointParams[2], +velocityParams[1], +velocityParams[2])
    });

    function part1() {
        const maxX = 101;
        const maxY = 103;
        const seconds = 100;

        const intersectionsArray = createEmptyArray(maxX, maxY);


        for (let i = 0; i < inputArr.length; i++) {
            calculateCoords(inputArr[i], seconds, maxX, maxY);
        }

        fillIntersectionsArray(intersectionsArray, inputArr);

        const res = calculateSafetyFactor(intersectionsArray, maxX, maxY);
        console.log(res)
    }

    async function part2() {
        const maxX = 101;
        const maxY = 103;
        let seconds = 0;
        let intersectionsArray;
        console.log('start part 2 calculation');

        let minSf = Infinity;
        let res = 0;

        while (seconds < 7765) {
            intersectionsArray = createEmptyArray(maxX, maxY);
            const inputArr = input3.split('\n').map(item => {
                const [point, velocity] = item.split(' ');
                const pointParams = pointRe.exec(point);
                const velocityParams = velocityRe.exec(velocity);

                return new Point(+pointParams[1], +pointParams[2], +velocityParams[1], +velocityParams[2])
            });

            for (let i = 0; i < inputArr.length; i++) {
                calculateCoords(inputArr[i], seconds, maxX, maxY);
            }

            fillIntersectionsArray(intersectionsArray, inputArr);

            if (hasCristmassTree(intersectionsArray)) {
                addToThePage(seconds, renderPlots(intersectionsArray));
                // console.log(renderPlots(intersectionsArray));
                // console.log(seconds, res);
                break;
                // await delay(250);
            }

            addToThePage(seconds, renderPlots(intersectionsArray));
            // console.log(renderPlots(intersectionsArray));
            seconds++;


        }

        console.log(seconds, res);
    }

    function calculateCoords(point, seconds, maxX, maxY) {
        let x = (point.x + seconds * point.vx) % maxX;
        let y = (point.y + seconds * point.vy) % maxY;

        if (x < 0) {
            x = maxX + x;
        }

        if (y < 0) {
            y = maxY + y;
        }

        point.x = x;
        point.y = y;
    }

    function calculateSafetyFactor(arr, maxX, maxY) {
        let res = 1;
        const midX = Math.floor(maxX / 2);
        const midY = Math.floor(maxY / 2);

        res *= calculateSumOfRobotsInQuadrant(arr, 0, midX, 0, midY);
        res *= calculateSumOfRobotsInQuadrant(arr, midX + 1, maxX, midY + 1, maxY);
        res *= calculateSumOfRobotsInQuadrant(arr, 0, midX, midY + 1, maxY);
        res *= calculateSumOfRobotsInQuadrant(arr, midX + 1, maxX, 0, midY);

        return res;
    }

    function calculateSumOfRobotsInQuadrant(arr, startX, endX, startY, endY) {
        let res = 0;

        for (let i = startY; i < endY; i++) {

            for (let j = startX; j < endX; j++) {
                if (arr[i][j] === 0) {
                    continue;
                }

                res += arr[i][j];
            }
        }
        return res;
    }

    function createEmptyArray(maxX, maxY) {
        const arr = [];

        for (let i = 0; i < maxY; i++) {
            const subArr = new Array(maxX).fill(0);
            arr.push(subArr);
        }

        return arr;
    }

    function fillIntersectionsArray(array, points) {
        for (let i = 0; i < points.length; i++) {
            const point = points[i];
            array[point.y][point.x]++;
        }
    }

    function renderPlots(arr) {

        return arr.map(
            item => item.join('').replaceAll('0', '.')
        ).join('\n');
    }

    function addToThePage(seconds, str) {
        // pre.innerText = seconds + '\n' + str;
    }

    function hasCristmassTree(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[0].length; j++) {
                if (arr[i][j] > 1) {
                    return false;
                }
            }
        }

        return true;
    }

    part1();
    part2();
})();