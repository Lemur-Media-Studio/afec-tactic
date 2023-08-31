import React from 'react'
import { Container } from 'react-bootstrap';
import Q2Header from '../../../Components/Q2Header';
import StarRating from '../../../Components/StarRaiting';

function FifthQuestion() {

  const sendAnswer = (Q5) => {
    const answer = {Q5}
    localStorage.setItem('B-Q5', JSON.stringify(answer))
  }

  const route = '/form2-question6'
  const prevRoute = '/form2-question4'

  return (

    <>

    <Q2Header />

    <Container className="questions-container">

      <h1 className="question-title">QUINTA PREGUNTA</h1>

      <h3 className="question-font mb-5">¿Cómo valoras el rendimiento de tu equipo en Presión Bloque Alto?</h3>

      <StarRating sendAnswer={sendAnswer} route={route} prevRoute={prevRoute} />

    </Container>

    </>
  );
}

export default FifthQuestion;