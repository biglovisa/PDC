import React from "react";
import Globe from "./globe";
import SearchOptions from "./search_options";

export default React.createClass ({

  render: function() {
    return (
      <div className="container search-board">
        <Globe />
        <SearchOptions handleSelect={this.props.handleSelect} />
      </div>
    );
  },
});
