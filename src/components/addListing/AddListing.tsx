import { Box, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import React, { useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import SampleClient from '../../clients/sampleClient';
import Main from '../Main';
import Listing from '../models/listing';

const AddListing = () => {
  const [arr, setArr] = useState([]);
  const [img, setImg] = useState('');
  const [car, setCar] = useState('');
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');
  const [phone, setPhone] = useState('');
  const [seller, setSeller] = useState('');

  const clickHandler = async (e: any) => {
      // e.preventDefault();
      // if (img && car && price && year && phone && seller) {
      //   const aCar = {img:img, car:car, price:price, year:year, phone:phone, seller:seller};
      //   console.log(aCar);
      //   setArr((arr) => {
      //     return [...arr, aCar]
      //   });
      // } else {
      //   console.log('empty values')
      // }
      //setArr([...arr, {img, car, price, year, phone, seller}]);
      //listing = arr;
      const listing = new Listing(car, seller, price);
      await SampleClient.addCar(listing);
      // console.log(arr);
  } 

  return (
    <>
      <Box sx={{marginTop:10, marginLeft: '40vw'}} >
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}} placeholder='Image URL' value={img} autoComplete='off' onChange={e => setImg(e.target.value)}/> <br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Car' value={car} autoComplete='off' onChange={e => setCar(e.target.value)}/> <br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Price' value={price} autoComplete='off' onChange={e => setPrice(e.target.value)}/><br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Year' value={year} autoComplete='off' onChange={e => setYear(e.target.value)}/> <br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Phone' value={phone} autoComplete='off' onChange={e => setPhone(e.target.value)}/><br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Seller' value={seller} autoComplete='off' onChange={e => setSeller(e.target.value)}/> <br/>
          
          <NavLink to='/' style={{textDecoration: 'none', paddingLeft:45}}>
            <Button variant="contained" onClick={clickHandler}>Add listing</Button>
          </NavLink>
          {/* <h1>{arr}</h1> */}
      </Box>
    </>
  )
}

export default AddListing