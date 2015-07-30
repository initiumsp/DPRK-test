"use strict";

var Banner = React.createClass({ displayName: "Banner",
  render: function render() {
    return React.createElement("div", { id: "Banner" }, React.createElement("img", { src: "img/Banner.png" }));
  }
});

var QuestionPanel = React.createClass({ displayName: "QuestionPanel",

  getInitialState: function getInitialState() {
    return {};
  },

  handleCheckboxClick: function handleCheckboxClick(clickedOptionTag, event) {

    // Guard against multiple clicks
    if (!nkoreaTest.checkboxActive) {
      return;
    }
    nkoreaTest.checkboxActive = false;

    nkoreaTest.Card.state.chosenOptionTag = clickedOptionTag;

    // All questions answered: display total score
    if (nkoreaTest.Card.state.questionSerial >= nkoreaTest.survey.length - 1) {
      React.render(React.createElement(ScorePage, null), document.getElementById("content"));
    }

    //Show the answer
    nkoreaTest.Card.setState({ showAnswer: true });

    if (clickedOptionTag === this.props.data.correctOptionTag) {
      nkoreaTest.totalScore += nkoreaTest.scorePerQuestion;
    }
  },

  getCorrectnessSign: function getCorrectnessSign(optionTag) {
    // Only show correctness sign after the chosen option
    if (optionTag !== nkoreaTest.Card.state.chosenOptionTag) {
      return "";
    }
    var correctOption = nkoreaTest.survey[nkoreaTest.Card.state.questionSerial].correctOptionTag;
    if (nkoreaTest.Card.state.chosenOptionTag === null) {
      return "";
    } else if (nkoreaTest.Card.state.chosenOptionTag === correctOption) {
      return "correct!";
    } else {
      return "wrong!";
    }
  },

  render: function render() {

    if (nkoreaTest.Card.state.answerSerial >= nkoreaTest.survey.length) {
      return;
      // TODO
    }

    var optionBoxes;
    if (this.props.data.optionContainsImage) {} else {
      optionBoxes = this.props.data.options.map(function (option) {
        return React.createElement("div", { className: "optionBox", key: option.optionTag }, React.createElement("label", null, React.createElement("input", { type: "checkbox",
          name: option.optionTag,
          onChange: this.handleCheckboxClick.bind(this, option.optionTag),
          className: "checkbox" }), React.createElement("span", { className: "optionTag" }, option.optionTag), React.createElement("span", { className: "optionText" }, option.optionText), React.createElement("span", { className: "CorrectnessSign" }, this.getCorrectnessSign(option.optionTag))));
      }, this);
    }

    return React.createElement("div", { id: "QuestionPanel", data: this.props.data }, React.createElement("div", { id: "questionTag" }, this.props.data.questionTag), React.createElement("div", { id: "questionText" }, this.props.data.questionText), React.createElement("div", { id: "OptionPanel" }, optionBoxes));
  }
});

var AnswerPanel = React.createClass({ displayName: "AnswerPanel",

  handleNextButtonClick: function handleNextButtonClick(event) {
    //Show the next question
    nkoreaTest.Card.setState({ questionSerial: nkoreaTest.Card.state.questionSerial + 1,
      answerSerial: nkoreaTest.Card.state.answerSerial + 1,
      showAnswer: false
    });

    var checkboxes = document.getElementsByClassName("checkbox");
    for (var i = 0; i < checkboxes.length; i += 1) {
      checkboxes[i].checked = false;
    }
    nkoreaTest.checkboxActive = true;
  },

  render: function render() {
    return React.createElement("div", { id: "AnswerPanel", data: this.props.data, key: 0 }, React.createElement("div", { className: "answerBox" }, React.createElement("div", { className: "answerInnerBox" }, React.createElement("span", { className: "answerLabel" }, nkoreaTest.answerLabel), React.createElement("span", { className: "answerTag" }, this.props.data.correctOptionTag))), React.createElement("div", { className: "ExplanationBox" }, this.props.data.ExplanationText, React.createElement("button", { id: "next", onClick: this.handleNextButtonClick }, " ", nkoreaTest.nextButtonLabel, " ")));
  }
});

var Card = React.createClass({ displayName: "Card",
  getInitialState: function getInitialState() {
    return {
      questionSerial: 0,
      answerSerial: 0,
      showAnswer: false,
      chosenOptionTag: null
    };
  },

  render: function render() {
    nkoreaTest.Card = this;
    return React.createElement("div", { id: "Card", surveyData: this.props.surveyData }, React.createElement(Banner, null), React.createElement(QuestionPanel, { data: this.props.surveyData[this.state.questionSerial] }), this.state.showAnswer ? React.createElement(AnswerPanel, { data: this.props.surveyData[this.state.answerSerial] }) : null);
  }
});

var ScorePage = React.createClass({ displayName: "ScorePage",
  render: function render() {
    var comment = nkoreaTest.scoreComments[nkoreaTest.totalScore.toString()];
    return React.createElement("div", { id: "ScorePage" }, React.createElement("h1", null, "你的總分是：", nkoreaTest.totalScore), React.createElement("p", null, comment));
  }
});

React.render(React.createElement(Card, { surveyData: nkoreaTest.survey }), document.getElementById("content"));

// TODO: special layout for imaged stuff

//# sourceMappingURL=b521aa4dc80dc42471f7441753606952e7665c11-compiled.js.map