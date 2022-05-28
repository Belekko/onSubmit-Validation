import React, { useRef } from "react";

const BasicForm = (props) => {
  const firstName = useRef("");
  let firstNameisValid = false;
  let firstNameisTouched = false;

  const firstNameBlurHandler = (e) => {
    firstNameisTouched = true;
  };
  console.log(firstName.current)
  firstNameisValid = firstName.current.trim() !== "";
  const firstNameIsInvalid = firstNameisValid === "" && !firstNameisTouched;
  const firstNameClasses = firstNameIsInvalid
    ? "form-control"
    : "form-contol invalid";

  return (
    <form>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="first-name">First Name</label>
          <input
            ref={firstName}
            type="text"
            id="first-name"
            onBlur={firstNameBlurHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input type="text" id="email" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
