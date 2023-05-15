import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import SampleClient from '../../clients/sampleClient';
import Listing from '../models/listing';
import { log } from 'console';

 

const EditListing = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const [listing, setListing] = useState<Listing | null>(null);
  const [mileage, setMileage] = useState(0);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState(0);
  const [year, setYear] = useState(0);
  const [phone, setPhone] = useState('');
  const [owner, setOwner] = useState('');

  useEffect(() => {
    console.log("ID:", id); // Log the value of id to the console
    if (id) {
      // Fetch the car listing with the provided id
      
      SampleClient.getListingById(id)
        .then((listing) => {
          if (listing) {
            // Set the state values for the form fields
            setMileage(listing.mileage);
            setBrand(listing.brand);
            setModel(listing.model);
            setPrice(listing.price);
            setYear(listing.year);
            setPhone(listing.phoneNumber);
            setOwner(listing.owner);
          }
          setListing(listing);
          console.log("brandasss: ", listing?.brand);
        })
        
        .catch((error) => {
          console.error("Error fetching car listing:", error);
        });
    }
  }, [id]);

  const clickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (listing) {
      const updatedListing = {
        ...listing,
        mileage,
        brand,
        model,
        price,
        year,
        phoneNumber: phone,
        owner,
      };

      console.log("ieinu i vidu");
      await SampleClient.editCarListing(updatedListing);
      navigate('/');
    }
  };

  return (
    <>
      <Box sx={{paddingTop: 10, backgroundColor: 'lavender', paddingLeft: '42vw'}} >
          {/* <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}} placeholder='Image URL' value={img} autoComplete='off' onChange={e => setImg(e.target.value)}/> <br/> */}
          Year: <br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Year' value={year} autoComplete='off' onChange={e => setYear(parseInt(e.target.value, 10))}/>
          <br/> Mileage: <br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Mileage' value={mileage} autoComplete='off' onChange={e => setMileage(parseInt(e.target.value, 10))}/>
          <br/> Brand: <br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Brand' value={brand} autoComplete='off' onChange={e => setBrand(e.target.value)}/>
          <br/> Model: <br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Model' value={model} autoComplete='off' onChange={e => setModel(e.target.value)}/>
          <br/> Price: <br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Price' value={price} autoComplete='off' onChange={e => setPrice(parseInt(e.target.value, 10))}/>
          <br/> Owner: <br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Owner' value={owner} autoComplete='off' onChange={e => setOwner(e.target.value)}/>
          <br/> Phone: <br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Phone' value={phone} autoComplete='off' onChange={e => setPhone(e.target.value)}/>

          
          <NavLink to='/' style={{textDecoration: 'none', paddingLeft:45}}>
            <br/>
            <Button variant="contained" onClick={clickHandler}>Edit Listing</Button>
          </NavLink>
      </Box>
    </>
  )
}

  export default EditListing