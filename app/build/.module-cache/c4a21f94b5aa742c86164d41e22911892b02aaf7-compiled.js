"use strict";

var Banner = React.createClass({ displayName: "Banner",
  render: function render() {
    return React.createElement("div", { id: "Banner" }, React.createElement("img", { src: "img/Banner.png" }));
  }
});

var QuestionPanel = React.createClass({ displayName: "QuestionPanel",

  handleCheck: function handleCheck(event) {
    alert("yo");
  },

  render: function render() {

    var optionBoxes;

    if (this.props.data.optionContainsImage) {} else {
      optionBoxes = this.props.data.options.map(function (option) {
        return React.createElement("div", { "class": "optionBox" }, React.createElement("input", { type: "checkbox",
          name: option.optionTag,
          onCheckboxStateChange: this.handleCheck }), React.createElement("span", { "class": "optionTag" }, option.optionTag), React.createElement("span", { "class": "optionText" }, option.optionText));
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

//# sourceMappingURL=c4a21f94b5aa742c86164d41e22911892b02aaf7-compiled.js.map