import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import VideoList from "./components/VideoList/VideoList";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import youtube from "./apis/youtube";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  state = { videos: [], clickedVid: null };
  componentDidMount() {
    this.onYoutubeSearch("cyberpunk");
  }
  onYoutubeSearch = async (query) => {
    const res = await youtube.get("/search", {
      params: {
        q: query,
      },
    });
    this.setState({ videos: res.data.items, clickedVid: res.data.items[0] });
  };
  onVideoSelect = (video) => {
    this.setState({ clickedVid: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSearch={this.onYoutubeSearch} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoPlayer video={this.state.clickedVid} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//AIzaSyDTlPWrBzds4bH0gvLtf0d3ksh_86OE9YA
