import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function LoginLoader({children, loading}){
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
    }else{
        return(
            <>
                {children}
            </>
            )
    }
}

export default LoginLoader