import React, { Component } from "react";
import VideoCard from "../VideoCard/VideoCard";

class VideoList extends Component {
  render() {
    const renderedVidoes = this.props.videos.map((video) => {
      return <VideoCard key={video.id.videoId} video={video} />;
    });
    return <div className="ui divided relaxed list">{renderedVidoes}</div>;
  }
}

export default VideoList;
