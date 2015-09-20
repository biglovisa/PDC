import React from "react";
import Header from "./header";
import SearchBoard from "./search_board";

export default React.createClass ({

  render: function() {
    return (
      <div className="container pdc">
        <Header />
        <SearchBoard />
      </div>
    );
  },
});
