import React, { useState } from 'react'
export const LoginContext = React.createContext()

function LoginProvider({children}){

    const [login, setLogin] = useState(localStorage.getItem('login' || false))
    const [freeTrialDone, setFreeTrialDone] = useState(localStorage.getItem('freeTrialDone' || false))
    const [subscriptionOn, setSubscriptionOn] = useState(localStorage.getItem('subscriptionOn' || false))

    const handleLogin = () => {
        setLogin(true);
        localStorage.setItem('login', true)
    }

    const handleLogout = () => {
        setLogin(false);
        localStorage.removeItem('login')
    }

    const handleFreeTrialDone = () => {
        setFreeTrialDone(true);
        localStorage.setItem('freeTrialDone', true)
    }

    const handleFreeTrialAvailable = () => {
        setFreeTrialDone(false);
        localStorage.removeItem('freeTrialDone');
    }

    const handleSubscriptionOn = () => {
        setSubscriptionOn(true);
        localStorage.setItem('subscriptionOn', true);
    }

    const handleSubscriptionOff = () => {
        setSubscriptionOn(false);
        localStorage.removeItem('subscriptionOn');
    }

    return(
        <LoginContext.Provider value={{login, handleLogin, handleLogout, freeTrialDone, handleFreeTrialDone, subscriptionOn, handleSubscriptionOn, handleSubscriptionOff, handleFreeTrialAvailable}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider