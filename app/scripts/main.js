var Banner = React.createClass({
  render: function() {
    return (
        <div id="Banner">
          <img id="BannerImage" src={nkoreaTest.bannerImgRelativePath} />
        </div>
    );
  }
});

var QuestionPanel = React.createClass({

  handleCheckboxClick: function(clickedOptionTag, event) {

    nkoreaTest.Card.state.chosenOptionTag = clickedOptionTag;

    //Show the answer
    nkoreaTest.Card.setState({showAnswer: true});

    if (clickedOptionTag === this.props.data.correctOptionTag) {
      nkoreaTest.totalScore += nkoreaTest.scorePerQuestion;
    }

    // Disable all checkboxes
    var checkboxes = document.getElementsByClassName("checkbox");
    for (var i=0; i<checkboxes.length; i+=1) {
        checkboxes[i].disabled = true;
    }

  },

  getCorrectnessSign: function(optionTag) {
      // Only show correctness sign after the chosen option
      if (optionTag !== nkoreaTest.Card.state.chosenOptionTag) { return '' }
      var correctOption = nkoreaTest.survey[nkoreaTest.Card.state.questionSerial].correctOptionTag;
      var sign, colour, i;
      if (nkoreaTest.Card.state.chosenOptionTag === null) {
          sign = '';
      } else if (nkoreaTest.Card.state.chosenOptionTag === correctOption) {
          sign = '✓';
      } else {
          sign = '✕';
      }

      //Set color
      var correctnessSignDOMNodes = document.getElementsByClassName('CorrectnessSign');
      if (sign === '✓') {
          for (i=0; i<correctnessSignDOMNodes.length; i+=1) {
              correctnessSignDOMNodes[i].className = 'CorrectnessSign CorrectnessSign-correct'
          }
      } else if (sign === '✕') {
          for (i=0; i<correctnessSignDOMNodes.length; i+=1) {
              correctnessSignDOMNodes[i].className = 'CorrectnessSign CorrectnessSign-wrong'
          }
      }
      return sign;
  },

  render: function() {

    if (nkoreaTest.Card.state.answerSerial >= nkoreaTest.survey.length) {
      return;
    }

    var optionBoxes;
    if (this.props.data.optionContainsImage) {
        optionBoxes = this.props.data.options.map(function (option) {
            // Special adjustment for wider images
            var widerMarker = '';
            if (option.optionTag === 'D') {
                widerMarker = ' optionBoxWithImageWide'
            }
            return (
                <div className={"optionBox optionBoxWithImage"+widerMarker} key={option.optionTag}>
                    <label className="WithImage">
                        <div className="optionBoxLeftContainer">
                          <input type="checkbox"
                                 name={option.optionTag}
                                 onChange={this.handleCheckboxClick.bind(this, option.optionTag)}
                                 className="checkbox"
                              />
                          <span className="optionTag">{option.optionTag}</span>
                        </div>
                        <img src={option.imagePath} className="insertImage"/>
                        <div className="optionBoxRightContainer">
                          <span className="optionText optionTextWithImage">{option.optionText}</span>
                          <span className="CorrectnessSign">{this.getCorrectnessSign(option.optionTag)}</span>
                        </div>
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
                               className="checkbox"
                            />
                        <span className="optionTag">{option.optionTag}</span>
                        <span className="optionText">{option.optionText}</span>
                        <span className="CorrectnessSign">{this.getCorrectnessSign(option.optionTag)}</span>
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

  handleNextButtonClick: function (event) {
      //Show the next question
      nkoreaTest.Card.setState({
            questionSerial: nkoreaTest.Card.state.questionSerial + 1,
            answerSerial: nkoreaTest.Card.state.answerSerial + 1,
            showAnswer: false
          }
      );

      if (nkoreaTest.Card.state.questionSerial === nkoreaTest.survey.length - 2) {
          nkoreaTest.Card.setState({
              lastQuestion: true
          });
      }

      if (nkoreaTest.Card.state.questionSerial >= nkoreaTest.survey.length - 1) {
          React.render(
              <ScorePage />,
              document.getElementById('content')
          );
      }

      //Uncheck all checkboxes and enable them
      var checkboxes = document.getElementsByClassName("checkbox");
      for (var i=0; i<checkboxes.length; i+=1) {
          checkboxes[i].checked = false;
          checkboxes[i].disabled = false;
      }
      nkoreaTest.Card.state.chosenOptionTag = null;
  },

  render: function() {
    return (
        <div id="AnswerPanel" data={this.props.data} key={0}>
          <div className="ExplanationBox">
            <div className="answerBox">
                <div className="answerInnerBox">
                  <span className="answerLabel">
                    {nkoreaTest.text.answerLabel}
                  </span>
                  <span className="answerTag">
                    {this.props.data.correctOptionTag}
                  </span>
                </div>
            </div>
            <span className="Explanation">{this.props.data.ExplanationText}</span>
            <button id="next" onClick={this.handleNextButtonClick}>
                {nkoreaTest.Card.state.lastQuestion ?
                    nkoreaTest.text.lastButtonLabel:
                    nkoreaTest.text.nextButtonLabel}
            </button>
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
      showAnswer: false,
      chosenOptionTag: null,
      lastQuestion: false
    };
  },

  render: function() {
    nkoreaTest.Card = this;
    return (
        <div id="Card" surveyData={this.props.surveyData}>
          <Banner />
          <QuestionPanel data={this.props.surveyData[this.state.questionSerial]}
          />
          {this.state.showAnswer ?
              <AnswerPanel data={this.props.surveyData[this.state.answerSerial]}
              /> :
              null
          }
        </div>
    );
  }
});

var ScorePage = React.createClass({

  shareToWeibo: function () {
      var title = encodeURIComponent(nkoreaTest.text.scoreDescription + nkoreaTest.totalScore.toString() + nkoreaTest.text.shareHint),
          url = encodeURIComponent(nkoreaTest.url);
      window.open('http://v.t.sina.com.cn/share/share.php?title='+title+'&url='+nkoreaTest.url);
  },

  shareToFacebook () {
      var description = encodeURIComponent(nkoreaTest.text.scoreDescription + nkoreaTest.totalScore.toString() + nkoreaTest.text.shareHint),
          url = encodeURIComponent(nkoreaTest.url);
      window.open('https://www.facebook.com/dialog/feed?app_id=743206445788490+' +
                  '&link=' + url +
                  '&picture=' + nkoreaTest.url + nkoreaTest.shareImgRelativePath +
                  '&name=' + nkoreaTest.title +
                  '&description=' + description +
                  '&redirect_uri=' + url
      );
  },

  componentDidMount: function() {
      document.getElementById('marketingInfobox').innerHTML = nkoreaTest.text.marketingInfoboxInnerHTML;
  },

  render: function() {
    var comment = nkoreaTest.scoreComments[nkoreaTest.totalScore.toString()];
    return (
        <div id="ScorePage">
          <Banner />
          <h1>你的總分是：{nkoreaTest.totalScore}</h1>
          <p>{comment}</p>
          <button className="share Facebook-Share-btn"
                  onClick={this.shareToFacebook}>
              <img src="img/FB-f-Logo__blue_50.png" />
              {nkoreaTest.text.facebookShareButtonText}
          </button>
          <button className="share Weibo-Share-btn"
                  onClick={this.shareToWeibo}>
              <img src="img/weibo_48x48.png" />
              {nkoreaTest.text.ShareToWeiboText}
          </button>

          <div className='fulltextRecommendation'>
              {nkoreaTest.text.fulltextRecommendation}
              <a href="https://theinitium.com/project/20150803-dprk-youth/" target="_blank">
                  {nkoreaTest.text.linkLabel}
              </a>
          </div>
          <div id='marketingInfobox'></div>

        </div>
    );
  }
});

document.title = nkoreaTest.title;

React.render(
    <Card surveyData={nkoreaTest.survey} />,
    //<ScorePage />,
    document.getElementById('content')
);
