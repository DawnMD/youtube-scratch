import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import VideoList from "./components/VideoList/VideoList";
import youtube from "./apis/youtube";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  state = { videos: [] };
  onYoutubeSearch = async (query) => {
    const res = await youtube.get("/search", {
      params: {
        q: query,
      },
    });
    this.setState({ videos: res.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSearch={this.onYoutubeSearch} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;

//AIzaSyDTlPWrBzds4bH0gvLtf0d3ksh_86OE9YA
