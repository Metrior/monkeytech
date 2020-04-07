import React from 'react';
import {Error, Colored, Message} from "./ErrorMessage.styled";

const ErrorMessage = ({message}) => {
    return (
        <Error>
            <Colored/>
            <Message>{message}</Message>
        </Error>
    );
};

export default ErrorMessage;
