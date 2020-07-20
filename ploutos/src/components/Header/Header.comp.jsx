import React from 'react';
import './Header.styles.css';
import { Link } from 'react-router-dom'
import { Navbar, Form, Button, Col } from "react-bootstrap";
import * as Yup from 'yup';
import { Formik } from 'formik';


const schema = Yup.object({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

const Header = () => (
  <Navbar className="navbar-container">
    <Navbar.Brand href="#home">
      <img
        src="../../assets/images/temp_logo.svg"
        width="75"
        height="65"
        className="d-inline-block align-top"
        alt="logo"
      />
    </Navbar.Brand>
    
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: '',
        lastName: '',
        confirmPassword: '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit} className="form-container">
          <Form.Row className="login-form-row">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              {/* <Form.Label>Email</Form.Label> */}
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                invalid email address
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik04">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                invalid email address
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Link to="/home" className="btn-link">
            <Button type="submit" variant="danger" className="login-btn">Login</Button>
          </Link>
          
        </Form>
      )}
    </Formik>
  </Navbar>
      
);

export default Header;