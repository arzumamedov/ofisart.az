import React from 'react';

const VideoPlayer = () => {
    return (
        <div>
            <h1>Video Player</h1>
            <video width="640" height="360" controls>
                <source src="" type="video/mp4" />
                <source src="video.webm" type="video/webm" />
            </video>
        </div>
    );
};

export default VideoPlayer;
