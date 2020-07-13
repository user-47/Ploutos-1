import React from 'react';
import Button from "react-bootstrap/Button";
import SignUpModal from '../components/Modal/SignUpModal.comp';
import Header from '../components/Header/Header.comp';


const LandingPage = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Header />
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
          <SignUpModal 
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