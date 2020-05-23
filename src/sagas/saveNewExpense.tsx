import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ExpensesControlAppTypes as ActionTypes } from "../types/ActionTypes";
import { fetchExpensesResult } from "../actions/expenses";
import {  getExpensesFromStorage} from "../storage/index";
import {  saveExpenseToStorage} from "../storage/index";
const aa: any = () => {
    return ;
}
 function* saveExpensesSaga(action) {
    const response =  yield  call(saveExpenseToStorage,action.category,action.price);
    yield put(fetchExpensesResult(false, response))
}
export default [

    takeLatest(ActionTypes.saveNewExpense, saveExpensesSaga),
]
