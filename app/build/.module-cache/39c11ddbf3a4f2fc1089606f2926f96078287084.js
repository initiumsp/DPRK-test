var Banner = React.createClass({displayName: "Banner",
  render: function() {
    return (
        React.createElement("img", {src: "img/Banner.png"})
    );
  }
});

var QuestionPanel = React.createClass({displayName: "QuestionPanel",
  render: function() {
    return (
        React.createElement("div", {id: "QuestionPanel"}, 
          "QuestionPanel"
        )
        // TODO
    );
  }
});

var AnswerPanel = React.createClass({displayName: "AnswerPanel",
  render: function() {
    return (
        React.createElement("div", {id: "AnswerPanel"}, 
          "AnswerPanel"
        )
        // TODO
    );
  }
});

var Card = React.createClass({displayName: "Card",
  render: function() {
    return (
        React.createElement("div", {id: "Card"}, 
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

