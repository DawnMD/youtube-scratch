import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  state = { searchVal: "" };
  onInputSearch = (e) => {
    this.setState({ searchVal: e.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.searchVal);
    //logic for search in API
  };
  render() {
    return (
      <div className="ui container margin">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search">Search Video</label>
            <input
              id="search"
              type="text"
              value={this.state.searchVal}
              onChange={this.onInputSearch}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
