import React             from 'react';
import Header            from './header';
import SelectCountry     from './select_country';
import ChartOptions      from './chart_options';
import Chart             from './chart';
import SelectedCountries from './selected_countries';
import getCountryData    from './util/api';
import options           from './constants/data_types';

export default React.createClass({
  getInitialState: function(){
    return { dataPoints: [], currentCountries: [], currentDataOption: options['gdp'] };
  },
  renderChart: function(){
    if (this.state.dataPoints.length) {
      return <Chart
              values={ this.state.dataPoints }
              details={ this.state.currentDataOption.key }
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
    this.setState({ currentCountries: this.state.currentCountries.concat(country) });
  },
  handleClick: function(clicked) {
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

        <div className='countries'>
          <div className='first-country col-md-4'>
            <SelectCountry
              onSelect={ this.handleSelect }
              countries={ Object.keys(this.props.countries) }
            />
          </div>

          <SelectedCountries
            countries={ this.state.currentCountries }
            onDelete={ this.removeCountry }/>
        </div>

        { this.renderChart() }
      </div>
    );
  },
});
