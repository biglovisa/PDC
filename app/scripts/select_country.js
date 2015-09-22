import React from "react";

export default React.createClass ({
  getInitialState: function() {
    return { inputText: "", showDropdown: false }
  },
  handleClick: function(clicked) {
    this.props.handleClick()
  },
  handleSearch: function(e) {
    // this.props.handleSelect(country);
    this.setState({showDropdown: true, inputText: e.target.value});
  },
  selectValue: function(item) {
    this.setState({showDropdown: false, inputText: item});
     //ajax
     // call the util/api func
     // this.props.onSelect(item);
  },
  render: function() {
    var dropdown = null;

    if (this.state.showDropdown && this.state.inputText) {
      var listItems = this.props.countries.filter(v => {
        return v.toLowerCase().indexOf(this.state.inputText.toLowerCase()) > -1;
      }).map(item => {
        return <li onClick={this.selectValue.bind(this, item)} key={item} >{item}</li>;
      });

      dropdown = (
         <ul style={{overflow: 'auto'}} className="dropdown" >
           {listItems}
        </ul>
      )
    }

    return (
      <div className="search-options col-md-12">
        <div className="col-md-6 btn-group">
          <button
            className="btn btn-default"
            onClick={this.handleClick.bind(this, "gdp")}
          >
            GDP by year
          </button>
        </div>

        <div className="search-form input-group col-md-6">
          <input
            type="text"
            value={this.state.inputText}
            placeholder="Select a country..."
            className="form-control"
            onChange={this.handleSearch}
          />

          { dropdown }

        </div>
      </div>
    );
  },
});
