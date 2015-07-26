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

  handleCheckboxClick: function(optionTag, event) {
    nkoreaTest.Card.setState({showAnswer: true});

    function moveToNextQuestion(checkbox) {
      nkoreaTest.Card.setState(
          {questionSerial: nkoreaTest.Card.state.questionSerial + 1,
            answerSerial: nkoreaTest.Card.state.answerSerial + 1,
            showAnswer: false
          }
      );
      checkbox.checked = false; // Otherwise the option remains checked in the next question
    }
    setTimeout(function(checkbox){
          return (function () {
                moveToNextQuestion(checkbox);
              }
          )
        }(event.target),
        4000)
  },

  render: function() {

    if (nkoreaTest.Card.answerSerial >= nkoreaTest.survey.length) {
      return;
      // TODO
    }

    var optionBoxes;
    if (this.props.data.optionContainsImage) {
      // TODO
      optionBoxes = this.props.data.options.map(function (option) {
        return (
            <div className="optionBox" key={option.optionTag}>
              <label>
                <input type="checkbox"
                       name={option.optionTag}
                       onChange={this.handleCheckboxClick.bind(this, option.optionTag)}
                    />
                <span className="optionTag">{option.optionTag}</span>
                <span className="optionText">{option.optionText}</span>
              </label>
            </div>
        )
      }, this);
    } else {
      optionBoxes = this.props.data.options.map(function (option) {
        return (
            <div className="optionBox" key={option.optionTag}>
              <label>
                <input type="checkbox"
                       name={option.optionTag}
                       onChange={this.handleCheckboxClick.bind(this, option.optionTag)}
                />
                <span className="optionTag">{option.optionTag}</span>
                <span className="optionText">{option.optionText}</span>
              </label>
            </div>
        )
      }, this);
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
        <div id="AnswerPanel" data={this.props.data} key={0}>
          <div className="answerBox">
            <div className="answerInnerBox">
              <span className="answerLabel">
                {nkoreaTest.answerLabel}
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

  render: function() {
    nkoreaTest.Card = this;
    return (
        <div id="Card" surveyData={this.props.surveyData}>
          <Banner />
          <QuestionPanel data={this.props.surveyData[this.state.questionSerial]} />
          {this.state.showAnswer ?
              <AnswerPanel data={this.props.surveyData[this.state.answerSerial]}/> :
              null
          }
        </div>
    );
  }
});

React.render(
    <Card surveyData={nkoreaTest.survey} />,
    document.getElementById('content')
);
