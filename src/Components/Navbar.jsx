import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import {logo} from "../utils/Constant";
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack direction= "row" alignItems="center" p={2} sx={{position : "sticky" , backgroundColor : "#000" , justifyContent : "space-between" , top :0 , zIndex : "100"}}>
      <Link to="/" style={{display : "flex" , alignItems : "center"}}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar/>
    </Stack>
  )
}

export default Navbar