import React          from 'react';
import ChartOptions   from './chart_options';
import { Chart }      from 'react-google-charts';
import gdpValues      from './constants/gdp_values';

export default React.createClass({
  renderChart: function(){

    return <Chart
            chartType='GeoChart'
            data={ gdpValues }
            graph_id='GeoChart'
            width={ '100%' }
            height={ '500px' }
            legend_toggle={ true }
          />
  },
  render: function(){
    return (
      <div className='geo-chart'>
        <h5 className="details">GDP in USD for 2014</h5>
        { this.renderChart() }
      </div>
    );
  },
});
