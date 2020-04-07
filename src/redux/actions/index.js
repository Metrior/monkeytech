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

export const getPin = (pin) => {
    return {
        type: actionTypes.GET_PIN,
        payload: pin
    }
};

export const asyncGetCode = (pin, ride_id) => {
    return async dispatch => {
        let data = new FormData();
        data.set("pin", "JN-8080-8080-QQ");
        data.set("ride_id", "4");
        data.set("token", "433898df4a3e992b8411004109e4d574a90695e39e");

        await axios.post('http://fast-rider.herokuapp.com/api/v1/tickets', data, {headers:{'Content-Type': 'application/x-www-form-urlencoded' }})
            .then(code=>{
                dispatch(getCode(code))
            }).catch((error)=>console.log(error.response.data.message))
    }
};

export const getCodeError = (error) => {
    return {
        type: actionTypes.GET_CODE_ERROR,
        payload: error
    }
};
