import React from "react";

export default React.createClass ({
  getInitialState: function() {
    return ({ country: "" })
  },
  handleSelect: function(e) {
    e.preventDefault();
    var country = this.refs.country.getDOMNode().value;
    this.setState({ country: country });

    this.props.handleSelect(country);
  },

  render: function() {
    return (
      <div className="search-options col-md-6">
        <div className="search-form input-group">
          <input
            type="text"
            ref="country"
            placeholder="Select a country..."
            className="form-control"
          />
          <span className="input-group-btn">
            <button
            type="submit"
            className="btn btn-success"
            onClick={this.handleSelect}
            >
            select
            </button>
          </span>
        </div>
      </div>
    );
  },
});
