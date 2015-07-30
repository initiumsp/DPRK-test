"use strict";

var Card = React.createClass({ displayName: "Card",
  render: function render() {
    return React.createElement("div", null, "Hello world!");
  }
});

React.render(React.createElement(Card, { data: app.survey[0] }), document.getElementById("content"));

alert(document.getElementById("content"));

//# sourceMappingURL=f05392e9fad74f19b045c1d761d24b80fb22ddc1-compiled.js.map