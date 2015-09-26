import React                from 'react';
import Header               from './header';
import ChartType            from './chart_type';
import CompareGlobally      from './compare_globally';
import CompareTwoCountries  from './compare_two_countries';
import countries            from './util/countries.json';

export default React.createClass({
  getInitialState: function(){
    return { activeTab: '' }
  },
  handleClick: function(clicked){
    this.setState({ activeTab: clicked });
  },
  renderContent: function() {
    if (this.state.activeTab == 'geo') {
      return <CompareGlobally countries={countries} />
    } else if (this.state.activeTab == 'two') {
      return <CompareTwoCountries countries={countries} />
    } else {
      return <h5 className="info">Select to compare globally or individual countries</h5>
    }
  },
  render: function() {
    return (
      <div className="container">
        <Header />
        <ChartType handleClick={this.handleClick} />

        {this.renderContent()}
      </div>
    );
  }
});
