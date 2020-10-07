import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import './RegistrationPage.style.css';

const RegistrationPage = () => {
  return (
    <div
      style={{ 
        width: '100%', 
        height: '100vh', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${require('../../assets/images/registration_page_BG.jpg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          width: '75%',
          height: '75%',
          border: 'solid 5px black',
          borderRadius: '23px',
          display: 'flex',
          boxShadow: '15px 17px 16px #0000004D',
        }}
      >
        <div
          style={{
            width: '32%',
            height: '100%',
            backgroundImage: `url(${require('../../assets/images/registration_page_card_bg.svg')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '10px',
          }}
        >
          <img
          src="../../assets/images/temp_logo.svg"
          width="95"
          height="85"
          className="d-inline-block align-top"
          alt="logo"
          style={{ position: 'fixed'}}
        />
        <div
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <img
            src={require('../../assets/images/registration_page_img1.png')}
            className="d-inline-block align-top"
            alt="image"
            style={{ width: '380px', height: '300px', marginTop: '32%'}}
          />
        </div>
        </div>
        <div
          style={{
            width: '68%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '10px',
          }}
        >
          <div style={{ color: '#0D4C9E'}}>
            <img src={require('../../assets/icons/heading-icon.svg')} alt='icon' className='mt-2 mb-2' style={{width: '28px', height: '28px'}} />
            <div style={{ fontSize: '30px'}}><b>REGISTRATION</b></div>
            <p style={{ fontSize: '12px' }}>Already have an account? <b>Login here</b></p>
          </div>
          <div>
            <form
              noValidate
              autoComplete="off"
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField 
                    id="standard-basic" 
                    label="First Name" 
                    className="registration-form-textfield mt-3 mb-3" 
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    id="standard-basic" 
                    label="Last Name" 
                    className="registration-form-textfield mt-3 mb-3" 
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    id="standard-basic" 
                    label="Email Address" 
                    className="registration-form-textfield mt-3 mb-3" 
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    id="standard-basic" 
                    label="Username" 
                    className="registration-form-textfield mt-3 mb-3" 
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    id="standard-basic" 
                    label="Password" 
                    className="registration-form-textfield mt-3 mb-3"
                    helperText="At Least 8 Characters Including Numbers and Special Characters"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    id="standard-basic" 
                    label="Confirm Password" 
                    className="registration-form-textfield mt-3 mb-3" 
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    id="standard-basic" 
                    label="Country"
                    type='select'
                    className="registration-form-textfield mt-3 mb-3" 
                  />
                </Grid>
                <Grid item xs={6}>
                  <div
                    style={{
                      display: 'flex',
                      width: '90%',
                    }}
                  >
                    <div style={{width: '50%'}}>
                      <TextField 
                        id="standard-basic" 
                        label="State/Province"
                        type='select'
                        className="registration-form-textfield mt-3 mb-3" 
                      />
                    </div>
                    <div style={{width: '50%'}}>
                      <TextField 
                        id="standard-basic" 
                        label="City"
                        type='select'
                        className="registration-form-textfield mt-3 mb-3" 
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    id="standard-basic" 
                    label="Phone Number" 
                    className="registration-form-textfield mt-3 mb-3" 
                  />
                </Grid>
              </Grid>
              
              <div style={{width: '92%'}}>
                <Button 
                  variant="outlined"
                  className=""
                  // onClick={() => onContactFormSubmission()}
                  style={{
                    borderRadius: '25px',
                    padding: '7px',
                    fontSize: '17px',
                    border: 'solid 1.5px #0D4C9E',
                    color: '#0D4C9E',
                    width: '20%',
                    float: 'right',
                  }}
                >
                  Finish
                </Button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage
