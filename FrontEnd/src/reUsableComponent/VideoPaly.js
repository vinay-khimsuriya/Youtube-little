import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function VideoPaly({ videoId, title, channel }) {
  const videoID = useSelector((store) => store.videoId.id);
  console.log(videoID);

  // let videoIddd = localStorage.getItem("videoId");
  // alert(videoId);
  // console.log("videoId ===>", videoId);
  // console.log("videoIddd ===>", videoIddd);

  return (
    <div
      className="d-flex flex-column w-100 justify-contnet-center"
      style={{ height: "500px" }}
    >
      <iframe
        className="w-100 rounded-2"
        height="100%"
        src={`https://www.youtube.com/embed/${videoID}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div>
        <h3 className="title">{title}</h3>
        <h6>{channel}</h6>
      </div>
    </div>
  );
}
