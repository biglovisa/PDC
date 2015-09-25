import React                from 'react';
import ChartOptions   from './chart_options';
import getCountryData from './util/api';

export default React.createClass({
  handleClick: function(clicked){
    console.log(clicked);
  },
  render: function(){
    return (
      <div className='global-options'>
        <ChartOptions
          className='col-md-10'
          handleClick={this.handleClick}
        />
      </div>
    );
  },
});
