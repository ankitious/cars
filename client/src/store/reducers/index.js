import { combineReducers } from 'redux';
import cars from "./cars";
import filterParams from "./filterParams";
import car from "./car";

const rootReducer = combineReducers({ cars, filterParams, car });

export default rootReducer;
