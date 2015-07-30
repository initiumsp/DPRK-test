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
  "serial": 1,
  "questionTag": "歷史題",
  "questionText": "我們的偉大領袖金正恩是幾歲學會打槍的？",
  "optionContainsImage": false,
  "options": [{ "optionTag": "A", "optionText": "3歲" }, { "optionTag": "B", "optionText": "13歲" }, { "optionTag": "C", "optionText": "23歲" }],
  "correctOptionTag": "A",
  "ExplanationText": "解析：朝鮮兒童從小學習領導人家庭史：小學學習領導人的少年時代，中學學習青年時代，高中學習思想理論。學校會安排關於金正恩的講座，講座中提到，金正恩3歲會開槍，6歲和美國選手比賽快艇獲勝。"
}];

app.answerLabel = "答案:";

//# sourceMappingURL=5b2475094b47d95ff16ca389aad98e06cb818dbb-compiled.js.map