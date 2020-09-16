import React from 'react';
import Button from "react-bootstrap/Button";
import SignUpModal from '../../components/Modal/SignUpModal/SignUpModal.comp';
import Header from '../../components/Header/Header.comp';
import './LandingPage.styles.css';


const LandingPage = () => {
  
  return (
    <div>
      <Header />
      {/* start banner section */}
      <div>
        <div 
          style={{
            width: '100%',
            height: '850px',
            backgroundImage: "url('../../assets/images/bgImage.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            paddingTop: '6%'
          }}
        >
          <div
            style={{
              marginTop: '5%',
              marginLeft: '6%',
              height: '75%',
              width: '48%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              borderRadius: '45% 70% 39% 50%',
            }}
          >
            <div
              style={{
                color: 'white',
                marginLeft: '8%'
              }}
            >
              <div style={{fontSize: '85px', lineHeight: '0.9', fontWeight: 'bold'}}>
                EXCHANGE <br/>
                NAIRA <br/>
                AND CAD <br/>
              </div>
              <p>Choose your own Exchange Rate</p>
            </div>
          </div>
        </div>
      </div>
      {/* end banner section */}
      <section
        style={{
          padding: '40px'
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%'
          }}
        >
          <div 
            style={{
              width: '50%',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                height: '400px',
                width: '400px',
                borderRadius: '50%',
                backgroundColor: '#6BA8F8'
              }}
            >
              <div
                style={{
                  height: '200px',
                  width: '200px',
                  borderRadius: '50%',
                  backgroundColor: '#6BA8F8',
                  float: 'right',
                  marginRight: '-7%',
                }}
              >
                
              </div>
              {/* <img src="../../assets/images/Laptop_mockup.png" /> */}
              <div 
                style={{
                  backgroundImage: "url('../../assets/images/laptop.png')",
                  backgroundSize: 'contain',
                  height: '350px',
                  width: '375px'
                }}
              ></div>
            </div>
          </div>
          <div style={{width: '50%'}}>yyyyxxxxx</div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage;