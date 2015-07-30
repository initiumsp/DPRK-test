"use strict";

var Card = React.createClass({ displayName: "Card",
  render: function render() {
    return React.createElement("div", null, "Hello world!");
  }
});

React.render(React.createElement(Card, { data: app.survey[0] }), document.getElementById("content"));

//# sourceMappingURL=793f1350aced048304d4e15fdc714ad8dc4b8a27-compiled.js.map