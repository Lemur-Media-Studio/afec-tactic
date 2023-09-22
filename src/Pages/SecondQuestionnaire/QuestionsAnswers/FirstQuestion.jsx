import React from 'react'
import { Container } from 'react-bootstrap';
import Q2Header from '../../../Components/Q2Header';
import StarRating from '../../../Components/StarRaiting';

function FirstQuestion() {

  const sendAnswer = (Q1) => {
    const answer = {Q1}
    if(Q1 !== ""){
      localStorage.setItem('B-Q1', JSON.stringify(answer))
    }
  }

  const route = '/form2-question2'
  const prevRoute = '/choose-questionnaire'

  return (

    <>

    <Q2Header />

    <Container className="questions-container">

      <h1 className="question-title">PRIMERA PREGUNTA</h1>

      <h3 className="question-font mb-5">¿Cómo valoras el rendimiento de tu equipo en Salida de Balón?</h3>

      <StarRating sendAnswer={sendAnswer} route={route} prevRoute={prevRoute} />

    </Container>

    </>
  );
}

export default FirstQuestion;