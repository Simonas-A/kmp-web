import { Box, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import React, { useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import SampleClient from '../../clients/sampleClient';
import Main from '../Main';
import Listing from '../models/listing';
import FileUpload from '../imageUpload/FileUpload';
import SelectThumbnail from '../imageUpload/SelectThumbnail';

const AddListing = () => {
  const [arr, setArr] = useState([]);
  const [img, setImg] = useState('');
  const [car, setCar] = useState('');
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');
  const [phone, setPhone] = useState('');
  const [seller, setSeller] = useState('');
  const [imageFiles, setImageFiles] = useState([]);

  const clickHandler = async (e: any) => {
      const listing = new Listing(2002, 5000, 'BMW', 'A6');
      await SampleClient.addCar(listing);
  } 

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const files = Array.from(event.target.files || []);
    const imagePromises = files.map(async (file: File) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise<string>((resolve) => {
        reader.onload = () => {
          const base64Image = reader.result as string;
          const pureBase64 = base64Image.split(',')[1];
          resolve(pureBase64);
        };
      });
    });
    Promise.all(imagePromises).then((pureBase64Images: string[]) => {
      setImageFiles(pureBase64Images as never[]);
      console.log(pureBase64Images);
    });
  };

  const handleThumbnailSelection = (index: number): void => {
    const swappedImageFiles = [...imageFiles];
    [swappedImageFiles[0], swappedImageFiles[index]] = [swappedImageFiles[index], swappedImageFiles[0]];
    setImageFiles(swappedImageFiles);
  };
  
  

  return (
    <>
      <Box sx={{marginTop:10, marginLeft: '40vw'}} >
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}} placeholder='Image URL' value={img} autoComplete='off' onChange={e => setImg(e.target.value)}/> <br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Car' value={car} autoComplete='off' onChange={e => setCar(e.target.value)}/> <br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Price' value={price} autoComplete='off' onChange={e => setPrice(e.target.value)}/><br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Year' value={year} autoComplete='off' onChange={e => setYear(e.target.value)}/> <br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Phone' value={phone} autoComplete='off' onChange={e => setPhone(e.target.value)}/><br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Seller' value={seller} autoComplete='off' onChange={e => setSeller(e.target.value)}/> <br/>
          
          <FileUpload
            label='Nuotraukos'
            onChange={handleFileChange}
          />
          <SelectThumbnail
            imageFiles={imageFiles}
            handleThumbnailSelection={handleThumbnailSelection} 
          />
          
          <NavLink to='/' style={{textDecoration: 'none', paddingLeft:45}}>
            <Button variant="contained" onClick={clickHandler}>Add listing</Button>
          </NavLink>
      </Box>
    </>
  )
}

export default AddListing