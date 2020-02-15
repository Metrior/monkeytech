import * as actionTypes from "./types";
import axios from "axios"

export const getRides = (rides) => {
    return {
        type: actionTypes.GET_RIDES,
        payload: rides
    }
};

export const asyncGetRides = () => {
    return async dispatch => {
        await axios.get('http://fast-rider.herokuapp.com/api/v1/rides?token=433898df4a3e992b8411004109e4d574a90695e39e')
            .then(rides=>{
                dispatch(getRides(rides.data))
            })
    }
};

export const chooseRide = (ride) => {
    return {
        type: actionTypes.CHOOSE_RIDE,
        payload: ride
    }
};

export const getCode = (code) => {
    return {
        type: actionTypes.GET_CODE,
        payload: code
    }
};

export const asyncGetCode = (pin, ride_id) => {
    return async dispatch => {
        await axios.post('http://fast-rider.herokuapp.com/api/v1/tickets', {"pin":pin,"ride_id":ride_id,"token":"4333898df4a3e992b8411004109e4d574a90695e39e"})
            .then(code=>{
                dispatch(getCode(code))
            })
    }
};
