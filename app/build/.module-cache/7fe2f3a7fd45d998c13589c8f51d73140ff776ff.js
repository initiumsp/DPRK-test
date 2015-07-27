var Banner = React.createClass({displayName: "Banner",
  render: function() {
    return (
        React.createElement("img", {src: ""})
        // TODO: workout the img sources
    );
  }
});

var QuestionPanel = React.createClass({displayName: "QuestionPanel",
  render: function() {
    return (
        React.createElement("div", {id: "questionTag"})
    )
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

