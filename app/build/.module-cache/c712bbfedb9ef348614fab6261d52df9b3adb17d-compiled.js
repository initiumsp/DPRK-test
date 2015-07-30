"use strict";

var Banner = React.createClass({ displayName: "Banner",
  render: function render() {
    return React.createElement("div", { id: "Banner" }, React.createElement("img", { src: "img/Banner.png" }));
  }
});

var QuestionPanel = React.createClass({ displayName: "QuestionPanel",
  render: function render() {

    var optionBoxes;

    optionBoxes = this.props.data.options.map(function (option) {
      return React.createElement("div", { "class": "optionBox" }, React.createElement("input", { type: "checkbox" }), React.createElement("span", { "class": "optionTag" }, option.optionTag), React.createElement("span", { "class": "optionText" }, option.optionText));
    });

    return React.createElement("div", { id: "QuestionPanel", data: this.props.data }, React.createElement("div", { id: "questionTag" }, this.props.data.questionTag), React.createElement("div", { id: "questionText" }, this.props.data.questionText), React.createElement("div", { id: "OptionPanel" }, optionBoxes));
  }
});

var AnswerPanel = React.createClass({ displayName: "AnswerPanel",
  render: function render() {
    return React.createElement("div", { id: "AnswerPanel", data: this.props.data }, React.createElement("div", { className: "answerBox" }, React.createElement("div", { className: "answerInnerBox" }, React.createElement("span", { className: "answerLabel" }, app.answerLabel), React.createElement("span", { className: "answerTag" }, this.props.data.correctOptionTag))), React.createElement("div", { className: "ExplanationBox" }, this.props.data.ExplanationText));
  }
});

var Card = React.createClass({ displayName: "Card",
  render: function render() {
    return React.createElement("div", { id: "Card" }, React.createElement(Banner, null), React.createElement(QuestionPanel, { data: this.props.questionData }), React.createElement(AnswerPanel, { data: this.props.answerData }));
  }
});

React.render(React.createElement(Card, { questionData: app.survey[0], answerData: app.survey[0] }), document.getElementById("content"));

//# sourceMappingURL=c712bbfedb9ef348614fab6261d52df9b3adb17d-compiled.js.map