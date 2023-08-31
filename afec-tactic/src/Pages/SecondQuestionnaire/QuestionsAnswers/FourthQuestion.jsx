import React from 'react'
import { Container } from 'react-bootstrap';
import Q2Header from '../../../Components/Q2Header';
import StarRating from '../../../Components/StarRaiting';

function FourthQuestion() {

  const sendAnswer = (Q4) => {
    const answer = {Q4}
    localStorage.setItem('B-Q4', JSON.stringify(answer))
  }

  const route = '/form2-question5'
  const prevRoute = '/form2-question3'

  return (

    <>

    <Q2Header />

    <Container className="questions-container">

      <h1 className="question-title">CUARTA PREGUNTA</h1>

      <h3 className="question-font mb-5">¿Cómo valoras el rendimiento de tu equipo en Tras Recuperación?</h3>
      
      <StarRating sendAnswer={sendAnswer} route={route} prevRoute={prevRoute} />

    </Container>

    </>
  );
}

export default FourthQuestion;