import React from 'react'
import { Typography , Card , CardContent , CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl , demoChannelUrl ,  demoVideoUrl ,demoChannelTitle ,demoVideoTitle , demoProfilePicture} from "../utils/Constant";
import { Link } from 'react-router-dom';
import "../CSS/AllCssCode.css";

const VideoCard = ({ video : {id : {videoId} , snippet}}) => {
  return (
    <Card sx={{width : {md : "330px" , xs : "350px"} , mx : {xs : "40px" , md : "0px"} , borderRadius :0 }} className='video-card'>
        <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl }>
            <CardMedia
            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={snippet?.title}
            sx={{width : 358 , height : 180}}
            />

        </Link>
        <CardContent sx={{backgroundColor : "#1e1e1e" ,  height : "106px" }}>
            <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl }>
                <Typography variant='subtitle1' fontWeight="bold" color="#fff">
                    {snippet?.title.slice(0,60) || demoVideoTitle?.slice(0,60)}
                </Typography>
            </Link>
            <Link to={ snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl }>
                <Typography variant='subtitle2' fontWeight="bold" color="gray" style={{display : 'flex' , alignItems : "center"}}>
                   {snippet?.channelTitle || demoChannelTitle}
                   <CheckCircle sx={{fontSize : 14 , color: "gray" , ml : "5px"}}/>
                </Typography>
            </Link>

        </CardContent>
    </Card>
  )
}

export default VideoCard