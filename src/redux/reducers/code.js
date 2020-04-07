import {GET_CODE} from "../actions/types";
import {GET_CODE_ERROR} from "../actions/types";

const initialState = {
    code: null,
    error: null
};

const setCode = (state=initialState, action) => {
    switch (action.type) {
        case GET_CODE:
            return {
                code: action.payload
            };
        case GET_CODE_ERROR:
            return {
                error: action.payload
            };
        default:
            return state

    }
};

export default setCode
