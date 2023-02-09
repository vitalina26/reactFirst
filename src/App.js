import Expenses from "./components/Expenses.js";
import NewExpense from "./components/NewExpense.js"
import React,{useState} from "react";
function App() {
  const DUMP_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(DUMP_EXPENSES);
  const addExpenseHandler = (expense) => { 
    console.log(expense);
        console.log('form')
    setExpenses(prevExpenses =>{return [expense, ...prevExpenses]})
  };
  
  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
      
    </div>
  );
}

export default App;
