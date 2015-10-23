var React = require("React");

var Hello = React.createClass( {
  render: function() {
    return React.DOM.h1(null, "Hello");
  }
})

React.renderComponent( Hello(), document.body );
