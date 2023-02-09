import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const [isEditing,setisEditing] = useState(false);
    const saveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
            
        }
        
        props.onAddExpense(expenseData);
        setisEditing(false);
    };
    const startEditingHendler = () => {
        setisEditing(true);
    };
    const stopEditingHendler = () => {
        setisEditing(false);
    };
    return <div className="new-expense">
        {!isEditing ? <button onClick={startEditingHendler}>add New Expense</button> : <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} onCancel = {stopEditingHendler}  />}
       
    </div>
};
export default NewExpense;