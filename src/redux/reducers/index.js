import { combineReducers } from 'redux'
import setRides from "./rides";
import setCode from "./code";
import setPin from "./pin";

const reducers = combineReducers({
    setRides,
    setCode,
    setPin
});

export default reducers
