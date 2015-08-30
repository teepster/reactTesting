/** @jsx React.DOM */

var React = require("React");

// var ClickCounter = React.createClass( {
//   getInitialState: function() {
//     return {
//       numClicks: 0
//     };
//   },
//   render: function() {
//     return (
//       <div>
//         {this.state.numClicks} clicks
//       </div>
//
//     )
//   }
// });

var Detonator = React.createClass( {
  getInitialState: function() {
    return {
      timeRemaining: 10
    };
  },

  tick: function () {
    var actualTimeRemaining = this.state.timeRemaining - 1;
    if(actualTimeRemaining == 0) {
      this.setState({timeRemaining: "Boom!"});
      clearInterval(this.interval);
    } else {
      this.setState( {timeRemaining: actualTimeRemaining} );
    }
  },

  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },

  render: function() {
    return <div>{this.state.timeRemaining}</div>;
  }
});


React.render( <Detonator />, document.body );
