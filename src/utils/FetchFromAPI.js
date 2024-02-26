import axios from "axios"


const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    params: {
      maxResults: '50',
    },
    headers: {
     
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      "access-control-allow-origin": "*",
    }
  };

export const fetchFromAPI  = async(url) =>{
  const { data } = await axios.get(`${BASE_URL}/${url}`,options);
  return data;
};