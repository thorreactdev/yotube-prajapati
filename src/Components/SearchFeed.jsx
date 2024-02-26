import React, { useEffect, useState } from 'react'
import {Box , CircularProgress, Typography} from "@mui/material";
import Videos from './Videos';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/FetchFromAPI';


const SearchFeed = () => {
  const[videos , setVideos] = useState([]);
  const { searchTerm } = useParams();
 


  
  useEffect(() => {
    
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => 
        setVideos(data.items));
  }, [searchTerm]);

  return (
    <Box px={13} py={3} sx={{overflowY : 'auto' , height : "90vh", flex : 2}}>
    <Typography fontWeight="bold" variant="h4" mb={2} sx={{color : '#fff'}}>
      Showing Results For <span style={{color : '#FC1503'}}>{searchTerm}</span> Videos
    </Typography>
    <Videos videos={videos} />
  </Box>
  )
}

export default SearchFeed