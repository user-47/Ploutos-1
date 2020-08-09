import React from 'react';
import { Modal, Button, Form, Col } from "react-bootstrap";
import ValidationController from '../../../controllers/ValidationController';



const BuySomeModal = ({show, onHide}) => {

  const [buyingAmount, setBuyingAmount] = React.useState('');

  const [errorMessage, setErrorMessage] = React.useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

  }

  const handleSubmit = (e) => {
    // e.preventDefault()
    // console.log(postDetails)
    // const {sellingAmount, sellingCurrency, buyingCurrency, rate} = postDetails
    
    // const allValuesAreFilled = ValidationController.areInputsEmpty(sellingAmount, sellingCurrency, buyingCurrency, rate);
    // const allValuesAreValid = ValidationController.validateNumberTypeInput(postDetails.sellingAmount) && ValidationController.validateNumberTypeInput(postDetails.rate);

    // console.log(allValuesAreValid, allValuesAreFilled)

    // if (allValuesAreFilled && allValuesAreValid){
    //   createPost(postDetails)
    //   setPostDetails({
    //     sellingAmount: '',
    //     sellingCurrency: 'CAD',
    //     buyingCurrency: 'NGN',
    //     rate: ''
    //   })
    //   postCreated()
    // } else {
    //   setErrorMessage('Please input valid values in all fields')
    // }
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
          Buy Some
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="signup-modal-body">
        <Form noValidate onSubmit={(e) => handleSubmit(e)}>
          <Form.Row className="signup-modal-form-row" style={{ alignItems: "center"}}>
            <div>I have</div>
            <Form.Group as={Col} md="5" style={{ margin: "0" }} controlId="validationFormik01">
              {/* <Form.Label>I have this amount</Form.Label> */}
              <Form.Control
                type="number"
                placeholder="Amount"
                name="buyingAmount"
                value={buyingAmount}
                onChange={handleChange}
                // isValid={touched.sellingAmount && !errors.sellingAmount}
                // isInvalid={ValidationController.validateNumberTypeInput(postDetails.sellingAmount)}
              />
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
              <Form.Control.Feedback type="invalid">
                Invalid Input
              </Form.Control.Feedback>
            </Form.Group>
            
          </Form.Row>
          <div style={{color: 'red'}}>{errorMessage ? `*${errorMessage}` : ''}</div>
          <hr></hr>
          
          <Button type="submit" variant="danger" className="" style={{ float: "right" }}>Buy</Button>
          
        </Form>  
      </Modal.Body>
    </Modal>
  );
}


export default BuySomeModal;