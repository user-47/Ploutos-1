import React, { useState } from 'react';
import './Header.styles.css';
import { Link } from 'react-router-dom'
import { Navbar, Form, Button, Col } from "react-bootstrap";


const Header = () => {

  const [hidden, setHidden] = useState(true);

  return(
    <Navbar className={`navbar-container ${hidden ? '' : 'responsive-navbar-container'}`}>
      <Navbar.Brand href="#home" className='responsive-navbrand'>
        <img
          src="../../assets/images/temp_logo.svg"
          width="75"
          height="65"
          className="d-inline-block align-top"
          alt="logo"
        />
        <img src="../../assets/icons/hamburger-menu.svg" alt="menu icon" className="hamburger-icon" onClick={() => setHidden(!hidden)} />
      </Navbar.Brand>
      
      <div style={{ display: 'flex'}}>
        <Link to="/home" className={`btn-link ${hidden ? '' : 'responsive-btn-link'}`}>
          <Button type="submit" variant="primary" className="login-btn">Login</Button>
        </Link>

        <Link to="/home" className={`btn-link ${hidden ? '' : 'responsive-btn-link'}`}>
          <Button type="submit" variant="danger" className="login-btn">Register</Button>
        </Link>
      </div>
      
      
    </Navbar>
  )
  
      
};

export default Header;