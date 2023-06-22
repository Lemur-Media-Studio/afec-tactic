import React from 'react'
import { Route, Routes } from "react-router-dom"
import EighthQuestion from '../Pages/FirstQuestionnaire/QuestionsAnswers/EighthQuestion'
import FifthQuestion from '../Pages/FirstQuestionnaire/QuestionsAnswers/FifthQuestion'
import FourthQuestion from '../Pages/FirstQuestionnaire/QuestionsAnswers/FourthQuestion'
import NinethQuestion from '../Pages/FirstQuestionnaire/QuestionsAnswers/NinethQuestion'
import SeventhQuestion from '../Pages/FirstQuestionnaire/QuestionsAnswers/SeventhQuestion'
import SecondQuestion from '../Pages/FirstQuestionnaire/QuestionsAnswers/SecondQuestion'
import SixthQuestion from '../Pages/FirstQuestionnaire/QuestionsAnswers/SixthQuestion'
import ThirdQuestion from '../Pages/FirstQuestionnaire/QuestionsAnswers/ThirdQuestion'
import AtaqueUltimaLinea from '../Pages/FirstQuestionnaire/Subquestions/AtaqueUltimaLinea'
import BloqueMedio from '../Pages/FirstQuestionnaire/Subquestions/BloqueMedio'
import DefensaDeArea from '../Pages/FirstQuestionnaire/Subquestions/DefensaDeArea'
import JuegoCampoContrario from '../Pages/FirstQuestionnaire/Subquestions/JuegoCampoContrario'
import PresionBloqueAlto from '../Pages/FirstQuestionnaire/Subquestions/PresionBloqueAlto'
import SalidaDeBalon from '../Pages/FirstQuestionnaire/Subquestions/SalidaDeBalon'
import TrasPerdida from '../Pages/FirstQuestionnaire/Subquestions/TrasPerdida'
import TrasRecuperacion from '../Pages/FirstQuestionnaire/Subquestions/TrasRecuperacion'
import FQSuggestedSession from '../Pages/FirstQuestionnaire/FQSuggestedSession'
import FirstQuestion from '../Pages/FirstQuestionnaire/QuestionsAnswers/FirstQuestion'

function FQRoutes(){

    return(
        <Routes>
            <Route path='/form1-question1' element={<FirstQuestion />} />
            <Route path='/form1-question2' element={<SecondQuestion />} />
            <Route path='/form1-q2-salida-de-balon' element={<SalidaDeBalon />} />
            <Route path='/form1-q2-juego-campo-contrario' element={<JuegoCampoContrario />} />
            <Route path='/form1-q2-ataque-ultima-linea' element={<AtaqueUltimaLinea />} />
            <Route path='/form1-q2-tras-recuperacion' element={<TrasRecuperacion />} />
            <Route path='/form1-q2-presion-bloque-alto' element={<PresionBloqueAlto />} />
            <Route path='/form1-q2-bloque-medio' element={<BloqueMedio />} />
            <Route path='/form1-q2-defensa-de-area' element={<DefensaDeArea />} />
            <Route path='/form1-q2-tras-perdida' element={<TrasPerdida />} />
            <Route path='/form1-question3' element={<ThirdQuestion />} />
            <Route path='/form1-question4' element={<FourthQuestion />} />
            <Route path='/form1-question5' element={<FifthQuestion />} />
            <Route path='/form1-question6' element={<SixthQuestion />} />
            <Route path='/form1-question7' element={<SeventhQuestion />} />
            <Route path='/form1-question8' element={<EighthQuestion />} />
            <Route path='/form1-question9' element={<NinethQuestion />} />
            <Route path='/form1-suggested-session' element={<FQSuggestedSession />} />
        </Routes>
    )

}

export default FQRoutes