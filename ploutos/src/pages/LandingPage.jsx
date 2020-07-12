import React from 'react';
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import RegistrationModal from '../components/Modal/RegistrationModal.comp'


const LandingPage = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Navbar style={{display: "flex", justifyContent: "space-between", backgroundColor: "#5A81B5",}}>
        <Navbar.Brand href="#home">
          <img
            src="../assets/images/temp_logo.svg"
            width="75"
            height="65"
            className="d-inline-block align-top"
            alt="logo"
          />
          {/* <Logo /> */}
        </Navbar.Brand>
        <Form inline style={{width: "40%", justifyContent: "flex-end"}}>
          <FormControl type="text" placeholder="Email" className="mr-sm-2" style={{width: "35%" }} />
          <FormControl type="text" placeholder="Password" className="mr-sm-2" style={{width: "35%" }} />
          <Button variant="danger" style={{width: "15%" }}>Login</Button>
        </Form>
      </Navbar>
      <div style={{backgroundImage: "url('../assets/images/bgcolor.png')", height: "80vh", width: "80%", marginLeft: "3%", display: "flex", justifyContent: "space-between"}}>
        <div style={{ width: "70%", height: "85%", padding: "5%", paddingLeft: "8%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <div style={{ fontSize: "5.5em", fontWeight: "700", lineHeight: "75px", color: "#073068"}}>
            <div>EXCHANGE</div>
            <div>NAIRA <img src="../assets/images/ngnflag.png" alt="nigerian flag" style={{ height: "55px", marginTop: "-2%"}} /></div>
            <div>AND CAD <img src="../assets/images/CADflag.png" alt="canadian flag" style={{ height: "55px", marginTop: "-2%"}} /></div>
          </div>
          <div style={{ fontSize: "18px", fontWeight: "500", color: "#073068", paddingLeft: "2%", marginTop: "5%"}}>
            Define your own rates <br/>
            Fast and Effortless <br/>
            Trusted network <br/>
            Competitive rates <br/>
          </div>
          <Button 
            variant="danger" 
            style={{width: "20%", marginTop: "3%" }}
            onClick={() => setModalShow(true)}
          >
            Join Now
          </Button>
          <RegistrationModal 
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
        <div style={{backgroundImage: "url('../assets/images/bgImage.png')", backgroundRepeat: "no-repeat", height: "70vh", width: "27%", marginTop: "2%", position: "absolute", right: "4%" }}></div>
      </div>
      <div style={{ color: "#073068", width: "40%", display: "flex", justifyContent: "space-between", marginTop: "2%", marginLeft: "3%", fontSize: "14px"}}>
        <div>About</div>
        <div>How it works</div>
        <div>Terms and Conditions</div>
        <div>Contact</div>
      </div>
    </div>
  )
}

export default LandingPage;