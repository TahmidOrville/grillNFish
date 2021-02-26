import React from 'react';
import { Carousel } from 'react-bootstrap';
import './More.css';
import pic1 from '../../images/Menu-1.png';
import pic2 from '../../images/Pizza-Ala-Carte.png';
import pic3 from '../../images/teatime.jpg';
import pan from '../../images/about_pan-300x176.png'
const More = () => {
    return (
       <div className="moreArea">

         <span className="about">
             <img src={pan} alt=""/>
           <h5 >grillNFish is a casual, family restaurant chain serving fresh seafood in a pan, a unique dining experience that drew inspiration from the Mediterranean fishermen who caught seafood fresh from the seas, cooked and ate it straight from the pan.Designed with a casual, nautical ambience, grillNFish uses only the freshest fish and seafood, as well as natural ingredients like olive oil, herbs and various spices from around the world. grillNFish has been delighting customers with great tasting meals in generous portions and warm, friendly service – true marks of quality and value.</h5>
         </span>

        <p id="promotion">PROMOTIONS</p>
         <Carousel fade className="moreCarousel">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={pic1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={pic2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={pic3}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
       </div>
    );
};

export default More;