import React from "react";
const BASE_URL = "https://www.youtube.com/embed/";

const Video = ({ videoId }) => {
  return (
    <div className="box_shado embed-responsive embed-responsive-16by9">
      <iframe className='embed-responsive-item' src={`${BASE_URL}${videoId}`} />
    </div>
  );
};

export default Video;
