import { useEffect, useState } from 'react';
import Utilities from './categories/Utilities';
import Housing from './categories/Housing';
import Entertainment from './categories/Entertainment';
import Groceries from './categories/Groceries';
import Other from './categories/Other';


const Totals = () => {

    const [income, setIncome] = useState('');
    const [totalIncome, setTotalIncome] = useState(0);
    const [extraIncome, setExtraIncome] = useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);

    const handleInputChange = (e) => {
        setIncome(e.target.value);
    };

    const handleUpdateTotalExpenses = (newExpense) => {
        setTotalExpenses((prevExpense) => prevExpense + newExpense);
    }

    const handleSaveIncome = () => {
        const incomeNumber = parseFloat(income) || 0;
        setTotalIncome(incomeNumber);
        setIncome('');
    }

    const handleExtraIncome = () => {
        const leftoverIncome = totalIncome - totalExpenses;
        setExtraIncome(leftoverIncome);
    }

    useEffect(() => {
        handleExtraIncome();
    }, [totalIncome, totalExpenses])


    return (
        <>
        <div className="sticky top-0 z-10 bg-gradient-to-br from-blue-500 to-orange-500 h-[250px] w-full overflow-y-auto p-2 max-w-4xl mx-auto">
            <div className="flex flex-row justify-evenly p-2">
                <div className="flex flex-col items-center pt-5">
                        <label 
                            htmlFor="income" 
                            className="w-1/3 font-medium">
                                Total Income:
                        </label>
                        <input 
                            type="text"
                            id="income"
                            placeholder="Enter Income"
                            className="border border-black rounded-md p-2 w-2/3 opacity-65"
                            value={income}
                            onChange={handleInputChange} 
                        />
                        <button 
                        onClick={handleSaveIncome}
                        className="m-3 px-4 py-2 bg-blue-500 text-black rounded-md shadow-md transform active:scale-95 transition-transform duration-150">
                            Enter
                        </button>
                        <div className="text-lg font-semibold pb-2">
                            Total: {totalIncome.toFixed(2)}
                        </div>
                </div>
                <div className="flex flex-col items-center pt-5">
                        <label 
                            htmlFor="expenses" 
                            className="w-1/3 font-medium">
                                Total Expenses:
                        </label>
                        <div className="text-lg font-semibold pb-2 mt-10">
                            Total: {totalExpenses.toFixed(2)}
                        </div>
                </div>
                <div className="flex flex-col items-center pt-5">
                        <label 
                            htmlFor="extra" 
                            className="w-1/3 font-medium">
                                Left Over:
                        </label>
                        <div className="text-lg font-semibold pb-2 mt-10">
                            Total: {extraIncome.toFixed(2)}
                        </div>
                </div>
            </div>
        </div>
        <Housing onAddExpense={handleUpdateTotalExpenses} />
        <Utilities onAddExpense={handleUpdateTotalExpenses} />
        <Entertainment onAddExpense={handleUpdateTotalExpenses} />
        <Groceries onAddExpense={handleUpdateTotalExpenses} />
        <Other onAddExpense={handleUpdateTotalExpenses} />
        </>
    )
}

export default Totals