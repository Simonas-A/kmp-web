import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import maxima from '../../data/maxima.png';
import swedbank from '../../data/swedbank.png';
import jungle from '../../data/jungle_king.jpg';

const HomePage = () => {
  return (
    <div className="homepage-background">
    <Carousel interval={3000} indicators={false} pause={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="https://www.bmw.lt/content/dam/bmw/common/all-models/x-series/x5/2023/highlights/bmw-x-series-x5-sp-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1673960417242.jpg"
          alt="BMW"
        />
        <Carousel.Caption> 
        <div className="caption1">
            <h3>Parduok</h3>
            <p>Mūsų svetainėje galite greitai parduoti seną automobilį</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="https://mollerauto.lt/media/wysiwyg/Audi_Q8_e-tron_quattro_2500x1000-01-01-01-01.jpg"
          alt="Camera"
        />
        <Carousel.Caption>
          <h3>Pirk</h3>
          <p>Taip pat mūsų svetainėje galite įsigyti naują automobilį</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="https://www.hdcarwallpapers.com/walls/mercedes_benz_g_63_amg-HD.jpg"
          alt="Exotic Fruits"
        />
        <Carousel.Caption>
          <h3>AutoMinus</h3>
          <p>Automobilių prekybos ekspertai</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='filter'>
        <h1> Lorem Ipsum</h1>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
          irure dolor in reprehenderit in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
    </div>
    <div className='images'>
      <img src={maxima} alt="" />
      <img src={swedbank} alt="" />
      <img src={jungle} alt="" height={280}/>
    </div>
    <div className="text-center p-3 background">
      © 2023 Copyright: KTU
    </div>
    </div>
    
  )
}

export default HomePage;