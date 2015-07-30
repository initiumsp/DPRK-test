"use strict";

var Banner = React.createClass({ displayName: "Banner",
  render: function render() {
    return React.createElement("div", { id: "Banner" }, React.createElement("img", { src: "img/Banner.png" }));
  }
});

var QuestionPanel = React.createClass({ displayName: "QuestionPanel",

  handleCheckboxClick: function handleCheckboxClick(i) {
    alert(this.props.data.options[i]);
  },

  render: function render() {
    var optionBoxes;
    if (this.props.data.optionContainsImage) {} else {
      optionBoxes = this.props.data.options.map(function (option, i) {
        return React.createElement("div", { className: "optionBox" }, React.createElement("label", null, React.createElement("input", { type: "checkbox",
          name: option.optionTag,
          onChange: this.handleCheckboxClick.bind(this, i),
          key: i }), React.createElement("span", { className: "optionTag" }, option.optionTag), React.createElement("span", { className: "optionText" }, option.optionText)));
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
      answerSerial: 0,
      showAnswer: false
    };
  },

  handleClick: function handleClick(event) {
    this.setState({ showAnswer: true });
  },

  render: function render() {
    return React.createElement("div", { id: "Card", surveyData: this.props.surveyData }, React.createElement(Banner, null), React.createElement(QuestionPanel, { data: this.props.surveyData[this.state.questionSerial] }), this.state.showAnswer ? React.createElement(AnswerPanel, { data: this.props.surveyData[this.state.answerSerial] }) : null, React.createElement("button", { onClick: this.handleClick }, "Show Answer"));
  }
});

React.render(React.createElement(Card, { surveyData: app.survey }), document.getElementById("content"));

//TODO

//# sourceMappingURL=0e7c37583699be01d69b9e2f50dfb112e5490f9c-compiled.js.map