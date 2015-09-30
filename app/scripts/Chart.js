import React        from 'react';
import ChartOptions from './constants/ChartOptions';
import Chart        from 'c3-react';

export default React.createClass({
  render: function() {
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
        <Chart data={trimmedCountries} type='lineBar' options={ChartOptions} />
      </div>
    );
  },
});
