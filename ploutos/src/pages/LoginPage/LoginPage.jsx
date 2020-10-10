import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Link } from 'react-router-dom';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import './LoginPage.style.css';

const RegistrationPage = () => {
  const [checked, setChecked] = React.useState(false)

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${require('../../assets/images/login_page_BG.jpg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          width: '58%',
          height: '75%',
          border: 'solid 5px black',
          borderRadius: '23px',
          display: 'flex',
          boxShadow: '15px 17px 16px #0000004D',
        }}
      >
        <div
          style={{
            width: '63%',
            height: '100%',
            // backgroundImage: `url(${require('../../assets/images/login_page_card_bg.svg')})`,
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
            // backgroundRepeat: 'no-repeat',
            padding: '10px',
          }}
        >
          <Link to='/'>
            <img
              src="../../assets/images/temp_logo.svg"
              width="95"
              height="85"
              className="d-inline-block align-top"
              alt="logo"
              style={{ position: 'fixed'}}
            />
          </Link>
        <div
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img
            src={require('../../assets/images/login_page_img.png')}
            className="d-inline-block align-top"
            alt="image"
            style={{ width: '535px', height: '300px'}}
          />
        </div>
        </div>
        <div
          style={{
            width: '37%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '10px',
          }}
        >
          <div style={{ color: '#0D4C9E'}}>
            <img src={require('../../assets/icons/heading-icon.svg')} alt='icon' className='mt-2 mb-2' style={{width: '28px', height: '28px'}} />
            <div style={{ fontSize: '30px'}}><b>LOGIN</b></div>
            <p style={{ fontSize: '12px' }}>Don't have an account? <Link to='/register' style={{ color: '#0D4C9E', textDecoration: 'none'}}><b>Register here</b></Link></p>
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
                <Grid item xs={12}>
                  <TextField
                    id="input-with-icon-textfield"
                    label="Email Address/Username"
                    className="login-form-textfield mt-3 mb-3" 
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon style={{ fontSize: '18px', color:'#0D4C9E'}} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="input-with-icon-textfield"
                    label="Password"
                    className="login-form-textfield mt-3 mb-3"
                    helperText={
                      <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                          <input type="checkbox" name="checkbox" checked={checked} onChange={() => setChecked(!checked)} style={{ width: '11px', height: '11px', marginRight: '3px'}} />
                          <label for="checkbox"> Remember Me</label>
                        </div>
                        <div style={{ cursor: 'pointer'}}>Forgot Password?</div>
                      </div>
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon style={{ fontSize: '18px', color:'#0D4C9E'}} />
                        </InputAdornment>
                      ),
                    }}
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
                    width: '92%',
                    marginTop: '5%'
                  }}
                >
                  Login
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
