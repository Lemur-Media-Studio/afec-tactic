import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function MainLoading({children, loading}){
    if(loading){
        return(
            <Spinner className="loading-container" animation="" role="status">
                <img src={require('../img/loading-ia3-unscreen.gif')} alt="Loading IA" />
                <p className='loading-p'>Loading</p>
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