import React, { useContext, useState } from 'react';
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { budget, currency, expenses } = useContext(AppContext);
    const spending = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if (Number(event.target.value) > 20000) {
            alert("The budget cannot exceed 20,000")
            setNewBudget(newBudget)
        } else if (Number(event.target.value) < spending) {
            alert("You cannot reduce the budget to a value lower than spending")
            setNewBudget(newBudget)
        } else {
            setNewBudget(event.target.value);
        }
    }

    return (
        <div className='d-flex flex-row justify-content-center alert alert-secondary'>
            <span className='mx-1'>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
}

export default Budget