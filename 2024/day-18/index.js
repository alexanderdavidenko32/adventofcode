(() => {
    const input = `5,4
4,2
4,5
3,0
2,1
6,3
2,4
1,5
0,6
3,3
2,6
5,1
1,2
5,5
2,5
6,5
1,4
0,4
6,4
1,1
6,1
1,0
0,5
1,6
2,0`;

    const input1 = `5,17
11,27
21,9
67,26
54,57
11,32
10,11
55,47
35,20
13,3
23,7
58,41
63,68
5,30
59,70
41,70
10,23
68,61
11,39
47,57
14,5
5,13
35,1
37,3
65,45
50,49
67,37
9,5
17,12
10,35
39,10
35,10
35,22
9,31
11,41
65,69
33,15
3,19
69,19
7,5
63,54
6,43
14,9
17,38
5,33
12,47
32,15
11,19
5,35
61,35
41,68
69,35
56,59
69,68
69,18
22,11
19,13
1,13
10,49
15,9
7,34
55,56
25,8
9,35
53,57
57,43
1,21
69,20
1,12
6,33
45,65
65,29
2,39
61,69
67,65
49,54
67,31
54,69
29,23
63,49
33,21
41,17
11,26
41,66
65,51
3,6
66,69
1,20
69,36
52,47
42,5
39,67
13,43
57,68
16,13
31,12
47,66
23,20
7,25
43,65
17,21
5,41
1,11
51,60
69,42
68,21
28,11
21,18
26,9
9,8
3,31
3,24
15,10
6,47
63,43
53,59
61,55
57,67
69,55
61,22
43,54
3,3
3,9
4,3
7,39
51,51
49,48
5,23
69,54
65,43
7,31
7,0
32,1
47,64
39,69
67,47
21,21
69,47
15,16
50,61
69,22
37,1
26,11
53,69
17,17
12,43
68,27
11,36
49,47
1,7
47,69
5,6
66,49
61,51
18,21
59,56
61,63
62,67
23,1
6,1
11,18
33,9
33,1
69,38
60,53
12,9
51,57
3,11
21,5
3,38
45,63
69,39
57,60
16,9
15,24
2,21
53,44
61,65
49,61
54,53
40,5
11,38
7,20
14,1
43,67
24,1
65,27
13,44
33,10
25,11
67,51
10,1
25,15
62,65
9,25
44,67
51,47
3,17
12,23
9,16
18,23
40,19
36,19
61,59
9,11
11,17
47,6
69,25
17,11
47,59
64,41
13,27
59,49
25,12
15,17
24,13
39,9
8,33
39,1
6,41
63,58
13,25
58,47
1,43
69,50
53,67
69,21
9,45
59,67
49,67
65,57
5,10
29,7
55,66
14,27
19,19
9,37
26,15
63,63
3,7
13,17
4,41
67,67
35,15
21,31
53,49
41,63
21,8
37,19
63,67
16,23
52,43
5,27
49,46
8,37
11,11
3,23
54,65
28,5
29,1
38,17
61,57
45,64
4,31
5,7
64,61
7,10
12,5
6,3
35,4
33,8
7,35
1,15
63,48
47,46
13,39
69,44
22,1
18,15
5,22
70,27
2,3
45,68
13,13
39,16
54,61
7,3
37,65
23,13
68,53
65,67
43,51
14,41
51,56
51,55
41,9
43,70
65,59
60,65
56,67
1,31
51,63
56,69
68,67
33,11
61,41
24,9
55,58
15,19
4,45
3,28
11,9
62,49
53,53
28,3
39,53
15,1
28,9
9,13
31,17
13,42
67,68
3,34
57,40
28,23
6,5
59,57
7,9
3,43
49,53
44,53
11,31
69,59
9,6
5,45
67,57
10,25
31,20
9,19
1,9
33,66
53,39
53,48
69,27
10,3
46,39
45,43
61,39
53,46
11,15
31,10
19,15
15,36
9,39
46,55
16,1
43,69
5,8
19,21
11,2
57,48
5,3
47,54
47,63
27,27
33,6
27,1
59,62
1,1
45,52
59,55
13,12
13,4
67,60
55,63
61,58
45,51
17,5
51,52
41,69
1,5
48,61
31,15
34,29
69,41
5,14
56,63
36,1
7,26
61,38
48,51
65,28
62,31
58,53
50,69
14,33
0,43
15,40
19,11
10,13
31,1
58,35
13,14
5,25
17,3
47,45
8,13
17,33
63,40
21,2
35,3
30,23
33,19
15,44
33,7
17,1
11,7
19,2
19,8
6,25
65,44
65,47
33,3
1,4
15,11
39,28
63,52
32,7
14,3
69,66
41,15
1,39
35,26
5,15
64,39
2,5
65,55
69,49
55,48
63,60
19,24
25,21
1,33
69,61
39,5
7,18
9,27
12,31
15,13
43,53
59,60
1,18
4,19
45,59
60,67
18,3
45,60
37,4
65,46
1,23
53,43
23,3
16,19
65,41
69,23
33,69
5,36
67,43
61,46
25,9
9,30
17,7
39,24
13,11
49,69
35,9
13,37
69,64
4,13
30,15
67,59
7,22
66,63
67,34
43,57
15,35
64,65
9,22
7,15
31,19
10,39
35,21
35,5
17,19
29,9
7,21
67,46
21,27
43,56
3,20
53,47
15,5
67,28
3,29
64,55
12,11
54,63
17,14
11,23
51,45
49,45
25,5
41,21
15,6
57,55
59,59
13,1
7,43
36,15
25,1
7,37
39,14
69,57
2,9
1,14
11,3
10,9
33,64
69,69
23,4
4,23
21,20
32,25
47,55
57,63
58,57
17,16
19,10
11,5
51,70
66,19
22,5
41,14
1,35
48,67
25,7
15,15
15,18
63,59
67,38
49,59
11,43
14,17
17,9
60,41
56,57
57,69
47,56
67,41
47,65
15,30
69,63
68,49
15,43
12,15
3,45
65,24
1,8
39,19
47,58
9,43
3,30
61,67
53,68
41,18
51,42
50,45
13,38
41,19
63,53
3,35
1,34
69,30
45,57
62,29
4,11
69,51
30,1
16,21
50,65
35,7
59,53
11,21
27,3
4,27
63,44
45,21
46,51
51,67
60,63
49,56
56,43
39,13
9,23
15,7
27,9
43,20
27,6
45,61
29,61
61,52
51,53
69,58
6,37
19,1
29,13
35,55
53,61
67,29
1,17
62,61
39,23
57,47
67,62
10,15
39,2
35,2
67,42
14,21
59,45
23,5
11,45
66,57
30,19
62,55
69,65
7,29
67,45
5,39
52,67
63,69
23,32
31,5
13,15
64,51
41,61
47,68
5,26
29,14
42,51
1,41
9,41
69,29
15,3
31,7
51,50
35,11
12,17
53,63
21,32
62,43
11,1
56,51
65,22
57,45
37,9
17,27
9,33
64,63
45,67
65,21
3,39
30,17
16,7
61,60
65,65
29,3
70,31
7,38
20,1
25,6
55,50
20,25
28,17
29,17
21,1
1,32
69,67
33,2
27,7
43,5
24,21
8,41
54,43
1,19
55,61
16,43
52,59
48,63
34,5
13,32
57,41
37,13
42,61
66,39
49,63
66,51
1,44
9,7
64,57
62,63
1,48
7,11
4,33
10,33
53,52
27,11
4,7
29,5
1,37
63,51
30,9
47,53
35,12
37,5
31,13
7,13
44,47
32,17
65,66
53,50
53,41
69,24
58,67
49,57
12,37
7,40
13,8
60,55
69,52
13,20
68,57
51,64
67,35
23,16
53,45
68,33
67,63
35,16
9,42
67,69
1,16
64,47
61,49
65,53
21,11
8,19
49,39
9,15
47,51
45,69
1,29
6,31
7,19
12,21
7,23
47,67
2,25
51,69
8,31
5,21
29,0
9,9
19,17
45,47
33,23
31,9
69,31
57,57
59,61
21,7
51,54
35,8
4,35
41,55
67,48
68,63
33,13
55,43
4,39
63,39
21,3
69,46
60,47
24,5
53,60
47,60
7,41
41,65
9,17
7,1
57,54
43,58
41,51
17,13
55,42
39,58
41,67
37,14
37,67
19,5
28,7
21,12
7,8
19,25
69,33
13,19
17,41
1,2
19,4
45,55
35,17
48,49
66,21
2,27
37,6
22,23
18,11
17,25
64,69
1,38
67,25
7,16
65,42
8,45
3,1
35,65
69,37
69,43
65,63
9,3
25,18
50,67
32,13
11,35
19,12
9,1
67,24
63,50
7,12
13,31
4,17
45,58
0,7
10,19
67,36
55,69
31,11
55,41
1,36
19,3
3,27
59,65
57,61
61,61
49,65
29,11
37,24
51,58
9,21
15,41
61,21
30,7
2,15
7,14
27,2
69,40
60,35
65,39
56,45
14,13
53,40
13,7
62,39
17,6
15,25
1,45
22,25
65,33
19,18
5,9
57,62
23,11
42,65
58,45
59,63
23,10
69,45
61,24
5,43
39,0
19,9
38,3
58,65
0,29
33,17
53,51
55,67
25,13
55,65
17,23
49,51
46,69
8,3
15,21
39,66
7,28
2,11
62,45
29,15
52,65
4,1
18,7
63,55
5,19
3,42
14,23
13,23
67,55
63,65
57,64
66,65
67,54
55,59
11,6
7,24
5,37
54,37
27,18
65,61
0,25
69,56
53,65
67,27
57,65
3,5
41,54
25,19
50,43
36,7
7,7
34,13
67,21
35,13
59,69
60,57
31,4
1,27
32,5
26,3
1,22
6,17
2,31
9,29
19,23
67,30
12,1
43,55
55,49
5,11
8,9
63,41
1,25
66,15
70,47
59,38
10,41
1,40
44,65
16,3
21,13
30,3
28,25
24,23
31,3
33,25
3,37
27,5
11,37
39,15
55,46
1,3
45,62
34,15
45,7
62,69
65,37
3,25
45,56
67,44
49,43
67,23
26,1
5,16
67,17
51,41
59,42
2,43
3,33
49,41
39,21
51,49
9,4
29,21
33,5
3,21
11,13
5,1
65,49
63,57
51,62
3,41
66,59
67,32
16,69
51,0
3,60
69,7
27,63
29,55
54,27
37,53
1,63
21,23
40,57
27,20
25,69
41,13
53,26
43,41
49,13
22,29
35,59
56,1
66,1
15,54
47,33
49,27
31,36
21,29
17,48
45,37
19,45
39,26
39,17
33,42
37,33
1,55
47,31
7,49
29,39
26,21
17,57
47,41
25,35
13,55
25,58
18,65
39,11
11,69
27,41
37,25
50,35
64,33
55,7
43,45
42,47
31,31
5,53
15,39
47,48
67,11
23,67
17,64
7,45
69,10
3,53
12,63
41,39
67,6
36,27
19,47
35,19
8,47
37,17
55,23
7,33
31,49
59,3
46,17
51,27
17,56
11,68
40,45
48,17
46,3
25,43
43,33
57,5
7,59
38,11
36,35
46,41
55,11
21,15
53,27
33,48
31,58
49,58
29,49
19,27
57,8
24,59
48,29
28,55
12,61
50,13
63,61
42,57
65,16
31,51
59,14
31,55
21,41
17,43
31,56
12,49
1,65
25,63
35,38
17,35
27,57
39,50
25,68
59,21
47,20
25,62
67,14
55,57
42,3
45,36
59,27
37,49
39,55
8,55
40,51
24,67
47,3
52,13
35,54
19,31
26,39
57,6
25,3
43,18
53,33
46,21
55,29
23,17
59,33
45,53
45,25
31,28
6,49
5,70
56,25
11,57
19,58
53,21
49,26
59,23
63,23
43,7
43,50
21,35
36,55
35,39
59,13
51,12
33,37
25,49
20,69
34,31
25,53
42,31
5,52
1,69
33,31
55,53
51,61
47,39
63,9
53,15
2,57
36,41
53,23
15,62
57,51
3,59
25,27
55,31
63,3
49,19
29,25
3,49
4,57
5,64
1,53
5,63
5,65
55,19
15,60
57,33
27,17
33,45
39,48
17,36
41,7
17,67
15,31
17,39
40,55
46,25
29,46
22,57
37,50
21,53
9,55
37,69
35,69
38,29
63,12
22,61
40,27
66,7
35,29
59,19
61,26
59,29
15,64
67,53
60,13
2,51
51,31
11,59
59,37
16,39
23,56
31,33
30,67
63,19
43,11
69,12
57,23
48,35
21,36
65,35
41,49
39,29
61,3
49,23
43,31
25,54
61,31
33,38
60,37
29,53
36,65
37,68
7,53
10,55
56,21
17,26
29,41
2,69
45,2
31,52
44,19
48,25
49,40
63,22
39,37
67,19
63,33
53,3
7,64
29,31
19,63
19,33
23,61
10,45
27,59
39,27
35,47
69,1
28,65
19,44
47,15
7,61
69,13
14,59
43,21
7,68
60,17
55,38
19,55
19,65
41,16
65,17
65,13
15,50
5,5
37,41
59,7
49,38
70,5
21,65
4,65
46,33
41,42
61,23
47,9
9,69
5,46
9,68
65,23
59,50
46,11
11,58
53,37
37,61
33,53
19,7
61,1
51,13
8,51
40,39
43,10
48,43
37,58
67,3
23,33
7,47
57,25
50,9
21,42
35,66
47,24
43,30
63,18
49,7
65,9
63,4
22,47
11,66
8,65
25,56
39,8
45,17
33,61
20,67
15,67
19,29
20,61
43,28
13,65
65,31
13,57
59,39
31,25
13,49
27,26
31,29
62,9
39,36
27,13
61,8
11,70
50,3
45,31
50,39
31,50
51,20
67,39
43,47
57,21
57,11
36,43
3,13
23,53
49,25
27,25
23,47
69,2
21,43
59,28
17,65
43,24
27,61
42,15
11,60
45,23
59,22
37,23
21,63
22,7
67,7
29,27
39,43
65,1
33,49
21,59
43,36
61,47
34,35
31,23
43,29
5,47
60,33
33,55
46,43
17,34
41,31
12,67
52,21
53,36
58,1
43,12
55,18
64,25
27,47
2,47
49,8
5,66
55,35
31,30
31,69
21,25
32,29
14,39
3,68
20,7
23,36
47,49
41,6
55,9
15,61
67,4
37,11
21,51
35,27
28,21
43,43
18,53
13,41
9,51
55,3
24,35
69,15
5,60
51,11
25,44
37,48
52,33
54,31
15,33
15,69
59,41
36,47
67,15
69,53
7,67
33,56
13,67
29,24
22,65
39,64
21,57
45,39
59,32
5,31
37,36
67,5
35,45
58,25
40,61
23,40
64,37
47,38
23,59
46,45
31,27
45,33
10,29
19,36
55,55
45,26
52,7
38,53
33,62
27,49
35,60
3,63
45,3
44,41
31,64
27,45
63,25
69,11
25,25
23,26
39,45
57,7
23,30
27,33
19,51
23,45
54,7
61,5
5,59
23,15
25,26
49,17
33,54
45,50
67,1
11,61
49,34
59,47
35,67
61,2
53,5
48,11
67,12
24,29
17,60
25,37
37,21
59,5
41,59
0,55
35,33
29,60
23,63
65,0
56,15
21,39
43,60
61,13
9,52
59,11
9,49
23,31
22,15
12,29
60,21
19,61
7,51
63,5
35,50
40,3
41,1
63,35
39,63
9,44
37,29
13,53
14,69
6,53
61,45
55,37
58,19
41,24
31,61
12,25
29,52
32,61
63,17
49,6
30,43
31,63
33,20
11,65
57,27
35,23
27,23
28,45
16,53
15,47
23,52
37,55
51,33
51,29
39,59
41,3
63,37
49,5
37,70
61,17
53,35
49,3
41,12
7,69
65,19
23,25
40,35
45,38
61,33
33,22
1,58
9,53
27,67
17,62
69,16
30,27
43,6
43,39
49,33
1,61
63,30
63,11
39,61
23,65
17,63
61,7
21,19
49,55
45,13
21,50
19,39
27,55
31,26
15,57
33,24
49,37
53,34
52,9
41,44
17,42
55,25
39,12
11,54
11,64
41,57
49,49
3,55
25,29
54,21
15,63
39,46
46,31
26,69
45,45
53,1
23,62
25,59
13,29
21,22
27,65
49,32
41,47
39,7
56,29
21,28
3,69
43,27
67,9
32,47
13,9
34,41
61,29
37,27
35,64
65,10
25,45
66,53
55,21
55,15
65,5
61,11
20,47
41,27
45,4
14,47
51,19
32,39
11,25
23,69
59,4
15,49
41,5
19,70
51,35
44,23
39,3
25,31
1,49
15,34
24,65
51,59
47,27
1,67
43,23
10,47
56,3
57,3
27,14
1,54
33,67
57,19
43,9
9,60
32,35
41,35
15,26
21,33
47,10
29,57
26,45
39,20
47,23
33,33
0,51
23,34
51,36
41,37
9,59
9,67
41,64
57,28
54,1
63,21
26,23
41,26
53,4
37,56
19,66
29,43
25,60
34,51
18,29
69,5
27,53
56,13
47,22
45,41
27,69
39,41
37,7
31,57
27,35
27,43
64,7
51,9
2,65
45,35
61,53
50,25
7,63
35,41
57,35
15,53
30,55
23,18
48,41
37,15
33,63
31,39
47,61
63,34
7,58
41,30
47,11
28,41
23,38
11,20
23,41
24,51
32,43
43,40
4,49
29,32
38,9
27,32
45,16
43,49
49,11
43,61
31,45
65,4
47,29
8,49
5,58
37,47
23,21
17,55
27,34
13,54
50,17
51,37
39,25
19,53
17,30
21,40
63,13
57,12
39,68
11,55
51,5
42,35
57,36
21,69
7,17
55,24
13,35
37,40
55,4
41,23
5,51
13,61
50,29
31,65
29,59
39,47
9,65
23,37
13,46
29,45
1,57
39,33
69,3
37,60
43,17
17,59
20,29
28,63
27,37
23,19
29,69
25,23
14,57
64,9
53,55
21,49
49,29
55,40
5,54
21,37
61,42
11,49
1,47
58,11
41,11
29,47
53,29
52,31
31,35
27,56
30,63
13,47
39,35
27,66
23,29
33,35
19,57
3,56
4,69
35,44
37,38
29,33
17,51
49,15
23,48
54,13
64,31
51,39
17,15
25,52
34,47
39,30
3,57
33,58
25,42
13,33
33,41
31,62
44,5
35,57
25,47
55,5
43,44
7,60
53,31
47,14
65,7
1,66
17,37
37,43
43,22
43,26
17,53
14,67
56,23
55,20
29,40
62,1
63,15
29,65
32,51
51,7
63,47
1,59
11,53
35,52
53,19
24,37
17,32
29,67
12,57
31,44
37,26
24,43
31,32
49,21
39,65
15,45
22,67
37,63
16,45
23,55
63,27
11,63
51,15
33,57
9,63
20,45
14,29
26,51
43,15
43,38
47,4
30,41
52,39
37,62
46,35
39,32
53,25
3,67
28,69
23,27
9,61
38,45
45,28
44,9
66,31
5,29
43,59
37,35
50,31
19,49
37,31
59,20
57,15
19,26
25,61
63,36
63,31
17,61
33,47
11,51
26,49
15,59
16,51
25,30
38,41
43,32
35,58
49,2
60,29
31,60
51,25
10,67
57,31
59,1
13,69
51,1
26,65
10,59
27,28
17,69
43,42
31,59
3,65
20,63
49,31
20,15
47,0
35,43
21,55
57,16
37,44
45,19
18,33
25,51
3,51
49,18
19,40
13,62
45,27
25,33
21,52
56,11
67,13
49,35
67,61
55,10
55,1
53,54
61,15
43,25
31,53
19,54
7,50
25,55
49,1
36,31
41,43
8,57
37,51
27,29
39,39
33,59
22,69
53,13
35,25
64,15
27,15
40,53
20,17
50,23
65,26
13,56
62,3
17,68
63,6
29,68
25,39
54,35
66,35
61,6
33,18
34,45
41,46
11,28
54,23
41,38
27,54
45,9
43,63
11,52
69,9
47,7
17,31
45,1
53,2
61,16
27,19
51,17
23,43
7,55
44,33
43,19
27,21
35,68
13,63
47,8
35,49
15,65
51,10
25,24
13,51
61,10
36,11
16,57
35,63
57,30
31,66
23,51
26,59
19,67
35,61
26,37
57,59
31,47
68,9
20,55
64,19
23,23
45,8
55,8
5,49
53,17
31,22
43,3
45,5
35,31
24,47
11,50
55,51
21,47
47,13
34,39
48,13
63,29
17,45
47,28
38,65
52,25
39,51
7,66
47,43
65,15
47,17
67,33
34,57
55,13
41,10
15,29
31,43
55,45
29,37
47,47
40,59
31,67
18,51
13,45
37,22
59,31
21,45
14,35
29,48
9,62
13,52
45,18
25,65
25,16
22,55
39,22
42,21
58,15
22,13
35,53
19,59
28,29
18,49
57,38
17,66
9,57
58,7
19,62
21,61
50,21
18,41
37,52
23,35
1,51
54,15
39,62
25,64
52,17
14,49
63,28
57,1
53,18
41,34
65,3
31,21
19,43
57,26
17,29
47,35
57,17
20,31
33,43
65,25
19,37
52,5
30,33
20,35
28,37
21,17
53,7
27,42
28,13
57,9
23,46
6,67
28,49
31,37
45,12
16,47
35,36
53,30
15,37
63,45
57,18
37,59
36,29
21,67
34,69
29,19
63,1
39,57
7,62
3,61
22,43
32,69
23,39
19,41
20,51
59,17
50,5
60,25
43,37
7,44
67,18
5,69
63,20
59,25
61,18
57,13
53,16
35,24
47,21
48,21
35,37
29,50
41,40
45,29
5,57
45,14
57,29
41,25
61,37
7,57
61,9
43,13
49,52
69,8
29,38
23,9
15,27
47,5
33,65
56,53
18,19
39,31
5,67
69,17
55,33
32,33
29,63
1,64
51,65
35,35
51,43
29,58
22,59
2,53
41,53
37,37
59,51
17,28
23,49
47,19
5,62
31,46
53,9
17,49
25,67
33,29
43,62
68,13
53,10
27,39
7,27
17,47
59,15
16,27
61,27
33,26
43,2
52,1
11,67
33,39
47,25
35,51
31,41
19,69
61,43
53,11
41,45
18,45
21,34
51,14
68,5
28,53
4,55
61,19
53,28
47,1
18,47
3,46
19,38
41,29
27,30
11,47
64,13
25,40
43,35
23,50
62,15
39,49
42,1
57,37
41,8
24,15
45,30
66,11
42,49
50,27
45,11
29,44
3,50
68,1
56,5
28,59
13,5
15,23
57,53
33,51
13,59
55,17
60,11
27,31
16,59
57,39
63,7
18,57
21,54
19,35
2,61
57,49
62,19
65,11
5,55
5,61
29,34
41,33
21,38
30,69
65,2
9,26
60,3
59,35
51,23
52,23
60,9
59,30
7,65
59,48
67,49
57,44
62,13
37,39
19,60
3,62
31,40
51,3
9,47
62,25
57,34
45,48
26,33
60,51
33,27
3,15
35,62
37,18
35,32
37,57
43,1
14,65
9,56
51,21
29,29
27,62
21,64
37,45
61,25
25,17
45,49
35,34
23,57
51,38
27,51
0,61
38,55
11,33
49,16
49,30
3,47
25,57
55,39
39,42
44,45
15,51
26,47
38,33
57,32
15,55
27,36
39,34
59,6
41,41
49,9
48,3
47,37
59,43
59,9
62,35
11,29
29,51
43,14
25,41
29,35
45,15
13,21
55,32
55,27
32,38
2,8
24,44
38,66
56,2
14,8
1,56
34,64
62,70
66,52
66,43
52,68
2,18
52,60
19,56
53,42
26,2
8,15
6,13
50,28
53,20
26,43
10,62
37,30
8,42
56,49
44,7
38,58
38,60
62,60
0,50
4,53
67,2
54,66
6,18
52,0
37,66
14,50
22,49
30,44
24,58
27,52
20,21
14,66
23,44
46,4
21,48
38,64
18,42
50,55
56,27
4,8
18,43
12,68
2,54
45,54
12,62
4,66
13,68
6,4
41,56
8,44
5,24
47,50
30,37
70,40
22,66
17,46
12,42
7,36
8,58
26,24
28,16
28,47
24,49
45,24
55,26
33,36
30,70
12,35
27,24
23,64
2,40
0,21
15,2
64,8
54,5
19,46
6,48
26,31
22,58
20,32
36,25
68,31
53,24
20,19
54,45
12,24
30,11
16,66
36,10
49,62
61,70
50,22
62,5
3,54
52,70
64,2
30,22
20,59
61,32
62,44
6,38
33,50
10,40
36,33
6,54
42,22
44,25
44,26
2,24
38,46
42,39
52,61
4,60
26,29
18,66
13,36
34,46
24,38
10,70
47,70
67,50
42,16
65,8
8,48
58,10
8,64
34,52
58,20
36,21
46,40
8,38
70,42
8,46
0,49
28,68
20,2
18,38
33,46
4,62
53,12
2,30
21,26
12,13
48,22
56,20
52,69
20,30
30,16
30,61
8,24
28,6
64,17
32,0
30,35
69,70
54,22
0,34
19,48
66,5
40,67
49,20
46,18
45,20
38,61
36,24
44,55
25,46
68,10
33,68
56,0
9,20
10,64
34,37
0,22
0,1
8,60
4,0
56,32
50,63
24,40
66,47
37,34
54,50
57,58
67,8
32,59
20,43
5,0
68,2
50,46
42,52
56,41
23,24
14,2
23,22
30,31
16,44
34,44
48,42
10,8
36,44
30,59
2,22
53,32
48,26
38,31
17,22
8,32
1,24
68,7
40,2
12,66
16,56
45,46
11,24
59,44
54,8
54,49
29,66
29,22
57,4
46,27
62,57
23,68
30,66
56,52
70,53
30,48
26,48
54,33
23,28
34,70
38,59
10,58
34,34
18,24
34,33
48,70
32,52
14,16
10,37
8,63
13,22
11,56
8,6
44,59
18,10
30,68
14,60
35,46
52,30
12,4
35,42
65,52
16,37
60,70
7,54
61,56
15,48
31,68
18,34
14,20
0,54
46,30
41,52
68,6
48,36
11,22
15,52
1,52
60,43
8,8
42,25
46,44
70,44
43,34
27,64
4,54
6,24
42,63
24,12
14,19
11,42
24,45
46,9
66,10
44,40
26,61
36,37
58,8
16,38
22,38
57,20
32,20
60,4
68,62
56,47
19,68
11,14
12,58
46,63
54,70
57,70
25,34
14,52
4,9
24,54
54,17
54,0
19,50
36,40
4,47
18,35
18,58
42,19
46,10
0,23
51,66
16,25
40,46
25,66
56,22
4,28
54,47
9,32
36,56
28,60
36,38
48,19
6,68
11,62
38,63
70,33
28,22
10,60
48,52
40,31
46,52
16,64
32,44
44,68
11,4
22,44
30,49
9,54
33,16
2,37
8,4
17,58
30,47
23,42
20,20
54,6
0,17
32,57
1,68
54,28
58,6
14,24
15,12
52,6
30,24
24,20
36,53
36,61
0,48
2,67
70,8
54,42
19,22
54,38
12,6
15,22
70,51
5,34
56,38
4,30
66,70
58,4
20,70
66,54
68,52
6,44
32,42
49,66
4,48
9,70
10,14
32,27
38,56
56,39
42,27
64,52
29,64
42,8
56,4
68,0
1,42
20,66
36,50
68,28
44,49
48,32
8,59
10,21
9,66
0,67
34,50
52,55
12,45
26,63
54,25
25,2
49,36
56,18
26,50
38,8
42,43
0,44
42,67
7,4
12,26
14,6
68,11
40,58
52,40
0,24
70,58
41,58
14,32
24,50
33,44
36,34
14,12
18,12
29,36
32,66
48,24
26,52
38,47
26,54
55,36
2,59
44,61
60,42
6,22
36,39
5,12
24,19
57,0
40,21
22,22
15,4
51,8
15,8
24,17
2,56
27,10
68,56
42,9
53,6
3,66
4,38
32,56
68,38
16,31
70,9
8,36
32,34
50,20
63,2
64,11
60,49
40,62
6,40
14,7
35,14
18,2
12,18
5,28
18,40
36,58
34,10
60,32
5,20
45,40
18,36
18,16
28,64
55,14
61,0
38,10
10,5
38,36
4,20
4,22
50,52
20,65
70,19
62,36
57,42
38,54
68,16
55,6
16,6
6,30
36,66
47,34
70,17
30,2
46,56
12,10
16,11
7,42
53,66
16,52
56,19
28,38
16,60
32,46
34,4
44,39
6,63
2,46
48,1
52,11
3,4
44,50
58,31
4,67
14,54
32,23
56,64
36,48
36,62
20,28
66,33
18,64
32,45
6,35
42,66
60,54
40,42
6,21
70,13
50,36
40,16
64,23
6,69
42,54
60,22
49,0
52,32
50,44
64,27
0,60
36,54
24,4
55,12
2,66
48,7
70,28
18,13
70,52
6,26
60,69
26,44
35,56
53,14
56,66
15,20
70,25
0,5
22,50
22,45
65,34
54,67
30,45
61,12
8,34
9,64
24,18
20,18
34,67
15,56
2,13
17,10
26,35
21,62
20,60
4,68
70,67
26,62
52,4
3,58
6,8
53,38
55,16
55,60
33,52
66,0
48,33
51,30
60,12
6,16
67,40
30,62
12,3
14,34
40,47
7,6
52,26
22,24
34,66
43,68
42,32
50,40
5,68
28,36
22,21
16,26
40,6
31,54
40,14
28,58
36,6
36,60
65,12
19,42
38,25
18,63
22,51
54,58
6,50
34,53
20,50
0,31
20,38
10,52
38,51
65,58
25,4
70,50
0,2
10,20
54,16
70,66
51,2
50,19
6,39
20,14
4,37
45,22
3,2
16,0
54,2
28,2
68,19
20,57
29,8
14,68
38,50
2,42
5,50
22,62
36,23
67,22
40,17
19,32
58,68
26,14
61,36
65,70
30,5
8,68
70,69
28,18
58,3
51,16
50,54
43,48
8,21
64,6
0,45
33,0
41,36
46,34
1,46
34,2
20,40
40,32
34,61
47,18
65,50
20,0
64,36
54,64
50,33
37,10
0,32
56,30
21,16
38,16
50,14
9,14
54,39
4,58
10,2
48,8
43,4
58,21
47,44
56,58
20,39
4,34
36,57
44,8
48,57
5,2
50,48
36,68
48,27
70,45
59,2
2,19
62,37
65,40
33,4
10,61
48,58
42,34
42,42
16,29
40,18
25,22
18,26
48,4
48,20
34,63
21,24
16,70
42,69
47,16
41,60
68,32
62,21
36,51
60,68
68,12
44,2
4,5
44,16
23,60
38,35
12,70
48,56
46,22
2,28
24,53
60,39
6,11
56,12
66,4
66,26
46,32
55,52
18,14
38,32
38,15
57,50
37,54
16,68
63,32
29,28
46,62
10,27
7,48
45,42
60,0
24,34
62,4
38,34
42,60
12,60
52,42
67,10
22,17
30,30
26,22
62,38
44,36
0,13
46,19
58,18
42,18
6,62
44,31
50,37
49,70
68,42
2,68
68,47
41,28
6,61
22,53
36,69
32,21
2,64
64,50
56,16
32,58
54,56
70,39
60,59
64,18
22,20
47,52
68,65
62,56
2,63
52,34
34,16
20,13
26,7
10,42
46,14
27,48
10,54
52,48
70,10
59,36
12,27
58,54
68,66
24,60
4,4
22,16
40,64
6,29
60,19
26,20
32,62
32,26
13,24
38,44
24,39
59,12
34,19
6,45
19,16
30,8
5,56
24,14
7,32
55,34
36,28
10,32
45,32
40,37
6,7
40,66
44,0
26,57
52,28
16,67
38,4
29,18
42,50
64,21
31,18
39,18
62,58
58,38
54,34
66,27
8,52
47,2
6,15
59,16
2,26
8,22
58,46
32,24
46,1
40,40
30,42
68,37
26,16
50,4
60,56
68,35
70,0
0,68
44,11
23,54
36,67
18,59
48,44
13,16
44,6
48,15
64,3
44,60
28,50
48,2
48,54
28,26
16,10
22,2
70,65
18,27
21,0
16,30
36,42
56,55
8,70
56,28
0,6
8,67
54,51
24,11
26,32
50,11
66,37
70,16
50,32
53,8
40,69
14,22
29,42
41,62
56,17
65,62
60,45
38,24
51,28
30,56
62,20
60,44
13,0
66,6
32,22
55,70
49,22
20,12
69,62
42,44
42,38
61,4
16,2
68,8
25,70
8,5
34,32
29,56
30,20
38,7
46,48
68,45
27,0
40,63
68,14
38,13
16,5
27,44
66,62
46,15
18,69
40,60
14,0
60,34
14,14
37,46
56,24
46,53
66,46
58,55
54,9
64,24
25,10
67,20
44,66
58,26
55,64
64,40
58,52
57,24
68,36`;

    const inputArray = input1.split('\n').map(item => item.split(',').map(str => +str));
    // const matrixSize = 7;
    const matrixSize = 71;
    // const itemsCount = 12;
    const itemsCount = 1024;

    const directions = {
        N: [-1, 0],
        E: [0, 1],
        S: [1, 0],
        W: [0, -1]
    }


    function part1() {
        const maze = generateMaze(inputArray, matrixSize, itemsCount);

        // console.log(renderArray(maze));
        const paths = getPath(maze, matrixSize);
        const minPath = getMinPath(paths);

        // console.log(renderArray(maze));

        console.log(minPath);
    }

    function part2() {
        const inputArray = input1.split('\n').map(item => item.split(',').map(str => +str));
        // const matrixSize = 7;
        const matrixSize = 71;

        let left = 0;
        let right = inputArray.length;
        let maze;

        while (left <= right) {
            const middle = Math.floor(left + ((right - left) / 2));

            maze = generateMaze(inputArray, matrixSize, middle);

            const paths = getPath(maze, matrixSize);

            if (paths.length > 0)  {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
            // const minPath = getMinPath(paths);

        }

        // console.log(renderArray(maze));

        console.log(inputArray[right].join());
    }

    function getMinPath(paths) {
        let min = paths[0];

        for (let i = 0; i < paths.length; i++) {
            if (min > paths[i]) {
                min = paths[i];
            }
        }
        return min;
    }

    function getPath(maze, matrixSize) {

        const queue = [];
        const visited = []

        queue.push([[0, 0], 0]); // [x, y], sum

        const res = [];

        while (queue.length) {
            const [coords, sum] = queue.shift();
            const [x, y] = coords;

            if (notInBounds(maze, x, y)) {
                continue;
            }

            if (isVisited(visited, x, y) || maze[y][x] === '#') {
                continue;
            }

            if (x === matrixSize - 1 && y === matrixSize - 1) {
                res.push(sum);
                continue
            }

            for (const direction in directions) {
                const [dx, dy] = directions[direction];
                const nx = x + dx;
                const ny = y + dy;

                queue.push([[nx, ny], sum + 1]);
            }

            visited.push([x, y]);
        }

        return res;
    }

    function isVisited(visited, x, y) {
        return visited.some(item => item[0] === x && item[1] === y);
    }

    function notInBounds(maze, x, y) {
        return x >= maze.length || y >= maze.length || x < 0 || y < 0;
    }

    function generateMaze(inputArray, matrixSize, itemsCount) {
        const arr = createEmptyArray(matrixSize, matrixSize);

        for (let i = 0; i < itemsCount; i++) {
            const [x, y] = inputArray[i];
            if (x >= matrixSize || y >= matrixSize) {
                continue;
            }
            arr[y][x] = '#'
        }

        return arr;
    }

    function renderArray(arr) {
        return arr.map(
            item => item.join('')
        ).join('\n');
    }

    function createEmptyArray(maxX, maxY) {
        const arr = [];

        for (let i = 0; i < maxY; i++) {
            const subArr = new Array(maxX).fill('.');
            arr.push(subArr);
        }

        return arr;
    }

    part1();
    part2();
})();