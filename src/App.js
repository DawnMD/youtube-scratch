import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
