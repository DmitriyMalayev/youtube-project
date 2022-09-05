import "./VideoItem.css"
import React from "react";

const VideoItem = ({ video }) => {
  console.log(video.id);

  return (
    <div className="video-item item">
      <strong>
        <a className="header">{video.snippet.title}</a>
      </strong>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt="video item"
      />
    </div>
  );
};

export default VideoItem;
