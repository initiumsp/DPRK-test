var Banner = React.createClass({
  render: function() {
    return (
        <div id="Banner">
          <img src="img/Banner.png" />
        </div>
    );
  }
});

var QuestionPanel = React.createClass({
  render: function() {
    var optionBoxes = [];
    return (
        <div id="QuestionPanel" data={this.props.data}>
          <div id="questionTag">
            {this.props.data.questionTag}
          </div>
          <div id="questionText">
            {this.props.data.questionText}
          </div>
          <div id="OptionPanel">
            {optionBoxes}
          </div>
        </div>
    );
  }
});

var AnswerPanel = React.createClass({
  render: function() {
    return (
        <div id="AnswerPanel" data={this.props.data}>
          <div className="answerBox">
            <div className="answerInnerBox">
              <span className="answerLabel">
                {app.answerLabel}
              </span>
              <span className="answerTag">
                {this.props.data.correctOptionTag}
              </span>
            </div>
          </div>
          <div className="ExplanationBox">
            {this.props.data.ExplanationText}
          </div>
        </div>
    );
  }
});

var Card = React.createClass({
  render: function() {
    return (
        <div id="Card">
          <Banner />
          <QuestionPanel data={this.props.questionData} />
          <AnswerPanel data={this.props.answerData} />
        </div>
    );
  }
});

React.render(
    <Card questionData={app.survey[0]} answerData={app.survey[0]} />,
    document.getElementById('content')
);
