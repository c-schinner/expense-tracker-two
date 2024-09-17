import { useState } from "react"

const Housing = ({ onAddExpense }) => {

    const [amount, setAmount] = useState('');
    const [details, setDetails] = useState('');
    const [submitData, setSubmitData] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState('');

    const handleAddClick = () => {
        if (details && amount) {
            const parsedAmount = parseFloat(amount);
            setSubmitData([...submitData, { details, amount: parseFloat(amount) }]);
            setDetails('');
            setAmount('');
            onAddExpense(parsedAmount);
        }
    };

    const handleRowClick = (index) => {
        setSelectedIndex(index);
    };

    const handleDeleteClick = () => {
        if (selectedIndex !== null && selectedIndex >= 0 && selectedIndex < submitData.length ) {
            const amountToDelete = submitData[selectedIndex].amount;
            const updatedData = submitData.filter((_, index) => index !== selectedIndex);
            setSubmitData(updatedData);
            setSelectedIndex(null);
            onAddExpense(-amountToDelete)
        }
    };

    return (
        <div className="flex-1 mix-blend-color-burn text-center p-10">
            <div className="h-auto border-4 border-black rounded-md p-4 m-4 font-bold max-w-4xl mx-auto justify-center">
                    <h2 className="text-3xl mb-4">Housing</h2>  
                <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-2 mb-4 w-full sm:w-auto">
                    <input 
                    type="text"
                    placeholder="Expense Details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="border border-black rounded-md p-2 m-1 w-full sm:w-auto"
                    />
                    <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="border border-black rounded-md p-2 m-1 w-full sm:w-auto"
                    />
                    <button
                    className="m-3 px-4 py-2 bg-blue-400 text-black rounded-md shadow-md transform active:scale-95 transition-transform duration-150 w-full sm:w-auto"
                    onClick={handleAddClick}>
                        Add
                    </button>
                    <button
                    onClick={handleDeleteClick}
                    disabled={selectedIndex === null}
                    className="m-1 px-4 py-2 bg-red-400 text-white rounded-md shadow-md transform active:scale-95 transition-transform duration-150 w-full sm:w-auto">
                        X
                    </button>
                </div>
                <div className="border border-black rounded-sm p-2 h-[150px] sm:h-[200px] overflow-y-auto">
                    {submitData.length > 0 ? (
                        <ul>
                            {submitData.map((item, index) => (
                                <li 
                                key={index}
                                onClick={() => handleRowClick(index)}
                                className={`p-2 cursor-pointer ${index === selectedIndex ? 'bg-blue-200' : ''}`}
                                >
                                    {item.details} : ${item.amount}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm">No expenses added yet.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Housing
