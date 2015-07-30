"use strict";

var Banner = React.createClass({ displayName: "Banner"

});

var Card = React.createClass({ displayName: "Card",
  render: function render() {
    return React.createElement("div", { id: "card" }, React.createElement(Banner, null), React.createElement(QuestionPanel, null), React.createElement(AnswerPanel, null));
  }
});

React.render(React.createElement(Card, { data: app.survey[0] }), document.getElementById("content"));

//# sourceMappingURL=c551d6bcf8c5c04a93dd55ce20786cfb269adf7f-compiled.js.map