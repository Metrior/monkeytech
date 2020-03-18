import React, {useEffect} from 'react';
import Ride from "../Ride";
import Rides from "./RidesList.styled"

const RidesList = ({rides, chosenRide, chooseRide, getRides}) => {

    useEffect(()=>{
        getRides()
    });

    const createRidesList = (rides) => {
        return Object.keys(rides).map((i)=>(
            <Ride
                key={rides[i].id}
                color={rides[i].zone.color}
                zone={rides[i].zone.name}
                name={rides[i].name}
                time={rides[i].return_time}
                tickets={rides[i].remaining_tickets}
                chosenRide={chosenRide === rides[i].id}
                onClick={()=>{
                    chooseRide(rides[i].id);
                }}
            />)
        )
    };

    return (
            <Rides>
                {rides ? createRidesList(rides) : null}
            </Rides>
    );
};

export default RidesList;
