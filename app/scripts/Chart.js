import React from 'react';
import Chart from 'c3-react';

export default React.createClass({
  render: function() {
    let options = {
      padding: {
        top: 20,
        bottom: 20,
        left: 100,
        right: 10
      },
      size: {
        width: 1000,
        height: 500
      },
      subchart: true,
      zoom: true,
      grid: {
        x: false,
        y: true
      },
      onClick: function(d) {
        let categories = this.categories();
      }
    };

    var values = this.props.values;

    function nanTruncated(values) {
      var start = 0;
      for (var i = 0; i < values.length; i++) {
        if (isNaN(values[i].value)) {
          start++;
        } else {
          break
        }
      }
      return values.slice(start);
    }

    var trimmedCountries = values.map(function(country) { return {key: country.key, values: nanTruncated(country.values)} });

    return (
      <div className='chart pull-left' key='chart'>
        <h5 className="details">{this.props.details}</h5>
        <Chart data={trimmedCountries} type='lineBar' options={options} />
      </div>
    );
  },
});
