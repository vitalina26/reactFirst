import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import React,{useState} from "react";
function Expenses(props) {
    const [filterValue, setFilterValue] = useState('')
    const filterValueListener = (enteredFilterValue) => { 
        setFilterValue(enteredFilterValue);
    };
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date?.getFullYear().toString() === filterValue;
    }) 
    return ( 
        <div>
           
            <div className="expenses">
                <ExpensesFilter onSaveFilterValue={filterValueListener} />
                {filteredExpenses.map((expense) => (
                    <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount}></ExpenseItem>
                ))}
                
            </div>
        </div>
        
    )
}
export default Expenses;