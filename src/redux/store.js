import {createStore, combineReducers } from 'redux';
import actionTokeUsuario from "./reducers/tokeUsuario";

const reducer = combineReducers({
  actionTokeUsuario,
});

const store = createStore(actionTokeUsuario);

export default store;