import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function MainLoading({children, loading}){
    if(loading){
        return(
            <Spinner className="loading-container" animation="" role="status">
                <img src={require('../img/logo-afectactic.png')} alt="" />
            </Spinner>
        )
    }else{
        return(
            <>
                {children}
            </>
            )
    }
}

export default MainLoading