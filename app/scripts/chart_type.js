import React from 'react';

export default React.createClass({
  handleClick: function(e){
    this.props.handleClick(e.target.value);
  },
  render: function() {
    var buttons = [
      {
        key: 'geo',
        title: 'Compare Globally'
      },
      {
        key: 'two',
        title: 'Compare One or Two Countries'
      }
    ];

    var buttons = buttons.map(function(object, index){
      return (
        <button
          key={ index }
          value={ object.key }
          onClick={this.handleClick}
          className='btn btn-default'
        >
          { object.title }
        </button>
      );
    }.bind(this));

    return (
      <div className='btn-group-sm chart-options'>
        { buttons }
      </div>
    );
  },
});
