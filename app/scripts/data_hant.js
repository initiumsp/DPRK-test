var nkoreaTest = {
  codeName: "DPRK-test",
  title: "朝鮮新知識模擬考試",
  url: 'http://dprktest.initiumdata.com/',
  shareImgRelativePath: './img/screenshot.png',
  bannerImgRelativePath: './img/banner_hant.png',
  lang: 'zh-hant',

  totalScore: 0,
  scorePerQuestion: 20,
};

nkoreaTest.text = {
    answerLabel: "答案:",
    linkLabel: "新時代的北韓年輕人",
    nextButtonLabel: "下一題！",
    scoreDescription: "我在當代朝鮮各科知識模擬測試獲得了",
    shareHint: "分，你們誰能打贏我？",
    fulltextRecommendation: "點擊閱讀脫北青年獨家專訪，看一個社會價值重塑、青年尋找自我的現代朝鮮。文章鏈接：",
    facebookShareButtonText: "分享到Facebook",
    ShareToWeiboText: "分享到新浪微博",
    lastButtonLabel : "看我幾分!",
    marketingInfoboxInnerHTML:
      '<span style="color: red"><strong>「端」APP：</strong>' +
      '<a href="https://theinitium.com/download/?utm_source=initium&utm_medium=social&utm_campaign=dprk_test" style="color: red" target="_blank">https://theinitium.com/download</a></span>' +
      '<br />' +
      '<strong>「端」網：</strong><a href="https://theinitium.com/" target="_blank">theinitum.com</a>' +
      '<br />' +
      '<strong>「端」報：</strong>香港發行，逢週五出版' + '<br />' +
      '<strong>端app：（中國內地用戶）</strong><a href="https://theinitium.com/download/?force_cn=true&utm_source=initium&utm_medium=social&utm_campaign=dprk_test" target="_blank">' +
      'https://theinitium.com/download/?force_cn=true</a>'
};

nkoreaTest.survey = [
  {
    "serial": 0,
    "questionTag": "數學題",
    "questionText": "偉大的金日成將軍領導的抗日游擊隊攻擊日本軍隊，殺了18個日本兵，抓住了28個，跑掉了50個，一共有多少個日本兵？",
    "optionContainsImage": false,
    "options": [
      {"optionTag": "A", "optionText":"46"},
      {"optionTag": "B", "optionText":"96"},
      {"optionTag": "C", "optionText":"不計其數"}
    ],
    "correctOptionTag": "B",
    "ExplanationText": "解析：已逃離朝鮮20年的脫北者金達（化名）回憶，“這道題是當年真的出現過在朝鮮課本中的應用題，但他發現如今的孩子已經不用做這樣的應用題。"
  },
  {
    "serial": 1,
    "questionTag": "歷史題",
    "questionText": "金正恩是幾歲學會打槍的？",
    "optionContainsImage": false,
    "options": [
      {"optionTag": "A", "optionText":"3歲"},
      {"optionTag": "B", "optionText":"13歲"},
      {"optionTag": "C", "optionText":"23歲"}
    ],
    "correctOptionTag": "A",
    "ExplanationText": "解析：朝鮮兒童從小學習領導人家庭史：小學學習領導人的少年時代，中學學習青年時代，高中學習思想理論。朝鮮高中生朴常凱（化名）記得，從2013年開始，學校會安排關於金正恩的講座，講座中提到，金正恩3歲會開槍，6歲和美國選手比賽快艇獲勝。"
  },
  {
      "serial": 2,
      "questionTag": "禮儀題",
      "questionText": "在金正恩時代的朝鮮，城市年輕女性的流行穿著是？",
      "optionContainsImage": true,
      "options": [
          {"optionTag": "A", "optionText":"西方白領風格的女式工作西裝", 'imagePath': "img/dressA.png"},
          {"optionTag": "B", "optionText":"深色樸素的長衣＋長褲", "imagePath": "img/dressB.png"},
          {"optionTag": "C", "optionText":"修身連衣裙＋短款上衣", "imagePath": "img/dressC.png"},
          {"optionTag": "D", "optionText":"鮮豔的朝鮮民族服飾", "imagePath": "img/dressD.png"}
      ],
      "correctOptionTag": "C",
      "ExplanationText": "脫北者李雪花（化名）說，時下朝鮮最流行金正恩妻子李雪主風格的女式裙裝。以前想都不敢想的中央藝術團演員裝如今在市場可購，很多人模仿李雪主的穿著，通常為修身連衣裙加短款上衣，裙長度要在膝蓋之下。"
  },
  {
    "serial": 3,
    "questionTag": "科技題",
    "questionText": "如今的朝鮮也開始出售平板電腦，以下哪些事無法用朝鮮的平板電腦做到？",
    "optionContainsImage": false,
    "options": [
      {"optionTag": "A", "optionText":"玩遊戲"},
      {"optionTag": "B", "optionText":"學習領袖思想"},
      {"optionTag": "C", "optionText":"看AV"},
      {"optionTag": "D", "optionText":"毫無壓力，以上皆可"}
    ],
    "correctOptionTag": "D",
    "ExplanationText": "朝鮮自產平板電腦約200美元，預裝領袖歷史、思想一類電子書，可玩遊戲。朝鮮青年主要用平板電腦看電影和電視劇，在中朝兩地走私的26歲的李鐵平（化名）透露，朋友間也流行鹹書和成人電影，要小心防止警察查到。"
  },
  {
    "serial": 4,
    "questionTag": "音樂題",
    "questionText": "以下哪首歌是小學畢業後，一定要唱給領袖金正恩將軍聽的歌曲在當今朝鮮最為流行？",
    "optionContainsImage": false,
    "options": [
      {"optionTag": "A", "optionText":"《將軍與水兵》：我們的船艦！尋找著敬愛的將軍！"},
      {"optionTag": "B", "optionText":"《沒有你就沒有祖國》：沒有你就沒有我們！沒有你就沒有祖國！"},
      {"optionTag": "C", "optionText":"《春天年年到人間》：百花爭豔百花爭豔，我們失去祖國沒有春天……"},
      {"optionTag": "D", "optionText":"《腳步》：擦擦擦擦擦的腳步聲！我們金將軍的腳步聲！"}
    ],
    "correctOptionTag": "D",
    "ExplanationText": "青年脫北者金申姬（化名）最早聽說金正恩是在2010年，當時朝鮮政府普及一首贊美他的新歌《腳步》。一年後，歌詞中的隊長變成了將軍。其他歌曲是過往的流行歌曲。"
  }
];


nkoreaTest.scoreComments = {
"0": "同學，你其實是不是連“朝鮮”這兩個字都不認識？請閱讀下方文章溫習資料後補考。",
"20": "當今的朝鮮，已經與你的想像大相徑庭。點擊下文，看當代朝鮮全景。",
"40": "不合格，你對偉大社會主義國家的了解還不夠深。",
"60": "勉強合格，距離代表外交部出使朝鮮還有一段距離。",
"80": "高分通過，你一定很關心時事，或者天生很適合生活在朝鮮。",
"100": "高材生！……確定不是偷看了下文的答案才來做題的？"
};
