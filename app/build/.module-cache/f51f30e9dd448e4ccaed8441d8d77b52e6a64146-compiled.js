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
    return React.createElement("div", { id: "Card" }, React.createElement(Banner, null), React.createElement(QuestionPanel, null), React.createElement(AnswerPanel, null));
  }
});

React.render(React.createElement(Card, { data: app.survey[0] }), document.getElementById("content"));

//# sourceMappingURL=f51f30e9dd448e4ccaed8441d8d77b52e6a64146-compiled.js.map