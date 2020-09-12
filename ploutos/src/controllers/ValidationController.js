import validator from 'validator';

class ValidationController {
  static areNewPostInputsEmpty = (sellingAmount, sellingCurrency, buyingCurrency, rate) => {
    // console.log(sellingAmount, sellingCurrency, buyingCurrency, rate)
    if (validator.isEmpty(sellingAmount) ||  validator.isEmpty(sellingCurrency) || validator.isEmpty(buyingCurrency) || validator.isEmpty(rate)) {
      return false;
    } else {
      return true;
    };
    // return (!validator.isEmpty(sellingAmount) ||  !validator.isEmpty(sellingCurrency) || !validator.isEmpty(buyingCurrency) || !validator.isEmpty(rate));
  };

  static validateNumberTypeInput = (inputValue) => {
    return validator.isNumeric(inputValue) && validator.isInt(inputValue, {gt: 0});
  };

  static validateBuySomeInput = (inputValue, maxAllowedValue) => {
    return this.validateNumberTypeInput(inputValue) && (Number(inputValue) <= Number(maxAllowedValue))
  }

  static validateFirstname = (firstname) => {
    const regex = /^[a-zA-Z,.'-]+$/;

    return regex.test(firstname) && !validator.isEmpty(firstname);
  };

  static validateLastname = (lastname) => {
    return this.validateFirstname(lastname);
  };

  static validateUsername = (username) => {
    const regex = /^[a-zA-Z@$!%*?&-£/_.,:;<>~#{}"'^=+{}`¬]+$/;
    
    return regex.test(username) && !validator.isEmpty(username);
  };

  static validatePhoneNo = (phoneNo) => {
    return validator.isNumeric(phoneNo) && validator.isMobilePhone(phoneNo) && !validator.isEmpty(phoneNo) && (phoneNo.length >= 10 && phoneNo.length <= 13);
  };

  static validateEmail = (emailInput) => {
    return validator.isEmail(emailInput) && !validator.isEmpty(emailInput);
  };

  static validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-£/_.,:;<>~#{}"'^=+{}`¬])[A-Za-z\d@$!%*?&-£/_.,:;<>~#{}"'^=+{}`¬]{8,64}$/;
    // ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$
    // ^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$

    return regex.test(password) && !validator.isEmpty(password);
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
    // if (confirmPassword === password && this.validatePassword(confirmPassword)) {
    //   return true;
    // } else {
    //   return false;
    // };
    return (confirmPassword === password && this.validatePassword(confirmPassword));
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