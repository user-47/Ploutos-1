import React from 'react';
import OtpInputField from '../../components/OtpInputField/OtpInputField.comp';
import { Button} from "react-bootstrap";

const SignUpAuthenticationPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <div className='shadow-lg mb-5 bg-white rounded'
        style={{ 
          width: '50%',
          height: '60%',
          borderRadius: '12px',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center'
        }}
      >
        <div style={{ display: 'flex', height: '100%', justifyContent: 'center'}}>
          {/* <div style={{ width: '35%', height: '100%', border: 'solid 1px #008970'}}>image</div> */}
          <div 
            style={{
              width: '65%',
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column'
            }}
          >
            <div className='mb-4' style={{color: 'darkblue', fontSize:' 1.5em', fontWeight: 'bold'}}>Please Enter OTP</div>
            <div className='mb-4' style={{color: 'rgba(0, 0, 0, 0.5)'}}>We have sent a one time password to your email address </div>
            <OtpInputField />
            <Button variant="primary" className="mt-5 px-5">Verify</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpAuthenticationPage;
