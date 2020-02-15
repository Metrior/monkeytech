import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from "../Input";
import Rides from "../Rides";
import { connect } from 'react-redux';
import {asyncGetRides, asyncGetCode, chooseRide} from "../../redux/actions";

class Wrapper extends Component {
    state = {
        pin:null
    };

    componentDidMount() {
        this.props.getRides();
    }

    createRidesList = (rides) => {
        return Object.keys(rides).map((i)=>(
            <Rides
                key={rides[i].id}
                color={rides[i].zone.color}
                zone={rides[i].zone.name}
                name={rides[i].name}
                time={rides[i].return_time}
                tickets={rides[i].remaining_tickets}
                onClick={()=>{
                    this.props.chooseRide(rides[i]);
                    console.log(this.props.chosenRide)
                }}
            />)
        )
    };

    handleChange = (event) => {
        this.setState({pin: event.target.value});
    }

    render() {
        const {rides, chosenRide} = this.props;
        const {pin} = this.state;
        return (
            <div>
                <Input onChange={this.handleChange} onClick={()=>this.props.getCode(pin, chosenRide)}/>
                <div className="ridesList">
                    {rides ? this.createRidesList(rides) : null}
                </div>
            </div>
        );
    }
}

Wrapper.propTypes = {};

const mapStateToProps = state => {
    return {
        rides: state.setRides.rides,
        code: state.setCode.code,
        chosenRide: state.setRides.chosenRide,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getRides: () => dispatch(asyncGetRides()),
        chooseRide: (ride) => dispatch(chooseRide(ride)),
        getCode: (pin, ride) => dispatch(asyncGetCode(pin, ride))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Wrapper);
