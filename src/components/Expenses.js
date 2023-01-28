import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import React,{useState} from "react";
function Expenses(props) {
    const [filterValue, setFilterValue] = useState('')
    const filterValueListener = (enteredFilterValue) => { 
        setFilterValue(enteredFilterValue);
    };
    return (
        <div>
            <ExpensesFilter onSaveFilterValue = {filterValueListener} />
            <div className="expenses">
                 <ExpenseItem date={props.expenses[0].date} title={props.expenses[0].title} amount={props.expenses[0].amount}></ExpenseItem>
                <ExpenseItem date={props.expenses[1].date} title={props.expenses[1].title} amount={props.expenses[1].amount}></ExpenseItem>
                <ExpenseItem date={props.expenses[2].date} title={props.expenses[2].title} amount={props.expenses[2].amount}></ExpenseItem>
                 <ExpenseItem date={props.expenses[3].date} title={props.expenses[3].title} amount={props.expenses[3].amount}></ExpenseItem>
            </div>
        </div>
        
    )
}
export default Expenses;