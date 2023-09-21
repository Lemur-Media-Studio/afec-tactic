import React, { useState } from 'react';
export const LanguageContext = React.createContext()

function LanguageProvider({children}){
    
    const [german, setGerman] = useState(localStorage.getItem('language', 'german'))
    const [spanish, setSpanish] = useState(localStorage.getItem('language', 'spanish'))

    const handleEnglish = () => {
        setGerman(localStorage.removeItem('language', 'german'));
        setSpanish(localStorage.removeItem('language', 'spanish'));
    }

    const handleGerman = () => {
        //setEnglish(false);
        setGerman(true);
        setSpanish(false);
        localStorage.setItem('language', 'german')
    }

    const handleSpanish = () => {
        //setEnglish(false);
        setGerman(false);
        setSpanish(true);
        localStorage.setItem('language', 'spanish')
    }

    return(
        <LanguageContext.Provider value={{handleEnglish, handleGerman, handleSpanish, german, spanish}}>
            {children}
        </LanguageContext.Provider>
    )

}

export default LanguageProvider
