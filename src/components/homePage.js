"use strict";

var React = require('react');

var Home = React.createClass({ // Creates a component
  // Component must implement a render function which returns markup
  render: function() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, React Router and Flux for ultra-responsive web apps</p>
      </div>
    );
  }
});

// Expose our component
module.exports = Home;