import React from 'react';
import { Modal, Button, Form, Col } from "react-bootstrap";
import './RegistrationModal.styles.css';

const RegistrationModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Signup
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="">
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="">
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last Name" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>

          <Form.Group controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Text id="passwordHelpBlock" muted aria-describedby="passwordHelpBlock">
              Your password must be at least 8 characters long, contain letters and numbers, and
              must not contain spaces, special characters, or emoji.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default RegistrationModal;