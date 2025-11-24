import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description || !amount) return;

        addExpense({ description, amount: parseFloat(amount) });
        setDescription('');
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="description">Descrição:</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="amount">Valor:</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <button type="submit">Adicionar</button>
        </form>
    );
};

export default ExpenseForm;