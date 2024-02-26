import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/FetchFromAPI";
import { Box, Typography, Stack, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

const VideoComment = ({ id, commentCount }) => {
  const [commentData, setCommentData] = useState([]);
  console.log(commentData);

  useEffect(() => {
    fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`).then((data) =>
      setCommentData(data.items)
    );
  }, [id]);

  const options = { year: "numeric", month: "short", day: "numeric" };

  return (
    <Box px={2.5} mt={2}>
      <Typography variant="h5" color="#fff" fontWeight="bold"fontSize="27px" >
        {commentCount} Comment
      </Typography>
      <Box>
        <Box>
          {commentData.map((comment, index) => (
            <Box sx={{ display: "flex", gap: "10px" }} mt={3} maxWidth="80%">
              <Link to={`/channel/${comment?.snippet?.channelId}`}>
                <CardMedia
                  image={
                    comment?.snippet?.topLevelComment?.snippet
                      ?.authorProfileImageUrl
                  }
                  sx={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
              </Link>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <Box sx={{display : 'flex', gap : "5px" , alignItems : 'center'}} >
                  <Link
                    to={
                      `/channel/${comment?.snippet?.topLevelComment?.snippet?.authorChannelId?.value} ` ||
                      `/channel/${comment?.snippet?.topLevelComment?.snippet?.authorChannelUrl}`
                    }
                  >
                    <Typography variant="subtitle2" color="#fff">
                      {
                        comment?.snippet?.topLevelComment?.snippet
                          ?.authorDisplayName
                      }
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="#fff" fontSize="13px">
                    {new Date(
                      comment?.snippet?.topLevelComment?.snippet?.publishedAt
                    ).toLocaleDateString("en-US", options)}
                  </Typography>
                </Box>
                <Typography variant="body2" color="#fff" fontSize="13px">
                  {comment?.snippet?.topLevelComment?.snippet?.textOriginal}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default VideoComment;
