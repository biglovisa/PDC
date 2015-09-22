import React          from "react";
import Header         from "./header";
import SelectCountry  from "./select_country";
import Chart          from "./chart";
import getCountryData from "./util/api";

export default React.createClass({
  getInitialState: function() {
    return { dataPoints: [] };
  },
  updateStateWithData: function(data){
    var datum = data[1].splice(1);

    // TODO: find a better way to parse the GDP - this is incorrect
    var formattedValues = datum.reduce(function(array, dataPoint){
      array.push({label: parseInt(dataPoint.date),
                  value: parseInt(dataPoint.value) / 100000000});
      return array;
    }, []);

    var lineData = [
      {
        key: "GDP by year",
        values: formattedValues.reverse()
      }
    ];

    this.setState({ dataPoints: lineData });
  },
  handleSelect: function(country){
    getCountryData(this.props.countries[country], 'indicators/NY.GDP.MKTP.CD')
      .then(response => {
        this.updateStateWithData(response);
      }, error => {
        console.error("error:", error);
      });
  },
  render: function(){
    return (
      <div className="container pdc">
        <Header />
        <SelectCountry
          onSelect={this.handleSelect}
          countries={Object.keys(this.props.countries)}
        />
        <Chart values={this.state.dataPoints} />
      </div>
    );
  },
});
