"use strict";

alert(document.getElementById("content"));
var Card = React.createClass({ displayName: "Card",
  render: function render() {
    return React.createElement("div", null, "Hello world!");
  }
});

React.render(React.createElement(Card, { data: app.survey[0] }), document.getElementById("content"));

//# sourceMappingURL=3e29c747340edc67f263e45118cd5924b19a405b-compiled.js.map