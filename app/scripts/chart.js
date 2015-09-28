import React from 'react';
import Chart from 'c3-react';

export default React.createClass({

  render: function(){
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

    var lineChart = <Chart
                     data={this.props.values}
                     type='lineBar'
                     options={options}
                    />

    return (
      <div className='chart pull-left' key='chart'>
        <h5 className="details">{ this.props.details }</h5>
        { lineChart }
      </div>
    );
  },
});

