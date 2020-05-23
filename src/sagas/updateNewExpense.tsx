import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ExpensesControlAppTypes as ActionTypes } from "../types/ActionTypes";
import { fetchExpensesResult } from "../actions/expenses";
import {  updateExpenseToStorage} from "../storage/index";
const aa: any = () => {
    return ;
}
 function* updateExpensesSaga(action) {
    const response =  yield  call(updateExpenseToStorage,action.expenses);
    yield put(fetchExpensesResult(false, response))
}
export default [

    takeLatest(ActionTypes.updateNewExpense, updateExpensesSaga),
]
