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

//setup vars
//let listings: Listing[];

async function getCars (setList: any){
  //if (initialLoad.current) {
    const listings = await SampleClient.getCarListings();
    console.log("listings received");
    setList(listings);
  //}
  //else {
  //  console.log("listings already received");
  //}
}

const CarList = () => {
  const [list, setList] = useState([]); 
  //const initialLoad = useRef(true);

  const load = useMemo(() => {
    getCars(setList);
  }, []) 
  
  //getCars(setList, initialLoad.current);


  const clickHandler = () => {
    alert('nothing happened');
  }

  const listings = list.map((car, index) => {
    return (
    <div>
      <Car key={index} car={car} index={index}></Car>
      {/* <button type="button" onClick={()=>removeList(car.id)}>Delete</button> */}
      <button type="button" onClick={clickHandler}>Edit</button>
    </div>
  )})


  // function removeList (id : any) {
  //   const newList = list.filter((l) => l.id !== id);
  //   setList(newList);
  // }

  return (
    <section className='carList'>
      {listings}
    </section>
  );
}

// const domNode = document.getElementById('root')
// const root = createRoot(domNode!);
// root.render( <CarList />);

export default CarList;
