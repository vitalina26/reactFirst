import React,{useState} from "react";
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const titleChangerHendler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const [enteredAmount, setEnteredAmount] = useState('');
    const amountChangerHendler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const [enteredDate, setEnteredDate] = useState('29.01.2023');
    const dateChangerHendler = (event) => {
        setEnteredDate(event.target.value);
    };
    const submitHendler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            data: new Date(enteredDate),
        }
        console.log(expenseData);
        console.log('form')
        props.onSaveExpenseData(expenseData);
        
    }

    return <form onSubmit = {submitHendler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>title</label>
                <input type="text" onChange={titleChangerHendler}/>
            </div>
            <div className="new-expense__control">
                <label>amount</label>
                <input type='number'min = "0.01" step="0.01" onChange={amountChangerHendler}/>
            </div>
            
            <div className="new-expense__control">
                <label>date</label>
                <input type='date'min = "2019-01-01" step="2023-02-26" onChange={dateChangerHendler}/>
            </div>
        </div>
        <div className='new-expense__action'>
            <button type="button" onClick={props.onCancel}>cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
};
export default ExpenseForm;