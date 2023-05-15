import React from 'react';
import CarList from '../../components/cars/CarList'
import Box from '@mui/material/Box';



const CarListPage= () => {
  return (
    <Box sx={{backgroundColor: 'lavender', paddingTop: 10}}>
      <CarList/> 
    </Box> 
  )
}

export default CarListPage;