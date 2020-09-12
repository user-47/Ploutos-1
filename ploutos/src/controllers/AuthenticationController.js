// import { useSnackbar } from 'notistack';


class AuthenticationController {
  static registerUser = async (userDetails) => {
    const { first_name, last_name, username, email, phone_number, password, password_confirmation } = userDetails;
   
    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ first_name, last_name, username, email, phone_number, password, password_confirmation })
    };

    // const { enqueueSnackbar } = useSnackbar();

    const url = 'https://ploutos-services.herokuapp.com/api/v1/auth/register'
    
    await fetch(url, requestOptions)
    .then(response => response.json())
    .then(userData => {
        // localStorage.setItem('user', JSON.stringify(user));
      if (userData.errors) {
        console.log(userData.errors);
      } else {
        console.log(userData);
        console.log('sign up successful')
        return userData
      }
      
      // enqueueSnackbar('Registration Successful', { variant: "success" });
    }).catch((error) =>{
      console.log(error);
      // enqueueSnackbar('error occurred', { variant: "error" });
    });
    
 
  };

};

export default AuthenticationController;