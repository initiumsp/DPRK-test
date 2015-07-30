"use strict";

var Banner = React.createClass({ displayName: "Banner",
  render: function render() {
    return React.createElement("div", { id: "Banner" }, React.createElement("img", { src: "img/Banner.png" }));
  }
});

var QuestionPanel = React.createClass({ displayName: "QuestionPanel",

  render: function render() {
    var optionBoxes;
    app.handleCheckboxChange = function (event) {
      alert("wow");
    };
    if (this.props.data.optionContainsImage) {} else {
      optionBoxes = this.props.data.options.map(function (option) {
        return React.createElement("div", { "class": "optionBox" }, React.createElement("label", null, React.createElement("input", { type: "checkbox",
          name: option.optionTag,
          onChange: this.handleCheckboxChange }), React.createElement("span", { "class": "optionTag" }, option.optionTag), React.createElement("span", { "class": "optionText" }, option.optionText)));
      });
    }

    return React.createElement("div", { id: "QuestionPanel", data: this.props.data }, React.createElement("div", { id: "questionTag" }, this.props.data.questionTag), React.createElement("div", { id: "questionText" }, this.props.data.questionText), React.createElement("div", { id: "OptionPanel" }, optionBoxes));
  }
});

var AnswerPanel = React.createClass({ displayName: "AnswerPanel",
  render: function render() {
    return React.createElement("div", { id: "AnswerPanel", data: this.props.data }, React.createElement("div", { className: "answerBox" }, React.createElement("div", { className: "answerInnerBox" }, React.createElement("span", { className: "answerLabel" }, app.answerLabel), React.createElement("span", { className: "answerTag" }, this.props.data.correctOptionTag))), React.createElement("div", { className: "ExplanationBox" }, this.props.data.ExplanationText));
  }
});

var Card = React.createClass({ displayName: "Card",
  getInitialState: function getInitialState() {
    return {
      questionSerial: 0,
      answerSerial: 0
    };
  },

  render: function render() {
    return React.createElement("div", { id: "Card", surveyData: this.props.surveyData }, React.createElement(Banner, null), React.createElement(QuestionPanel, { data: this.props.surveyData[this.state.questionSerial] }), React.createElement(AnswerPanel, { data: this.props.surveyData[this.state.answerSerial] }));
  }
});

React.render(React.createElement(Card, { surveyData: app.survey }), document.getElementById("content"));

//TODO

//# sourceMappingURL=ffd2318d537f81ae53ea8b11a33d51b75bf1f6b6-compiled.js.map