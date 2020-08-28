import React, { Component } from 'react';
import OtpInput from 'react-otp-input';
 
export default class OtpInputField extends Component {
  state = { otp: '' };
 
  handleChange = (otp) => {
    this.setState({ otp })
    console.log(this.state)
  };
 
  render() {
    return (
      <OtpInput
        value={this.state.otp}
        onChange={this.handleChange}
        numInputs={5}
        separator={<span>-</span>}
        isInputNum={true}
        hasErrored={false}
        errorStyle={{border: 'solid 0.5px red',}}
        inputStyle={{
          height: '4em',
          width: '3em',
          textAlign: 'center',
          border: 'solid 0.5px skyblue',
          borderRadius: '5px',
          margin: '12px',
        }}
      />
    );
  }
}