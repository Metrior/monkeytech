import React from 'react';
import { useHistory } from "react-router-dom";
import Submit from "./SubmitButton.styled";

const SubmitButton = ({getCode, pin, ride_id}) => {

    const history = useHistory();

    const handleClick = () => {
        getCode(pin, ride_id);
        history.push("/result");
    };

    return (
        <Submit onClick={()=>handleClick()}/>
        );
};

export default SubmitButton;
