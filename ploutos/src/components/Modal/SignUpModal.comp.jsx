import React from 'react';
import { Modal, Button, Form, Col } from "react-bootstrap";
import * as Yup from 'yup';
import { Formik } from 'formik';
import './SignUpModal.styles.css';


const schema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string().required(),
});

const SignUpModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <Modal.Header className="signup-modal-header">
        <Modal.Title id="contained-modal-title-vcenter">
          Signup
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="signup-modal-body">
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
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row className="signup-modal-form-row">
              <Form.Group as={Col} md="6" controlId="validationFormik01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                  isInvalid={!!errors.firstName}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationFormik02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                  isInvalid={!!errors.lastName}
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
              
            </Form.Row>
            <Form.Row className="signup-modal-form-row">
              <Form.Group as={Col} md="12" controlId="validationFormik03">
                <Form.Label>Email</Form.Label>
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
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row className="signup-modal-form-row">
              <Form.Group as={Col} md="12" controlId="validationFormik04">
                <Form.Label>Password</Form.Label>
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
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row className="signup-modal-form-row">
              <Form.Group as={Col} md="12" controlId="validationFormik05">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  isValid={touched.confirmPassword && !errors.confirmPassword}
                  isInvalid={!!errors.confirmPassword}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            
            <Button type="submit" variant="danger" className="signup-btn">Sign Up</Button>
          </Form>
        )}
        </Formik>
        
        <div className="signup-with-text">or sign up with:</div>
        <div className="signup-options-container">
          <div className="signup-options">
            <img src="../../assets/icons/facebook-icon.svg" alt="facebook icon" />
            {/* <div className="signup-icons"></div> */}
            <img src="../../assets/icons/google-icon.svg" alt="google icon" />
          </div>
        </div>
        <div>
            <p>By clicking <em>Sign Up</em> you agree to our 
              <a href="/"> terms of service</a>
            </p>
          </div>
      </Modal.Body>
    </Modal>
  );
}

export default SignUpModal;