import React          from 'react';
import Buttons        from './constants/Buttons';

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

    var buttons = Buttons.map(function(object, index) {
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
