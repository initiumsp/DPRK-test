var Card = React.createClass({
  render: function() {
    return (
        <div>
          Hello world!
        </div>
    );
  }
});

React.render(
    <Card data={app.survey[0]} />,
    document.getElementById('content')
);

