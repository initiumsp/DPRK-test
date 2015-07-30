"use strict";

var Card = React.createClass({ displayName: "Card",
  render: function render() {
    return React.createElement("div", { id: "card" }, "Hello World!");
  }
});

React.render(React.createElement(Card, { data: app.survey[0] }), document.getElementById("content"));

//# sourceMappingURL=81706f7531d46b2007104d9de7146593fdbba905-compiled.js.map