import React, { useContext } from 'react'

import { AppContext } from '../context/AppContext'
import ExpenseItem from './ExpenseItem'


const ExpenseList = () => {
    const { expenses } = useContext(AppContext)

    return (
        <table className='table'>
            <thead className='thead-light'>
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase By 10</th>
                    <th scope="col">Decrease By 10</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    expenses.map((item) => (
                        <ExpenseItem id={item.id} key={item.id} name={item.name} cost={item.cost} />
                    ))
                }
            </tbody>
        </table>
    );
}

export default ExpenseList