import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return { inputText: '', showDropdown: false }
  },
  handleSearch: function(e){
    this.setState({showDropdown: true, inputText: e.target.value});
  },
  selectValue: function(item){
    this.setState({showDropdown: false, inputText: item});

    this.props.onSelect(item)
  },
  render: function(){
    var dropdown = null;

    if (this.state.showDropdown && this.state.inputText){
      var listItems = this.props.countries.filter(v => {
        return v.toLowerCase().indexOf(this.state.inputText.toLowerCase()) > -1;
      }).map(item => {
        return <li onClick={this.selectValue.bind(this, item)} key={item} >{item}</li>;
      });

      dropdown = (
        <ul style={{overflow: 'auto'}} className='dropdown' >
          {listItems}
        </ul>
      )
    }

    return (
      <div className='search-form'>
          <input
            type='text'
            className='col-md-12'
            value={this.state.inputText}
            placeholder='Search for a country...'
            onChange={this.handleSearch}
          />
          { dropdown }
      </div>
    );
  },
});
