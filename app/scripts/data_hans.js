var nkoreaTest = {
  codeName: "DPRK-test",
  title: "朝鲜新知识模拟考试",
  url: 'http://dprk-test.initiumdata.com',
  shareImgRelativePath: './img/screenshot.png',
  bannerImgRelativePath: './img/banner_hans.png',

  totalScore: 0,
  scorePerQuestion: 20,
};

nkoreaTest.text = {
    answerLabel: "答案:",
    nextButtonLabel: "下一题！",
    scoreDescription: "我在当代朝鲜各科知识模拟测试获得了",
    shareHint: "分，你们谁能打赢我？",
    fulltextRecommendation: "点击阅读脱北青年独家专访，看一个社会价值重塑、青年寻找自我的现代朝鲜。文章链接：",
    facebookShareButtonText: "分享到Facebook",
    ShareToWeiboText: "分享到新浪微博",
    lastButtonLabel : "看我几分!",
    marketingInfoboxInnerHTML:
    '<span style="color: red"><strong>「端」APP：</strong>' +
    '<a href="https://theinitium.com/download/" style="color: red">https://theinitium.com/download</a></span>' +
    '<br />' +
    '<strong>「端」网：</strong><a href="http://theinitum.com">theinitum.com</a>' +
    '<br />' +
    '<strong>「端」报：</strong>香港发行，逢周五出版' + '<br />' +
    '<strong>端app：（中国内地用户）</strong><a href="https://theinitium.com/download/?force_cn=true">https://theinitium.com/download/?force_cn=true</a>'
};

nkoreaTest.survey = [
  {
    "serial": 0,
    "questionTag": "数学题",
    "questionText": "伟大的金日成将军领导的抗日游击队攻击日本军队，杀了18个日本兵，抓住了28个，跑掉了50个，一共有多少个日本兵？",
    "optionContainsImage": false,
    "options": [
      {"optionTag": "A", "optionText":"46"},
      {"optionTag": "B", "optionText":"96"},
      {"optionTag": "C", "optionText":"不计其数"}
    ],
    "correctOptionTag": "B",
    "ExplanationText": "解析：已逃离朝鲜20年的脱北者金达（化名）回忆，这道题是当年真的出现过在朝鲜课本中的应用题，但他发现如今的孩子已经不用做这样的应用题。"
  },
  {
    "serial": 1,
    "questionTag": "历史题",
    "questionText": "金正恩是几岁学会打枪的？",
    "optionContainsImage": false,
    "options": [
      {"optionTag": "A", "optionText":"3岁"},
      {"optionTag": "B", "optionText":"13岁"},
      {"optionTag": "C", "optionText":"23岁"}
    ],
    "correctOptionTag": "A",
    "ExplanationText": "解析：朝鲜儿童从小学习领导人家庭史：小学学习领导人的少年时代，中学学习青年时代，高中学习思想理论。朝鲜高中生朴常凯（化名）记得，从2013年开始，学校会安排关于金正恩的讲座，讲座中提到，金正恩3岁会开枪，6岁和美国选手比赛快艇获胜。"
  },
  {
      "serial": 2,
      "questionTag": "礼仪题",
      "questionText": "在金正恩时代的朝鲜，城市年轻女性的流行穿著是？",
      "optionContainsImage": true,
      "options": [
          {"optionTag": "A", "optionText":"西方白领风格的女式工作西装", 'imagePath': "img/dressA.png"},
          {"optionTag": "B", "optionText":"深色朴素的长衣＋长裤", "imagePath": "img/dressB.png"},
          {"optionTag": "C", "optionText":"修身连衣裙＋短款上衣", "imagePath": "img/dressC.png"},
          {"optionTag": "D", "optionText":"鲜艳的朝鲜民族服饰", "imagePath": "img/dressD.png"}
      ],
      "correctOptionTag": "C",
      "ExplanationText": "据脱北者李雪花（化名）说，时下朝鲜最流行金正恩妻子李雪主风格的女式裙装。以前想都不敢想的中央艺术团演员装如今在市场可购，很多人模仿李雪主的穿著，通常为修身连衣裙加短款上衣，裙长度要在膝盖之下。"
  },
  {
    "serial": 3,
    "questionTag": "科技题",
    "questionText": "如今的朝鲜也开始出售平板电脑，以下哪些事无法用朝鲜的平板电脑做到？",
    "optionContainsImage": false,
    "options": [
      {"optionTag": "A", "optionText":"玩游戏"},
      {"optionTag": "B", "optionText":"学习领袖思想"},
      {"optionTag": "C", "optionText":"看AV"},
      {"optionTag": "D", "optionText":"毫无压力，以上皆可"}
    ],
    "correctOptionTag": "D",
    "ExplanationText": "朝鲜自产平板电脑约200美元，预装领袖历史、思想一类电子书，可玩游戏。朝鲜青年主要用平板电脑看电影和电视剧，在中朝两地走私的26岁的李铁平（化名）透露，朋友间也流行咸书和成人电影，要小心防止警察查到。"
  },
  {
    "serial": 4,
    "questionTag": "音乐题",
    "questionText": "以下哪首歌在当今朝鲜最为流行？",
    "optionContainsImage": false,
    "options": [
      {"optionTag": "A", "optionText":"《将军与水兵》：我们的船舰！寻找著敬爱的将军！"},
      {"optionTag": "B", "optionText":"《没有你就没有祖国》：没有你就没有我们！没有你就没有祖国！"},
      {"optionTag": "C", "optionText":"《春天年年到人间》：百花争豔百花争豔，我们失去祖国没有春天……"},
      {"optionTag": "D", "optionText":"《脚步》：擦擦擦擦擦的脚步声！我们金将军的脚步声！"}
    ],
    "correctOptionTag": "D",
    "ExplanationText": "解析：青年脱北者金申姬（化名）最早听说金正恩是在2010年，当时朝鲜政府普及一首赞美他的新歌《脚步》。一年后，歌词中的队长变成了将军。其他歌曲是过往的流行歌曲。"
  }
];


nkoreaTest.scoreComments = {
"0": "你其实是不是连“朝鲜”这两个字都不认识？请阅读下方文章，温习后补考。",
"20": "当今的朝鲜，已经与你的想像大相径庭。点击下文，看当代朝鲜全景。",
"40": "不合格，你对伟大社会主义国家的了解还不够深。",
"60": "勉强合格，距离代表外交部出使朝鲜还有一段距离。",
"80": "高分通过，你一定很关心时事，或者天生很适合生活在朝鲜。",
"100": "高材生！……确定不是偷看了下文的答案才来做题的？"
};
