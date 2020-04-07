import React, {Component} from 'react';
import {connect} from "react-redux"
import {Redirect} from "react-router";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Result = (code,error) => {

    let result;
    if (error){

    } else if(code){
        result = <ErrorMessage></ErrorMessage>
    } else {
        result = <div></div>
    }

        return (
            <>
                {result}
            </>
        );
};

export default Result;
