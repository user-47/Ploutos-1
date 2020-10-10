import React from 'react';
import './Header.styles.css';
import { Link } from 'react-router-dom';
// import { Navbar, Form, Button, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";


const Header = () => {

  // const [hidden, setHidden] = useState(true);

  return(
    <Navbar className={`navbar-container px-5`}>
      <Navbar.Brand href="#home" className='responsive-navbrand' style={{ alignItems: 'center', width: '13%', display: 'flex', justifyContent: 'space-between', }}>
        <img
          src="../../assets/images/temp_logo.svg"
          width="75"
          height="65"
          className="d-inline-block align-top"
          alt="logo"
          style={{ marginTop: '3.5%'}}
        />
        <span className="header-title" style={{ color: 'white'}}>MYXCHANGE</span>
        {/* <img src="../../assets/icons/hamburger-menu.svg" alt="menu icon" className="hamburger-icon" onClick={() => setHidden(!hidden)} /> */}
      </Navbar.Brand>
      
      <div className="header-buttons" style={{ display: 'flex', width: '13%', justifyContent: 'space-between'}}>
        <Link to="/login" className={`btn-link`}>
          <Button type="submit" variant="outline-light" className="login-reg-btn px-4">Login</Button>
        </Link>

        <Link to="/register" className={`btn-link`}>
          <Button type="submit" variant="danger" className="login-reg-btn px-4">Register</Button>
        </Link>
      </div>
      
      
    </Navbar>
  )
  
      
};

export default Header;