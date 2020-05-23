import { ExpensesControlAppTypes as ActionTypes } from '../types/ActionTypes';
export const fetchExpenses=()=>({
type:ActionTypes.fetchExpenses
})
export const fetchExpensesResult=(hasError, expenses)=>({
    type: ActionTypes.fetchExpensesResult,
	hasError:hasError,
	data:expenses,
})
export const saveNewExpense=(category,price)=>({
	type:ActionTypes.saveNewExpense,
	category:category,
	price:price,
})

export const updateNewExpense=(expenses)=>({
	type:ActionTypes.updateNewExpense,
	expenses:expenses,
})