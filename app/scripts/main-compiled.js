"use strict";

var Banner = React.createClass({
    displayName: "Banner",

    render: function render() {
        return React.createElement(
            "div",
            { id: "Banner" },
            React.createElement("img", { id: "BannerImage", src: nkoreaTest.bannerImgRelativePath })
        );
    }
});

var QuestionPanel = React.createClass({
    displayName: "QuestionPanel",

    handleCheckboxClick: function handleCheckboxClick(clickedOptionTag, event) {

        nkoreaTest.Card.state.chosenOptionTag = clickedOptionTag;

        //Show the answer
        nkoreaTest.Card.setState({ showAnswer: true });

        if (clickedOptionTag === this.props.data.correctOptionTag) {
            nkoreaTest.totalScore += nkoreaTest.scorePerQuestion;
        }

        // Disable all checkboxes
        var checkboxes = document.getElementsByClassName("checkbox");
        for (var i = 0; i < checkboxes.length; i += 1) {
            checkboxes[i].disabled = true;
        }
    },

    getCorrectnessSign: function getCorrectnessSign(optionTag) {
        // Only show correctness sign after the chosen option
        if (optionTag !== nkoreaTest.Card.state.chosenOptionTag) {
            return "";
        }
        var correctOption = nkoreaTest.survey[nkoreaTest.Card.state.questionSerial].correctOptionTag;
        var sign, colour, i;
        if (nkoreaTest.Card.state.chosenOptionTag === null) {
            sign = "";
        } else if (nkoreaTest.Card.state.chosenOptionTag === correctOption) {
            sign = "✓";
        } else {
            sign = "✕";
        }

        //Set color
        var correctnessSignDOMNodes = document.getElementsByClassName("CorrectnessSign");
        if (sign === "✓") {
            for (i = 0; i < correctnessSignDOMNodes.length; i += 1) {
                correctnessSignDOMNodes[i].className = "CorrectnessSign CorrectnessSign-correct";
            }
        } else if (sign === "✕") {
            for (i = 0; i < correctnessSignDOMNodes.length; i += 1) {
                correctnessSignDOMNodes[i].className = "CorrectnessSign CorrectnessSign-wrong";
            }
        }
        return sign;
    },

    render: function render() {

        if (nkoreaTest.Card.state.answerSerial >= nkoreaTest.survey.length) {
            return;
        }

        var optionBoxes;
        if (this.props.data.optionContainsImage) {
            optionBoxes = this.props.data.options.map(function (option) {
                // Special adjustment for wider images
                var widerMarker = "";
                if (option.optionTag === "D") {
                    widerMarker = " optionBoxWithImageWide";
                }
                return React.createElement(
                    "div",
                    { className: "optionBox optionBoxWithImage" + widerMarker, key: option.optionTag },
                    React.createElement(
                        "label",
                        { className: "WithImage" },
                        React.createElement(
                            "div",
                            { className: "optionBoxLeftContainer" },
                            React.createElement("input", { type: "checkbox",
                                name: option.optionTag,
                                onChange: this.handleCheckboxClick.bind(this, option.optionTag),
                                className: "checkbox"
                            }),
                            React.createElement(
                                "span",
                                { className: "optionTag" },
                                option.optionTag
                            )
                        ),
                        React.createElement("img", { src: option.imagePath, className: "insertImage" }),
                        React.createElement(
                            "div",
                            { className: "optionBoxRightContainer" },
                            React.createElement(
                                "span",
                                { className: "optionText optionTextWithImage" },
                                option.optionText
                            ),
                            React.createElement(
                                "span",
                                { className: "CorrectnessSign" },
                                this.getCorrectnessSign(option.optionTag)
                            )
                        )
                    )
                );
            }, this);
        } else {
            optionBoxes = this.props.data.options.map(function (option) {
                return React.createElement(
                    "div",
                    { className: "optionBox", key: option.optionTag },
                    React.createElement(
                        "label",
                        null,
                        React.createElement("input", { type: "checkbox",
                            name: option.optionTag,
                            onChange: this.handleCheckboxClick.bind(this, option.optionTag),
                            className: "checkbox"
                        }),
                        React.createElement(
                            "span",
                            { className: "optionTag" },
                            option.optionTag
                        ),
                        React.createElement(
                            "span",
                            { className: "optionText" },
                            option.optionText
                        ),
                        React.createElement(
                            "span",
                            { className: "CorrectnessSign" },
                            this.getCorrectnessSign(option.optionTag)
                        )
                    )
                );
            }, this);
        }

        return React.createElement(
            "div",
            { id: "QuestionPanel", data: this.props.data },
            React.createElement(
                "div",
                { id: "questionTag" },
                this.props.data.questionTag
            ),
            React.createElement(
                "div",
                { id: "questionText" },
                this.props.data.questionText
            ),
            React.createElement(
                "div",
                { id: "OptionPanel" },
                optionBoxes
            )
        );
    }
});

var AnswerPanel = React.createClass({
    displayName: "AnswerPanel",

    handleNextButtonClick: function handleNextButtonClick(event) {
        //Show the next question
        nkoreaTest.Card.setState({
            questionSerial: nkoreaTest.Card.state.questionSerial + 1,
            answerSerial: nkoreaTest.Card.state.answerSerial + 1,
            showAnswer: false
        });

        if (nkoreaTest.Card.state.questionSerial === nkoreaTest.survey.length - 2) {
            nkoreaTest.Card.setState({
                lastQuestion: true
            });
        }

        if (nkoreaTest.Card.state.questionSerial >= nkoreaTest.survey.length - 1) {
            React.render(React.createElement(ScorePage, null), document.getElementById("content"));
        }

        //Uncheck all checkboxes and enable them
        var checkboxes = document.getElementsByClassName("checkbox");
        for (var i = 0; i < checkboxes.length; i += 1) {
            checkboxes[i].checked = false;
            checkboxes[i].disabled = false;
        }
        nkoreaTest.Card.state.chosenOptionTag = null;
    },

    render: function render() {
        return React.createElement(
            "div",
            { id: "AnswerPanel", data: this.props.data, key: 0 },
            React.createElement(
                "div",
                { className: "ExplanationBox" },
                React.createElement(
                    "div",
                    { className: "answerBox" },
                    React.createElement(
                        "div",
                        { className: "answerInnerBox" },
                        React.createElement(
                            "span",
                            { className: "answerLabel" },
                            nkoreaTest.text.answerLabel
                        ),
                        React.createElement(
                            "span",
                            { className: "answerTag" },
                            this.props.data.correctOptionTag
                        )
                    )
                ),
                React.createElement(
                    "span",
                    { className: "Explanation" },
                    this.props.data.ExplanationText
                ),
                React.createElement(
                    "button",
                    { id: "next", onClick: this.handleNextButtonClick },
                    nkoreaTest.Card.state.lastQuestion ? nkoreaTest.text.lastButtonLabel : nkoreaTest.text.nextButtonLabel
                )
            )
        );
    }
});

var Card = React.createClass({
    displayName: "Card",

    getInitialState: function getInitialState() {
        return {
            questionSerial: 0,
            answerSerial: 0,
            showAnswer: false,
            chosenOptionTag: null,
            lastQuestion: false
        };
    },

    render: function render() {
        nkoreaTest.Card = this;
        return React.createElement(
            "div",
            { id: "Card", surveyData: this.props.surveyData },
            React.createElement(Banner, null),
            React.createElement(QuestionPanel, { data: this.props.surveyData[this.state.questionSerial]
            }),
            this.state.showAnswer ? React.createElement(AnswerPanel, { data: this.props.surveyData[this.state.answerSerial]
            }) : null
        );
    }
});

var ScorePage = React.createClass({
    displayName: "ScorePage",

    shareToWeibo: function shareToWeibo() {
        var title = encodeURIComponent(nkoreaTest.text.scoreDescription + nkoreaTest.totalScore.toString() + nkoreaTest.text.shareHint),
            url = encodeURIComponent(nkoreaTest.url);
        window.open("http://v.t.sina.com.cn/share/share.php?title=" + title + "&url=" + nkoreaTest.url);
    },

    shareToFacebook: function shareToFacebook() {
        var description = encodeURIComponent(nkoreaTest.text.scoreDescription + nkoreaTest.totalScore.toString() + nkoreaTest.text.shareHint),
            url = encodeURIComponent(nkoreaTest.url);
        window.open("https://www.facebook.com/dialog/feed?app_id=743206445788490+" + "&link=" + url + "&picture=" + nkoreaTest.url + nkoreaTest.shareImgRelativePath + "&name=" + nkoreaTest.title + "&description=" + description + "&redirect_uri=" + url);
    },

    componentDidMount: function componentDidMount() {
        document.getElementById("marketingInfobox").innerHTML = nkoreaTest.text.marketingInfoboxInnerHTML;
    },

    render: function render() {
        var comment = nkoreaTest.scoreComments[nkoreaTest.totalScore.toString()];
        return React.createElement(
            "div",
            { id: "ScorePage" },
            React.createElement(Banner, null),
            React.createElement(
                "h1",
                null,
                "你的總分是：",
                nkoreaTest.totalScore
            ),
            React.createElement(
                "p",
                null,
                comment
            ),
            React.createElement(
                "button",
                { className: "share Facebook-Share-btn",
                    onClick: this.shareToFacebook },
                React.createElement("img", { src: "img/FB-f-Logo__blue_50.png" }),
                nkoreaTest.text.facebookShareButtonText
            ),
            React.createElement(
                "button",
                { className: "share Weibo-Share-btn",
                    onClick: this.shareToWeibo },
                React.createElement("img", { src: "img/weibo_48x48.png" }),
                nkoreaTest.text.ShareToWeiboText
            ),
            React.createElement(
                "div",
                { className: "fulltextRecommendation" },
                nkoreaTest.text.fulltextRecommendation,
                React.createElement(
                    "a",
                    { href: "https://theinitium.com/project/20150803-dprk-youth/" },
                    nkoreaTest.text.linkLabel
                )
            ),
            React.createElement("div", { id: "marketingInfobox" })
        );
    }
});

document.title = nkoreaTest.title;

React.render(React.createElement(Card, { surveyData: nkoreaTest.survey }),
//<ScorePage />,
document.getElementById("content"));

//# sourceMappingURL=main-compiled.js.map