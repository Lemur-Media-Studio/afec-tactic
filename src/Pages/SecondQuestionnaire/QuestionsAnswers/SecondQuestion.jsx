import React from 'react'
import { Container } from 'react-bootstrap';
import Q2Header from '../../../Components/Q2Header';
import StarRating from '../../../Components/StarRaiting';

function SecondQuestion() {

  const sendAnswer = (Q2) => {
    const answer = {Q2}
    localStorage.setItem('B-Q2', JSON.stringify(answer))
  }

  const route = '/form2-question3'
  const prevRoute = '/form2-question1'

  return (

    <>

    <Q2Header />

    <Container className="questions-container">

      <h1 className="question-title">SEGUNDA PREGUNTA</h1>

      <h3 className="question-font mb-5">¿Cómo valoras el rendimiento de tu equipo en Juego Campo Contrario?</h3>

      <StarRating sendAnswer={sendAnswer} route={route} prevRoute={prevRoute} />

    </Container>

    </>
  );
}

export default SecondQuestion;