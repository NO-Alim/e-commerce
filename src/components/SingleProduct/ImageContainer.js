import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const ImageContainer = ({ product }) => {
  const { name, productImage, hoverImage } = product || {};
  return (
    <Carousel showArrows={false} showIndicators={false} showStatus={false}>
      <div>
        <img src={productImage} alt={name} />
      </div>
      <div>
        <img src={hoverImage} alt={name} />
      </div>
      <div>
        <img src={productImage} alt={name} />
      </div>
    </Carousel>
  );
};

export default ImageContainer;
