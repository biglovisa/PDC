import React from "react";
import { LineChart } from "react-d3";

export default React.createClass ({

  render: function() {
    var lineData = this.props.values;
    var lineChart = <LineChart
                    legend={true}
                    data={lineData}
                    width={500}
                    height={400}
                    viewBoxObject={
                      {
                        x: 0,
                        y: 0,
                        width: 1500,
                        height: 1000
                      }
                    }
                    title="GDP by Year"
                    yAxisLabel="$"
                    xAxisLabel="Year"
                    gridHorizontal={true} />
    return (
      <div className="chart pull-left">
        {lineChart}
      </div>
    );
  },
});

