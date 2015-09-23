import React from "react";

export default React.createClass({
  render: function(){
    return (
      <div className="header">
        <div className="container top-bar">
          <h3>
          Public Data Compiler
          </h3>
          <RepositoryLink />
        </div>

        <Description />
      </div>
    );
  },
});

var RepositoryLink = React.createClass({
  render: function(){
    return (
      <a href="https://github.com/applegrain/PDC"
      className="repository-link"
      >
      Repository
      </a>
    );
  },
});

var Description = React.createClass({
  render: function(){
    return (
      <p>Query World Bank Data to compare global statistics</p>
    );
  },
});
