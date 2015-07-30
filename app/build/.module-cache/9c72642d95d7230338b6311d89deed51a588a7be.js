var Banner = React.createClass({displayName: "Banner",
  render: function() {
    return (
        React.createElement("img", {src: "img/Banner.png"})
    );
  }
});

var QuestionPanel = React.createClass({displayName: "QuestionPanel",
  render: function() {
    var data = {data};
    return (
        React.createElement("div", {id: "QuestionPanel"}, 
          React.createElement("div", {id: "questionTag"}, 
            data.questionTag, 
            data, 
            "hello"
          ), 
          React.createElement("div", {id: "questionText"}
          ), 
          React.createElement("div", {id: "OptionPanel"}
          )
        )
    );
  }
});

var AnswerPanel = React.createClass({displayName: "AnswerPanel",
  render: function() {
    return (
        React.createElement("div", {id: "AnswerPanel"}, 
          React.createElement("div", {className: "answerBox"}, 
            React.createElement("span", {className: "answerLabel"}), 
            React.createElement("span", {className: "answerTag"})
          ), 
          React.createElement("div", {className: "ExplanationBox"}
          )
        )
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
