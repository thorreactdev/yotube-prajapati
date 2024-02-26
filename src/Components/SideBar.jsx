import React from 'react'
import { Stack, Typography ,Box} from '@mui/material'
import { categories } from '../utils/Constant'

const SideBar = ({selectedCategory , setSelectedCategory}) => {
    // const selectedCategory = "Education";
  return (
    <Stack direction ="row" sx={{flexDirection : {md: "column"} , overflowY : "auto" , marginRight :"13px", height : {sx : "auto" , md : "95%"}}}>
        {
            categories.map((category)=>(
                <button
                className='category-btn'
                style={{background : category.name === selectedCategory && "#FC1503", color : "white"}}
                key={category.name}
                onClick={()=>setSelectedCategory(category.name)}
                >
                    <span style={{color : category.name === selectedCategory ? "white" : 'red' , marginRight : "15px"}}>{category.icon}</span>
                    <span style={{opacity : category.name === selectedCategory ? "1" : "0.8"}}>{category.name}</span>
                </button>

            ))
        }

    </Stack>
  )
}

export default SideBar