import React from "react";

export default React.createClass ({

  render: function() {
    return (
      <div className="container header">
        <h4>
        Public Data Compiler
        </h4>

        <RepositoryLink />
      </div>
    );
  },
});

var RepositoryLink = React.createClass ({

  render: function() {
    return (
      <a href="https://github.com/applegrain/public-data-compiler"
      className="repository-link"
      >
      Repository
      </a>
    );
  },
});
