import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function SpinnerLoading({children, loading}){
    if(loading){
        return(
            <Spinner className="loading2-container" animation="" role="status">
                <img src={require('../img/loading-ia3-unscreen.gif')} alt="Loading IA" />
                <p className='loading2-p'>Loading</p>
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

export default SpinnerLoading