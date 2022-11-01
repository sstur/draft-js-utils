const expectedRawData = {
  italicTest: {
    text: 'AAAA BBBB CCCC EEEE FFFF GGGG HHHH IIII JJJJ KKKK LLLL MMMM NNNN | OOOO PPPP KKKK | RRRR SSSS TTTT UUUU',
    type: 'unstyled',
    depth: 0,
    inlineStyleRanges: [{
        offset: 0,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 6,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 12,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 18,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 28,
        length: 2,
        style: 'ITALIC',
      },
      {
        offset: 32,
        length: 2,
        style: 'ITALIC',
      },
      {
        offset: 36,
        length: 2,
        style: 'ITALIC',
      },
      {
        offset: 40,
        length: 2,
        style: 'ITALIC',
      },
      {
        offset: 44,
        length: 2,
        style: 'ITALIC',
      },
      {
        offset: 50,
        length: 3,
        style: 'ITALIC',
      },
      {
        offset: 56,
        length: 3,
        style: 'ITALIC',
      },
      {
        offset: 61,
        length: 4,
        style: 'ITALIC',
      },
      {
        offset: 66,
        length: 4,
        style: 'ITALIC',
      },
      {
        offset: 72,
        length: 4,
        style: 'ITALIC',
      },
      {
        offset: 77,
        length: 5,
        style: 'ITALIC',
      },
      {
        offset: 83,
        length: 5,
        style: 'ITALIC',
      },
      {
        offset: 89,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 92,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 94,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 96,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 100,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 102,
        length: 1,
        style: 'ITALIC',
      },
    ],
    entityRanges: [],
    data: {},
  },
  italicAndBoldTest: {
    text: 'AAAA BBBB CCCC EEEE FFFF GGGG HHHH IIII JJJJ KKKK LLLL MMMM NNNN | OOOO PPPP KKKK | RRRR SSSS TTTT UUUU',
    type: 'unstyled',
    depth: 0,
    inlineStyleRanges: [{
        offset: 0,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 6,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 12,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 18,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 28,
        length: 2,
        style: 'ITALIC',
      },
      {
        offset: 32,
        length: 2,
        style: 'ITALIC',
      },
      {
        offset: 36,
        length: 2,
        style: 'ITALIC',
      },
      {
        offset: 40,
        length: 2,
        style: 'ITALIC',
      },
      {
        offset: 44,
        length: 2,
        style: 'ITALIC',
      },
      {
        offset: 50,
        length: 3,
        style: 'ITALIC',
      },
      {
        offset: 56,
        length: 3,
        style: 'ITALIC',
      },
      {
        offset: 61,
        length: 4,
        style: 'ITALIC',
      },
      {
        offset: 66,
        length: 4,
        style: 'ITALIC',
      },
      {
        offset: 72,
        length: 4,
        style: 'ITALIC',
      },
      {
        offset: 77,
        length: 5,
        style: 'ITALIC',
      },
      {
        offset: 83,
        length: 5,
        style: 'ITALIC',
      },
      {
        offset: 89,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 92,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 94,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 96,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 100,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 102,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 3,
        length: 1,
        style: 'BOLD',
      },
      {
        offset: 7,
        length: 1,
        style: 'BOLD',
      },
      {
        offset: 11,
        length: 1,
        style: 'BOLD',
      },
      {
        offset: 15,
        length: 1,
        style: 'BOLD',
      },
      {
        offset: 19,
        length: 2,
        style: 'BOLD',
      },
      {
        offset: 24,
        length: 2,
        style: 'BOLD',
      },
      {
        offset: 30,
        length: 2,
        style: 'BOLD',
      },
      {
        offset: 36,
        length: 2,
        style: 'BOLD',
      },
      {
        offset: 42,
        length: 2,
        style: 'BOLD',
      },
      {
        offset: 48,
        length: 2,
        style: 'BOLD',
      },
      {
        offset: 51,
        length: 3,
        style: 'BOLD',
      },
      {
        offset: 55,
        length: 3,
        style: 'BOLD',
      },
      {
        offset: 62,
        length: 3,
        style: 'BOLD',
      },
      {
        offset: 66,
        length: 3,
        style: 'BOLD',
      },
      {
        offset: 72,
        length: 4,
        style: 'BOLD',
      },
      {
        offset: 77,
        length: 5,
        style: 'BOLD',
      },
      {
        offset: 83,
        length: 5,
        style: 'BOLD',
      },
      {
        offset: 89,
        length: 1,
        style: 'BOLD',
      },
      {
        offset: 92,
        length: 1,
        style: 'BOLD',
      },
      {
        offset: 95,
        length: 1,
        style: 'BOLD',
      },
      {
        offset: 97,
        length: 1,
        style: 'BOLD',
      },
      {
        offset: 99,
        length: 1,
        style: 'BOLD',
      },
      {
        offset: 101,
        length: 1,
        style: 'BOLD',
      },
    ],
    entityRanges: [],
    data: {},
  },
  italicEscapeUnderscoreChar: {
    text: '_AAAA B_BBB CC_CC EEE_E FFFF_ G_G_GG HH_H_H II_I_I _J_J_J_J_ K__KKK LL__LL MMM__M __N__N__N__N__ | __OOOO PPPP__ KK*KK | R*RRR SSS*S TTTT* *UUUU',
    type: 'unstyled',
    depth: 0,
    inlineStyleRanges: [{
        offset: 1,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 8,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 15,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 22,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 35,
        length: 2,
        style: 'ITALIC',
      },
      {
        offset: 40,
        length: 3,
        style: 'ITALIC',
      },
      {
        offset: 45,
        length: 4,
        style: 'ITALIC',
      },
      {
        offset: 52,
        length: 4,
        style: 'ITALIC',
      },
      {
        offset: 60,
        length: 4,
        style: 'ITALIC',
      },
      {
        offset: 68,
        length: 5,
        style: 'ITALIC',
      },
      {
        offset: 76,
        length: 5,
        style: 'ITALIC',
      },
      {
        offset: 87,
        length: 10,
        style: 'ITALIC',
      },
      {
        offset: 98,
        length: 6,
        style: 'ITALIC',
      },
      {
        offset: 106,
        length: 6,
        style: 'ITALIC',
      },
      {
        offset: 113,
        length: 6,
        style: 'ITALIC',
      },
      {
        offset: 120,
        length: 6,
        style: 'ITALIC',
      },
      {
        offset: 127,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 131,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 133,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 135,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 141,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 143,
        length: 1,
        style: 'ITALIC',
      },
    ],
    entityRanges: [],
    data: {},
  },
  italicEscapeBoldChar: {
    text: '*AA*AA* B*BB*B C*CC*C EE*EE F*FFF G*GGG H*HHH* I*III *JJ*JJ* *KK*KK L*LL*L M*MMM* N*NN*N *| O*OO**O PP**PP **KK**KK | **RRRR** **SS**SS **TT**TT U**UU**U',
    type: 'unstyled',
    depth: 0,
    inlineStyleRanges: [{
        offset: 1,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 10,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 18,
        length: 2,
        style: 'ITALIC',
      },
      {
        offset: 26,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 38,
        length: 2,
        style: 'ITALIC',
      },
      {
        offset: 43,
        length: 3,
        style: 'ITALIC',
      },
      {
        offset: 49,
        length: 2,
        style: 'ITALIC',
      },
      {
        offset: 54,
        length: 3,
        style: 'ITALIC',
      },
      {
        offset: 60,
        length: 3,
        style: 'ITALIC',
      },
      {
        offset: 68,
        length: 5,
        style: 'ITALIC',
      },
      {
        offset: 77,
        length: 4,
        style: 'ITALIC',
      },
      {
        offset: 84,
        length: 6,
        style: 'ITALIC',
      },
      {
        offset: 91,
        length: 7,
        style: 'ITALIC',
      },
      {
        offset: 100,
        length: 6,
        style: 'ITALIC',
      },
      {
        offset: 109,
        length: 7,
        style: 'ITALIC',
      },
      {
        offset: 117,
        length: 9,
        style: 'ITALIC',
      },
      {
        offset: 129,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 134,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 138,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 142,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 148,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 152,
        length: 1,
        style: 'ITALIC',
      },
      {
        offset: 5,
        length: 2,
        style: 'BOLD',
      },
      {
        offset: 11,
        length: 2,
        style: 'BOLD',
      },
      {
        offset: 17,
        length: 1,
        style: 'BOLD',
      },
      {
        offset: 22,
        length: 1,
        style: 'BOLD',
      },
      {
        offset: 27,
        length: 3,
        style: 'BOLD',
      },
      {
        offset: 33,
        length: 3,
        style: 'BOLD',
      },
      {
        offset: 40,
        length: 3,
        style: 'BOLD',
      },
      {
        offset: 49,
        length: 2,
        style: 'BOLD',
      },
      {
        offset: 57,
        length: 3,
        style: 'BOLD',
      },
      {
        offset: 66,
        length: 2,
        style: 'BOLD',
      },
      {
        offset: 70,
        length: 4,
        style: 'BOLD',
      },
      {
        offset: 75,
        length: 4,
        style: 'BOLD',
      },
      {
        offset: 85,
        length: 5,
        style: 'BOLD',
      },
      {
        offset: 91,
        length: 4,
        style: 'BOLD',
      },
      {
        offset: 100,
        length: 6,
        style: 'BOLD',
      },
      {
        offset: 109,
        length: 7,
        style: 'BOLD',
      },
      {
        offset: 117,
        length: 9,
        style: 'BOLD',
      },
      {
        offset: 129,
        length: 1,
        style: 'BOLD',
      },
      {
        offset: 134,
        length: 1,
        style: 'BOLD',
      },
      {
        offset: 139,
        length: 3,
        style: 'BOLD',
      },
      {
        offset: 143,
        length: 1,
        style: 'BOLD',
      },
      {
        offset: 145,
        length: 3,
        style: 'BOLD',
      },
      {
        offset: 149,
        length: 3,
        style: 'BOLD',
      },
    ],
    entityRanges: [],
    data: {},
  },
};

export default expectedRawData;
