/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './promotion_box.styles.scss'

import { motion } from 'framer-motion'
import {android, appstore, huwawei} from '../imports'

const PromotionBox = () => {
  return (
    <div className="promotion_boxes">
        <div className="promotion_box dish">
            <div className="promotion_box__content">
                <h2>Zestaw dla 3 osób</h2>
                <p className="markdown__black">Razem smakuje lepiej! Zamów zestawy obiadowy dla 3 osób 
                już od <span>39 zł</span> </p>
                <motion.button whileTap={{scale: 0.9}} whileHover={{scale: 1.1}}type="button"> Zamów online </motion.button>    
    
            </div>
        </div>
        <div className="promotion_box uber">
            <div className="promotion_box__content">
                <h2>UberEats</h2>
                <p className="markdown__accent"> Zamawiaj w aplikacji <span>10% taniej.</span>
                Pobierz aplikację UberEats już dziś.</p>
                <div className="promotion_box-icons">
                    <img src={android}></img>
                    <img src={appstore}></img>
                    <img src={huwawei}></img>
                    </div>
                <motion.button whileTap={{scale: 0.9}} whileHover={{scale: 1.1}}type="button"> Zamów online </motion.button>    

            </div>
        </div>
    </div>
  )
}

export default PromotionBox