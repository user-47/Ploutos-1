import React from 'react';
import Button from "react-bootstrap/Button";
import SignUpModal from '../../components/Modal/SignUpModal.comp';
import Header from '../../components/Header/Header.comp';
import './LandingPage.styles.css';


const LandingPage = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Header />
      <div className="landing-page-body">
        <div className="landing-page-container">
          <div className="landing-page-main-caption">
            <div>EXCHANGE</div>
            <div>NAIRA <img className="nation-flag" src="../../assets/images/ngnflag.png" alt="nigerian flag"/></div>
            <div>AND CAD <img className="nation-flag" src="../../assets/images/CADflag.png" alt="canadian flag"/></div>
          </div>
          <div className="landing-page-subtext">
            Define your own rates <br/>
            Fast and Effortless <br/>
            Trusted network <br/>
            Competitive rates <br/>
          </div>
          <Button 
            variant="danger"
            className="join-now-btn"
            onClick={() => setModalShow(true)}
          >
            Join Now
          </Button>
          <SignUpModal 
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
        <div className="landing-page-secondary-bg-image"></div>
      </div>
      <div className="landing-page-footer">
        <div className="landing-page-footer-links">About</div>
        <div className="landing-page-footer-links">How it works</div>
        <div className="landing-page-footer-links">Terms and Conditions</div>
        <div className="landing-page-footer-links">Contact</div>
      </div>
    </div>
  )
}

export default LandingPage;