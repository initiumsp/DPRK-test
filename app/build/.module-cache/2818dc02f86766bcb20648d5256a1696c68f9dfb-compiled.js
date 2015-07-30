"use strict";

var Banner = React.createClass({ displayName: "Banner",
  render: function render() {
    return React.createElement("img", { src: "" })
    // TODO: workout the img sources
    ;
  }
});

var QuestionPanel = React.createClass({ displayName: "QuestionPanel",
  render: function render() {
    return React.createElement("div", { id: "QuestionPanel" }, "QuestionPanel")
    // TODO
    ;
  }
});

var AnswerPanel = React.createClass({ displayName: "AnswerPanel",
  render: function render() {
    return React.createElement("div", { id: "AnswerPanel" }, "AnswerPanel")
    // TODO
    ;
  }
});

var Card = React.createClass({ displayName: "Card",
  render: function render() {
    return React.createElement("div", { id: "card" }, React.createElement(Banner, null), React.createElement(QuestionPanel, null), React.createElement(AnswerPanel, null));
  }
});

React.render(React.createElement(Card, { data: app.survey[0] }), document.getElementById("content"));

//# sourceMappingURL=2818dc02f86766bcb20648d5256a1696c68f9dfb-compiled.js.map