import React from 'react'
import { useContext } from 'react'
import { Route, Routes } from "react-router-dom"
import { LoginContext } from '../Context/LoginContext'
import ChooseQuestionnaire from '../Pages/ChooseQuestionnaire'
import Cookies from '../Pages/FooterLegal/Cookies'
import LegalWarning from '../Pages/FooterLegal/LegalWarning'
import PrivacyPolicy from '../Pages/FooterLegal/PrivacyPolicy'
import Home from "../Pages/Home"
import Login from '../Pages/Login'
import Profile from '../Pages/Profile'
import ProfileFree from '../Pages/ProfileFree'
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
            <Route path='/choose-questionnaire' element={<ChooseQuestionnaire />} />
            <Route path='/profile' element={context.subscriptionOn ? <Profile /> : <ProfileFree />} />
            <Route path='/profilefree' element={<ProfileFree />} />
            <Route path='/subscriptions' element={context.login ? <Subscriptions /> : <Login />} />
            <Route path='/success' element={<StripeSuccess />} />
            <Route path='/cancel' element={<StripeCancel />} />
            <Route path='/cookies-policy' element={<Cookies />} />
            <Route path='/legal-warning' element={<LegalWarning />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        </Routes>
    )

}

export default Public