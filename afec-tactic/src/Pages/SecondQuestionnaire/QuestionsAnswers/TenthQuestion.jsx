import React from 'react'
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Q2Header from '../../../Components/Q2Header';
import StarRating from '../../../Components/StarRaiting';

function TenthQuestion() {

  const sendAnswer = (Q10) => {
    const answer = {Q10}
    localStorage.setItem('B-Q10', JSON.stringify(answer))
  }

  const route = '/form2-question11'
  const prevRoute = '/form2-question9'

  return (

    <>

    <Q2Header />

    <Container className="questions-container">

      <h1 className="question-title">DÉCIMA PREGUNTA</h1>

        <h3 className="question-font mb-5">¿Qué nota le das a tu equipo en los momentos sin balón?</h3>

        <StarRating sendAnswer={sendAnswer} route={route} prevRoute={prevRoute} />

    </Container>

    </>
  );
}

export default TenthQuestion;