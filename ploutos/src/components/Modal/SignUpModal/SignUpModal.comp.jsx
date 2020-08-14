import React from 'react';
import { Modal, Button, Form, Col } from "react-bootstrap";
import ValidationController from '../../../controllers/ValidationController';
import './SignUpModal.styles.css';


const SignUpModal = ({closeOnSubmit, ...props}) => {

  const [signupDetails, setSignupDetails] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errorMessage, setErrorMessage] = React.useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setErrorMessage('')
    
    setSignupDetails({
      ...signupDetails,
      [name]: value,
    }, console.log(signupDetails));
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(signupDetails);
    const { firstName, lastName, email, password, confirmPassword } = signupDetails;
    
    const allValuesAreFilled = ValidationController.areSignUpInputsEmpty(firstName, lastName, email, password, confirmPassword);
    const allValuesAreValid = ValidationController.validateFirstname(firstName) && ValidationController.validateLastname(lastName) && ValidationController.validateEmail(email) && ValidationController.validateConfirmPassword(password, confirmPassword);

    console.log(allValuesAreValid, allValuesAreFilled)

    // if validations are alright then proceed to sign user up
    if (allValuesAreFilled && allValuesAreValid){
      setSignupDetails({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      closeOnSubmit()
      console.log('sign up successful')
    } else {
      setErrorMessage('Please fill in all fields correctly')
    }
  }

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
        <Form noValidate onSubmit={(e) => handleSubmit(e)}>
          <Form.Row className="signup-modal-form-row">
            <Form.Group as={Col} md="6" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="firstName"
                value={signupDetails.firstName}
                onChange={handleChange}
                // isValid={touched.firstName && !errors.firstName}
                // isInvalid={!!errors.firstName}
              />
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback> */}
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={signupDetails.lastName}
                onChange={handleChange}
                // isValid={touched.lastName && !errors.lastName}
                // isInvalid={!!errors.lastName}
              />

              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback> */}
            </Form.Group>
            
          </Form.Row>
          <Form.Row className="signup-modal-form-row">
            <Form.Group as={Col} md="12" controlId="validationFormik03">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={signupDetails.email}
                onChange={handleChange}
                // isValid={touched.email && !errors.email}
                // isInvalid={!!errors.email}
              />
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback> */}
            </Form.Group>
          </Form.Row>
          <Form.Row className="signup-modal-form-row">
            <Form.Group as={Col} md="12" controlId="validationFormik04">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={signupDetails.password}
                onChange={handleChange}
                // isValid={touched.password && !errors.password}
                // isInvalid={!!errors.password}
              />
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback> */}
            </Form.Group>
          </Form.Row>
          <Form.Row className="signup-modal-form-row">
            <Form.Group as={Col} md="12" controlId="validationFormik05">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={signupDetails.confirmPassword}
                onChange={handleChange}
                // isValid={touched.confirmPassword && !errors.confirmPassword}
                // isInvalid={!!errors.confirmPassword}
              />
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
              {/* <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback> */}
            </Form.Group>
          </Form.Row>
          <div style={{color: 'red', marginTop: '10px', marginBottom: '10px'}}>{errorMessage ? `*${errorMessage}` : ''}</div>
          <Button type="submit" variant="danger" className="signup-btn">Sign Up</Button>
        </Form>
        
        {/* <div className="signup-with-text">or sign up with:</div>
        <div className="signup-options-container">
          <div className="signup-options">
            <img src="../../assets/icons/facebook-icon.svg" alt="facebook icon" />
            <img src="../../assets/icons/google-icon.svg" alt="google icon" />
          </div>
        </div> */}
        <div style={{marginTop: '10px', marginBottom: '10px'}}>
            <p>By clicking <em>Sign Up</em> you agree to our 
              <a href="/"> terms of service</a>
            </p>
          </div>
      </Modal.Body>
    </Modal>
  );
}

export default SignUpModal;