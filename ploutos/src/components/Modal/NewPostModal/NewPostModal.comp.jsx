import React from 'react';
import { Modal, Button, Form, Col } from "react-bootstrap";
import * as Yup from 'yup';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { createNewPost } from '../../../redux/post/post.actions';
// import './SignUpModal.styles.css';


const schema = Yup.object({
  haveAmount: Yup.number().required(),
  haveCurrency: Yup.string().required(),
  wantedCurrency: Yup.string().required(),
  rate: Yup.number().required()
});

const NewPostModal = ({createPost, ...props}) => {

  const [postDetails, setPostDetails] = React.useState({
    haveAmount: null,
    haveCurrency: 'CAD',
    wantedCurrency: 'NGN',
    rate: null
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setPostDetails({
      ...postDetails,
      [name]: value
    }, console.log(postDetails))
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(postDetails)
    createPost(postDetails)
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
          Create Post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="signup-modal-body">
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          
        }}
      >
        {({
          // handleSubmit,
          // handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate onSubmit={(e) => handleSubmit(e)}>
            <Form.Row className="signup-modal-form-row" style={{ alignItems: "center"}}>
              <div>I have</div>
              <Form.Group as={Col} md="4" style={{ margin: "0" }} controlId="validationFormik01">
                {/* <Form.Label>I have this amount</Form.Label> */}
                <Form.Control
                  type="number"
                  placeholder="Amount"
                  name="haveAmount"
                  value={postDetails.haveAmount}
                  onChange={handleChange}
                  isValid={touched.haveAmount && !errors.haveAmount}
                  isInvalid={!!errors.haveAmount}
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
                  name="haveCurrency"
                  value={postDetails.haveCurrency}
                  onChange={handleChange}
                  isValid={touched.haveCurrency && !errors.haveCurrency}
                  isInvalid={!!errors.haveCurrency}
                >
                  {/* <option>Choose</option> */}
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
                  name="wantedCurrency"
                  value={postDetails.wantedCurrency}
                  onChange={handleChange}
                  isValid={touched.wantedCurrency && !errors.wantedCurrency}
                  isInvalid={!!errors.wantedCurrency}
                >
                  <option>NGN</option>
                  <option>CAD</option>
                </Form.Control>
                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                <Form.Control.Feedback type="invalid">
                  {errors.wantedCurrency}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <hr></hr>
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
                  isValid={touched.rate && !errors.rate}
                  isInvalid={!!errors.rate}
                />
                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                <Form.Control.Feedback type="invalid">
                  {errors.rate}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <hr></hr>
            
            <Button type="submit" variant="danger" className="" style={{ float: "right" }}>Post</Button>
          </Form>
        )}
        </Formik>
        
      </Modal.Body>
    </Modal>
  );
}

const mapDispatchToProps = dispatch => ({
  createPost: postDetail => dispatch(createNewPost(postDetail))
});

export default connect(null, mapDispatchToProps)(NewPostModal);