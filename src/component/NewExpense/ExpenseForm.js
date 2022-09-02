import React, { useState, useRef } from "react";
import "./NewExpense.css";
import styled from "styled-components";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from '../Helpers/Wrapper'

const ExpenseForm = (props) => {
  // multi useState use
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

//   useRef() for the read input value and use it 
  const tileInputRef  = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();

  // const [titleIsValid , setTitleIsValid] = useState(true);
  // const [amountIsValid , setAmountIsValid] = useState(true);
  // const [dateIsValid , setDateIsValid] = useState(true);
  const [error, setError] = useState("");

  // multiple value change  that time useState use
  // const [userInput , setUserInput] = useState({
  //     enterTitle: '',
  //     enterAmount:'',
  //     enterDate: ''
  // });

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);

    // onchange print message Enter value
    // if(!event.target.value) {
    //     setIsValid(false);
    // } else {
    //     setIsValid(true);
    // }

    // one state use for multiple value change
    // setUserInput({
    //     ...userInput,
    //     enterTitle: event.target.value
    // });

    // updated state depends on previous state that time use
    // setUserInput((prevState) => {
    //     return {...prevState , enterTitle : event.target.value}
    // });
  };

  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enterAmount: event.target.value
    // });
  };

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enterDate: event.target.value
    // });
  };

  // Error set
  const setErrorModel = () => {
    if (enterTitle.trim().length === 0) {
      // setTitleIsValid(false);
      setError({
        title: "Title is Empty",
        message: "Please enter title....",
      });
      return false;
    }
    if (enterAmount.trim().length === 0) {
      // setAmountIsValid(false);
      setError({
        title: "Amount is Empty",
        message: "Please enter amount....",
      });
      return false;
    }

    if (enterAmount <= 0) {
      // setAmountIsValid(false);
      setError({
        title: "Amount Error",
        message: "Please enter Proper amount....",
      });
      return false;
    }

    if (enterDate.trim().length === 0) {
      // setDateIsValid(false);
      setError({
        title: "Date is Empty",
        message: "Please enter date....",
      });
      return false;
    }
    return true;
  };

  // Form submit time call function
  const submitHandler = (event) => {
    
    event.preventDefault();

    // this is read input value 
    console.log('tileInputRef :', tileInputRef.current.value);
    console.log('tileInputRef :', dateInputRef.current.value);
    console.log('tileInputRef :', amountInputRef.current.value);

    // function call And Set Error
    const errorValue = setErrorModel();
    if (!errorValue) {
      return;
    }

    const formData = {
      title: enterTitle,
      amount: +enterAmount,
      date: new Date(enterDate),
    };

    props.onSaveExpenseData(formData);

    // this is two way binding for use form  after form submit form field are blank
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");

    // set value of useRef const (reset value of input tag)
    tileInputRef.current.value=''
    dateInputRef.current.value=''
    amountInputRef.current.value=''
  };

  // hide form
  const cancelHandler = () => {
    props.oncancelHandler();
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {/* class change dynamically extends */}
      {/* <div className={`form-control ${!amountIsValid ? 'invalid' : ''}`}></div> */}
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onCancel={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            {/* <label style={{color: !titleIsValid ? 'red' : 'black'}}>Title</label> using state label color change*/}
            {/* <input style={{borderColor: !titleIsValid ? 'red' : 'black'}} type="text" value={enterTitle} onChange={titleChangeHandler} /> */}
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={enterTitle}
              onChange={titleChangeHandler}
              ref={tileInputRef} //ref for the read input value
            />
          </div>
          <div className="new-expense__control">
            {/* <label style={{color: !amountIsValid ? 'red' : 'black'}}>Amount</label> using state label color change*/}
            <label>Amount</label>
            <input
              id="amount"
              type="number"
              value={enterAmount}
              onChange={amountChangeHandler}
              ref={amountInputRef} //ref for the read input value
            />
          </div>
          <div className="new-expense__control">
            {/* <label style={{color: !dateIsValid ? 'red' : 'black'}}>Date</label> using state label color change*/}
            <label>Date</label>
            <input
              id="date"
              type="date"
              min="2019-12-31"
              max="2022-12-31"
              value={enterDate}
              onChange={dateChangeHandler}
              ref={dateInputRef} //ref for the read input value
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={cancelHandler}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default ExpenseForm;
