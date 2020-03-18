import React from 'react';

import Input from "../Input";
import SubmitButton from "../SubmitButton";
import {getPin} from "../../redux/actions";

const InputWrapper = ({getPin, getCode, pin, ride_id}) => {
    return (
        <>
            <Input getPin={getPin}/>
            <SubmitButton getCode={getCode} pin={pin} ride_id={ride_id}/>
        </>
    );
};

export default InputWrapper;
