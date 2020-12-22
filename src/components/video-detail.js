import React from 'react'

const VideoDetail = ({ title, description }) => {
  return <div className="descrip">
      <h1>
          {title}
      </h1>
      <p> {description}</p>
  </div>
};


export default VideoDetail
