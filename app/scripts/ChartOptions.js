import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {activeButton: 'gdp'}
  },
  handleClick: function(e) {
    this.props.handleClick(e.target.value);

    this.setState({activeButton: e.target.value})
  },
  render: function() {
    var baseClass = 'chart-button btn btn-success'

    var buttons = [
      {
        key: 'gdp',
        title: 'GDP per capita'
      },
      {
        key: 'mil',
        title: 'military expenditure'
      },
      {
        key: 'une',
        title: 'unemployment'
      },
      {
        key: 'deb',
        title: 'government debt'
      },
      {
        key: 'exp',
        title: 'government expenses'
      },
      {
        key: 'tax',
        title: 'tax Revenue'
      },
      {
        key: 'int',
        title: 'internet users'
      },
      {
        key: 'cel',
        title: 'cell phone users'
      }
    ];

    var buttons = buttons.map(function(object, index) {
      return (
        <button
          key={index}
          value={object.key}
          onClick={this.handleClick}
          className={this.state.activeButton == object.key ?
                          baseClass + ' active' : baseClass}
        >
          {object.title}
        </button>
      );
    }.bind(this));

    return (
      <div className='btn-group chart-options'>
        {buttons}
      </div>
    );
  },
});
