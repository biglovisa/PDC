import React from "react";
import Chart from "c3-react";

export default React.createClass({

  render: function(){
    var lineData = this.props.values;

    var type = "multiBar";
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
    };

    var lineChart = <Chart data={lineData} type={type} options={options} />

    return (
      <div className="chart pull-left">
        {lineChart}
      </div>
    );
  },
});

