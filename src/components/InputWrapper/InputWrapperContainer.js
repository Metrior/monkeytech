import React from 'react';
import { connect } from 'react-redux';

import InputWrapper from "./InputWrapper";
import {asyncGetCode, getPin} from "../../redux/actions";

const mapStateToProps = state => {
    return {
        chosenRide: state.setRides.chosenRide,
        pin: state.setPin.pin,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getPin: (pin) => dispatch(getPin(pin)),
        getCode: (pin, ride) => dispatch(asyncGetCode(pin, ride))
    };
};

const InputWrapperContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputWrapper);

export default InputWrapperContainer;
