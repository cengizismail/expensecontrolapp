import { ExpensesControlAppTypes as ActionTypes } from "../types/ActionTypes";
import { delay } from "redux-saga/effects";

const initialState={
    expenses:[],
    searchQuery:'',
}

export default  function Expenses (state=initialState,action){
   
    switch (action.type) {
        case  ActionTypes.fetchExpensesResult:
            return {expenses:action.data};
            break;
    
        default:
            return initialState;
    }
}