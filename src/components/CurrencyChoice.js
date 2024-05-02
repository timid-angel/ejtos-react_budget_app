import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CurrencyChoice = () => {
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        let new_currency = event.target.value
        dispatch({
            type: "CHANGE_CURRENCY",
            payload: new_currency
        })
    }

    return (
        <div className="alert px-2 py-2 bg-success bg-opacity-25 d-flex justify-content-center align-items-center" style={{ fontSize: "1.2rem" }}>
            <label htmlFor="currencySelector01" className="">Currency: </label>
            <select className="custom-select mx-2 px-3 my-0 py-2 alert bg-success bg-opacity-25" id="currencySelector01" onChange={(event) => handleCurrencyChange(event)} style={{ fontSize: "1.2rem", outline: "none" }}>
                <option defaultValue value="£" name="Pound">Pound (£)</option>
                <option value="$" name="Dollar">Dollar ($)</option>
                <option value="€" name="Euro">Euro (€)</option>
                <option value="₹" name="Ruppee">Ruppee (₹)</option>
            </select>
        </div>
    );
}

export default CurrencyChoice