import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  // show form
  const editingHandler = () => {
    setIsEditing(true);
  };

  // hide Form
  const cancelHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingHandler}> Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          oncancelHandler={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
