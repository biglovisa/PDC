import React from 'react';

export default React.createClass({
  handleClick: function(value) {
    this.props.handleLinkClick(value);
  },
  render: function() {
    return (
      <div className='header'>
        <div className='container top-bar'>
          <h3>
          Public Data Compiler
          </h3>
          <a href='https://github.com/applegrain/PDC'>
          <i className="fa fa-github-square fa-2x"></i>
          </a>
          <a className='header-link' onClick={this.handleClick.bind(this, 'geo')}>
          GDP Map
          </a>
          <a className='header-link' onClick={this.handleClick.bind(this, 'two')}>
          Compare Countries
          </a>
        </div>

        <p>Query World Bank Data to compare global statistics</p>
      </div>
    );
  },
});
