import React from 'react';

export default React.createClass({
  handleClick: function(value) {
    this.props.handleLinkClick(value);
  },
  render: function(){
    return (
      <div className='header'>
        <div className='container top-bar'>
          <h3>
          Public Data Compiler
          </h3>
          <a href='https://github.com/applegrain/PDC'className='repository-link'
          >
          Repository
          </a>
          <a className='repository-link' onClick={this.handleClick.bind(this, 'geo')}
          >
          GDP Map
          </a>
          <a className='repository-link' onClick={this.handleClick.bind(this, 'two')}
          >
          Compare Countries
          </a>
        </div>

        <p>Query World Bank Data to compare global statistics</p>
      </div>
    );
  },
});
