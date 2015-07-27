var Card = React.createClass({displayName: "Card",
  render: function() {
    return (
        React.createElement("div", null, 
          "Hello world!"
        )
    );
  }
});

React.render(
    React.createElement(Card, {data: app.survey[0]}),
    document.getElementById('content')
);

