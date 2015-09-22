import React          from "react";
import Header         from "./header";
import SelectCountry  from "./select_country";
import ChartOptions   from "./chart_options";
import Chart          from "./chart";
import getCountryData from "./util/api";

export default React.createClass({
  getInitialState: function() {
    return { dataPoints: [], country: "", chartOption: "" };
  },
  updateStateWithData: function(data){
    var datum = data[1].splice(1);

    var formattedValues = datum.reduce(function(array, dataPoint){
      array.push({label: parseInt(dataPoint.date),
                  value: parseInt(dataPoint.value)});
      return array;
    }, []);

    var options = {
      gdp: 'GDP per capita in USD',
      mil: 'Military expenditure in % of GDP',
      deb: 'Central government debt in % of GDP',
      une: 'Total unemployment in % of total labor force',
      exp: 'Government expenses in % of GDP',
      tax: 'Tax revenue in % of GDP',
      int: 'Internet users per 100 people',
      cel: 'Cell phone users per 100 people'
    }

    var lineData = [{
      key: options[this.state.chartOption],
      values: formattedValues.reverse()
    }];

    this.setState({ dataPoints: lineData });
  },
  handleSelect: function(country){
    this.setState({ country: country });
  },
  handleClick: function(clicked) {
    this.setState({ chartOption: clicked });

    var options = {
      gdp: 'NY.GDP.PCAP.CD',
      mil: 'MS.MIL.XPND.GD.ZS',
      une: 'SL.UEM.TOTL.ZS',
      deb: 'GC.DOD.TOTL.GD.ZS',
      exp: 'GC.XPN.TOTL.GD.ZS',
      tax: 'GC.TAX.TOTL.GD.ZS',
      int: 'IT.NET.USER.P2',
      cel: 'IT.CEL.SETS.P2'
    }

    getCountryData(this.props.countries[this.state.country], options[clicked])
      .then(response => {
        this.updateStateWithData(response);
      }, error => {
        console.error("error:", error);
    });
  },
  render: function(){
    if (this.state.country) {
      var buttons = <ChartOptions className="col-md-8" handleClick={this.handleClick} />;
    }

    return (
      <div className="container pdc">
        <Header />

        <div className="search-board col-lg-12">
          <div className="first-country col-md-6">
            <SelectCountry
              onSelect={this.handleSelect}
              countries={Object.keys(this.props.countries)}
            />
          </div>

          <div className="second-country col-md-6">
            <SelectCountry
              onSelect={this.handleSelect}
              countries={Object.keys(this.props.countries)}
            />
          </div>
          { buttons }
        </div>
        <Chart
          values={this.state.dataPoints}
        />
      </div>
    );
  },
});
