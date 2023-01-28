import React,{useState} from "react";
import './ExpenseForm.css'
const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const titleChanger = (event) => {
        setEnteredTitle(event.target.value);
    };
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>title</label>
                <input type="text" onChange={titleChanger}/>
            </div>
            <div className="new-expense__control">
                <label>amount</label>
                <input type='number'min = "0.01" step="0.01"/>
            </div>
            
            <div className="new-expense__control">
                <label>date</label>
                <input type='date'min = "2019-01-01" step="2023-02-26"/>
            </div>
        </div>
        <div className='new-expense__action'>
            <button type="submit">Add Expense</button>
        </div>
    </form>
};
export default ExpenseForm;