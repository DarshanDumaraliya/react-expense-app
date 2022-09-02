import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem'
import Card from '../UI/card'
import ExpensesFilter from './ExpenseFilter'
import ExpensesChart from './ExpensesChart';

function Expenses(Data) {

    const [filterYear , setFilterYear] = useState('');

    // year selection child to parent communication
    const filterChangeHandler = (selected) => {
        setFilterYear(selected);
    }

    // condition of the filter array first time load all data
    let filterArray = [];
    if (filterYear === "") {
        filterArray = Data.expensesDetails
    } else {
        // filter array year vise 
        filterArray = Data.expensesDetails.filter((year) => {
            return year.date.getFullYear().toString() === filterYear;
        }); 
    }

    // Data not Found set
    let itemContent= <p style= {{color: 'red' , fontSize:'40px' , textAlign:'center'}}>Data Not Found</p> ;

    if (filterArray.length > 0) { 
        itemContent =  filterArray.map((item)=> (
                        <ExpenseItem 
                            key={item.id}
                            title1 = {item.title}
                            amount1 = {item.amount}
                            date1 = {item.date} />
                        ));
    }

    // sum of total array item
    let sum=0;
    filterArray.map( (expense) =>
        sum += Number(expense.amount)
    )


    return (
        <Card className="expenses"> 
        <ExpensesFilter selectedYear={filterYear}  onChangeFilter={filterChangeHandler}/> 
        <ExpensesChart expenses={filterArray}/>
        {/* {filterArray.map((item)=> (
            <ExpenseItem 
                key={item.id}
                title1 = {item.title}
                amount1 = {item.amount}
                date1 = {item.date} />
                ))} */}
            {itemContent}
            <div>
                <div className ="expense-item__total">Total : ₹ {sum}</div>
                <div className ="expense-item__total">Total Item : {filterArray.length}</div>
            </div>
        </Card>
    )
} 

export default Expenses;