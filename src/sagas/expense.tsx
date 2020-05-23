import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ExpensesControlAppTypes as ActionTypes } from "../types/ActionTypes";
import { fetchExpensesResult } from "../actions/expenses";
import {  getExpensesFromStorage} from "../storage/index";
const aa: any = () => {
    return ;
}
 function* fetchExpensesSaga(action) {
    console.log("action", action);
    const response =  yield  call( getExpensesFromStorage);


    yield put(fetchExpensesResult(false, response))
}
export default [

    takeLatest(ActionTypes.fetchExpenses, fetchExpensesSaga),
]
