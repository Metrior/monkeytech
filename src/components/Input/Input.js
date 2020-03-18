import React from 'react';
import TextInput from "./Input.styled";

const Input = ({getPin}) => {
    return (
        <>
            <TextInput onChange={(e)=>getPin(e.target.value)} type="text"/>
        </>
    );
};

export default Input;
