import React from "react";
import { Navbar } from "react-bootstrap";
import { SCColor, SCWhite } from 'assets/logos'
import css from "./Header.module.css"
const Header = ({ scrolled, setOpen, open }) => {
  return (
    <Navbar className={`${css.navbar} ${scrolled ? css.navbarScrolled : ''}`} fixed="top" expand={false} variant="light" >

      <Navbar.Toggle
        onClick={() => setOpen(!open)}
        aria-controls=""
        aria-expanded={open}
        className={`mr-4 ${css.toggler}`}
      />
      <Navbar.Brand href="#">
        {scrolled ?
          <img alt="" src={SCColor} height="40" /> :
          <img alt="" src={SCWhite} height="40" />
        }
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
