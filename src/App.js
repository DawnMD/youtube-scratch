import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  state = {};
  onYoutubeSearch = (query) => {
    console.log(query);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSearch={this.onYoutubeSearch} />
      </div>
    );
  }
}

export default App;

//AIzaSyDTlPWrBzds4bH0gvLtf0d3ksh_86OE9YA
