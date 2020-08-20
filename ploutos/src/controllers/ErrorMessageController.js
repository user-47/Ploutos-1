import ValidationController from './ValidationController';
import validator from 'validator';

class ErrorMessageController {
  static nameErrorMessage = (name, type='first name') => {
    if (validator.isEmpty(name)) {
      return `Please fill in your ${type}`
    } else if (ValidationController.validateFirstname(name) == false) {
      return `Please fill in valid ${type}`
    }
  };

  static emailErrorMessage = (email) => {
    if (validator.isEmpty(email)) {
      return `Please fill in your email address`
    } else if (ValidationController.validateEmail(email) == false) {
      return `Please fill in valid email address`
    }
  };

  static passwordErrorMessage = (password) => {
    if (validator.isEmpty(password)) {
      return `Please fill in your password`
    } else if (ValidationController.validatePassword(password) == false) {
      return `Password doesn't match required format`
    }
  };

  static confirmPasswordErrorMessage = (password, confirmPassword) => {
    if (validator.isEmpty(confirmPassword)) {
      return `Please fill in your password again`
    } else if (ValidationController.validateConfirmPassword(password, confirmPassword) == false) {
      return `Does not match password`
    }
  };

};

export default ErrorMessageController;