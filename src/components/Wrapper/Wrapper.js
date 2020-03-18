import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from "../Input";
import { connect } from 'react-redux';
import {asyncGetRides, asyncGetCode, chooseRide} from "../../redux/actions";
import RidesListContainer from "../RidesList";
import InputWrapperContainer from "../InputWrapper/InputWrapperContainer";

class Wrapper extends Component {
    state = {
        pin:null
    };

    componentDidMount() {
        this.props.getRides();
    }

    handleChange = (event) => {
        this.setState({pin: event.target.value});
    }

    render() {
        const {rides, chosenRide} = this.props;
        const {pin} = this.state;
        return (
            <div>
                <InputWrapperContainer/>
                {/*<Input onChange={this.handleChange} onClick={()=>this.props.getCode(pin, chosenRide)}/>*/}
                <RidesListContainer/>
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
