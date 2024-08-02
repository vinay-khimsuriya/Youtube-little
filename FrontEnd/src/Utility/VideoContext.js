import React, { createContext, useState } from "react";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [videoId, setVideoId] = useState(null);

  const handleVideoSelect = (videoId) => {
    setVideoId(videoId);
  };

  return (
    <VideoContext.Provider value={{ videoId, handleVideoSelect }}>
      {children}
    </VideoContext.Provider>
  );
};

export { VideoContext, VideoProvider };
