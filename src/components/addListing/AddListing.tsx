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
  const [mileage, setMileage] = useState<number>(0);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const [phone, setPhone] = useState('');
  const [owner, setOwner] = useState('');
  const [imageFiles, setImageFiles] = useState([]);

  const clickHandler = async (e: any) => {
      const listing = new Listing(year, mileage, brand, model, price, owner, phone);
      // const listing = new Listing(2002, 500000, 'BMW', 'A6', 9999, 'Saulius Mangrūda', '37069814723');
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
          {/* <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}} placeholder='Image URL' value={img} autoComplete='off' onChange={e => setImg(e.target.value)}/> <br/> */}

          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Year' value={year} autoComplete='off' onChange={e => setYear(parseInt(e.target.value, 10))}/>year <br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Mileage' value={mileage} autoComplete='off' onChange={e => setMileage(parseInt(e.target.value, 10))}/>mileage <br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Brand' value={brand} autoComplete='off' onChange={e => setBrand(e.target.value)}/><br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Model' value={model} autoComplete='off' onChange={e => setModel(e.target.value)}/> <br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Price' value={price} autoComplete='off' onChange={e => setPrice(parseInt(e.target.value, 10))}/>price<br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Owner' value={owner} autoComplete='off' onChange={e => setOwner(e.target.value)}/> <br/>
          <TextField type='text' sx={{backgroundColor: 'white', marginBottom: 2}}  placeholder='Phone' value={phone} autoComplete='off' onChange={e => setPhone(e.target.value)}/><br/>

          <Box sx={{width: 500}}>
            <FileUpload
              label='Nuotraukos'
              onChange={handleFileChange}
            />
            <SelectThumbnail
              imageFiles={imageFiles}
              handleThumbnailSelection={handleThumbnailSelection} 
              
            />
          </Box>

          
          <NavLink to='/' style={{textDecoration: 'none', paddingLeft:45}}>
            <Button variant="contained" onClick={clickHandler}>Add listing</Button>
          </NavLink>
      </Box>
    </>
  )
}

export default AddListing