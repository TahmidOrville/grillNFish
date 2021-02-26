import React from 'react';
import { Carousel} from 'react-bootstrap';
import banner from '../../images/banner.jpg'
import banner2 from '../../images/banner3.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div>
             <Carousel className="car">
  <Carousel.Item>
    <img
      className="d-block w-100 banner"
      src={banner}
      alt="First slide"
    />
    <Carousel.Caption className="bannerCaption">
      <h1>Taste in every bite</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 banner"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption className="bannerCaption">
      <h1>Dive in the ocean...</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;