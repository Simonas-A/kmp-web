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
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

async function getCars (setList: any){
    const listings = await SampleClient.getCarListings();
    console.log("listings received");
    setList(listings);
}

const CarList = () => {
  const [list, setList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState("");
  //const initialLoad = useRef(true);

  const load = useMemo(() => {
    getCars(setList);
  }, []) 
  
  //getCars(setList, initialLoad.current);


  const clickHandler = async (listing: Listing) => {
    await SampleClient.editCar(listing);
  }
  const deleteHandler = async () => {
    console.log(deleteId);
    await SampleClient.deleteCar(deleteId);
    getCars(setList);
    setOpen(false);
  }
  const handleOpen = (car: Listing) => {
    setDeleteId(car.id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const listings = list.map((car, index) => {
    return (
      <Box sx={{border: 1, borderColor: '#fffff', backgroundColor: 'white' }}>
        <Car key={index} car={car} index={index}></Car>
        <Box sx={{width: 200, display: 'inline-block', padding: 1,}}>
          <Button variant="contained" onClick={() => {clickHandler(car)}}>Edit</Button>
          <Button variant="contained" sx={{marginLeft: 2}} onClick={() => (handleOpen(car))}>Delete</Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Ar tikrai nori ištrinti skelbimą?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Ištrynus skelbimą duomenys bus prarasti visiems laikams ir
                niekada niekada nebebus galima jų sugrąžinti. Tikrai.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Grįžti</Button>
              <Button onClick={deleteHandler} autoFocus>
                Trinti
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
  )})

  return (
    // <div className="background"> 
      <section className='carList'>
        {listings}
      </section>
    // </div>
  );
}

export default CarList;
