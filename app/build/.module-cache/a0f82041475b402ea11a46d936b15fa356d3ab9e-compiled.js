"use strict";

var Banner = React.createClass({ displayName: "Banner",
  render: function render() {
    return React.createElement("img", { src: "img/Banner.png" });
  }
});

var QuestionPanel = React.createClass({ displayName: "QuestionPanel",
  render: function render() {
    return React.createElement("div", { id: "QuestionPanel", data: this.props.data }, React.createElement("div", { id: "questionTag" }, this.props.data.questionTag), React.createElement("div", { id: "questionText" }, this.props.data.questionText), React.createElement("div", { id: "OptionPanel" }));
  }
});

var AnswerPanel = React.createClass({ displayName: "AnswerPanel",
  render: function render() {
    return React.createElement("div", { id: "AnswerPanel", data: this.props.data }, React.createElement("div", { className: "answerBox" }, React.createElement("span", { className: "answerLabel" }, app.answerLabel), React.createElement("span", { className: "answerTag" })), React.createElement("div", { className: "ExplanationBox" }));
  }
});

var Card = React.createClass({ displayName: "Card",
  render: function render() {
    return React.createElement("div", { id: "Card" }, React.createElement(Banner, null), React.createElement(QuestionPanel, { data: this.props.questionData }), React.createElement(AnswerPanel, { data: this.props.answerData }));
  }
});

React.render(React.createElement(Card, { questionData: app.survey[0], answerData: app.survey[0] }), document.getElementById("content"));

//# sourceMappingURL=a0f82041475b402ea11a46d936b15fa356d3ab9e-compiled.js.map