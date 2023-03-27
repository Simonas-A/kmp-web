import React from 'react'

const Car = (props : any) => {
  const {img, price, year, seller, phone} = props.car;

  return <article className='car'>
    <img src={img} alt='' />
    <h1>${price}</h1>
    <h4>Year: {year}</h4>
    <h4>Owner: {seller}</h4>
    <h4>Phone number: {phone}</h4>

  </article>
}

export default Car;