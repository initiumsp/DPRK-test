var app = {
  codeName: "DPRK-test",
  currentQuestionSerial: 0,
  currentAnswerSerial: 0
};

app.survey = [
  {
    "serial": 0,
    "questionTag": "數學題",
    "questionText": "金日成將軍殺了10個日本侵略者，金正日將軍殺了6個日本侵略者，他們一共殺了多少日本侵略者?",
    "optionContainsImage": false,
    "options": [
      {"optionTag": "A", "optionText":"大約200個"},
      {"optionTag": "B", "optionText":"16"},
      {"optionTag": "C", "optionText":"不計其數"}
    ],
    "correctOptionTag": "B",
    "ExplanationText": "解析：已逃離朝鮮20年的脫北者金達（化名）回憶，“金日成將軍殺了10個日本侵略者，金正日將軍殺了6個日本侵略者，他們一共殺了多少日本侵略者?”，是二三十年前真正出現在朝鮮課本中的應用題。"
  },
  {
    "serial": 1,
    "questionTag": "數學題",
    "questionText": "金日成將軍殺了10個日本侵略者，金正日將軍殺了6個日本侵略者，他們一共殺了多少日本侵略者?",
    "optionContainsImage": false,
    "options": [
      {"optionTag": "A", "optionText":"大約200個"},
      {"optionTag": "B", "optionText":"16"},
      {"optionTag": "C", "optionText":"不計其數"}
    ],
    "correctOptionTag": "B",
    "ExplanationText": "解析：已逃離朝鮮20年的脫北者金達（化名）回憶，“金日成將軍殺了10個日本侵略者，金正日將軍殺了6個日本侵略者，他們一共殺了多少日本侵略者?”，是二三十年前真正出現在朝鮮課本中的應用題。"
  },
];

app.answerLabel = "答案:";