import React, { useState } from "react";
import VideoPaly from "../reUsableComponent/VideoPaly";
import { Youtube_Queries } from "../Utility/APIConstantData";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

export default function Home() {
  const [selectedQuery, setSelectedQuery] = useState(Youtube_Queries[0]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [title, setTitle] = useState(null);
  const [channel, setChannel] = useState(null);
  const [inputValue, setInputValue] = useState("");

  // const videoId = useSelector((store) => {
  //   store.videoId.id;
  // });

  const handleChange = (event) => {
    setSelectedQuery(event.target.value);
  };
  const handleVideoSelect = (videoId, title, channel) => {
    setSelectedVideoId(videoId);
    setChannel(channel);
    setTitle(title);
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputChange = () => {
    setSelectedQuery(inputValue);
  };

  // console.log(selectedQuery);

  return (
    <div className="continer-fluid">
      <div className="row mb-2 mx-1 align-items-center justify-content-between">
        <div className="col-7 ms-3 rounded-pill border border-1">
          <div className="row flex justify-start">
            <div className="col-10  d-flex align-items-center p-0 ps-3">
              <input
                className="w-100 border-0"
                style={{ outline: "none" }}
                onChange={handleInputValue}
                placeholder="search"
              />
            </div>
            <div className="col-2 p-0">
              <button
                className="btn btn-primary w-100"
                onClick={{ handleInputChange }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-4">
          <select className="w-100" onChange={handleChange}>
            {Youtube_Queries.map((element, index) => (
              <option value={element} key={index}>
                {element}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row mx-1 justify-content-center">
        <div className="col-12 d-flex justify-content-center col-md-8">
          <VideoPaly
            videoId={selectedVideoId}
            title={title}
            channel={channel}
          />
        </div>
        <div className="col-12 col-md-4">
          <VideoContainer
            selectedQuery={selectedQuery}
            onVideoSelect={handleVideoSelect}
          />
        </div>
      </div>
    </div>
  );
}
