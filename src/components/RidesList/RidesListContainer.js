import React from 'react';
import {asyncGetCode, asyncGetRides, chooseRide} from "../../redux/actions";
import {connect} from "react-redux";

import RidesList from "./RidesList";

const mapStateToProps = state => {
    return {
        rides: state.setRides.rides,
        // code: state.setCode.code,
        chosenRide: state.setRides.chosenRide,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getRides: () => dispatch(asyncGetRides()),
        chooseRide: (ride) => dispatch(chooseRide(ride)),
        // getCode: (pin, ride) => dispatch(asyncGetCode(pin, ride))
    };
};

const RidesListContainer =  connect(
    mapStateToProps,
    mapDispatchToProps
)(RidesList);

export default RidesListContainer;
