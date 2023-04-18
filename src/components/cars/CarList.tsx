import React, { useEffect, useRef, useState } from 'react';
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
let listings: Listing[];

async function getCars (setList: any){
  listings = await SampleClient.getCarListings();
  console.log(listings);
  setList(listings); 
}

function CarList() {
  
  
  const [list, setList] = useState([]); 
  
  getCars(setList);


  const clickHandler = () => {
    alert('nothing happened');
  }

  // function removeList (id : any) {
  //   const newList = list.filter((l) => l.id !== id);
  //   setList(newList);
  // }

  return (
    <section className='carList'>
      {
        
        list.map((car, index) => {
          // console.log(car);
          // const {img, price, year, seller} = car;
          return (
          <div>
            <Car key={index} car={car} index={index}></Car>
            {/* <button type="button" onClick={()=>removeList(car.id)}>Delete</button> */}
            <button type="button" onClick={clickHandler}>Edit</button>
            
          </div>
        )})
      }
    </section>
  );
}

// const domNode = document.getElementById('root')
// const root = createRoot(domNode!);
// root.render( <CarList />);

export default CarList;
