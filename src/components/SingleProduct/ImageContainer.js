import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import tv from '../../assets/tv.png';
const ImageContainer = () => {
  return (
    <Carousel showArrows={false} showIndicators={false} showStatus={false}>
      <div>
        <img src={tv} alt="tv" />
      </div>
      <div>
        <img src={tv} alt="tv" />
      </div>
      <div>
        <img src={tv} alt="tv" />
      </div>
    </Carousel>
  );
};

export default ImageContainer;
