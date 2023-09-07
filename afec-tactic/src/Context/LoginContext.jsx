import React, { useState } from 'react'
export const LoginContext = React.createContext()

function LoginProvider({children}){

    const [login, setLogin] = useState(localStorage.getItem('login' || false))

    const handleLogin = () => {
        setLogin(true);
        localStorage.setItem('login', true)
    }

    const handleLogout = () => {
        setLogin(false);
        localStorage.removeItem('login')
    }

    return(
        <LoginContext.Provider value={{login, handleLogin, handleLogout}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider