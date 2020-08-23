import React, { useState } from 'react';
import './Header.styles.css';
import { Link } from 'react-router-dom'
import { Navbar, Form, Button, Col } from "react-bootstrap";
// import * as Yup from 'yup';
// import { Formik } from 'formik';
import ValidationController from '../../controllers/ValidationController';


// const schema = Yup.object({
//   email: Yup.string().required(),
//   password: Yup.string().required(),
// });

const Header = () => {

  const [hidden, setHidden] = useState(true);
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setErrorMessage('')
    
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    }, console.log(loginDetails));
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(loginDetails);
    const { email, password } = loginDetails;
    
    const allValuesAreFilled = ValidationController.areLoginInputsEmpty(email, password);
    const allValuesAreValid = ValidationController.validateEmail(email) ;

    console.log(allValuesAreValid, allValuesAreFilled)

    // if validations are alright then proceed to sign user up
    if (allValuesAreFilled && allValuesAreValid){
      setLoginDetails({
        email: '',
        password: '',
      });
      console.log('login successful')
    } else {
      setErrorMessage('Please fill in all fields correctly');
      console.log(errorMessage);
    }
  }

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
      
      <Form noValidate onSubmit={(e) => handleSubmit(e)} className={`form-container ${hidden ? '' : 'responsive-form-container'}`}>
        <Form.Row className={`login-form-row ${hidden ? '' : 'responsive-login-form-row'}`}>
          <Form.Group as={Col} md="6" controlId="validationFormik03">
            {/* <Form.Label>Email</Form.Label> */}
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={loginDetails.email}
              onChange={handleChange}
              // isValid={touched.email && !errors.email}
              // isInvalid={!!errors.email}
            />
            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              invalid email address
            </Form.Control.Feedback> */}
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationFormik04">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={loginDetails.password}
              onChange={handleChange}
              // isValid={touched.password && !errors.password}
              // isInvalid={!!errors.password}
            />
            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              invalid email address
            </Form.Control.Feedback> */}
          </Form.Group>
        </Form.Row>
        
        <Link to="/home" className={`btn-link ${hidden ? '' : 'responsive-btn-link'}`}>
          <Button type="submit" variant="danger" className="login-btn">Login</Button>
        </Link>
        <div style={{color: 'red'}}>{errorMessage ? `*${errorMessage}` : ''}</div>
      </Form>
      
      
      {/* <div style={{color: 'red', marginTop: '10px', marginBottom: '10px'}}>{errorMessage ? `*${errorMessage}` : ''}</div> */}
    </Navbar>
  )
  
      
};

export default Header;