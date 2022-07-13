import React from 'react'
import './header.styles.scss'
import {motion} from 'framer-motion'
import {Slider} from '../slider/slider.component'



const Header = () => {
  return (
    <div className="header">
      
      <div className="header-content slide-in-left">  
        <h1><span>Rabat 10%</span> na<br /> pierwsze zamówienie!</h1>
        <p>Do 20 stycznia złóż zamówienie na stronie i skorzystaj z <span>promocji -10%.</span> Spiesz się, czas trwania promocji do końca lutego.</p>
        
        <div className="header-content__input">
          <motion.button whileTap={{scale: 0.9}} whileHover={{scale: 1.1}}type="button"> Zamów online </motion.button>    
        </div>  
      </div>
      
      <div className="header-slider">
        <Slider />
      </div>
    
      </div>
  )
}

export default Header