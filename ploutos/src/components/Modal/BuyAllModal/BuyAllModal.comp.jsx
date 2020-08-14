import React from 'react';
import { Modal, Button, Form, Col } from "react-bootstrap";
import ValidationController from '../../../controllers/ValidationController';



const BuyAllModal = ({show, onHide, closeWithYesBtn, closeWithNoBtn}) => {

  const [errorMessage, setErrorMessage] = React.useState('');
  

  const handleYes = () => {
    console.log('user clicked yes')
    closeWithYesBtn()
  };

  const handleNo = () => {
    console.log('user clicked no');
    closeWithNoBtn()
  };

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
        <div>
          Are you sure you want to buy all?
        </div>
        <hr></hr>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <div style={{ display: 'flex', width: '35%', justifyContent: 'space-between' }}>
            <Button type="submit" variant="danger" className="" onClick={() => handleNo()}>No</Button>
            <Button type="submit" variant="success" className="" onClick={() => handleYes()}>Yes</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}


export default BuyAllModal;