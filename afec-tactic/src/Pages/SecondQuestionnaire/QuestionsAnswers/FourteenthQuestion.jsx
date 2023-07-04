import React from 'react'
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Q2Header from '../../../Components/Q2Header';
import StarRating from '../../../Components/StarRaiting';

function FourteenthQuestion() {

  const sendAnswer = (Q14) => {
    const answer = {Q14}
    localStorage.setItem('B-Q14', JSON.stringify(answer))
  }

  const route = '/form2-suggested-session'
  const prevRoute = '/form2-question13'
  const qTitle = 'DECIMOCUARTA PREGUNTA'

  return (

    <>

    <Q2Header />

    <Container className="questions-container">

      <h1 className="question-title">{qTitle}</h1>

      <h3 className="question-font mb-5">¿Qué nota le das a tu equipo en las ABP ofensivas?</h3>

      <StarRating sendAnswer={sendAnswer} route={route} qTitle={qTitle} prevRoute={prevRoute} />

    </Container>

    </>
  );
}

export default FourteenthQuestion;