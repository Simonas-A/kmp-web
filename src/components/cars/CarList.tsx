import React, { useEffect, useRef, useMemo, useState } from 'react';
import logo from './logo.svg';
import '../../App.css';
import SampleClient from '../../clients/sampleClient';
import { json } from 'stream/consumers';
import { useTable, UseTableRowProps } from "react-table";
import data from "../../MOCK_DATA.json";
import {createRoot} from 'react-dom/client';
import '../../index.css';
import Car from './Car';
import Listing from '../models/listing';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

async function getCars (setList: any){
    const listings = await SampleClient.getCarListings();
    console.log("listings received");
    setList(listings);
}

const CarList = () => {
  const [list, setList] = useState([]); 
  //const initialLoad = useRef(true);

  const load = useMemo(() => {
    getCars(setList);
  }, []) 
  
  //getCars(setList, initialLoad.current);


  const clickHandler = async (listing: Listing) => {
    await SampleClient.editCar(listing);
  }
  const deleteHandler = async (listing: Listing) => {
    await SampleClient.deleteCar(listing);
  }

  const listings = list.map((car, index) => {
    return (
      <Box sx={{border: 1, borderColor: '#fffff'}}>
        <Car key={index} car={car} index={index}></Car>
        <Box sx={{width: 200, display: 'inline-block', padding: 1,}}>
          <Button variant="contained" onClick={() => {clickHandler(car)}}>Edit</Button>
          <Button variant="contained" sx={{marginLeft: 2}} onClick={() => {deleteHandler(car)}}>Delete</Button>
        </Box>
      </Box>
  )})

  return (
    <section className='carList'>
      {listings}
    </section>
  );
}

export default CarList;
