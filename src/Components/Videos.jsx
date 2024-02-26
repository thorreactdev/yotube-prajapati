import React from 'react'
import { Stack , Box} from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({videos , direction}) => {
  
  if(!videos?.length) return "Loading...";
 
  console.log(videos);
  return (
    <Stack direction= { direction || "row" } gap={2} justifyContent="start" flexWrap="wrap">
      {
        videos.map((item,index)=>(
        <Box sx={{color : ""}} key={index}>
          {item.id.videoId && <VideoCard video = {item}/>}
          {item.id.channelId && <ChannelCard channelDetail = {item}/>} 
        </Box>
      ))}

    </Stack>
  )
}

export default Videos