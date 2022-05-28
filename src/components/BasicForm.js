import React, { useRef, useState } from "react";

const BasicForm = (props) => {
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isFirstNameTouched, setIsFirstNameTouched] = useState(false);
  const firstNameRef = useRef("");

  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isLastNameTouched, setIsLastNameTouched] = useState(false);
  const lastNameRef = useRef("");

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const emailRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();

    setIsFirstNameTouched(true);
    setIsLastNameTouched(true);
    setIsEmailTouched(true);

    if (firstNameRef.current.value.trim() !== "") {
      setIsFirstNameValid(true);
    }

    if (lastNameRef.current.value.trim() !== "") {
      setIsLastNameValid(true);
    }

    if (emailRef.current.value.includes("@")) {
      setIsEmailValid(true);
      console.log("first");
    }

    const isFormInvalid =
      firstNameRef.current.value.trim() === "" ||
      lastNameRef.current.value.trim() === "" ||
      emailRef.current.value.trim() === "" ||
      !emailRef.current.value.includes("@");


    if (isFormInvalid) {
      return;
    }

    firstNameRef.current.value = "";
    setIsFirstNameTouched(false);
    setIsFirstNameValid(false);

    lastNameRef.current.value = "";
    setIsLastNameTouched(false);
    setIsLastNameValid(false);

    emailRef.current.value = "";
    setIsEmailTouched(false);
    setIsEmailValid(false);
  };

  const firstNameInvalid = !isFirstNameValid && isFirstNameTouched;
  const firstNameClasses = firstNameInvalid
    ? "form-control invalid"
    : "form-control";

  const lastNameInvalid = isLastNameTouched && !isLastNameValid;
  const lastNameClasses = lastNameInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInvalid = isEmailTouched && !isEmailValid;
  const emailClasses = emailInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input ref={firstNameRef} type="text" id="name" />
          {firstNameInvalid && (
            <p className="error-text">First Name must not be empty!</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" ref={lastNameRef} />
          {lastNameInvalid && (
            <p className="error-text">Last Name must not be empty!</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" ref={emailRef} />
        {emailInvalid && (
          <p className="error-text">Email must include '@' or not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
