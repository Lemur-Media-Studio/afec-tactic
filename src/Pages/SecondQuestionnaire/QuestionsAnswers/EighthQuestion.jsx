import React from 'react'
import { Container } from 'react-bootstrap';
import Q2Header from '../../../Components/Q2Header';
import StarRating from '../../../Components/StarRaiting';

function EighthQuestion() {

  const sendAnswer = (Q8) => {
    const answer = {Q8}
    localStorage.setItem('B-Q8', JSON.stringify(answer))
  }

  const route = '/form2-suggested-session'
  const prevRoute = '/form2-question7'
  const qTitle = 'OCTAVA PREGUNTA'

  return (
    
    <>

    <Q2Header />

    <Container className="questions-container">

      <h1 className="question-title">{qTitle}</h1>

      <h3 className="question-font mb-5">¿Cómo valoras el rendimiento de tu equipo en Tras Pérdida?</h3>
      
      <StarRating sendAnswer={sendAnswer} route={route} qTitle={qTitle} prevRoute={prevRoute} />

    </Container>

    </>
  );
}

export default EighthQuestion;