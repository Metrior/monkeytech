import {GET_PIN} from "../actions/types";

const initialState = {
    pin: null
};

const setPin = (state=initialState, action) => {
    switch (action.type) {
        case GET_PIN:
            return {
                pin: action.payload
            };
        default:
            return state

    }
};

export default setPin
