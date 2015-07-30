"use strict";

var Card = React.createClass({ displayName: "Card",
  render: function render() {
    return React.createElement("div", { id: "card" }, React.createElement(Banner, null));
  }
});

React.render(React.createElement(Card, { data: app.survey[0] }), document.getElementById("content"));

//# sourceMappingURL=e2368bca2e0d8b7d10acb3aae86a60e1d66d9250-compiled.js.map