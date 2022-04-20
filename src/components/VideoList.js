import React from 'react';
import VideoItem from './VideoItem';

//destructuring to pull 'videos' list from the parent object
//added keys on line 9 so react can efficiently render the list
const VideoList = ({ videos, onVideoSelect }) => {
    //assigning the mapped rendered objects
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
    })
    return <div className={'ui relaxed divided list'}>{renderedList}</div>
}

export default VideoList;