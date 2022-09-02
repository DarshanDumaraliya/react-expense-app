import React , { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/card'

function ExpenseItem(data) {

    const [title , setTitle] = useState(data.title1);
    
    const clickTime = () => {
        setTitle(data.title1 +'  - '+ data.amount1);
    }
    
    return ( 
        <Card className="expense-item">  
            <ExpenseDate expenseDate={data.date1}/>    
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className ="expense-item__price" onClick={clickTime}>₹ {data.amount1}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;