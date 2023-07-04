import React from 'react'
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Q2Header from '../../../Components/Q2Header';
import StarRating from '../../../Components/StarRaiting';

function ThirteenthQuestion() {

  const sendAnswer = (Q13) => {
    const answer = {Q13}
    localStorage.setItem('B-Q13', JSON.stringify(answer))
  }

  const route = '/form2-question14'
  const prevRoute = '/form2-question12'

  return (

    <>

    <Q2Header />

    <Container className="questions-container">

      <h1 className="question-title">DECIMOTERCERA PREGUNTA</h1>

      <h3 className="question-font mb-5">¿Qué nota le das a tu equipo en las ABP defensivas?</h3>

      <StarRating sendAnswer={sendAnswer} route={route} prevRoute={prevRoute} />

    </Container>

    </>
  );
}

export default ThirteenthQuestion;