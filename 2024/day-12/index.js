(() => {
    const input = `AAAA
BBCD
BBCC
EEEC`;
    const input2 = `RRRRIICCFF
RRRRIICCCF
VVRRRCCFFF
VVRCCCJFFF
VVVVCJJCFE
VVIVCCJJEE
VVIIICJJEE
MIIIIIJJEE
MIIISIJEEE
MMMISSJEEE`;

    const input3 = `SSFFFFFFFFFFFFFFFFEEEZZZZRZZZZZZZZZZZKKKKKKKKKKKKKKKSSSSSSSSSSSSSKKKKKKKKKQDDDDDTTTTTTTTTTTTTTMMMMMMMMMWWWWWWWWWWYYWKKKKKKKKKKKKKKKKKKKKKKKK
FFFFFFFFFFFFFFFFFFFEEEZZZZZZZZZZZZZZZZKKKKKKKKKKKKKKSSSSSSSSSSSSSKKKKKXXXXXXXXXDDDTTTTTTTTTTMMMMMMMMMMMMWWWWWWWWWWWWKKKKKKKKKKKKKKKKSKKKKKKK
FFFFFFFFFFFFFFFFFFFFEEZZZZZZZZZZZZZZZKKKKKKKKKKKKKKKSSSSSSSSSSSSSKKKKKXXXXXXXXXDDQQTTTTTCTTTTMMMMMMMMMMKMWWWWWWWWWWWKKKKKKKKQKKKSSSSSSKKKKKK
FFFFFFFFFFFFFFFFFIIIIEEZZZZZZZZZZZZZZKKKKKKKKKKKKKSSSSSSSSSSSSSKKKKKKKXXXXXXXXXDDQQQTTTTCTTTTMMMMMMMMMMMMWWWWWWWWWWWKKKKKKKKQQQQSSSSSSSSKKKK
VVVFFFFFFFFFFFIIIIIIIEEZZZZZZZZZZZZZZKKKKKKKKKKKKKSSSSSHHHSHHSSKKKKKKDXXXXXXXXXDQQQQQTTTCCTTTMMMMMMMMMMMMMMWWWWWWWWWKKKKKMMKKQQQSSSSSSSSKSSK
VVVFFFFFFFFFFFFIIIIIIEZZZZZZZZZZZZZZZKKKKKKKKKKKKKKSSSSHHHHHSSSSKKKKKIXXXXXXXXXDQQQQTTTTCCTTMMMMMMMMMMMMMMMMWWWWWWKKKKMMMMMMQQQQSSSSSSSSKSSK
VVVVFAFFFFFFFFFIIIIIIIIZZZZZZZZZZZZZZKKKKKKKKKKKKKKKSSSSHHHSSSSSKKKKKIXXXXXXXXXDQQQQQTTTCTTMMMMMMMMMMMMMMMMWWWWWWWWWKWWMMMMQQQQQSSSSSSSSSSSK
VVVVFFFFFFFFFFFIIIIIIIIIIZZZZZZZZZZZKKKKKKKKKKKKKSKSSSSVSHHSSSSSSSSSKDXXXXXXXXXXXQQQQQQTCTTMMMMMMMMMMMMMMMMWWWWWWWWWWWWQQMQQQQQQQSSSSSSXSASK
VVVVVFFFFFFFFFFLLIIIQQIPPPPZZZZZZZZZKKKKKKKKKKKKKSSSVVVVSSSSSSPSSSSHDDXXXXXXXXXXXQQQVVTTTTTMMMMMMMMMMMXXXXXWWWWWWWWWWWWWQQQQQQQQQSSSSSXXSSKK
VVVVVFVFFFFFFAAIIIQQQPPPPPPZZZZZZZZZKKAKKKKKKKKKMUUSSWVVVVSSSSPSSSSHDDXXXXXXXXXXXSVQVVTTTTTMMMMMMMMMMMXXXXOWWWWWWWCWWIWQQQQQQQQQQQSSSSXXXSKK
VVVVVVVFFFFFFAKCIQQQPPPPPPEEZIZZZZZKKAAAKKKKKKKXUUSSUWVVVVSSPPPPESHHHDXXXXXXXXXXSSVVVVTTTTTTTMEMMMMXXXXXXOOZWWWWWWWIIIWWQQQQQQGGQQQXXXXXXXXX
VVVVVVVVFFFFAAKKKKQQQPPPPPPEEEEAAZZZZZAAAAKAAKJXUUSSUUVVVPPPPPPPESSHHDFXXXXXXXXXSSSVVVTTTTTATEEMMMMMMXXXXOOOOOOIWIIIIIIWWQQQQQYGXXXXXXXXXXXZ
VVVVVVVVVVFFAKKKKKPPPPPPPEEEEEEAAAZZAAAAAARRRRRRUUUUUUUVVVPPPPPMPPPHHHDDDDDDDDSSSSSSSSTTTTTTTEEEMEMMMMXXOOOOOOOIIIIIIIIWIIQQQGGGGGXXXXXXXZZZ
VVVVVVVVFFFAAKKKKKRRRPPEEEEEEEEEAAAAAAAAAARRRRRRJUUUUUUVVIPPPPPPPPPHHHHHDDDDDDSSSSSSSEEEEETEEEEEEEJJJJOOOOOOOOOIIIIIIIIWILQQEGGGGGXXXXXXXXZZ
VVVVVVVVJJJVAAAAAKRRRRREREEEEEEEEEEAAAAAARRRRRRRRRRUUUUIIPPPPPPPPPHHHHHHDDDDSSSSSSSESEEEEEEEEEEEEEJJJJOOOOOOOOOIIIIIIIIIIGGGGJGGGGGGXXXXXXZZ
VVVVVVVVVVVVXXXXAKRRRRRRREEEEEEEEEEAAARRRRRRRRRRRRRUUUUUIPPPPPPPQPPPHHHHDDDDSSSSSSSEEEEEEEEEEEPEPPPOJJOOOOOOOIIIIIIIIIIIIGGGGGGGGGGXXXXXXXZZ
AVVVVAVVVVVXXXXXXRRRRRRREEEEEEEEEAAAAAARRRRRRRRRRRRJJUUUPPPPPPQQQPPHHHHHHSSDDSSSSSEEUEEEEUUEEPPQQQQQQQOOOOOOOOIIIIIIIIIIIGGGGGGGGGGGGXXXHXZZ
AVVAAAAVVVVXXXRRRRRRRRRREEEEEEEEEAAAAAARRRRRRRRRRRRJJJJUPPPPPPQQQHHHHHHSSSSSSSSSSSEEUUUUUUUEPPPQQQQQQQOOOOOOIIIIIIIIIIIIIGGGGGGGGGGGGGXXXXXZ
AAVAAAAAVVVVXXXRRRRRRRREEEEEEEEEEAAAAARRRRRRRRRRRRRJJPJJJPPPPPQHQHHHHHHSSSSSSSSSSEEUUUUUUUUUUPPQQQQQQQOOOOOOOIIIIIIIIIIIIIGGGGGGGGGGGGXXXXZZ
AAAAAAXXXVVVXXXXXRRRRRRREEEEEEEEEAAARRRRRRRRRRRRRRRPPPJJJPPPPPHHHHHHHHSSSSSSSSSSSEEUUUUUUUUUUUPQQQQQQQOOOOOOOOIIIIIIIIIIGGGGGGGGGGGGGGGGGZZZ
AAAAAAAAXXXXXXXXXXRRRNNNNNEEEEEEEXXARRRRRRRRRRRRRRRPPPPJJHHIIIHHHHHHHHSSCSSSSSSSSSEUUUUUUUUUUUPQQQQQQQOOOOOOOOOOIIIIIIIIGGGGGGGGGGGGGGGGGZZZ
AAAAAAAXXXXXXXXXXRRRRNNNNNNEEEEEXXXARRRRRRRRRRRRRRRPPPPHHHIIIIIIHHHHHHHHSSSSSSSSSXUUUUUUUUUUUPPQQQQQQQQQQQQQQQOIILLIIIIIGRRGGGGGGGGGGGGGGZZZ
AAAAAAAAXXXXXXXXXXNNNNNNNNNEHHXXXXXXRRRRRRRRRRRRRRRPQPPHHHIIIIIHHHHHHHOGGSSSSSSSSXUUUUUUUUUEPPPQQQQQQQQQQQQQQQQQQQLLIIIIRRGGGGGGGGGGGZGZZZZZ
AAAAAAAAXXXXXXXPXXXNNNNNNNNHHHHXXXXXRRRRRRRRRRRRPJPPPPPPHIIIIIIUHHHHHHOGGGOXXXXXXXXXDDDUUUVPPPPQQQQQQQQQQQQQQQQQQQLLLLRRRLEEGZGGGGGGGZZZZZZZ
AAAAAAAAXXXXXXXXAANNNNNNNNNNNNNNXXXAAJQQQQRRRRRRPPPPPPPPPPDIIUIUOXHHWOOGOGOXXXXXXXXXDDDDUUVVPPPQQQQQQQQQQQQQQQQQQQLLLLLLLLLGGZGZZGGTTZZZZZZZ
AAAAAAAAAXXXXXXXAAANNNNNNNNNNNAXXXXAAAQQQQRRRRRRPPPPPPPPPPDIIUUUOOGHHEOOOOOXXXXXXXXXXXXDVVXPPPQQQQQQQQQQQQQQQQQQQQLLLLLLLLLLLZZZZGGZZZZZZZZZ
AAAAAAAAAAAAXOXWNNNNNNNNNNNNNAAXXXAAQQQQQQRRRRRRPPPPZPPPPPPZOOUUOOOOEEOOOOOXXXOXOOXXXXXDVXXPPPQQQQQQQQQQQQQQQQQQQQLLLLLLLLLLLZZZZGZZZZZZZZZZ
AAAAAAAAAAAAAWWWWNNNNNNNNNNNNNAAXXXAAQQQDDRRRRRRPPPZZZZZZZZZOOUOOOOOOOOOOOOOOOOOOXXXXXXXXXXZPPQQQQQQQQQQCCCYCCCCHLLLLLLLLLLLLZZZZZZZZZZZZZZZ
AAAAAAAAAAAWWWWWWNNNNNNNNNNNNAAAAAAAHDDQQZRRRZPMPPPZZZZZZZOOOOOOOOOJJOOOOOOOOOOOOXXXXXXXXXZZZZQQQQQQQQQQCGCCCCCCCCCLLLLLLLLLLLZZZZZZZZZZZZZZ
AAAAAAAAAAAWWWWWNNNNNNNNNNNNAAVAAAAAHDDDDZRRRZZZPPPZZZZZZZFFFFFFOOJJJJOOOOOOOOOOOXXXXXXXXXZZZZPPPRRRPOOFFCCCCCCCCLLLLLLLLLLLLLZZZZZZZZZZZZZZ
AAAAAAAAWAWWWWWWNNNNNNNNNNNNANVVVVHHHDDZZZRRRZZZPPZZUUZZZFFFFFFJJJJJJJJOOOOOOOOOOXXXXXXXXZZZPPPPRRRRRLOLLCCCCCCCCCCLLLLLLLLLZZZZZZZZZZZZZZBB
AAAAAAAAWWWWWWWWWNDDNNNNNNNNNNVVVHHHHHHXXXZZZZZZZPZZZUZZZFFFFFFJJJJJJJJOOOOOOOOOXXXXZXZZZZZZZPPZRRRRRLOLCCCCCCCCCCCLLLLLLLLLZZZZZZZZZZZZZBBE
AAAAVAAAWWWWWWWWWNDDNWNNNNNVVVVVKKKHHHXXXXZZZZZTZZZUUUUUUFFFFFFJFJJJJJJOOOOOOOOXXXPXZZZZZZZZZZZZRRRRRLLLLCCCCCCCCCLLLLLLLELLZZZZZZZZZZZZBBBB
AAAVVVAAAWWWWWWWWNDDNLNNNNLVVVVVKKKHXXXXXTTTTTTTTUUPUUUUUUFFFFFFFFJJJJJJJMSOOZXXXXXZZZZZZZZZZZZRRRRRRRLLLCFCCCCCCCCCLLLLLEEZZZZZZZZZZZZZZBBB
AAVVVAAWWWWWWWWWWWLLLLINLLLVVVVVKVVXXXTTTTTTTTTTUUUUUUUUUVVVFFFJFFJJJJJJMMMMOZZXXXZZZZZZZZZZZUZRRRRRLLLLLCCCCCCCCCCLLLLLLEEEZZZZZZZZZZZBBBBB
AAAVVVVVVWWVVWWWWWLLLLLLLLLVVVVVVVXXXXTTTTTTTTTUUUUUUUUUVVVVJFJJJJJJJJJMMMMMMZZZZZZZZZZZZZZZZUZZZRRLLLLLLLLLCCCCCCCCCLLLLLLEZZZZZZZZZZBBBBBB
FFVVVVVVVVWVWWWWWLLLLLLLLLLVVVVVVVVXXTTTFTTTTTTUUUUUUUUVVVJJJJJJJJJJJAMMMMMMMMMZZZZZZZZZZZZUUUUZZZRRLLLLLLLLLLCCCCCFCLLLLLLEEEEGGGZZZZBBBBBB
FFFFFVVVVVVVVWWWWLLLLLLLLLLLVVVVVVVTTKTTTTTTTTTUUUUUUUUUVVJJJJJJJJJJJAMMMMMMMMZZZZZZZZZZZZUUUUUZZZRLLLLLLLLLLLLCCLLLLLLLLLLEGEGRRGGZBBBBBBBB
VVFFVVVVVVVVVWWJLLLLLLLLLLLLVVVVVVVVTTTTTTTTTTTTNUUUUUUUVVJJJJJJJJAAAAAAMMMMMMMZZZZZZZZZZUUUUUUULLLLLLLLLLLLLLLLLLLLLLLLLIIGGGGRRGGGBBBBBBBB
VVFFFVVVVJJJJWJJLLLLLLLLLLLLVPPVVYYYTTTTTTTTTTTTNUUUUUUUVVJJJJBIBBAAAAAMMMMMMMPZZZZZZZZZZZZUUUUMLLLLLLLLLLLLLLLLTLLLLNNNNIIGGGGGGGGGBBGBBBBB
VFFVVVVVJJJJJJJJJMLLLLLLLLPPPPPPPYYTTTTTTTTTTTTTTOUUUUUUVVVBJJBBBBMAAAAMMMMMMMMZZZZZZZZZZZZUUUUMMLLLLLLLLLTLLLTTTLLLLNNNANGGGGGGGGGGGGGBBBBB
VVVVVVVVVJJJJJJJJJUULLLLLLPPPPPPPYYYTTTTTTTTTETTOOOOOUVUVVVBBBBBBMMMMMMMMMMMMMMZZZZZZZZZZZZRZZMMMMMLLLLLLLTTTTTTTLLLTNNNNNNGGGGGGGGGGHGBBBBB
VVVVVVVVJJJJJJJJJJUUZLLZZLPPPPPDPPZATTTTTTTTTTTTTOOOOVVVVVVBBBBBBBMMMMMMMMMMQQQQZZZZZZZZZZZZZZZMMMMMLLLTTTTTTTTTLLNLNNNNNNGGGGGGGGGGGGGGBBBB
VVVVVVVVVPJJJJUGZZZZZZZZZZPPPPPPPPPAAAATTTTTTTYYYOOOOVVVVVVBBBBBBBMMMMMMMMMMQQQQZZZZZZZZZZZZZZZMMMMMMMMMMTTTTTTTLNNNNNNNNNNNGGGGGGGGGGGGBBBB
VPPPPPPPVPKKKGGGGZZZZZZZZZZPPPPPPPPAAAAAAATTTTYOOOOOVVBVVVVBBBBBBBBBBBMMMMMMQQQQZZZZZZZZZZZZZZZZMMMMMMMMMTTTTTTTTLLNNNNNNNNNGGGGGGGGGGGGBBBB
VPPPPPPPPPKGKGGGGZZZZZZZZZZPPPPPPPPPPPPAAATTTTTTJOOOVBBBVVBBBBBBBBJBBBMMMMMMQQQQZZZZZZZZZZZZZZZZZMMMMMJMMTTTTTTPNLNNNNNNNNGGGGGGGGGGGGGGGGBB
VPPPPPPPPKKGGGGGGZZZZZZZZZZPPPPPPPPPPPPAAAAAAATHHOOVVBBBBBBBBBBBBBBBBMMMMMMMQQQQQZZQQQQQQZZZZZZZZMJJJJJMMMMMTYTPNNNNNNNNNNNGGGGGGGGGAGGGGBBB
VPPPPPPPPPPGGGGGGGZZZZZZZZZZZPPPPPPPPPAAAAAAHHHHHOOBBBBBBBBBBBBBBBHHHMMMMMMSQQQQQZZQQQQQQZZZZZZZZZZZMJJJMMTTTYYNNNNNNNNNJJNUGGGGGGGAAAGGGBBB
QWWPPPPPPPPGGGGGGGZZZZZZZPPPPPPPPPPPPPPPAAAAHHHHHBBBBBBBBBBBBBBBBBHHHMHMMMMMQQQQQZZQQQQQQZZZZZZZZZZZZJJJMJYYYYYYYNNNNNNKKKUUGGGGKGAAAAGGOBBB
QPPPPPPPPPPGGGGGGGGZZZZZPPPPPPPPPPPHPHHHHAAAAHHHHHBRRRBBBBBBBBBHHBHHHHHHMSSSQQQQQBZQQQQQQZZZZZZZZZZJJJJJJJYYYYYYYFFNNNNKKKUUGGGOKGGOAAAOOOBB
QPPPPPPPPPPPBAAAGGGZPOZPPPPPPPPPPPHHHHHHHAAAAHHHHHHRRRRRBBBBBBBBHHHHHHMMMSSQQQQQQQQQQQQQQQZZZZZZZZJJJJJJJJYYYYYFFFFNFFIKKKKKKZGOKKOOAAAAOOOO
QQPPPPPPPPPAAAAAAAGZPPPPPPCPPPPPPPPPHHHHHHHHHHMHHHRRRRRWRBBBBBBBHHHHHHIIMMMQQQQQQQQQQQQQQQZZZZZZJJJJJJJJJJJYZZZFFFFFFFKKKKKKKZKKKOOOAAAAOOOO
QQPXPPPPPPPAAAAAAGGGPPPPCCCPPPPPPPPPPPPHHHHHMMMMMRRRRRRWRDDDDDDHHHHHHIIIIMMQQQQQQQQQQQQQQQQQQQZZJJJJJJJTJJZYZZZZZFFFFZZKKKKKKKKKKKOAAAAOOOOO
QQPPPPPPAAAAAAAAAAGGPOOPCCCPPPPPPPPPPPPPPHHHMMMMMMRRRRQQQDDDDDDHHHHHHIIIMMMQQQQQQQQQQQQQQQQQQQZZJJJJJJJJYYZZZZZZZFFFFZZKKKKKKKKKKKKKKKOOOOOO
QQPQPPPBAAAAAAAAADAOOOOCCCEPPPPPPPPPPPPPHHHMMMMMRRRRRRQQQDDDDDHHHHDGHIMMMMMMMXXXSSQQQQQQQQQQQQJJJJJJJJJJYZZZZZZZZZZZFZZKKKKKKKKKKKKKKEEOOOOO
QQQQPPPPAAAAAAAAAAAOOOCCCCECCPAPAPPPPPPPHHMMMMMMMMRRDDQQQDDDDDHDDDDDIIIIMMMMMIXXSSQQQQQQQQQQQQJJJJJJJJYYYYZZZZZZZZZZZZZKKKKKKKKKKKKKREEEOOOO
QQQQQPPPAAAAAAAAAACCCOCCCCCCPPAAAPAPPPPFFMMMMMMMMMMDDDQQQDDDDDDDDDDIIDIIMIMMMIXXXXSSZZZQQQQQQQJJJJJJJJYYYYZZZZZZZZZZZZZZZKKKKKKKKKKKEEEEEOOO
QQQQQGPPPAAAAAAAAAACCCCCCCCCCBPPPPFFFFFFMMMMMMMMMMMMDDQQQDDDDDDDDDDDDDDIIIIIIIXXXXUSZZZQQQQQQQJJJJJJJJJJJYZZZZZZZZZZZZZZZKKKKKKKKKKKEEEEEOOO
QGGGGGPAAAAAAAAACCCCCCCCCCCCCCIIPPPFFFFFFFMMMMMMMMMMDQQQQLLLDDDDDDDDDDDDIIIIIXXXXXXZZZZZZZZZJJJJJJJJJJJJYYYZZZZZZZZZZZZZKKKKKKKKKKKKKEEEOOOO
QQQGGGPAAAAAAACCCCCCCCCCCCCCCCCIIFFFFFFFMMMMMMMMMMMMMQQQQLLDDDDDDDGDDSOOOIIIXXXXXXXXXXXZZZJJJJJJJJJJJJFFWWYZZZZZZZZZZEEEKKKKKKKKKKKKKEEEOOOO
QQGGGGGGGAAAAACCCCCCCCCCCCCCCCIIIFFFFFFFFMMRRMMQQQQQQQQQQLLLDDLLDGGGDSOOOOXIXXXXXXXXXXXXKKJJJJJJJWNWWWWWWYAAAAZZZZZEEEEEEEKAKKKKKKOKEEEEEEOO
QQGGGGGGAAAAAAAACCCCCCCCCCCCCCIIIFFFFFFFFMMAAJJQQQQQQQQQQLLLDDLDDGGYOOOOFXXXXXXXXXXXXXXZKJJJJBJTJWWWWWWWWYAAAAZZZZZZEEEEEEKEEOOOOKOKEOEEOOOO
QQGGGGGGGGGGAAAACCCCCCCCCCCIIIIIIIFFFFFFMMMAAAAQQQQQQQQQLLLLDDLLGGGGGOOOOXXXXXXXXXXXXXXZKJJJJBWWWWWWWWWWWWAAAAVVVZEEEEEEEEEEEOOOOOOOOOOOOOOO
QQQGGGGGGGAAAAACCOCCCOOOOOCCIIIIIFFFFFFFFFFAAAAQQQQQQQQQLLLLLLLGGGGGGOOOOOXXXXXXXXXXXXXKKKKKJBWWWWWWWWWWWWAAAAVVVEEEEEEEEEEEOOOOOOOOOOOOOOOO
QQQQGAGGXGAAAAAOOOOOCOOOOOCIIIIIIIFFFFFFFFFAAAAQQQQQQQQQLLLLLNNGGGGGOOOOOOXXXXXXXXXXXXXEKKKKKKKWWWWWWWWWAAAAAAVVVEEEEEEEEEEEOOOOOOOOOOOOOOOJ
QQQQQGGGAAAAAAAOOOOOOOOOORCIIIIIIIIIFFFFFFHHAAAQQQQQQQQQQLLLLNGGGGGOOOOOOOXFXXXXXXXXKKKKKKKKKKKKWWWWWWWWAAAAAAVAVEEEEEEEEEEOOOOOOOOOOOOOOJJJ
QQQQUUUUUUAAAAOOOOOOOOOOOOCIIIVVIIIIFFFFFFFHASAQQQQQQQQQQLLLLNGGGGGGOOOOOOXXXXXXXXXXXKKKKKKKKKKKWWWWWWWWAAAAAAVVVEEEEEEEEEEOOOOOOOOOOOOOJJJJ
QQQQQUEUUUAAAOOOOOOOOOOOOOOIIVVIIIIIFVFYFFSSSSSQQQQQQQQQQLLLLGGGGGGGGOOOOOOXXXNXNXXXXKKKKKKKKKKWKWWWWWWWAAAAAAVVVVEEEEEEEEEEOOOOOOOOOOOJJJJJ
QQQQQEEEEUUAAOOOOOOOOOOOOOOIIVVVIIIIIOOOSSSSSSIQQQQQQQQQQLLLLGGGGGGGGOOOOOOOXXNNNXXXXKKKKKKKKKKKKKWWWWWWAAAAAAWKKVKKEEEEEEEEOOOOOOOOOOOJJJJJ
QQQQQEEEEUUEEOOOOOOOOWZZOOOVVVVVVVVIIOOOOSSSSSSQQQQQQQQQRRLLLLUGGGGGGOOOOOOONNNNNXXONNKKKKKKKKKKKKKWWWWWAAAAAAKKKVKKEEEEEEEEOOOOOOOOOOJJJJJJ
QQQQQEEEEEEEEOOOOOOOSWZWWWVVVVVVVVYIOOOOSSSSSSSQQQQQQQQQLLLLLLLLLGGGGOOOOOOOANNNNNNNNNKKKKKKKKKKKKWWWWWWAAAAKWKKKKKEEEEEEEEEOOOOOOOOOOOJJJJJ
QQQQEEEEEEEEEBOOOOOOOWWWWWVVVVVVVVYYYVOOOOSSSSSQQQQQQQQQLLLLLLLLLAAGHOOONNNNNNNNNNNNNUKKKKKKKKKKKZWZWZZWAAAAKKKKKFKKEEEEEEEIOOOOOOOOOOOJJJJJ
QQQQQEEEEEEEEWWWWOOOWWWWWWVVVVVVVVYYYYOOYOOOOSTQQQQQQLLLLLLLLLLLLAGGHHHONNNNNNNNNNNNNUUKKKKKKKKKZZZZZZZZAAAAKKKKKFEEEEEEEEEEOOOOOOOOOOOOJJJJ
QQQQEEEEEEEEEWWWWWWWWWWWWWVVVVVVVVYYYOOJYOOOOSSTTTTTLLLLLLLLLLLLLLLLHHHOHHHNNNNNNNNNNUUKKKKKKKKYYYYYZZZZAAAAKFFKKFFFEEEEEEEBBOOOOOOOOOOJJJJJ
QQEEEEEEEEEEWWWWWWWWWWWWWWVVVVVVVYYYYOYYYYYOOOOOOOTTTLLLLLLLLLLLLLLLHHHHHHNNNNNNNNNNNNKKKKKKKKKYYYYYZZZZZZKKKFFFFFFFFEDDDDDOOKOOOTOOOKJJJJJJ
QQQEEOEEEEEEWWWWWWWWWWWWWWWVVVVVYOYYYYYYYYYYOOJOOOOTTLLLLLLLLLLLLLLLHHHHHHHNNNNNNNNNNNNKKKKKEKZYYYYYZZZZZHKKKFFNFFFFFODDDDOOOOOOOTOOKKJJJJJJ
QQQQQEEEEEEWWWWWWWWWWWWWWWPPPVPVYYYYYYYYYYYJJOJJOOOTTTTLLLLLLHHLLLHHHHHHHHJNNNNNNNNNNNKKKKKKZZZYYYYYZZHHHHHKKKFFFFFFFDDDDDDOOOOOOTTJJKJJJJJJ
QQQOQQEEEEWWWWWWWWWWWWWWWWWWPPPPPYYYYYYYYYJJJJJTTTTTTTTWWWHHHHHHLHHHHHIIIHJBJGNNNNNNNSKKKKKKZZZYYYYYZZZZHHHHHFFFFFFFFDDDDDDUOOOOOOTJJJJJJJJJ
QOOOOOOEEEWWWWWWWWWWWWWWWWWPPPPPPYYYYYYYYYYYYJJJJTTTTTTWWOHHHHHHHHHHJJIIIJJJJNNNNNNNNJJJCCKKZZZZZZZZKZHHHHHFFFFFFFFFFDDDDLLLLOOOOOJJJJJJJJJJ
QOPOOOOOWWWWWWWWWWWWWWWWWWPPPPPPPPYYYYYYYYYYNNNJTTTTTTTWWHHHHHHHHHHHJJIIIJJJJJNNNNNNNJJJJJJWZZZZZZZZZZZHHHHHHFFFFFFFFDLLLLLLLLOOOOOJJJJJJJJJ
QOOOOOOEEEEEWWVWBBWWWWWWWPPPPPPPPPPYYYYYYYYYYNNTTTHHHTTWWHHHHHHHHHHHJJIIIJJJJJWNNNNNNJJJJJJZZZZZZZZZZZZHHHHHFFFFFFFFFFLLLLLLLLOOOOJJJJJJJJVV
OOOOOOOOEEEWWWVWBBBWWPPPPPPPPPPPPPPYYYYYYYYYTTTTTTHHHHHWWHHHHHHHTHHHJJIIIJJJJJJNNNNJNJJJJJJJJZZZZZZHZZHHHHHHFFFFFFFFFFLLLLLLLLOOJJJJJJJJJJVV
OOOOOOOOEEEWWWVVVBBBBBPPPPPPPPPPPPPYYYYYYTYTTTTTTTVHHHHHHHHHHHHHHHHJJJIIIJJJJJJIVINJJJJJJJJJBBZZZHHHHHHHHHHHHFFFFFFFFFLLLUUULLOOOJJJJJJJJJVV
SOOOOOOSZZZZVVVBBBBBBBUPPPPPPPPPPPPTTTYYYTYYTTTTTTTGGGGGHHHHHHHHHHSSHHHHHJJGJJJIIIIZJJJJJJJJBBZZHHHHHHHHHHHHHFFFFFFFFFLLLUUULLOOOOJJJJJTTTVV
SSSSSSSSSSSZZZZNBBBBBUUPUPPPPPPPPITTTYYTTTYTTTTTTTTGGGGGGHHHHHHHHHHHHHHVHJEJJJIIIIIZJJJJJJNJJHHHHHHHHHHHHHHHFFFFFFFFFFUUUUUULOOOOOOOOVKVVVVV
SSSSSSSSSSZZZZZZBBBBBBUUUPPPPPPPPITTTTTTTTTTTTTTXXXXXXGGGGGHHHHHHHHHHHHIJJJJIIIIIIIIEEJJJNNNHHHHHHHHHHHHHHHHHFFIIIIIFIUUUUUULOOORROOOVVCVVVV
SSSSSSSZZZZZZZZZZBBBBBUUUUUPUUVVPPPTTTTTTTTTTTTTXXXXXXGGGQGHHHHHHHHHCHHIIJJJIIIIIIIIEEEJNNNNHHHHHHHHHHHHHHHHHFFIIIIIIIUUUUUULORRRRROOVVVVVVV
SSSSSSZZZZZZZZZZZBBBBUUUUUUUUUUVPZVTTTTTTTTTTTTTXXXXXXGGGGGHHHHHHHHHCCIIIJIIIIIIIIIIEJJJJNNNXXXXXHHHHHHXHHHHHHFIIIIIIIUUUUUULCCCCCVVVVVVVVVV
SSSSZZZZZZZZZZZZBBBBBBBUUUUVVVVVPVVVTTTTTTTTTTTTXXXXXXGGGGGHPHHPHCHCCCIIIIIIIIIIIIIIJJJJJNNNXXXDHHHHHHHXHHHHIEEEIIIIIIUUUUUUCCCCCCVVEVVVVVVV
SSSZZZZZZZZZZZZBBBBBBBUUUUUVVVVVVVVVTTTTTTTTTTTTTXXXXGGGGUGUPPPPCCCCCCIIIIIIIIJIJJJJJJJJNNXXXXXXHHHHHHXXXHHXIEIIIIIIIIUUUUUUCCCCCCCCVVVVVVVV
SSSSSZZZZZZZZZYBBBBBBBUUEUEVVVVVVVVVVVOTTTTTTTTTXXXXXXXGGUUUPPPPPPPCCCIIIIIIIIJJJJJJJJJJJNNXXXXHHHHHXXXXXXXXIIIIIIIIIIUUUUUUCCCCCCCCCCCCVVVV
SSSSSSZZZZZZZDYYBBBBBBBEEEEVVVVVVVVVVVVJJTTTTTPPXXXXXXXGUUUUPPPPPPPCCIIIIXXIIIJJJJJJJJJJJJXXXXXXXXXXXPXXXPPXIIIIIIIIIIUUUUUUCCCCCCCCCCCCVVVV
SSSSSSZZZZZZYYYYYBSSBBBBEEEEVVVVVVVVVVVVJJTJJPPPXXXXXXXGUUUPPPPPPPPPPXXIXXXXIIJJJJJJJJJJJJXXXXXXXXXXXPPPPPPXPPPIIIIIIIUUUUUUCCCCCCCCCCCCVVVV
SSSSSSSSZZZZZYYSSSSIBBBBEEEEVVVVVVVVVVVVJJJJJJJPXXXXXXXUUUUUPPPPPPPPPYXXXXXIIIJJJJJJJJJJJJFFXXXXXXXPPPSPPPPPPPPHIIIIIIRRRRCCCCCCCCCCCCCCVVVV
SSSSYYYZZZZYZYYYSSSSSSEEEEEEVVVVVVVVVVVJJJJJJJJJXXXXXXXUUUUUPPPPPPPPPXXXXXXXIIIJIAJJJJJJJJFFXXXXXXXPPPPPPPPPPHHHIIINIIRRPRCCCCCCCCCCCCCCVVVV
SSYSYYYYYYYYYYYYYSNEEEEEEEEEVVVVVVVVHHVJJJJJJJJXXXXXXXXUUUUPPPPPPPPXXXXXXXXIIIIIIJJJJJJJJFFFFXXXXXPPPPPPPPPQPHHHINNNNNRRPPCCCCCCCCCCCCCCVVVV
SSYYYYYYYYYYYYYYYNNEEEESEEEEEVVVVVVHHHHJJJJJXXXXXXXXXXXGUUUUPPPPPPPDDXXXXXIIIIIIIJJJJJJJJFFFFXXCXXXPPPPPPPPPPPPHINNNNNNRPPAAAAAAACCCCCCCVVVD
YYYYYYYYYYYYYYYNNNEEEEEEEEEEEVVVVVVHHHHHJJJJXXXXXXXXXXXGGUUUPPPPPPPDDDXXXXIIIIIIOOJJJOOJOYYYFXYCXXXJPPPPPPPPPPPPPNNNNNNNPPPAAAAAACCCCCCCVVVD
YYYYYYYYYYYYYYYNNENEEEEEEEEEEVVVVVHHHHHHJJJJXXXXXXXXUUUUGUUUUUPPKKKDDDDDXXIIIIIOOOOOOOOOOYYYYYYXXXXXPPPPPPPPPPPPNNNNNNNNNPAAAAAAACCCCCCCNVVD
YWWYYUYYYVYYYYYEEEEEEEEEEJEEVVVVVHHHHHHHJJJJXXXXXXXXGGGGGGGUGUUPPKKKKDDDDIIIIIIOOOOOOOOOOYYYYYYBBBBEEEEEEEEEEPPPNNNNNNNNNNAAAAAAACCCCCCCNNNN
WWWWYVTTVVVVXXEEEEEEEEEEEJJEEVSVVVHHHHHHJJJJXXXXXXXXMGGGGGUUGGGGKKKKWDDDDDDIIIAOOOOOOOOOYYYYYYYBBBBEEEEEEEEEEPPPPNNNNNNNVNAAAAAAAAANNNNNNNNN
WQWWYVTVVVVVEEEEEEEEEEEEEEJJJSSSSVSSSHSSSSJJXXXXXXXXGGGGGGGGGGGGKKKKWWDDDDIIIIIOOOOOOOYYYYYYYYYBBBBEEEEEEEEEEPPNNNNNNNNNNNBANAAAAAANNNNNNNNN
QQWVVVVVVVVVVEEEEEEEEEEEEDSSSSSSSSSSSSSSSSSJXXXXXXXXGGGGGGGGGGNGKWKKWWWDDDDDIIIOOOOOOOOYYYYYYYYBBBBEEEEEEEEEENNNNNNNNNNNNNNANNNNAAAANNNNNNNN
VQQVVVVVVVVVVVEEEEEEEEEEEDSSSSSSSSSSSSSSSSSJXXXXXXXGGGGGGGGGGGGGKWWWWWWWDDDDDIIDOOOOOOOOYYYDYYHBBBBEEEEEEEEEEPNNNNNNNNNNFNNANNNNNNMMNNNNNNNN
VVVVVVVVVVVVVVEEREYEEEEDDDDSSSSSSSSSSSSSSSSSXXXXXXXGGGGGGGGGGGGGGWWWWWWWDDDDDDDDOOOOOOOOJYYHHEEEEEEEEEEEEEEEEPNNNNNNNNNNNZNNNNNNNNNNNKNNNNNN
GVGVVVVVVVVVVVVEYYYYDEDDDDDSSSSSSSSSSSSSSSSYYYGGGGGGGGGGGGGGGGGGGWWWWWWDDDDDDDDDOOOOTOOOOYYHCEEEEEEEEEEEEEEEEPNNNNNNNNNNZZZZNNNNNNNNNKNNNNNK
GGGVVVVVVVVVVVVYYYDDDEDDDDSSSSSSSSSSSSSSSSSYYYYGGGGGGGGGGGGGGGGGGGWHHWDDDDDDDDDTTTOOBBBBBBBBBEEEEEEEEEEBGGGBPENNNSSNNNNNNNNNNNNNNUNNNKKKKKNK
GGGGVVVVVVVVVVVYYYDDDDDDDDDUUUSSUUSSSSSSSSSYYYGGGGGGGGGGGGGGGGGGGGWDDDDDDNNDDDDTTTTTBBBBBBBBBEEEEEEEEEEGGGGGEEESRSNNNNJTTNNNNNNNNNNNNKKKKKKK
GGGGVVVVVVVVVVVYYYYYDDDDDDUUUUUUUUSSSSSSSSYYYYGGGGGGGGGGGGGGGGGGGGDDDDNNNNNNDTTTTTTTBBBBBBBBBEEEEEEEEEEHHRSSSSSSSSSNYYTTTNNNNNNNNNNNKKKKKKKK
VGVVVVVVVVVYYYVYYYYYDDDDDDUUUUUUUUUSSSSSSSYYYYGGGGGGGGGGGGGGGGGGGGGDBWNNNNNNNTTTTTTTBBBBBBBBBEEEEEEEEEEHHHSSSSSSSSSYYYTTTNRRNNNNNKKNKKKKKKKK
VVVVVVVVVVVVYYYYYYYYYYDLLDUUUUUUUUUUUSSSSSYYYYGGGGGGGGGGRGYGGGGBBGGBBBNNNNNNNTTTTTTTTTWWXXXHXEEEEEEEEEEHSHSSSSSSSSSSSYYTTTRRRNNNNNKKKNKKKKKK
WVVVVVVVVVYYYYYYYYYYYYDLZUUUUUUUUUUUUSSSSSYYYYGGYGGGGGGGRRYGBBBBGGGBQQNNNNNNNTTTTTTTWWWXXXXHTEEEEEEEEEEHSSSSSSSSSSSSSYTTTTRRRNSSNNKKNNNKKKKK
WVVVVVVVVVYYYYYYYYYYYQDLZZUUUUUUUUUUUSSSSSXYYYYYYYGVVGSGRRYRBBBBBBBBBBNNNNNNNNTTTTTTWHHHRHPHTEEEEEEEEEEHSSSSSSSSSSSSSSSRTRRNNNSSNNNNNNNKKKKK
VVVVVVVVVYYYYYYYYYYYYQLLLLUUUUUUUUUIISSSSXXYYYYYYYGVRGSRRRRRBBBBBBBBNNNNNNNNNTTTTTTHWHHHHHPHHEEEEEEEEEESSSSSSSSSSSSSSSRRRRCCNNNSSCNNNNNNKKKK
IVVJVVVVVJJJYYYYYYYYDLLLLLLWWWUUUUUIIIYSSXXXYYYYYYYRRBRRRRSSBBBBBBBBBBNNNNNNXXXXXXXHHHHHHHHHHEEEEEEEEEESSSSSSSSSSSSSSRRRRRRCCCCSCCNNNNNKKKKK
KKKVVKVVVVVJJYYYYYYYYYYLLLLLWWUUMMMMMIYQXXXXYYYYYYRRRRRRRRRBBBBBBBBBBBNNNNNMXXXXXXXHHHHHHHHHHEEEEEETTTTHNNNSNSSSSSSSSSSRRRRCCCCCCCCCCNNNNKKK
KKKVKKVVVVVJJYYJYYYYDLLLLLLLWWYYYYYYYYYYYYYYYYYYYYRRRRRRRRRRBBBBBBBBBBBNNMNNXXXXXXXXXXXXHHHHHHEEEEETTHHHNNNNNSSSSHSHSHHHHHHCCCCCCCNNNNNNQKMM
KKKKKKKVVVVJJJJJYYYYYLLTLLLLLLYYYYYYYYOYYYYYYYYYYYRRRRRRRRRDBBBBBBBBBBBNNMMMXXXXXXXXXXXXHHHHHHEEEEETTHHHNNNNNNNSSHHHSHHHHHHCCCCCCCNNMMNMQMMM
FKKKKKKKKKJJJJJJYYYYYYYTTLLLLLYYYYYYYYYYYYYYYYYYYYRRRRRRRRRDBBBBBBBBBBNNMMMMXXXXXXXXXXXXHHHHHHEEEEETTHHHHNNNNNNNHHHHHHHHHHHHCCCCCCCNNMMMMMMM
FFFKKKKKKKJJJJJJJTYBTTVTTZLVVVYYYYYYYYUYYYYYYYYYYYYRRRRRRRBBBBYBBBBBBBNMMMMMXXXXXXXXXXXXHHHHHHEEEEETTTHHHHNNNNNNHHHHHHHHHHHHCCCCCCCNNNMMMMMM
FKKKKKKKKKKJJJJJJTTTTTTTVVVVVNYYYYYYYYUYYYYYYYYYYYYYRYYRRYYYYYYBBBBBBNNMMMMMXXXXXXXXXXXXHHHEEEEEEEEZTTHNHHNNNNNNNNNHHHHHHHHCCCCCCCCNNNMNMMMM
FFKKKKKKKJJJJJJTTTTTTTTTVVVVVVYYYYYYYYUUUUYYYYYYYYYYYYYYYYYYYYYBBBBBBBBMMMMMXXXXXXXXXXXXHHEEEEEEEEEZTTNNNHNNNNNNNNNHHHHHHHHCCCCCCCCNNNNNLLLM
FFFKKAAAJJJJJJJTTTTTTTTTVVVVVVYYYYYYYYUUUUYUUYYYYYYYYYYYYYYYYYYBBBBBBBBBMMMMTTXXXXXXXXXXEHEEEEEEEEEZZZNNNNNNNNNNNNNHHVVHHHCCCCCCCCNNNNNNLLLM
FFFKKAAAAJAJJTTTTTTTTTTTVVVVVVYYYYYYYYUUUUUUUYRRRRRYYYYYYYYYYYYBBBBBBBBBMMMMTTXXXXXXXXXXEEEEEEEEEEEZZZNNNNNNNNNNNNNHHVVVHLCCQQNNCNNNNNLLLLLO
FFFABAAAAAAJTTTTTTTTTTTTVVVVVVYYYYYYYYUUZZZUUZRRRYYYYYYYYYYYYYYYBBBBBBBTTTTTTTXXXXXXXXXXEEEEEEEEEEEZZZXZNNNNNNNNNANNNVVVVVCQQQQNNNNNNLLLLLLL
FFAAAAAAAATJTTTTTTTTTTTGVVVIIVYYYYYYYYZZZZZZZZRRRYYYYYYYYYYYYYYZZBBBBBBBBBBBTTXXXXXXXXXXTEEEEEEEEEEZZZZZNNNNNNNNNNNNVVVVVVQQQQQQNNNNNLLLLLLL
FAAAAAAAAATTTTTTTTTTTTTVVVIIIVVVVUUUUUZZZZZZZZRRYYYYYYYYYYYYYYYZZZBBBBBBBBBBTTTTTTTTTTTTEEEEEEEEEEEZZZZZNNNNNNNNNNNVVVVVVFFQQQQQNNNNNLLLLLLL
FAAAAAAAAAATTTTTTTTTTTTTVVIIIUUUUUUUUUUZZZZMMMMYYYKYYYYKYYYYYYYYYYBBBBBBBBBTTTTTTTQTTTTTTEEEEEEEEEEZZZZZNNNNNNNNNNVVVVVVVFFFQFQQNNNNNNLLLLLL
AAAAAAAATTATTTTTTTTTTTTUVVVIUUUUUUUUUUUZMMMMMMYYYYKKKKKKKYYYYBBBBBBBBBBBBBTTQTTQQQQQTTTTTTEZZZZZZZZZZZZZZNNNNNNSSSVVVVVFFFFFFFFQNNIIOIIILLLL
AAAAAAAAATTTTTTTTTTTTTTUUIIIIUUUUUUUUURZMMMMMMYMMYKKKKEEYYYYYBBBBBBBBBBBDQQTQQQQQQQQQTTTTTKZZZZZZZZZZZTZZNNNSSSSSSVVVVVFFFFFFFFIIIIIIIILLLLL
AAAAAAAAAATTSTYTTHHTTTUUUIMIIUUUUUUUUUUUUMMMMMMMMKKKKKEKKKKKBBBBBBBBDDDDDQQQQQQQQQQQQQQQQQQQZZZZZZZZZTTNNNNSSSSSSSVVVVFFFFFFFFBIIIIIIIIILLLL
AAAAAAAAAASSSHTTTHHTOAAUUIIIUUUUUUUUUUUUUMMMMMMMKKKKKKKKKKKBBCCBBBBBDDDDDDQQQQQQQQQQQQQQQQUDZZZZUUZZZTNNNVNNSSSSSSSEVVVFFJFGFFBBBIIIIILLLLLL
AAAAAAAAAAAHHHHHHHHHAAAUUUUUUUUUUUUUUUUUUMMMMMMMKKKKKKKKKKBBBCCCBCBBBDDDDQQQQQQQQQQQQQQQCUUUUUZUUUUUZUUNNSSSSSSSSSSSVVVVVJJQQQQQBIIHIILLLLLL
AAAAAAAPPAPHHHHHHHHHHEAFUFFUUUUUUUAUUUUUUMMMUMMMMMKKKKKKKKBBBCCCBCCBDDDDDDQPQQQQQQQQQPPUCUUUUUUUUUUUZUUUUFUUSSSSSSSSSSSOQJQQQQQQBIHHHLLLLLLL
AAAQAAAPPPPHHHHHHHHHHHAFFFAFUAUUUUAUUUUUUUUUUMMUZMKKKKKKKKBCCCTCCCCCCPDDDDPPQQQQQQQQQPPUUUUUUUUUUUUUUUUUUUUUSSSSSSSSSOSOQQQQQQQQQIHHHLLLLLLL
AAAAAAAPPPPHPPHHHHHAAAAAFFFFAAAAUUUUUUUUUUUUUMUUUUKKKKKKKKCCCCCCCCCCCPPDDDPPPPQQQQQQQPPUUUUUUUUUUUUUUUUUUUUSSSSSSSSSSOOOOOQQQQQQQQQHHLLLLLLL
APAAAAAPPPPPPPHHHHHAAAAAFFFAAAAAUUUUUUUUUUUUUUUUUUUKKKKKKCCCCCCCCCCCPPPPPPPPPPPQPPPQQPPPPUUPPUUUUUUUUUUUUUUSSSSSSSSSSOOOOOOQQQQQQQQHHLLLLLLL
PPPAAPPPPPPPPPHHHAHAAAAAAAFAAAAAUUUUUUUUUUUUUUUUUKKKKKKKKCCCCCCCCCCCCPPPPPPPPPPPPPPPPPPPPPPPPUUUUUUUUUUUUUUSSSSSSSSSSSOOQQQQQQQQQQQQHHLLLULL
PPPPPPPPPPPPPHHHHAAAAAAAAAAAAAAAAUUUUUUUUUUUUUUUUKKKKKKKKKCCCCCCCCCCCCPPPPPPPPPPPPPPPPPPPPPPUUUUUUUUUUUUUUSSSSSSSSSSSSOQQQQQQQQQQQQQHHLLUULL
PPPPPPPPPPPPPPHQHAAAAAAAAAAAAAAATTTUUUUUUUUUUUUUUKKKKKKKKKKCCCCCMMCPPPPPPPPPPPPPPPPPPPPPPPPPUUUUUUUUYUUUUUUSSSSSSSSSSSQQQQQQQQQQQKKQHHLUUUUU`;

    const input4 = `AAAAAA
AAABBA
AAABBA
ABBAAA
ABBAAA
AAAAAA`;
    const input5 = `EEEEE
EXXXX
EEEEE
EXXXX
EEEEE`;

    const inputArr = input3.split('\n');

    function part1() {
        const visitedCoords = new Set();
        const fenceCounts = {};
        const fencePrices = {};
        let charId = 0;

        for (let i = 0; i < inputArr.length; i++) {
            for (let j = 0; j < inputArr[0].length; j++) {
                const coordsStr = `${i},${j}`;

                if (visitedCoords.has(coordsStr)) {
                    continue;
                }
                charId++;

                calculateFence(inputArr, [i, j], fenceCounts, fencePrices, visitedCoords, charId);
            }
        }

        const res = calculatePrice(fenceCounts, fencePrices);

        console.log(res);
    }


    function part2() {
        const visitedCoords = new Set();
        const fencePrices = {};
        const fenceSidesCount = {};
        let charId = 0;

        for (let i = 0; i < inputArr.length; i++) {
            for (let j = 0; j < inputArr[0].length; j++) {
                const coordsStr = `${i},${j}`;

                if (visitedCoords.has(coordsStr)) {
                    continue;
                }
                charId++;

                // calculateFence(inputArr, [i, j], fenceCounts, fencePrices, visitedCoords, charId);
                calculateSides(inputArr, [i, j], fenceSidesCount, fencePrices, visitedCoords, charId);
            }
        }

        const res = calculatePrice(fenceSidesCount, fencePrices);
        // console.log(fenceCounts)

        console.log(res);
    }

    function calculateFence(inputArr, coords, fenceCounts, fencePrices, visitedCoords, charId) {
        const [i, j] = coords
        const coordsStr = `${i},${j}`;

        if (visitedCoords.has(coordsStr)) {
            return;
        }

        visitedCoords.add(coordsStr);

        const plot = inputArr[i][j];

        fencePrices[plot + charId] = (fencePrices[plot + charId] || 0) + 1;

        if (inputArr[i - 1]?.[j] === plot) {
            calculateFence(inputArr, [i - 1, j], fenceCounts, fencePrices, visitedCoords, charId);
        } else {
            fenceCounts[plot + charId] = (fenceCounts[plot + charId] || 0) + 1;
        }

        if (inputArr[i][j + 1] === plot) {
            calculateFence(inputArr, [i, j + 1], fenceCounts, fencePrices, visitedCoords, charId);
        } else {
            fenceCounts[plot + charId] = (fenceCounts[plot + charId] || 0) + 1;
        }


        if (inputArr[i + 1]?.[j] === plot) {
            calculateFence(inputArr, [i + 1, j], fenceCounts, fencePrices, visitedCoords, charId);
        } else {
            fenceCounts[plot + charId] = (fenceCounts[plot + charId] || 0) + 1;
        }

        if (inputArr[i][j - 1] === plot) {
            calculateFence(inputArr, [i, j - 1], fenceCounts, fencePrices, visitedCoords, charId);
        } else {
            fenceCounts[plot + charId] = (fenceCounts[plot + charId] || 0) + 1;
        }
    }


    function calculateSides(inputArr, coords, fenceSidesCount, fencePrices, visitedCoords, charId) {
        const [i, j] = coords
        const coordsStr = `${i},${j}`;

        if (visitedCoords.has(coordsStr)) {
            return;
        }

        visitedCoords.add(coordsStr);

        const plot = inputArr[i][j];

        fencePrices[plot + charId] = (fencePrices[plot + charId] || 0) + 1;

        if (inputArr[i]?.[j - 1] !== plot && inputArr[i - 1]?.[j] !== plot) {
            fenceSidesCount[plot + charId] = (fenceSidesCount[plot + charId] || 0) + 1;
        }

        if (inputArr[i][j  + 1] !== plot && inputArr[i - 1]?.[j] !== plot) {
            fenceSidesCount[plot + charId] = (fenceSidesCount[plot + charId] || 0) + 1;
        }

        if (inputArr[i + 1]?.[j] !== plot && inputArr[i][j + 1] !== plot) {
            fenceSidesCount[plot + charId] = (fenceSidesCount[plot + charId] || 0) + 1;
        }

        if (inputArr[i][j - 1] !== plot && inputArr[i + 1]?.[j] !== plot) {
            fenceSidesCount[plot + charId] = (fenceSidesCount[plot + charId] || 0) + 1;
        }

        if (inputArr[i + 1]?.[j] === plot && inputArr[i][j + 1] === plot && inputArr[i + 1]?.[j + 1] !== plot) {
            fenceSidesCount[plot + charId] = (fenceSidesCount[plot + charId] || 0) + 1;
        }

        if (inputArr[i + 1]?.[j] === plot && inputArr[i][j - 1] === plot && inputArr[i + 1]?.[j - 1] !== plot) {
            fenceSidesCount[plot + charId] = (fenceSidesCount[plot + charId] || 0) + 1;
        }

        if (inputArr[i - 1]?.[j] === plot && inputArr[i][j + 1] === plot && inputArr[i - 1]?.[j + 1] !== plot) {
            fenceSidesCount[plot + charId] = (fenceSidesCount[plot + charId] || 0) + 1;
        }
        if (inputArr[i - 1]?.[j] === plot && inputArr[i][j - 1] === plot && inputArr[i - 1]?.[j - 1] !== plot) {
            fenceSidesCount[plot + charId] = (fenceSidesCount[plot + charId] || 0) + 1;
        }

        if (inputArr[i - 1]?.[j] === plot) {
            calculateSides(inputArr, [i - 1, j], fenceSidesCount, fencePrices, visitedCoords, charId);
        }

        if (inputArr[i][j + 1] === plot) {
            calculateSides(inputArr, [i, j + 1], fenceSidesCount, fencePrices, visitedCoords, charId);
        }


        if (inputArr[i + 1]?.[j] === plot) {
            calculateSides(inputArr, [i + 1, j], fenceSidesCount, fencePrices, visitedCoords, charId);
        }

        if (inputArr[i][j - 1] === plot) {
            calculateSides(inputArr, [i, j - 1], fenceSidesCount, fencePrices, visitedCoords, charId);
        }
    }

    function calculatePrice(fenceCounts, fencePrices) {
        let res = 0;

        for (let plot in fencePrices) {
            res += fencePrices[plot] * fenceCounts[plot];
        }

        return res;
    }

    part1();
    part2();
})()