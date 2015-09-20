import React from "react";

export default React.createClass ({
  getInitialState: function() {
    return ({ country: "" })
  },
  handleSelect: function(e) {
    e.preventDefault();

    var country = this.refs.country.getDOMNode().value;

    this.setState({ country: country })
  },

  render: function() {
    return (
      <div className="search-options">
        <h4>Configure your query</h4>

        <div className="search-form">
          Country: <br />
          <input type="text" ref="country" placeholder="Select a country..." />
          <button type="submit" onClick={this.handleSelect} >Select</button>
        </div>
      </div>
    );
  },
});
