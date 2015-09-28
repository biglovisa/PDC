import React             from 'react';
import Header            from './Header';
import SelectCountry     from './SelectCountry';
import ChartOptions      from './ChartOptions';
import Chart             from './Chart';
import SelectedCountries from './SelectedCountries';
import getCountryData    from './util/Api';
import options           from './constants/DataTypes';

export default React.createClass({
  getInitialState: function() {
    return {dataPoints: [], currentCountries: [], currentDataOption: options['gdp']};
  },
  renderChart: function(){
    if (this.state.dataPoints.length) {
      return <Chart
              values={this.state.dataPoints}
              details={this.state.currentDataOption.key}
             />
    } else {
      return <h5 className="info">Select countries to compare</h5>
    }
  },
  formatAjaxData: function(data) {
    var formattedValues = data.reduce(function(array, dataPoint){
      array.push({label: parseInt(dataPoint.date), value: parseFloat(dataPoint.value).toFixed(2)});
      return array;
    }, []);

    return formattedValues;
  },
  handleSelect: function(country) {
    var nextCountries = this.state.currentCountries.concat(country);
    this.setState({currentCountries: nextCountries});

    this.getCountryData(nextCountries);
  },
  handleClick: function(clicked) {
    var currentButton = options[clicked];
    this.setState({currentDataOption: currentButton });

    this.getCountryData(this.state.currentCountries, currentButton);
  },
  removeCountry: function(country) {
    var countries = this.state.currentCountries;
    countries.splice(countries.indexOf(country, 1));
    this.setState({currentCountries: countries });

    this.getCountryData(countries);
  },
  getCountryData: function(countries, current) {
    if (!countries.length) {
      return this.setState({dataPoints: []});
    }

    var selection = current ? current : this.state.currentDataOption;

    var responsePromises = countries.map(country => {
      return getCountryData(this.props.countries[country], selection.query);
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
      this.setState({dataPoints: lineData});
    });
  },
  render: function() {
    return (
      <div>
        <div className='options'>
          <ChartOptions
            className='options col-md-10'
            handleClick={this.handleClick}
          />
        </div>

        <div className='countries'>
          <div className='first-country col-md-4'>
            <SelectCountry
              onSelect={this.handleSelect}
              countries={Object.keys(this.props.countries)}
            />
          </div>

          <SelectedCountries
            countries={this.state.currentCountries}
            onDelete={this.removeCountry}/>
        </div>

        {this.renderChart()}
      </div>
    );
  },
});
