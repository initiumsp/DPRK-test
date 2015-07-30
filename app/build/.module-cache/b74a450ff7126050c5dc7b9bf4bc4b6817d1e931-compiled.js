"use strict";

var Banner = React.createClass({ displayName: "Banner",
  render: function render() {
    return React.createElement("img", { src: "img/Banner.png" });
  }
});

var QuestionPanel = React.createClass({ displayName: "QuestionPanel",
  render: function render() {
    var data = { data: data };
    return React.createElement("div", { id: "QuestionPanel", data: data }, React.createElement("div", { id: "questionTag", data: data }), React.createElement("div", { id: "questionText" }), React.createElement("div", { id: "OptionPanel" }));
  }
});

var AnswerPanel = React.createClass({ displayName: "AnswerPanel",
  render: function render() {
    return React.createElement("div", { id: "AnswerPanel" }, React.createElement("div", { className: "answerBox" }, React.createElement("span", { className: "answerLabel" }), React.createElement("span", { className: "answerTag" })), React.createElement("div", { className: "ExplanationBox" }));
  }
});

var Card = React.createClass({ displayName: "Card",
  render: function render() {
    return React.createElement("div", { id: "Card" }, React.createElement(Banner, null), React.createElement(QuestionPanel, { data: data }), React.createElement(AnswerPanel, { data: data }));
  }
});

React.render(React.createElement(Card, { data: app.survey[0] }), document.getElementById("content"));

//# sourceMappingURL=b74a450ff7126050c5dc7b9bf4bc4b6817d1e931-compiled.js.map