import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const[searchTerm , setSearchTerm] = useState("");
  const navigate = useNavigate();

  const scollToTop = () =>{
    window.scrollTo({
      top :0,
      behavior : "smooth"
    })
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      setSearchTerm("");
    }
    scollToTop();

  }
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        mr: { sm: 5 },
      }}
    >
      <input 
      className="search-bar"
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}
      placeholder="Search Your Favourite Video.."
      />

      <IconButton onClick={handleSubmit}>
        <Search sx={{color : "red", p : '7px'}} />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
