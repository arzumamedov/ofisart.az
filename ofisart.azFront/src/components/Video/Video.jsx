import React, { useState } from "react";
import "./Video.scss";

function Video() {
  const [videoShow, setVideoShow] = useState(false);

  function playVideo() {
    setVideoShow(true);
  }

  function closeVideo() {
    setVideoShow(false);
  }

  return (
    <>
      <div className={`video ${videoShow ? "video-show" : ""}`}>
        {!videoShow && (
          <div className="play" onClick={playVideo}>
            <div className="border">
              <h2>
                Play Video
              </h2>
            </div>
          </div>
        )}

        {videoShow && (
          <>
            <iframe
              width="560"
              height="315"
              src="https://player.vimeo.com/video/570049428?muted=1&autoplay=1&loop=1&transparent=0&background=1&app_id=122963" title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            ></iframe>
            <div className="close" onClick={closeVideo}>
              <i class="fa-solid fa-xmark"></i>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Video;
