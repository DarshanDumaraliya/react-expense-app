import React from 'react';
import './ExpenseItem.css';

function ExpenseDate(props) {
    const month = props.expenseDate.toLocaleDateString('en-us', {month : 'long'});
    const day = props.expenseDate.toLocaleDateString('en-us', { day : '2-digit'});
    const year = props.expenseDate.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    ) 
}

export default ExpenseDate;