import React, { useContext } from 'react'
import { TiDelete } from 'react-icons/ti'
import { FcPlus } from "react-icons/fc"
import { IoIosRemoveCircle } from "react-icons/io"
import { AppContext } from '../context/AppContext'

const ExpenseItem = (props) => {

    const { dispatch, currency } = useContext(AppContext)

    const handleDeleteExpense = () => {
        dispatch({ type: "DELETE_EXPENSE", payload: props.id, });
    }

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        }

        dispatch({
            type: "ADD_EXPENSE",
            payload: expense,
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        }

        dispatch({
            type: "ADD_EXPENSE",
            payload: expense
        })
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>
                <div className='mx-5'>
                    {currency}{props.cost}
                </div>
            </td>
            <td className='mx-auto'>
                <div className='mx-5'>
                    <FcPlus size={23} onClick={(event) => increaseAllocation(props.name)} />
                </div>
            </td>
            <td>
                <div className='mx-5'>
                    <IoIosRemoveCircle size={25} color='crimson' onClick={(event) => decreaseAllocation(props.name)} />
                </div>
            </td>

            <td>
                <div className='mx-5'>
                    <TiDelete size={26} onClick={handleDeleteExpense}></TiDelete>
                </div>
            </td>
        </tr>
    );
}

export default ExpenseItem