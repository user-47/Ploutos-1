import validator from 'validator';

class ValidationController {
  static areInputsEmpty = (sellingAmount, sellingCurrency, buyingCurrency, rate) => {
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
};

export default ValidationController;