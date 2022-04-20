import './VideoItem.css'
import React from "react";

//destructuring video and the on video select callback out
//using an arrow function in onClick to make sure that the appropriate video is passed to the callback method
const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className={'item video-item'}>
            <img alt={video.snippet.title}
                 src={video.snippet.thumbnails.medium.url}
                 className="ui image"/>
            <div className={'content'}>
                <div className={'header'}>
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
}

export default VideoItem;
