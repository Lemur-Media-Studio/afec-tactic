import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function SpinnerLoading({loading}){
    if(loading){
        return(
            <Spinner
            className="spinner-loader"
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            />
        )
    }
}

export default SpinnerLoading