import React from 'react'
import VideoListItem from '../components/video-list-item'
const VideoList = (props) => {
    let {movieList} = props;
    return (
        <div>
            <ul>
                {
                    movieList.map(movie => {
                        return <VideoListItem key={movie.id} movie={movie} callback={receiveCallback}/>
                    })
                }
                
                
            </ul>
        </div>
    );
    function receiveCallback(movie){
        props.callback(movie);
    }
}

export default VideoList;