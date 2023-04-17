import React from 'react'

const Car = (props : any) => {
  const {brand, id, mileage, model, year} = props.car;

  return <article className='car'>
    <img src={'https://img.autobytel.com/chrome/multiview/white/640/2022hyc03_640/2022hyc030017_640_01.jpg'} alt='' />
    {/* <h1>${price}</h1> */}
    <h4>Brand: {brand}</h4>
    <h4>Model: {model}</h4>
    <h4>Year: {year}</h4>
    <h4>Mileage: {mileage}</h4>
    {/* <h4>Owner: {seller}</h4>
    <h4>Phone number: {phone}</h4> */}

  </article>
}

export default Car;