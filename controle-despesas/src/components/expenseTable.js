import React, { useState } from 'react';

const ExpenseTable = ({ expenses }) => {
    const [total, setTotal] = useState(0);
    const [average, setAverage] = useState(0);

    const calculateSummary = () => {
        const totalExpenses = expenses.reduce((acc, expense) => acc + expense.value, 0);
        const avgExpenses = expenses.length > 0 ? totalExpenses / expenses.length : 0;

        setTotal(totalExpenses);
        setAverage(avgExpenses);
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.description}</td>
                            <td>{expense.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={calculateSummary}>Calcular</button>
            <div>
                <h3>Resumo</h3>
                <p>Total: {total}</p>
                <p>Média: {average}</p>
            </div>
        </div>
    );
};

export default ExpenseTable;