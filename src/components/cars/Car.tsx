import React from 'react'

const NewImage = (id: number) => {
  const size = 300 + id;
  console.log(id);
  return <img src={'https://loremflickr.com/' + size + '/400/Car'} alt='' />
}

const Car = (props : any) => {
  const {brand, id, mileage, model, owner, phoneNumber, price, year, images} = props.car;

  let image = null;
  if (images === null || images === undefined || images.length === 0) {
    image = NewImage(props.index);
  } else {
    image = <img src={images[0]} alt='' />
  }

  return <article className='car'>
    {image}
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