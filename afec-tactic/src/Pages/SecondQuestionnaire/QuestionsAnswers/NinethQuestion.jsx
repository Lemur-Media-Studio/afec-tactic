import React from 'react'
import { Container, Button } from 'react-bootstrap';
import Q2Header from '../../../Components/Q2Header';
import StarRating from '../../../Components/StarRaiting';

function NinethQuestion() {

  const sendAnswer = (Q9) => {
    const answer = {Q9}
    localStorage.setItem('B-Q9', JSON.stringify(answer))
  }

  const route = '/form2-question10'
  const prevRoute = '/form2-question8'

  return (

    <>

    <Q2Header />

    <Container className="questions-container">

      <h1 className="question-title">NOVENA PREGUNTA</h1>

      <h3 className="question-font mb-5">¿Qué nota le das a tu equipo en los momentos con balón?</h3>

      <StarRating sendAnswer={sendAnswer} route={route} prevRoute={prevRoute} />
      
    </Container>

    </>
  );
}

export default NinethQuestion;