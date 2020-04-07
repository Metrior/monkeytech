import React from 'react';
import { connect } from 'react-redux';

import Result from "./Result";

const mapStateToProps = state => {
    return {
        code: state.setCode.code,
        error: state.setCode.error,
    };
};

const ResultContainer = connect(mapStateToProps)(Result);

export default ResultContainer
