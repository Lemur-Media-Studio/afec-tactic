import React from 'react'
import { Route, Routes } from "react-router-dom"
import EighthQuestion from '../Pages/SecondQuestionnaire/QuestionsAnswers/EighthQuestion'
import FifthQuestion from '../Pages/SecondQuestionnaire/QuestionsAnswers/FifthQuestion'
import FourthQuestion from '../Pages/SecondQuestionnaire/QuestionsAnswers/FourthQuestion'
import SeventhQuestion from '../Pages/SecondQuestionnaire/QuestionsAnswers/SeventhQuestion'
import SecondQuestion from '../Pages/SecondQuestionnaire/QuestionsAnswers/SecondQuestion'
import SixthQuestion from '../Pages/SecondQuestionnaire/QuestionsAnswers/SixthQuestion'
import ThirdQuestion from '../Pages/SecondQuestionnaire/QuestionsAnswers/ThirdQuestion'
import SQSuggestedSession from '../Pages/SecondQuestionnaire/SQSuggestedSession'
import FirstQuestion from '../Pages/SecondQuestionnaire/QuestionsAnswers/FirstQuestion'

function SQRoutes(){

    return(
        <Routes>
            <Route path='/form2-question1' element={<FirstQuestion />} />
            <Route path='/form2-question2' element={<SecondQuestion />} />
            <Route path='/form2-question3' element={<ThirdQuestion />} />
            <Route path='/form2-question4' element={<FourthQuestion />} />
            <Route path='/form2-question5' element={<FifthQuestion />} />
            <Route path='/form2-question6' element={<SixthQuestion />} />
            <Route path='/form2-question7' element={<SeventhQuestion />} />
            <Route path='/form2-question8' element={<EighthQuestion />} />
            <Route path='/form2-suggested-session' element={<SQSuggestedSession />} />
        </Routes>
    )

}

export default SQRoutes