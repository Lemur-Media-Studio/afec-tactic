import React from 'react'
import { Container } from 'react-bootstrap';
import Q2Header from '../../../Components/Q2Header';
import StarRating from '../../../Components/StarRaiting';

function SixthQuestion() {

  const sendAnswer = (Q6) => {
    const answer = {Q6}
    localStorage.setItem('B-Q6', JSON.stringify(answer))
  }

  const route = '/form2-question7'
  const prevRoute = '/form2-question5'

  return (

    <>

    <Q2Header />

    <Container className="questions-container">

      <h1 className="question-title">SEXTA PREGUNTA</h1>

      <h3 className="question-font mb-5">¿Cómo valoras el rendimiento de tu equipo en Bloque Medio?</h3>

      <StarRating sendAnswer={sendAnswer} route={route} prevRoute={prevRoute} />

    </Container>

    </>
  );
}

export default SixthQuestion;