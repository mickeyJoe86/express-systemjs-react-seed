//http://egorsmirnov.me/2015/10/11/react-and-es6-part5.html

import React from "react";
import ReactDOM from "react-dom";

var Hello = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(<Hello name="World" />, document.getElementById('container'));