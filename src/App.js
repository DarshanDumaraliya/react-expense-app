import React, { useState } from 'react';
import './App.css';
import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/NewExpense/NewExpense'
import Button from './component/Button/Button'

const DUMMY_DATA = [
  {
    id :'1',
    title: 'Mobile Cover',
    amount: 500,
    date: new Date(2020, 7, 14),
  },
  {
    id :'2',
    title: 'Bike Seat Cover',
    amount: 400,
    date: new Date(2020, 8, 14),
  },
  { 
    id :'3',
    title: 'Mouse', 
    amount: 200, 
    date: new Date(2021, 2, 12) 
  },
  {
    id :'4',
    title: 'Pen Box',
    amount: 300,
    date: new Date(2021, 5, 28),
  },
  {
    id :'5',
    title: 'Mobile Charger',
    amount: 450,
    date: new Date(2021, 11, 12),
  },
  // {
  //   id :'6',
  //   title: 'Pen',
  //   amount: 100,
  //   date: new Date(2019, 5, 23),
  // },
  // {
  //   id :'7',
  //   title: 'mouse',
  //   amount: 270,
  //   date: new Date(2022, 5, 23),
  // }
];


function App() {

  const [expenses , setExpenses] = useState(DUMMY_DATA);


  const addExpenseHandler = (expenseData) => {
    setExpenses((prev) => {
        return [...prev, expenseData]
      });
  }

  return (
    <div className="app">
      <h1>Expense App</h1>
      <NewExpense onAddExpense={addExpenseHandler}/>   
      <Expenses expensesDetails = {expenses} />
    </div>
  );
}

export default App;
