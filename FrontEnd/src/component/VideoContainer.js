import axios from "axios";
import React, { useEffect, useState, createContext } from "react";
import VideoContainerCard from "../Utility/VideoContainerCard";

export const VideoId = createContext();

export default function VideoContainer({ selectedQuery, onVideoSelect }) {
  const [data, setData] = useState(null);
  // const [defaultId, setDefaultId] = useState(null);

  useEffect(() => {
    fetchData(selectedQuery);
  }, [selectedQuery]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${selectedQuery}&type=video&key=AIzaSyD8Qi4aPSK5J_4QdjAd2gD0jbrhAueZG4s`
      );
      if (response && response?.data) {
        setData(response?.data?.items);

        onVideoSelect(response.data.items[0].id.videoId);
        console.log(response.data.items[0].id.videoId);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div
      className="border text-truncate text-break"
      style={{ overflowY: "scroll", textWrap: "wrap", height: "550px" }}
    >
      {data &&
        data.map((item, index) => (
          <VideoContainerCard
            key={index}
            data={item}
            onVideoSelect={onVideoSelect}
          />
        ))}
    </div>
  );
}
