import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Typography, Stack, CardMedia } from "@mui/material";
import Videos from "./Videos";
import { CheckCircle, Search } from "@mui/icons-material";
import { fetchFromAPI } from "../utils/FetchFromAPI";
import ChannelCard from "./ChannelCard";
import parse from "html-react-parser";
import VideoComment from "./VideoComment";

const VideoDetails = () => {
  const { id } = useParams();
  const [videoData, setVideoData] = useState(null);
  const [videos, setVideos] = useState([]);

  console.log(videos);
  console.log(videoData);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoData(data?.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoData?.snippet) return "Loading...";

  const {
    snippet: { title, description, channelTitle, channelId, publishedAt },
    statistics: { viewCount, likeCount, commentCount },
  } = videoData;
  const descriptionLines = description.split("\n");
  const date = new Date(publishedAt);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  console.log(formattedDate);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", top: "94px", px: "10px", pb: "20px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              variant="h5"
              color="#fff"
              fontWeight="bold"
              px={2}
              py={1}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              py={0}
              px={2}
              sx={{ color: "#fff" }}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ xs: "subtitle2", md: "h6" }}
                  color="#fff"
                  fontSize="18px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                >
                  <CardMedia
                    image={videoData?.snippet?.thumbnails?.high?.url}
                    sx={{ width: "50px", height: "50px", borderRadius: "60%" }}
                  />
                  {channelTitle}
                  <CheckCircle sx={{ color: "gray", fontSize: "17px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap={3} alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.8 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.8 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>

          <Box px={2.5}>
            <Box p={4} minHeight="90vh" sx={{ backgroundColor: "#0f0f0f" }}>
              <Box display="flex" gap={2} mb={1}>
                <Typography
                  variant="body2"
                  color="#fff"
                  fontSize="15px"
                  fontWeight="bold"
                >
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography
                  variant="body2"
                  color="#fff"
                  fontSize="15px"
                  fontWeight="bold"
                >
                  {formattedDate}
                </Typography>
              </Box>

              {descriptionLines.map((line, index) => (
                <Typography key={index} color="#fff" fontSize="14px">
                  {line}
                  <br />
                </Typography>
              ))}
            </Box>
          </Box>

          <Box>
            <VideoComment id = {id} commentCount = {commentCount}/>
          </Box>


        </Box>
        <Box
          py={1}
          px={{ md: 4, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
