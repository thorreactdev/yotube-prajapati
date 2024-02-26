import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "../utils/FetchFromAPI";



const ChannelDetails = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  console.log(id);
  console.log(channelDetail);
  const [videos, setVideos] = useState([]);

 

  

  
  

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => 
      setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => 
        setVideos(data?.items));
  }, [id]);

  if(!channelDetail) return "Loading...";


  return (
    <Box minHeight="100vh">
      <div
        style={{
          backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
          height: "45vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          zIndex: 10,
        }}
      />

      <ChannelCard channelDetail={channelDetail} marginTop="-97px" />

      <Box
        px={2}
        pb={5}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box sx={{ mr: { sm: "100px", xs: "40px" } }} />

        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetails;
