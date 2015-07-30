"use strict";

var app = {
  codeName: "DPRK-test",
  currentQuestionSerial: 0,
  currentAnswerSerial: 0
};

app.survey = [{
  "serial": 0,
  "questionTag": "數學題",
  "questionText": "金日成將軍殺了10個日本侵略者，金正日將軍殺了6個日本侵略者，他們一共殺了多少日本侵略者?",
  "optionContainsImage": false,
  "options": [{ "optionTag": "A", "optionText": "大約200個" }, { "optionTag": "B", "optionText": "16" }, { "optionTag": "C", "optionText": "不計其數" }],
  "correctOptionTag": "B",
  "ExplanationText": "解析：已逃離朝鮮20年的脫北者金達（化名）回憶，“金日成將軍殺了10個日本侵略者，金正日將軍殺了6個日本侵略者，他們一共殺了多少日本侵略者?”，是二三十年前真正出現在朝鮮課本中的應用題。"
}, {
  "serial": 1,
  "questionTag": "歷史題",
  "questionText": "我們的偉大領袖金正恩是幾歲學會打槍的？",
  "optionContainsImage": false,
  "options": [{ "optionTag": "A", "optionText": "3歲" }, { "optionTag": "B", "optionText": "13歲" }, { "optionTag": "C", "optionText": "23歲" }],
  "correctOptionTag": "A",
  "ExplanationText": "解析：朝鮮兒童從小學習領導人家庭史：小學學習領導人的少年時代，中學學習青年時代，高中學習思想理論。學校會安排關於金正恩的講座，講座中提到，金正恩3歲會開槍，6歲和美國選手比賽快艇獲勝。"
}, {
  "serial": 2,
  "questionTag": "禮儀題",
  "questionText": "在金正恩將軍時代，女同學18岁後一般會穿什麼？",
  "optionContainsImage": true,
  "options": [{ "optionTag": "A", "optionText": "西方白領風格的女式工作西裝" }, { "optionTag": "B", "optionText": "深色樸素的長衣＋長褲" }, { "optionTag": "C", "optionText": "修身連衣裙＋短款上衣" }, { "optionTag": "D", "optionText": "鮮豔的朝鮮民族服飾 " }],
  "correctOptionTag": "C",
  "ExplanationText": "脫北者李雪花（化名）說，時下朝鮮最流行金正恩妻子李雪主風格的女式裙裝。以前想都不敢想的中央藝術團演員裝如今在市場可購，很多人模仿李雪主的穿著，通常為修身連衣裙加短款上衣，裙長度要在膝蓋之下。"
}, {
  "serial": 3,
  "questionTag": "科技題",
  "questionText": "長大以後，作為祖國的建設者，你買了一部金將軍指導下生產的平板電腦，以下哪些事無法用平板電腦做到？",
  "optionContainsImage": true,
  "options": [{ "optionTag": "A", "optionText": "玩遊戲" }, { "optionTag": "B", "optionText": "學習偉大領袖思想" }, { "optionTag": "C", "optionText": "看AV" }, { "optionTag": "D", "optionText": "毫無壓力，以上皆可" }],
  "correctOptionTag": "C",
  "ExplanationText": "脫北者李雪花（化名）說，時下朝鮮最流行金正恩妻子李雪主風格的女式裙裝。以前想都不敢想的中央藝術團演員裝如今在市場可購，很多人模仿李雪主的穿著，通常為修身連衣裙加短款上衣，裙長度要在膝蓋之下。"
}];

app.answerLabel = "答案:";

//# sourceMappingURL=3349ce367927e2e94c89b66ea58cffee2c78ddde-compiled.js.map