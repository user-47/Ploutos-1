import ValidationController from './ValidationController';
import validator from 'validator';

class ErrorMessageController {
  static nameErrorMessage = (name, type='first name') => {
    if (validator.isEmpty(name)) {
      return `Please fill in your ${type}`
    } else if (ValidationController.validateFirstname(name) === false) {
      return `Please fill in valid ${type}`
    }
  };

  static emailErrorMessage = (email) => {
    if (validator.isEmpty(email)) {
      return `Please fill in your email address`
    } else if (ValidationController.validateEmail(email) === false) {
      return `Please fill in valid email address`
    }
  };

  static passwordErrorMessage = (password) => {
    if (validator.isEmpty(password)) {
      return `Please fill in your password`
    } else if (ValidationController.validatePassword(password) === false) {
      return `Password doesn't match required format`
    }
    // At least one digit [0-9]
    // At least one lowercase character [a-z]
    // At least one uppercase character [A-Z]
    // At least one special character [*.!@#$%^&(){}[]:;<>,.?/~_+-=|\]
    // At least 8 characters in length, but no more than 32.
    // const passwordErrorArray = ['At least one digit', 'At least one lowercase character', 'At least one uppercase character', 'At least 8 characters in length, but no more than 64'];
    

  };

  static confirmPasswordErrorMessage = (password, confirmPassword) => {
    if (validator.isEmpty(confirmPassword)) {
      return `Please fill in your password again`
    } else if (ValidationController.validateConfirmPassword(password, confirmPassword) === false) {
      return `Does not match password`
    }
  };

};

export default ErrorMessageController;