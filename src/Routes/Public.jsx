import React from 'react'
import { useContext } from 'react'
import { Route, Routes } from "react-router-dom"
import { LoginContext } from '../Context/LoginContext'
import ChooseQuestionnaire from '../Pages/ChooseQuestionnaire'
import Cookies from '../Pages/FooterLegal/Cookies'
import LegalWarning from '../Pages/FooterLegal/LegalWarning'
import PrivacyPolicy from '../Pages/FooterLegal/PrivacyPolicy'
import Terms from '../Pages/FooterLegal/Terms'
import Home from "../Pages/Home"
import Login from '../Pages/Login'
import Profile from '../Pages/Profile'
import ProfileFree from '../Pages/ProfileFree'
import Questionnaire1 from '../Pages/Questionnaire1'
import Questionnaire2 from '../Pages/Questionnaire2'
import SignUp from '../Pages/SignUp'
import StripeCancel from '../Pages/StripeCancel'
import StripeSuccess from '../Pages/StripeSuccess'
import Subscriptions from '../Pages/Subscriptions'


function Public(){

    const context = useContext(LoginContext)

    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
{/*             <Route path='/choose-questionnaire' element={<ChooseQuestionnaire />} /> */}
            <Route path='/questionnaire1' element={<Questionnaire1 />} />
            <Route path='/questionnaire2' element={<Questionnaire2 />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/profilefree' element={context.subscriptionOn ? <Profile /> : <ProfileFree />} />
            <Route path='/subscriptions' element={context.login ? <Subscriptions /> : <Login />} />
            <Route path='/success' element={<StripeSuccess />} />
            <Route path='/cancel' element={<StripeCancel />} />
            <Route path='/cookies-policy' element={<Cookies />} />
            <Route path='/legal-warning' element={<LegalWarning />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-of-service' element={<Terms />} />
        </Routes>
    )

}

export default Public