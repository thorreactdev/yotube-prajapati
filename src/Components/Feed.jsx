import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/FetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const[videos, setVideos] = useState([]);
 
  useEffect(() => {
  
    
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => 
        setVideos(data.items));
  }, [selectedCategory]);
  return (
    <Stack
      sx={{
        padding: "0px 5px",
        mt: 1.5,
        flexDirection: { sx: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          height: {
            sx: "auto",
            md: "92vh",
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 },
          },
        }}
      >
        <SideBar selectedCategory={selectedCategory} setSelectedCategory ={setSelectedCategory}/>

        <Typography
          className="copyright"
          variant="body2"
          component="h1"
          sx={{ color: "#fff", mt: 1.5,px: "4px"}}
        >
          CopyRight 2024 Youtube
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY : 'auto' , height : "90vh", flex : 2}}>
        <Typography fontWeight="bold" variant="h4" mb={2} sx={{color : '#fff'}}>
          {selectedCategory} <span style={{color : '#FC1503'}}>Videos</span>
        </Typography>
        
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
