import React from "react";

import "../Input/Input.scss";

const Input = (props) => {
  let inputElement;
  let validationError = null;

  if (props.invalid && props.shouldValidate && props.touched) {
    switch (props.elementConfig.type) {
      case "email":
        validationError = (
          <p className='validationError' style={{
            marginTop: '225px'
          }}>
            Please enter a valid { props.elementConfig.type} <br />
          </p >
        );
        break;
      case "textarea":
        validationError = (
          <div className='validationError'>
            <p>Please compile all fields</p>
          </div>
        );
      default:
    }
    if (props.elementConfig.shouldValidate) {
      validationError = (
        <div className='validationError'>
          xxxxxxxxxxxxxxx:<br />
          <ul>
            <li>Minimum 8 characters</li>
            <li>At least one letter</li>
            <li>At least one number</li>
          </ul>
        </div>
      );
    }
  }

  switch (props.elementType) {
    case "text":
      inputElement = (
        <input
          id={props.inputId}
          style={props.style}
          className='InputElement'
          value={props.value}
          {...props.elementConfig}
          type={props.elementType}
          onChange={props.changed}
          autoComplete="on"
        />
      );
      break;
    case "date":
      inputElement = (
        <input
          id={props.inputId}
          className='InputElement'
          {...props.elementConfig}
          value={props.value}
          style={props.style}
          type={props.type}
          onChange={props.changed}
        />
      );
    case "textarea":
      inputElement = (
        <textarea
          id={props.inputId}
          className='InputElement'
          {...props.elementConfig}
          value={props.value}
          style={props.style}
          type={props.type}
          onChange={props.changed}
        ></textarea>
      );
    default:
      inputElement = (
        <input
          id={props.inputId}
          className='InputElement'
          {...props.elementConfig}
          value={props.value}
          style={props.style}
          type={props.type}
          onChange={props.changed}

        />
      );
  }
  return (
    <div className='Input'>
      <label className='Label' >{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
};

export default Input;
