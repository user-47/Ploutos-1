import validator from 'validator';

class ValidationController {
  static areNewPostInputsEmpty = (sellingAmount, sellingCurrency, buyingCurrency, rate) => {
    // console.log(sellingAmount, sellingCurrency, buyingCurrency, rate)
    if (validator.isEmpty(sellingAmount) ||  validator.isEmpty(sellingCurrency) || validator.isEmpty(buyingCurrency) || validator.isEmpty(rate)) {
      return false;
    } else {
      return true;
    };
  };

  static validateNumberTypeInput = (inputValue) => {
    return validator.isNumeric(inputValue) && validator.isInt(inputValue);
  };

  static validateFirstname = (name) => {
    
    const regex = /^[a-zA-Z,.'-]+$/;

    return regex.test(name) && !validator.isEmpty(name);

  };

  static validateLastname = (name) => {
    return this.validateFirstname(name);
  };

  static validateEmail = (emailInput) => {
    return validator.isEmail(emailInput)
  };

  static isInputEmpty = (input) => {
    if (validator.isEmpty(input)) {
      return false;
    } else {
      return true;
    };
  };

  static areSignUpInputsEmpty = (firstName, lastName, email, password, confirmPassword) => {
    if (validator.isEmpty(firstName) ||  validator.isEmpty(lastName) || validator.isEmpty(email) || validator.isEmpty(password) || validator.isEmpty(confirmPassword)) {
      return false;
    } else {
      return true;
    };
  };

  static validateConfirmPassword = (password, confirmPassword) => {
    if (confirmPassword === password) {
      return true;
    } else {
      return false;
    };
  };

  static areLoginInputsEmpty = (email, password) => {
    if (validator.isEmpty(email) || validator.isEmpty(password)) {
      return false;
    } else {
      return true;
    };
  };

};

export default ValidationController;