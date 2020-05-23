import {createStore, applyMiddleware} from "redux";
import rootSaga from "../sagas/index";
import Expenses from "../reducer/expenses";

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware =createSagaMiddleware();


const str =createStore(Expenses,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const store=str;