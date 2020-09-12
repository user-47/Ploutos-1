import React from 'react';
import { Modal, Button, Form, Col } from "react-bootstrap";
import ValidationController from '../../../controllers/ValidationController';
import { useHistory } from "react-router-dom";
import AuthenticationController from '../../../controllers/AuthenticationController';
import { useSnackbar } from 'notistack';
import './SignUpModal.styles.css';


const SignUpModal = ({closeOnSubmit, ...props}) => {

  const [signupDetails, setSignupDetails] = React.useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    country_code: '',
    phone_number: '',
    password: '',
    password_confirmation: ''
  });

  const [isLoading, setIsLoading] = React.useState(false);

  const passwordErrorArray = ['At least one digit', 'At least one lowercase character', 'At least one uppercase character', 'At least 8 characters in length'];
  const [errorMessage, setErrorMessage] = React.useState('');

  let history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

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
    const { first_name, last_name, email, password, password_confirmation } = signupDetails;
    
    const allValuesAreFilled = ValidationController.areSignUpInputsEmpty(first_name, last_name, email, password, password_confirmation);
    const allValuesAreValid = ValidationController.validateFirstname(first_name) && ValidationController.validateLastname(last_name) && ValidationController.validateEmail(email) && ValidationController.validatePassword(password) && ValidationController.validateConfirmPassword(password, password_confirmation);

    console.log(allValuesAreValid, allValuesAreFilled)

    // if validations are alright then proceed to sign user up
    if (allValuesAreFilled && allValuesAreValid){
      setIsLoading(true);
      try {
        // const registerUser = AuthenticationController.registerUser(signupDetails);

        

        AuthenticationController.registerUser(signupDetails).then((res) => {
          // enqueueSnackbar('Registration Successful', { variant: "success" });
          console.log(res)
          setIsLoading(false);
        }).then(() => {
          // setSignupDetails({
          //   first_name: '',
          //   last_name: '',
          //   username: '',
          //   email: '',
          //   country_code: '',
          //   phone_number: '',
          //   password: '',
          //   password_confirmation: ''
          // });
          // closeOnSubmit();
          // history.push('/signupAuth');
        }).catch((err) => {
          console.log(err);
          // enqueueSnackbar('error occurred', { variant: "error" });
        })
      } catch (error) {
        setIsLoading(false);
        console.log(error)
      }
    } else {
      setIsLoading(false);
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
                name="first_name"
                value={signupDetails.first_name}
                onChange={handleChange}
                isValid={ValidationController.validateFirstname(signupDetails.first_name)}
                isInvalid={!ValidationController.validateFirstname(signupDetails.first_name)}
              />
              <Form.Control.Feedback></Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {/* {ErrorMessageController.nameErrorMessage(signupDetails.firstName, 'Firstname')} */}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="last_name"
                value={signupDetails.last_name}
                onChange={handleChange}
                isValid={ValidationController.validateLastname(signupDetails.last_name)}
                isInvalid={!ValidationController.validateLastname(signupDetails.last_name)}
              />

              <Form.Control.Feedback></Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {/* {ErrorMessageController.nameErrorMessage(signupDetails.lastName, 'Lastname')} */}
              </Form.Control.Feedback>
            </Form.Group>
          
          </Form.Row>
          <Form.Row className="signup-modal-form-row">

            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={signupDetails.username}
                onChange={handleChange}
                isValid={ValidationController.validateUsername(signupDetails.username)}
                isInvalid={!ValidationController.validateUsername(signupDetails.username)}
              />
              <Form.Control.Feedback></Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {/* {ErrorMessageController.emailErrorMessage(signupDetails.email)} */}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik04">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={signupDetails.email}
                onChange={handleChange}
                isValid={ValidationController.validateEmail(signupDetails.email)}
                isInvalid={!ValidationController.validateEmail(signupDetails.email)}
              />
              <Form.Control.Feedback></Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {/* {ErrorMessageController.emailErrorMessage(signupDetails.email)} */}
              </Form.Control.Feedback>
            </Form.Group>
          
          </Form.Row>
          <Form.Row className="signup-modal-form-row">

            <Form.Group as={Col} md="3"  controlId="validationFormik08">
              <Form.Label>Country Code</Form.Label>
              <Form.Control
                as="select"
                placeholder="Country Code"
                name="country_code"
                value={signupDetails.country_code}
                onChange={handleChange}
                // isValid={touched.sellingCurrency && !errors.sellingCurrency}
                // isInvalid={!!errors.sellingCurrency}
              >
                <option>Canada (+1)</option>
                <option>Nigeria (+234)</option>
              </Form.Control>

              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
              <Form.Control.Feedback type="invalid">
                {/* Invalid Input */}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="9" controlId="validationFormik05">
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone No"
                name="phone_number"
                value={signupDetails.phone_number}
                onChange={handleChange}
                isValid={ValidationController.validatePhoneNo(signupDetails.phone_number)}
                isInvalid={!ValidationController.validatePhoneNo(signupDetails.phone_number)}
              />
              <Form.Control.Feedback></Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {/* {ErrorMessageController.emailErrorMessage(signupDetails.email)} */}
              </Form.Control.Feedback>
            </Form.Group>
          
          </Form.Row>
          <Form.Row className="signup-modal-form-row">

            <Form.Group as={Col} md="6" controlId="validationFormik06">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={signupDetails.password}
                onChange={handleChange}
                isValid={ValidationController.validatePassword(signupDetails.password)}
                isInvalid={(!ValidationController.validatePassword(signupDetails.password))}
              />
              <Form.Control.Feedback></Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {/* {ErrorMessageController.passwordErrorMessage(signupDetails.password)} */}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik07">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="password_confirmation"
                value={signupDetails.password_confirmation}
                onChange={handleChange}
                isValid={ValidationController.validateConfirmPassword(signupDetails.password, signupDetails.password_confirmation)}
                isInvalid={(!ValidationController.validateConfirmPassword(signupDetails.password, signupDetails.password_confirmation))}
              />
              <Form.Control.Feedback></Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {/* {ErrorMessageController.confirmPasswordErrorMessage(signupDetails.password, signupDetails.confirmPassword)} */}
              </Form.Control.Feedback>
            </Form.Group>
          
          </Form.Row>
          
          <div style={{color: 'red', marginTop: '10px', marginBottom: '10px'}}>{errorMessage ? `*${errorMessage}` : ''}</div>
          <Button 
            type="submit"
            variant="danger"
            className="signup-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' :  'Sign Up' }
          </Button>

          <div style={{marginTop: '10px', marginBottom: '10px'}}>
            <p>By clicking <em>Sign Up</em> you agree to our 
              <a href="/"> terms of service</a>
            </p>
          </div>

          <div style={{ marginTop: '2%', padding: '11px', lineHeight: '1.2', backgroundColor: 'cornsilk'}}>
            <p>Password must have : </p>
            {/* {
              passwordErrorArray.map((error, index) => (
                <p key={index}>{error}</p>
              ))
            } */}
            <ul>
              <li style={{marginBottom: '1.5%'}}>At least one lowercase, uppercase, number, and symbol</li>
              <li>At least 8 characters</li>
            </ul>
            
          </div>
        </Form>
      
        {/* <div className="signup-with-text">or sign up with:</div>
        <div className="signup-options-container">
          <div className="signup-options">
            <img src="../../assets/icons/facebook-icon.svg" alt="facebook icon" />
            <img src="../../assets/icons/google-icon.svg" alt="google icon" />
          </div>
        </div> */}
        
      </Modal.Body>
    </Modal>
  );
}

export default SignUpModal;