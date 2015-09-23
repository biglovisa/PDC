import React          from 'react';
import Header         from './header';
import SelectCountry  from './select_country';
import ChartOptions   from './chart_options';
import Chart          from './chart';
import getCountryData from './util/api';
import Options        from './util/api';

export default React.createClass({
  getInitialState: function() {
    return { dataPoints: [], country: '', secondCountry: '', chartOption: '' };
  },
  updateStateWithData: function(data){
    var datum = data[1].splice(1);

    var formattedValues = datum.reduce(function(array, dataPoint){
      array.push({label: parseInt(dataPoint.date),
                  value: parseInt(dataPoint.value)});
      return array;
    }, []);

    var lineData = [{
      key: this.state.currentButton.key,
      values: formattedValues.reverse()
    }];

    this.setState({ dataPoints: lineData });

    // set the current countries datasets as this.state.chartValues


  },
  handleSelect: function(country){
    this.setState({ country: country });
    // set the country state
    // create dataset obejcts and add them this.state.currentCountries
    // limit the length to 2
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

    this.setState({ chartOption: clicked });
    this.setState({ currentButton: options[clicked] });

    // set state with util function and then reference i
    getCountryData(this.props.countries[this.state.country], this.state.currentButton.query)
      .then(response => {
        this.updateStateWithData(response);
      }, error => {
        console.error('error:', error);
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
          />;

        </div>
        <Chart
          values={this.state.dataPoints}
        />
      </div>
    );
  },
});
