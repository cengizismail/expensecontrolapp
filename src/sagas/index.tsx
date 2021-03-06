import { all } from "redux-saga/effects";
import fetchExpensesSaga from "./expense";
import saveNewExpenseSaga from "./saveNewExpense";
import updateExpenses from "./updateNewExpense";

export default function* rootSaga() {
    yield all([
        ...fetchExpensesSaga, ...saveNewExpenseSaga, ...updateExpenses,
    ])
}