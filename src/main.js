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
    var optionBoxes;
    if (this.props.data.optionContainsImage) {
      //TODO

    } else {
      optionBoxes = this.props.data.options.map(function (option) {
        return (
            <div className="optionBox">
              <label>
                <input type="checkbox"
                       name={option.optionTag}
                       onChange={null} />
                <span className="optionTag">{option.optionTag}</span>
                <span className="optionText">{option.optionText}</span>
              </label>
            </div>
        )
      });
    }

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
  getInitialState: function() {
    return {
      questionSerial: 0,
      answerSerial: 0,
      showAnswer: false
    };
  },

  handleClick: function (event) {
    this.setState({showAnswer: true})
  },

  render: function() {
    return (
        <div id="Card" surveyData={this.props.surveyData}>
          <Banner />
          <QuestionPanel data={this.props.surveyData[this.state.questionSerial]} />
          {this.state.showAnswer ? <AnswerPanel data={this.props.surveyData[this.state.answerSerial]} /> : null}
          <button onClick={this.handleClick}>Show Answer</button>
        </div>
    );
  }
});

React.render(
    <Card surveyData={app.survey} />,
    document.getElementById('content')
);
