var Card = React.createClass({displayName: "Card",
  render: function() {
    return (
        React.createElement("div", {id: "card"}, 
          "Hello World!"
        )
    );
  }
});

React.render(
    React.createElement(Card, {data: app.survey[0]}),
    document.getElementById('content')
);

