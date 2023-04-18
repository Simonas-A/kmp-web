import React from 'react'

const Car = (props : any) => {
  const {brand, id, mileage, model, owner, phoneNumber, price, year} = props.car;

  return <article className='car'>
    <img src={'https://loremflickr.com/640/480/Car'} alt='' />
    <h1>${price}</h1>
    <h4>Brand: {brand}</h4>
    <h4>Model: {model}</h4>
    <h4>Year: {year}</h4>
    <h4>Mileage: {mileage}</h4>
    <h4>Owner: {owner}</h4>
    <h4>Phone number: {phoneNumber}</h4>

  </article>
}

export default Car;