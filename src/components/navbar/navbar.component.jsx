import React, { useState } from "react";
import { RiMenu3Line, RiMenuLine } from "react-icons/ri";

import { logo, zamow, mojekonto, koszyk } from "../imports";

import "./navbar.styles.scss";
import { motion } from "framer-motion";

const Link = ({title}) => (
  <motion.p 
    className="hover-underline-animation" 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >{title}</motion.p>
  )

const Menu = () => (
  <React.Fragment>
    {
      ['Steaks', 'Burgers', 'French Fries', 'Drinks', 'Gdzie Dowozimy', 'Kontakt'].map(item => (<Link title={item} key={item} />))
    }
  </React.Fragment>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-menu">
          {toggleMenu ? (
            <RiMenuLine
              color="black"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="black"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="navbar-menu_container scale-up-center">
              <div className="navbar-menu_container-links">
                <Menu />
                <div className="navbar-menu_container-links-sign"></div>
              </div>
            </div>
          )}
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="navbar-action">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="navbar-action-container"
        >
          <img src={mojekonto} alt="man" />
          <p>Moje Konto</p>
        </motion.div>

        <motion.div
          className="navbar-action-container"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={koszyk} alt="bin" />
          <p>Koszyk</p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="button"
        >
          <div className="navbar-action-container">
            <img src={zamow} alt="pan" />
            <p>Zamów</p>
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;
