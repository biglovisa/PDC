import React          from 'react';
import Header         from './header';
import SelectCountry  from './select_country';
import ChartOptions   from './chart_options';
import Chart          from './chart';
import getCountryData from './util/api';
// TODO: figure out why this doesn't render
import Options        from './util/api';

export default React.createClass({
  getInitialState: function(){
    return { dataPoints: [], currentCountries: [], holder: [], queryDetails: '' };
  },
  renderChart: function(){
    if (this.state.dataPoints.length) {
      return <Chart
              values={ this.state.dataPoints }
              details={ this.state.queryDetails }
             />
    } else {
      return <h5 className="info">Select countries to compare</h5>
    }
  },
  formatAjaxData: function(data){
    var formattedValues = data.reduce(function(array, dataPoint){
      array.push({label: parseInt(dataPoint.date), value: parseFloat(dataPoint.value).toFixed(2)});
      return array;
    }, []);

    return formattedValues;
  },
  handleSelect: function(country){
    this.state.holder.unshift(country);
    var countries = this.state.holder.slice(0, 2);

    this.setState({ currentCountries: countries });
  },
  handleClick: function(clicked) {
    // TODO: remove this
    var options = {
      gdp: { key: 'GDP per capita in USD',
             query: 'NY.GDP.PCAP.CD' },
      mil: { key: 'Military expenditure in % of GDP',
             query: 'MS.MIL.XPND.GD.ZS' },
      deb: { key: 'Central government debt in % of GDP',
             query: 'SL.UEM.TOTL.ZS' },
      une: { key: 'Total unemployment in % of total labor force',
             query: 'GC.DOD.TOTL.GD.ZS' },
      exp: { key: 'Government expenses in % of GDP',
             query: 'GC.XPN.TOTL.GD.ZS' },
      tax: { key: 'Tax revenue in % of GDP',
             query: 'GC.TAX.TOTL.GD.ZS' },
      int: { key: 'Internet users per 100 people',
             query: 'IT.NET.USER.P2' },
      cel: { key: 'Cell phone users per 100 people',
             query: 'IT.CEL.SETS.P2' }
    }

    var currentButton = options[clicked];
    this.setState({ queryDetails: currentButton.key });

    var responsePromises = this.state.currentCountries.map(country => {
      return getCountryData(this.props.countries[country], currentButton.query);
    });

    Promise.all(responsePromises).then(function() {
      var responses = Array.prototype.slice.call(arguments, 0, responsePromises.length);
      return responses[0].map(response => {
        var responseData = response;
        let formattedValues = this.formatAjaxData(response[1]);
        return {
          key: response[1][1].country.value,
          values: formattedValues.reverse()
        };
      });
    }.bind(this)).then(lineData => {
      this.setState({ dataPoints: lineData });
    });
  },
  render: function(){
    return (
      <div>
        <div className='options'>
          <ChartOptions
            className='options col-md-10'
            handleClick={ this.handleClick }
          />
        </div>
        <div className='first-country col-md-6'>
          <SelectCountry
            value='firstCountry'
            onSelect={ this.handleSelect }
            countries={ Object.keys(this.props.countries) }
          />
        </div>

        <div className='second-country col-md-6'>
          <SelectCountry
            value='secondCountry'
            onSelect={ this.handleSelect }
            countries={ Object.keys(this.props.countries) }
          />
        </div>

        { this.renderChart() }
      </div>
    );
  },
});