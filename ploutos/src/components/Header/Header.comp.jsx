import React from 'react';
import './Header.styles.css';
import { Navbar, Form, Button, Col } from "react-bootstrap";
import * as Yup from 'yup';
import { Formik } from 'formik';


const schema = Yup.object({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

const Header = () => (
  <Navbar style={{display: "flex", justifyContent: "space-between", backgroundColor: "#5A81B5",}}>
    <Navbar.Brand href="#home">
      <img
        src="../assets/images/temp_logo.svg"
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
        <Form noValidate onSubmit={handleSubmit} style={{ display: "flex", width: "40%", justifyContent: "flex-end", height: "38px"}}>
          <Form.Row style={{width: "75%" }}>
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
          <Button type="submit" variant="danger" style={{width: "15%", marginLeft: "2%" }}>Login</Button>
        </Form>
      )}
    </Formik>
  </Navbar>
      
);

export default Header;