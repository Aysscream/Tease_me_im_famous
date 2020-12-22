import React from "react";


const DB_URL_IMG = "http://image.tmdb.org/t/p/w92/";
const VideoListItem = (props) => {
  const {movie} = props;
  return (
    <li onClick={handleOnClick} className="sugg list-group-item">
      <div className="media">
        <div className="media-left">
          <img className='media-object img-rounded' src={`${DB_URL_IMG}${movie.poster_path}`} />
        </div>
        <div className="media-body">
          <h5 className='title_list_item'>{movie.title}</h5>
        </div>
      </div>
    </li>
  );
  function handleOnClick(){
    props.callback(movie)
  }
};

export default VideoListItem;
