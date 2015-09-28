import React from 'react';

export default React.createClass({
  handleDelete: function(country) {
    this.props.onDelete(country);
  },
  render: function() {
    var countries = this.props.countries.map((country, index) => {
      return (
        <li key={ index }>
          {country}
          <button
            onClick={this.handleDelete.bind(this, country)}
            className='remove-country btn btn-xs'>
            x
          </button>
        </li>
      );
    });

    return (
      <ul className='selected-countries col-md-8'>
        {countries}
      </ul>
    );
  }
});
