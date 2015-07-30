"use strict";

var Card = React.createClass({ displayName: "Card",
    render: function render() {
        return React.createElement("div", { id: "card" });
    }
});

React.render(React.createElement(Card, { data: app.survey[0] }), document.getElementById("content"));

//# sourceMappingURL=4f85508f634f512a1daca5ecf488d1c6860d94e9-compiled.js.map