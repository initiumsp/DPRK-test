'use strict';

alert('0');
alert(document.getElementById('content'));
var Card = React.createClass({ displayName: 'Card',
  render: function render() {
    return React.createElement('div', null, 'Hello world!');
  }
});

React.render(React.createElement(Card, { data: app.survey[0] }), document.getElementById('content'));

//# sourceMappingURL=1d0bc9dea3be68a708005580e7d9bb7f1d905b89-compiled.js.map