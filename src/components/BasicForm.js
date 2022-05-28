import React, { useRef, useState } from "react";

const BasicForm = (props) => {
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isFirstNameTouched, setIsFirstNameTouched] = useState(false);
  const firstNameRef = useRef("");
  const submitHandler = (e) => {
    e.preventDefault();
    setIsFirstNameTouched(true);
    const isFirstNameValueValid = firstNameRef.current.value.trim() !== "";
    if (isFirstNameValueValid) {
      setIsFirstNameValid(true);
    }
  };

  const firstNameClasses =
    isFirstNameValid && isFirstNameTouched
      ? "form-control"
      : "form-control invalid";

  const isFormValid = !isFirstNameValid;

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input ref={firstNameRef} type="text" id="name" />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
