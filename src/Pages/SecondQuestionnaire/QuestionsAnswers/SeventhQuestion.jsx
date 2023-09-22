import React from 'react'
import { Container } from 'react-bootstrap';
import Q2Header from '../../../Components/Q2Header';
import StarRating from '../../../Components/StarRaiting';

function SeventhQuestion() {

  const sendAnswer = (Q7) => {
    const answer = {Q7}
    localStorage.setItem('B-Q7', JSON.stringify(answer))
  }

  const route = '/form2-question8'
  const prevRoute = '/form2-question6'

  return (

    <>

    <Q2Header />

    <Container className="questions-container">

      <h1 className="question-title">SÉPTIMA PREGUNTA</h1>

      <h3 className="question-font mb-5">¿Cómo valoras el rendimiento de tu equipo en Defensa de Área?</h3>
      
      <StarRating sendAnswer={sendAnswer} route={route} prevRoute={prevRoute} />

    </Container>

    </>
  );
}

export default SeventhQuestion;