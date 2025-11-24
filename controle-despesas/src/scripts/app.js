const expenseForm = require('../components/expenseForm');
const expenseTable = require('../components/expenseTable');

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const calculateButton = document.getElementById('calculate-button');

    addButton.addEventListener('click', (event) => {
        event.preventDefault();
        const expenseData = expenseForm.getExpenseData();
        if (expenseData) {
            expenseTable.addExpenseToTable(expenseData);
            expenseForm.clearForm();
        }
    });

    calculateButton.addEventListener('click', (event) => {
        event.preventDefault();
        const summary = expenseTable.calculateSummary();
        window.location.href = 'resumo.html?summary=' + encodeURIComponent(JSON.stringify(summary));
    });
});