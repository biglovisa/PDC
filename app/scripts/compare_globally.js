import React          from 'react';
import ChartOptions   from './chart_options';
import getCountryData from './util/api';
var Chart = require('react-google-charts').Chart;

export default React.createClass({
  handleClick: function(clicked){
    console.log(clicked);
  },
  renderChart: function(){
    var data = [
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 1000]
    ];

    return <Chart
            chartType='GeoChart'
            data={data}
            graph_id='GeoChart'
            width={'100%'}
            height={'500px'}
            legend_toggle={true} />
  },
  render: function(){
    return (
      <div>
        <div className='options'>
          <ChartOptions
            className='col-md-10'
            handleClick={this.handleClick}
          />
        </div>

        <div className='geo-chart'>
          {this.renderChart()}
        </div>
      </div>
    );
  },
});
