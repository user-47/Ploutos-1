import React from 'react';
import { Modal, Button, Form, Col } from "react-bootstrap";
import { connect } from 'react-redux';
import { createNewPost } from '../../../redux/post/post.actions';
import ValidationController from '../../../controllers/ValidationController';



const NewPostModal = ({createPost, show, onHide, closeOnSubmit}) => {

  const [postDetails, setPostDetails] = React.useState({
    sellingAmount: '',
    sellingCurrency: 'CAD',
    buyingCurrency: 'NGN',
    rate: ''
  });

  const currencyOptions = ['CAD', 'NGN'];

  const [errorMessage, setErrorMessage] = React.useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setErrorMessage('')
    switch (name) {
      case 'sellingCurrency':
        setPostDetails({
          ...postDetails,
          [name]: value,
          buyingCurrency: value === 'CAD' ? 'NGN' : 'CAD',
        }, console.log(postDetails));
        break;
      case 'buyingCurrency':
        setPostDetails({
          ...postDetails,
          [name]: value,
          sellingCurrency: value === 'NGN' ? 'CAD' : 'NGN',
        }, console.log(postDetails));
        break;
      default:
        setPostDetails({
          ...postDetails,
          [name]: value,
        }, console.log(postDetails));
        break;
    };
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(postDetails)
    const {sellingAmount, sellingCurrency, buyingCurrency, rate} = postDetails
    
    // run validations and return boolean value
    const allValuesAreFilled = ValidationController.areNewPostInputsEmpty(sellingAmount, sellingCurrency, buyingCurrency, rate);
    const allValuesAreValid = ValidationController.validateNumberTypeInput(postDetails.sellingAmount) && ValidationController.validateNumberTypeInput(postDetails.rate);

    console.log(allValuesAreValid, allValuesAreFilled)

    // if validations are fine then process to create new post else display error message
    if (allValuesAreFilled && allValuesAreValid){
      // create post
      createPost(postDetails)
      // set input fields to default values
      setPostDetails({
        sellingAmount: '',
        sellingCurrency: 'CAD',
        buyingCurrency: 'NGN',
        rate: ''
      })
      // close modal after post has been created
      closeOnSubmit()
    } else {
      setErrorMessage('Please fill valid inputs in all fields')
    }
  }
  

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <Modal.Header style={{ padding: "1rem 2rem" }} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="signup-modal-body">
        <Form noValidate onSubmit={(e) => handleSubmit(e)}>
          <Form.Row className="signup-modal-form-row" style={{ alignItems: "center"}}>
            <div>I have</div>
            <Form.Group as={Col} md="4" style={{ margin: "0" }} controlId="validationFormik01">
              {/* <Form.Label>I have this amount</Form.Label> */}
              <Form.Control
                type="number"
                placeholder="Amount"
                name="sellingAmount"
                value={postDetails.sellingAmount}
                onChange={handleChange}
                // isValid={touched.sellingAmount && !errors.sellingAmount}
                // isInvalid={ValidationController.validateNumberTypeInput(postDetails.sellingAmount)}
              />
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
              <Form.Control.Feedback type="invalid">
                Invalid Input
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" style={{ margin: "0" }} controlId="validationFormik02">
              {/* <Form.Label>I have currency</Form.Label> */}
              <Form.Control
                as="select"
                placeholder="Have currency"
                name="sellingCurrency"
                value={postDetails.sellingCurrency}
                onChange={handleChange}
                // isValid={touched.sellingCurrency && !errors.sellingCurrency}
                // isInvalid={!!errors.sellingCurrency}
              >
                <option>CAD</option>
                <option>NGN</option>
              </Form.Control>

              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
              <Form.Control.Feedback type="invalid">
                Invalid Input
              </Form.Control.Feedback>
            </Form.Group>
            
          </Form.Row>
          <Form.Row className="signup-modal-form-row" style={{ alignItems: "center"}}>
            <div>I need</div>
            <Form.Group as={Col} md="4" style={{ margin: "0" }} controlId="validationFormik03">
              {/* <Form.Label>I want Currency</Form.Label> */}
              <Form.Control
                as="select"
                placeholder="I need currency"
                name="buyingCurrency"
                value={postDetails.buyingCurrency}
                onChange={handleChange}
                // isValid={touched.buyingCurrency && !errors.buyingCurrency}
                // isInvalid={!!errors.buyingCurrency}
              >
                <option>NGN</option>
                <option>CAD</option>
                
              </Form.Control>
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
              <Form.Control.Feedback type="invalid">
                Invalid Input
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <hr></hr>
          <div style={{ marginBottom: '3%', marginLeft: "-5px"}}>Please Input the rate that works for you</div>
          <Form.Row className="signup-modal-form-row" style={{ alignItems: "center"}}>
            <div>Rate : </div>
            <Form.Group as={Col} md="4" style={{ margin: "0" }} controlId="validationFormik04">
              {/* <Form.Label>Rate</Form.Label> */}
              <Form.Control
                type="number"
                placeholder="Rate"
                name="rate"
                value={postDetails.rate}
                onChange={handleChange}
                // isValid={touched.rate && !errors.rate}
                // isInvalid={ValidationController.validateNumberTypeInput(postDetails.rate)}
              />
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
              <Form.Control.Feedback type="invalid">
                Invalid Input
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <div style={{color: 'red'}}>{errorMessage ? `*${errorMessage}` : ''}</div>
          <hr></hr>
          
          <Button type="submit" variant="danger" className="" style={{ float: "right" }}>Post</Button>
        </Form>  
      </Modal.Body>
    </Modal>
  );
}

const mapDispatchToProps = dispatch => ({
  createPost: postDetail => dispatch(createNewPost(postDetail))
});

export default connect(null, mapDispatchToProps)(NewPostModal);