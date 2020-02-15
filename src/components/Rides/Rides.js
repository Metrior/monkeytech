import React from 'react';
import './Rides.css';
import ticketSvg from "../../accets/ico-g-01.svg";
import timeSvg from "../../accets/ico-g-03.svg";

const Rides = ({color, zone, name, time, tickets, onClick}) => {
    return (
        <div onClick={onClick} className="ride">
            <div className="color" style={{backgroundColor: color}}/>
            <div className="zone">{zone}</div>
            <div className="name">{name}</div>
            <div className="time">
                {time}
                <img className="time_svg" src={timeSvg}/>
            </div>
            <div className="tickets">
                {tickets}
                <img className="ticket_svg" src={ticketSvg}/>
            </div>
        </div>
    );
};

export default Rides;
