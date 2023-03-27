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

//setup vars

function CarList(newCar: any) {
  const [list, setList] = useState(data);
  
  

  const clickHandler = () => {
    alert('nothing happened');
  }

  function removeList (id : any) {
    const newList = list.filter((l) => l.id !== id);
    setList(newList);
  }

  return (
    <section className='carList'>
      {
        list.map((car, index) => {
          const {img, price, year, seller} = car;
          return (
          <div>
            <Car key={index} car={car}></Car>
            <button type="button" onClick={()=>removeList(car.id)}>Delete</button>{/*car.id naudoju kai deletinu, gali prireikt index gaaaal veliau */}
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
