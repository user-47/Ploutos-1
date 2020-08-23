import React from 'react';
import { Modal, Button} from "react-bootstrap";
// import ValidationController from '../../../controllers/ValidationController';



const TransactionInitializationModal = ({show, onHide, closeOnSubmit}) => {

  // const [errorMessage, setErrorMessage] = React.useState('');

  const handleOkayBtn = () => {
    console.log('user clicked okay button')
    closeOnSubmit();
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
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', fontSize: '20px', color: 'green' }}>
          <b>Transaction Initiatied</b>
        </div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          Seller has been notified of your interest
        </div>
        <hr></hr>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="submit" variant="success" className="" onClick={() => handleOkayBtn()}>Okay</Button>
          </div>
      </Modal.Body>
    </Modal>
  );
}


export default TransactionInitializationModal;