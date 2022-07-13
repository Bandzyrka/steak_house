import React from 'react'
import './brands.styles.scss'
import { Pyszne, DeliGoo, Glovo, uber_eats, bolt_food } from '../imports'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useMediaQuery from "../../hooks/useMediaQuery";

const responsive = {
  
  desktop: {
    breakpoint: { max: 3000, min: 1201 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1200, min: 750 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 750, min: 500 },
    items: 2
  },
  smallmobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1
  }
};
export const Brands = () => {
  const isDesktop = useMediaQuery('(min-width: 1201px)');
  return (
    <>
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      centerMode={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={isDesktop ? false : true} 
      autoPlaySpeed={4000}
      keyBoardControl={false}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile", "desktop", "smallmobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"

  >
  <div>
  <img src={Pyszne} alt="Pyszne" />
    </div>  
    <div>
      <img src={DeliGoo} alt="DeliGoo" />
    </div>  
    <div>
      <img src={Glovo} alt="Glovo" />
    </div>
    <div>
      <img src={uber_eats} alt="uber_eats" />
    </div> 
    <div>
      <img src={bolt_food} alt="bolt_food" />
    </div> 
  </Carousel>
    </>
    )
}
export default Brands