import React, { Component } from "react";
import "./VideoCard.css";

class VideoCard extends Component {
  render() {
    const { video } = this.props;
    return (
      <div className="item video-card">
        <img src={video.snippet.thumbnails.high.url} className="ui image" />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
          <div className="description">{video.snippet.description}</div>
        </div>
      </div>
    );
  }
}

export default VideoCard;
