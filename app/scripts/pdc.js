import React from "react";
import Header from "./header";
import SearchBoard from "./search_board";

export default React.createClass ({
  handleSelect: function(country) {
    // have the country
    // need to convert it to an ISO code
    // build ajax call with ISO code
    // pass the result down to the graph component (TBA)


  },

  render: function() {
    return (
      <div className="container pdc">
        <Header />
        <SearchBoard handleSelect={this.handleSelect}/>
      </div>
    );
  },
});
