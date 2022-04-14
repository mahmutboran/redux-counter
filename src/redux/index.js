import { createStore, combineReducers } from "redux";
import counterReducer from "./reducer/counterReducer";


const reducers = combineReducers({
  counterReducer: counterReducer,

});

export const myStore = createStore(reducers);
