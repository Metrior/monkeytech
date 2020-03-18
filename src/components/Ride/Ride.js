import React from 'react';
import {SingleRide,Tickets,Time,TicketsSVG,TimeSVG, Colored, Name, Zone} from "./Ride.styled";
import ticketSvg from "../../assets/ico-g-01.svg";
import timeSvg from "../../assets/ico-g-03.svg";

const Ride = ({color, zone, name, time, tickets, onClick, chosenRide}) => {
    return (
        <SingleRide onClick={onClick} chosenRide={chosenRide}>
            <Colored className="color" style={{backgroundColor: color}}/>
            <Zone className="zone">{zone}</Zone>
            <Name className="name">{name}</Name>
            <Time className="time">
                {time}
                <TimeSVG className="time_svg" src={timeSvg}/>
            </Time>
            <Tickets className="tickets">
                {tickets}
                <TicketsSVG className="ticket_svg" src={ticketSvg}/>
            </Tickets>
        </SingleRide>
    );
};

export default Ride;
