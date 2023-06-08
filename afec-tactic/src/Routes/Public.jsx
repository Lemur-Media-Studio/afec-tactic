import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Login from '../Pages/Login'
import EighthQuestion from '../Pages/QuestionsAnswers/EighthQuestion'
import FifthQuestion from '../Pages/QuestionsAnswers/FifthQuestion'
import FirstQuestion from '../Pages/QuestionsAnswers/FirstQuestion'
import FourthQuestion from '../Pages/QuestionsAnswers/FourthQuestion'
import NinethQuestion from '../Pages/QuestionsAnswers/NinethQuestion'
import SeventhQuestion from '../Pages/QuestionsAnswers/QuestionSeventh'
import SecondQuestion from '../Pages/QuestionsAnswers/SecondQuestion'
import SixthQuestion from '../Pages/QuestionsAnswers/SixthQuestion'
import ThirdQuestion from '../Pages/QuestionsAnswers/ThirdQuestion'
import SignUp from '../Pages/SignUp'
import AtaqueUltimaLinea from '../Pages/Subquestions/AtaqueUltimaLinea'
import BloqueMedio from '../Pages/Subquestions/BloqueMedio'
import DefensaDeArea from '../Pages/Subquestions/DefensaDeArea'
import JuegoCampoContrario from '../Pages/Subquestions/JuegoCampoContrario'
import PresionBloqueAlto from '../Pages/Subquestions/PresionBloqueAlto'
import SalidaDeBalon from '../Pages/Subquestions/SalidaDeBalon'
import TrasPerdida from '../Pages/Subquestions/TrasPerdida'
import TrasRecuperacion from '../Pages/Subquestions/TrasRecuperacion'
import SuggestedSession from '../Pages/SuggestedSession'

function Public(){

    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/question1' element={<FirstQuestion />} />
            <Route path='/question2' element={<SecondQuestion />} />
            <Route path='/q2-salida-de-balon' element={<SalidaDeBalon />} />
            <Route path='/q2-juego-campo-contrario' element={<JuegoCampoContrario />} />
            <Route path='/q2-ataque-ultima-linea' element={<AtaqueUltimaLinea />} />
            <Route path='/q2-tras-recuperacion' element={<TrasRecuperacion />} />
            <Route path='/q2-presion-bloque-alto' element={<PresionBloqueAlto />} />
            <Route path='/q2-bloque-medio' element={<BloqueMedio />} />
            <Route path='/q2-defensa-de-area' element={<DefensaDeArea />} />
            <Route path='/q2-tras-perdida' element={<TrasPerdida />} />
            <Route path='/question3' element={<ThirdQuestion />} />
            <Route path='/question4' element={<FourthQuestion />} />
            <Route path='/question5' element={<FifthQuestion />} />
            <Route path='/question6' element={<SixthQuestion />} />
            <Route path='/question7' element={<SeventhQuestion />} />
            <Route path='/question8' element={<EighthQuestion />} />
            <Route path='/question9' element={<NinethQuestion />} />
            <Route path='/suggested-session' element={<SuggestedSession />} />
        </Routes>
    )

}

export default Public