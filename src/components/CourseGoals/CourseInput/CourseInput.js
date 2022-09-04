import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";
/* const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${ props => (props.valid ?  'black' : '#ca0f0f')};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    border-color: ${ props => (props.valid ?  '#ccc' : '#f30c0c')};
    background-color: ${props => (props.valid ? 'transparent':'#fa7979')};

  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`; */
const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const isValidInput = (input) => {
    return input.trim().length > 0;
  };

  const goalInputChangeHandler = (event) => {
    if (isValidInput(event.target.value.trim())) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!isValidInput(enteredValue)) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
