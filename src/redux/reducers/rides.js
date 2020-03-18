import {GET_RIDES, CHOOSE_RIDE} from "../actions/types";

const initialState = {
    rides: {},
    chosenRide: null
};

const setRides = (state= initialState, action) => {
    switch (action.type) {
        case GET_RIDES:
            return {
                ...state,
                rides: action.payload
            };
        case CHOOSE_RIDE:
            return {
                ...state,
                chosenRide: action.payload
            };
        default:
            return state

    }
};

export default setRides
