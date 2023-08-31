import React from 'react'
import { Container } from 'react-bootstrap';
import Q2Header from '../../../Components/Q2Header';
import StarRating from '../../../Components/StarRaiting';

function ThirdQuestion() {

  const sendAnswer = (Q3) => {
    const answer = {Q3}
    localStorage.setItem('B-Q3', JSON.stringify(answer))
  }

  const route = '/form2-question4'
  const prevRoute = '/form2-question2'

  return (

    <>

    <Q2Header />

    <Container className="questions-container">

      <h1 className="question-title">TERCERA PREGUNTA</h1>

      <h3 className="question-font mb-5">¿Cómo valoras el rendimiento de tu equipo en Ataque Última Línea?</h3>
      
      <StarRating sendAnswer={sendAnswer} route={route} prevRoute={prevRoute} />

    </Container>

    </>
  );
}

export default ThirdQuestion;