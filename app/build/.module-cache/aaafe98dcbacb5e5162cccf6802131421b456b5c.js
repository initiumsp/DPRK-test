var Banner = React.createClass({displayName: "Banner",
  render: function() {
    return (
        React.createElement("img", {src: ""})
    );
  }
});

var Card = React.createClass({displayName: "Card",
  render: function() {
    return (
        React.createElement("div", {id: "card"}, 
          React.createElement(Banner, null), 
          React.createElement(QuestionPanel, null), 
          React.createElement(AnswerPanel, null)
        )
    );
  }
});

React.render(
    React.createElement(Card, {data: app.survey[0]}),
    document.getElementById('content')
);

