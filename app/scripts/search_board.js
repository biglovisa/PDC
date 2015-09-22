import React from "react";
import Globe from "./globe";
import SearchOptions from "./search_options";
import Chart from "./chart";

export default React.createClass ({
  handleClick: function(clicked) {
    this.props.clickedButton(clicked)
  },
  render: function() {
    return (
      <div className="search-board">
        <SearchOptions handleSelect={this.props.handleSelect} handleClick={this.handleClick} countries={Object.keys(this.props.countries)}/>
        <Chart values={this.props.values} />
      </div>
    );
  },
});
