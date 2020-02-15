import { combineReducers } from 'redux'
import setRides from "./rides";
import setCode from "./code";

const reducers = combineReducers({
    setRides,
    setCode
});

export default reducers
