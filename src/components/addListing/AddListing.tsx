import { Box, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import React, { useState } from 'react'
import { arrayBuffer } from 'stream/consumers';

const AddListing = () => {
  const [inputData, setData] = useState({
    name:"",
    rollNo:""
  });

  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
      setData({...inputData, [e.target.name]:e.target.value});
  }
  return (
    <>
      <Box sx={{marginTop:10, marginLeft:150}} >
        <TextField id="outlined-basic" variant="outlined" value={inputData.name} placeholder='Car' /> <br/>
        <TextField id="outlined-basic" variant="outlined" value={inputData.rollNo} /><br/>
        <Button variant="contained">Add listing</Button>
      </Box>
        
    </>
  )
}

export default AddListing