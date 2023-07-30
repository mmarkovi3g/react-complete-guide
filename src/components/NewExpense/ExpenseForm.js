import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //props povlači vrijednosti iz NewExpense.js
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //ALTERNATIVA (JEDNA FUNKCIJA ZA SVE HANDLERE)
  /* const inputHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "date") {
      setEnteredDate(value);
    } else {
      setEnteredAmount(value);
    }
  }; */

  const submitHandler = (event) => {
    //dodaje se na <form> element i izvršava se u slučaju submit form (kada kliknemo na button submit)
    //ovdje je argument event - kao i u gornjim funkcijama
    event.preventDefault(); //metoda koja zaustavlja defaultno ponašanje submit-a - a to je da se šalje HTTP request (defaultno se refresha stranica)
    const expenseData = {
      //kreiranje objekta iz inputanih elemenata - oni koje unosimo u formu
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: enteredAmount,
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle(""); //jednostavan način da kada unesemo nove podatke u formu vratimo formu na defaultno stanje - s prazim poljima
    setEnteredAmount("");
    setEnteredDate("");
  };

  // komponennta forme

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2026-01-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onStopEditing}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
