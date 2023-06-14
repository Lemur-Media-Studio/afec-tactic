import React from 'react'
import { Route, Routes } from "react-router-dom"
import EighthQuestion from '../Pages/SecondQuestionnaire/QuestionsAnswers/EighthQuestion'
import FifthQuestion from '../Pages/SecondQuestionnaire/QuestionsAnswers/FifthQuestion'
import FourthQuestion from '../Pages/SecondQuestionnaire/QuestionsAnswers/FourthQuestion'
import NinethQuestion from '../Pages/SecondQuestionnaire/QuestionsAnswers/NinethQuestion'
import SeventhQuestion from '../Pages/SecondQuestionnaire/QuestionsAnswers/SeventhQuestion'
import SecondQuestion from '../Pages/SecondQuestionnaire/QuestionsAnswers/SecondQuestion'
import SixthQuestion from '../Pages/SecondQuestionnaire/QuestionsAnswers/SixthQuestion'
import ThirdQuestion from '../Pages/SecondQuestionnaire/QuestionsAnswers/ThirdQuestion'
import SQSuggestedSession from '../Pages/SecondQuestionnaire/SQSuggestedSession'
import FirstQuestion from '../Pages/SecondQuestionnaire/QuestionsAnswers/FirstQuestion'
import TenthQuestion from '../Pages/SecondQuestionnaire/QuestionsAnswers/TenthQuestion'
import EleventhQuestion from '../Pages/SecondQuestionnaire/QuestionsAnswers/EleventhQuestion'
import TwelfthQuestion from '../Pages/SecondQuestionnaire/QuestionsAnswers/TwelfthQuestion'
import ThirteenthQuestion from '../Pages/SecondQuestionnaire/QuestionsAnswers/ThirteenthQuestion'
import FourteenthQuestion from '../Pages/SecondQuestionnaire/QuestionsAnswers/FourteenthQuestion'

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
            <Route path='/form2-question9' element={<NinethQuestion />} />
            <Route path='/form2-question10' element={<TenthQuestion />} />
            <Route path='/form2-question11' element={<EleventhQuestion />} />
            <Route path='/form2-question12' element={<TwelfthQuestion />} />
            <Route path='/form2-question13' element={<ThirteenthQuestion />} />
            <Route path='/form2-question14' element={<FourteenthQuestion />} />
            <Route path='/form2-suggested-session' element={<SQSuggestedSession />} />
        </Routes>
    )

}

export default SQRoutes