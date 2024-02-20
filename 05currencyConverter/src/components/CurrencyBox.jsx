
import React, { useId } from "react"

function CurrencyBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    setCurrency ="usd",
    amountDisabled = false,
    currencyDisabled = false,

}){
    const amountField = useId()
    const currencyField = useId()
    return(
        <>
        {/* for amount section */}
            <div className="w-fit flex justify-center gap-4 bg-white rounded-xl border border-black">
                <div className=" flex flex-col gap-8 p-4">
                    <label htmlFor={amountField}
                    className = "text-cyan-500">
                        {label}
                    </label>
                    <input type="number" name="Amount" id={amountField} 
                    value={amount} disabled={amountDisabled}  placeholder="Amount"
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                    className="border-b border-black bg-inherit"
                    />
                </div>

            {/* for currrency section */}
                <div className=" flex flex-col gap-8 p-4">
                    <label htmlFor={currencyField}>Currency Type</label>
                    <select name="currencyType" id={currencyField} 
                    disabled={currencyDisabled} value={setCurrency}
                    onChange={((e)=> onCurrencyChange && onCurrencyChange(e.target.value))}
                    className="border-b border-black bg-gray-200 rounded-sm"
                    >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}

export default CurrencyBox;