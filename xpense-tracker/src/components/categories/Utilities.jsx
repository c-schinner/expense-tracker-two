import { useState } from 'react';

const Utilities = () => {
    const [amount, setAmount] = useState('');
    const [details, setDetails] = useState('');
    const [submitData, setSubmitData] = useState([]);

    const handleAddClick = () => {
        if (details && amount) {
            setSubmitData([...submitData, { details, amount }]);
            setDetails('');
            setAmount('');
        }
    };

    return (
        <div className="flex-1 mix-blend-color-burn text-center p-10">
            <div className="h-[350px] border-4 border-black rounded-md p-4 m-4 font-bold max-w-4xl mx-auto justify-center">
                    <h2 className="text-3xl">Utilities</h2>  
                <div className="flex-row h-[150px] pt-8">
                    <input 
                    type="text"
                    placeholder="Expense Details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="border border-black rounded-md p-2 m-1"
                    />
                    <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="border border-black rounded-md p-2 m-1"
                    />
                    <button
                    className="m-3 px-4 py-2 bg-blue-400 text-black rounded-md shadow-md transform active:scale-95 transition-transform duration-150"
                    onClick={handleAddClick}>
                        Add
                    </button>
                </div>
                <div className="border border-black rounded-sm p-2 h-[100px] overflow-y-auto">
                    {submitData.length > 0 ? (
                        <ul>
                            {submitData.map((item, index) => (
                                <li key={index}>
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

export default Utilities