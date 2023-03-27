import { Box, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import React, { useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Main from '../Main';

const AddListing = ({listing}) => {
  const [arr, setArr] = useState([]);
  const [img, setImg] = useState('');
  const [car, setCar] = useState('');
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');
  const [phone, setPhone] = useState('');
  const [seller, setSeller] = useState('');

  const clickHandler = (e) => {
      e.preventDefault();
      if (img && car && price && year && phone && seller) {
        const aCar = {img:img, car:car, price:price, year:year, phone:phone, seller:seller};
        console.log(aCar);
        setArr((arr) => {
          return [...arr, aCar]
        });
      } else {
        console.log('empty values')
      }
      // setArr([...arr, {img, car, price, year, phone, seller}]);
      listing = arr;
      // console.log(arr);
  } 

  return (
    <>
      <Box sx={{marginTop:10, marginLeft: '40vw'}} >
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}} placeholder='Image URL' value={img} autocomplete='off' onChange={e => setImg(e.target.value)}/> <br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Car' value={car} autocomplete='off' onChange={e => setCar(e.target.value)}/> <br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Price' value={price} autocomplete='off' onChange={e => setPrice(e.target.value)}/><br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Year' value={year} autocomplete='off' onChange={e => setYear(e.target.value)}/> <br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Phone' value={phone} autocomplete='off' onChange={e => setPhone(e.target.value)}/><br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Seller' value={seller} autocomplete='off' onChange={e => setSeller(e.target.value)}/> <br/>
          <Button variant="contained" onClick={clickHandler}>Add listing</Button>
          {/* <NavLink to='/' style={{textDecoration: 'none', paddingLeft:45}}></NavLink> */}
          {/* <h1>{arr}</h1> */}
      </Box>
    </>
  )
}

export default AddListing