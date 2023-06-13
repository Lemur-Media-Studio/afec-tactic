import React from 'react'
import { Route, Routes } from "react-router-dom"
import ChooseQuestionnaire from '../Pages/ChooseQuestionnaire'
import Home from "../Pages/Home"
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'

function Public(){

    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/choose-questionnaire' element={<ChooseQuestionnaire />} />
        </Routes>
    )

}

export default Public