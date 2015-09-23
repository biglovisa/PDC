
import React          from 'react';
import Header         from './header';
import SelectCountry  from './select_country';
import ChartOptions   from './chart_options';
import Chart          from './chart';
import getCountryData from './util/api';
import Options        from './util/api';

export default React.createClass({
  getInitialState: function() {
    return { dataPoints: [], currentCountries: [], holder: [] };
  },
  formatAjaxData: function(data){
    var datum = data[1].splice(1);

    var formattedValues = datum.reduce(function(array, dataPoint){
      array.push({label: parseInt(dataPoint.date),
                  value: parseInt(dataPoint.value)});
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
    var responsePromises = this.state.currentCountries.map(country => {
      return getCountryData(this.props.countries[country], currentButton.query);
    });

    $.when(...responsePromises).then((...responses) => {
      return responses.map(response => {
        let formattedValues = this.formatAjaxData(response[0]);
        return {
          key: response[0][1][0].country.value,
          values: formattedValues.reverse()
        };
      });
    }).then(lineData => {
      this.setState({ dataPoints: lineData });
    });
  },
  render: function(){
    return (
      <div className='container pdc'>
        <Header />

        <div className='search-board col-lg-12'>
          <div className='first-country col-md-6'>
            <SelectCountry
              value='firstCountry'
              onSelect={this.handleSelect}
              countries={Object.keys(this.props.countries)}
            />
          </div>

          <div className='second-country col-md-6'>
            <SelectCountry
              value='secondCountry'
              onSelect={this.handleSelect}
              countries={Object.keys(this.props.countries)}
            />
          </div>
          <ChartOptions
            className='col-md-8'
            handleClick={this.handleClick}
          />

        </div>
        <Chart
          values={this.state.dataPoints}
        />
      </div>
    );
  },
});
