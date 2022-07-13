/* eslint-disable jsx-a11y/alt-text */
import React, { } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import { Carousel } from 'react-responsive-carousel';
import {slider1} from '../imports'


export const Slider = () =>  (
  <Carousel autoPlay={true} interval="3000" infiniteLoop dynamicHeight showThumbs={false} showStatus={false} className="slider">
  <div>
      <img src={slider1} />
  </div>
  <div>
      <img src={slider1} />
  </div>
  <div>
    <img src={slider1} />
  </div>
</Carousel>
  );

