import React             from 'react';
import Header            from './Header';
import Footer            from './Footer';
import GlobalGdp         from './GlobalGdp';
import CompareCountries  from './CompareCountries';
import countries         from './constants/Countries.json';

export default React.createClass({
  getInitialState: function() {
    return {activeTab: 'two'}
  },
  handleClick: function(clicked){
    this.setState({activeTab: clicked});
  },
  renderContent: function() {
    if (this.state.activeTab == 'geo') {
      return <GlobalGdp countries={countries} />
    } else if (this.state.activeTab == 'two') {
      return <CompareCountries countries={countries} />
    }
  },
  render: function() {
    return (
      <div className="container">
        <Header handleLinkClick={this.handleClick} />

        {this.renderContent()}

        <Footer />
      </div>
    );
  }
});
