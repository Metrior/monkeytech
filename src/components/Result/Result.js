import React, {Component} from 'react';
import {connect} from "react-redux"
import {Redirect} from "react-router";

const Result = ({}) => {
        return (
            <div>
                {
                    // code ? <div>
                    //
                    // </div> : <Redirect to="/"/>
                }
            </div>
        );
};

const mapStateToProps = state => {
    return {
        code: state.setCode.code
    };
};

export default connect(mapStateToProps)(Result);
