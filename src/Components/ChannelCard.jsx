import React from "react";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoProfilePicture,
} from "../utils/Constant";
import { Link } from "react-router-dom";


const ChannelCard = ({ channelDetail , marginTop }) => {


return (
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: { xs: "356px", md: "325px" },
      margin: "auto",
    //   border : "1px solid #fff",
      height : "326px",
      marginTop
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}  >
      <CardContent
        sx={{
          color: "#fff",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          gap: "6px",  
        }}

        
      >
        <CardMedia
          image={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channelDetail?.snippet?.title}
          sx={{ height: "185px", width: "185px", borderRadius: "50%" }}
         
        />
        <Typography variant="h6" fontSize="16px">
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: 16, color: "gray", ml: "5px" }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString()}{" "}
            Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);
}

export default ChannelCard;
