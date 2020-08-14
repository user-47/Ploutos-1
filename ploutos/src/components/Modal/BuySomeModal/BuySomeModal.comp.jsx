import React from 'react';
import { Modal, Button, Form, Col } from "react-bootstrap";
import ValidationController from '../../../controllers/ValidationController';
import TransactionInitializationModal from '../TransactionInitializationModal/TransactionInitialization.comp';



const BuySomeModal = ({show, onHide, closeOnSubmit, closeWithCancelBtn}) => {

  const [buyingAmount, setBuyingAmount] = React.useState('');

  const [errorMessage, setErrorMessage] = React.useState('');

  const [transactionIntiatedModalShow, setTransactionIntiatedModalShow] = React.useState(false);

  const handleChange = (e) => {
    const { value } = e.target;

    setErrorMessage('');
    
    setBuyingAmount(value);

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(buyingAmount)
    
    const allValuesAreFilled = ValidationController.isInputEmpty(buyingAmount);
    const allValuesAreValid = ValidationController.validateNumberTypeInput(buyingAmount);

    console.log(allValuesAreValid, allValuesAreFilled)

    if (allValuesAreFilled && allValuesAreValid){
      setBuyingAmount('')
      closeOnSubmit();
      // setTransactionIntiatedModalShow(true);
      console.log('closed current and open other')
    } else {
      setErrorMessage('Please input valid values in all fields')
    }
  }
  
  // const handleOkayBtn = () => {
  //   setTransactionIntiatedModalShow(false)
  // }

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
            <div>I want</div>
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
          
          
          <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            <div style={{ display: 'flex', width: '35%', justifyContent: 'space-between' }}>
              <Button variant="secondary" className="" onClick={() => closeWithCancelBtn()}>Cancel</Button>
              <Button type="submit" variant="success" className="" style={{ float: "right" }}>Buy</Button>
            </div>
          </div>
          
        </Form>
        {/* <TransactionInitializationModal
          show={transactionIntiatedModalShow}
          onHide={() => setTransactionIntiatedModalShow(false)}
          closeOnSubmit={handleOkayBtn}
        /> */}
      </Modal.Body>
    </Modal>
  );
}


export default BuySomeModal;