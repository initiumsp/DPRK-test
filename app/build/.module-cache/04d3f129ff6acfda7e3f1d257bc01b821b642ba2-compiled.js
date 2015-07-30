"use strict";

var Card = React.createClass({ displayName: "Card",
  render: function render() {
    return React.createElement("div", { id: "card" }, React.createElement(Banner, null), React.createElement("div", { id: "questionTag" }));
  }
});

React.render(React.createElement(Card, { data: app.survey[0] }), document.getElementById("content"));

//# sourceMappingURL=04d3f129ff6acfda7e3f1d257bc01b821b642ba2-compiled.js.map