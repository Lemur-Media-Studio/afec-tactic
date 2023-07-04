import React from 'react'
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Q2Header from '../../../Components/Q2Header';
import StarRating from '../../../Components/StarRaiting';

function EleventhQuestion() {

  const sendAnswer = (Q11) => {
    const answer = {Q11}
    localStorage.setItem('B-Q11', JSON.stringify(answer))
  }

  const route = '/form2-question12'
  const prevRoute = '/form2-question10'

  return (
    
    <>

    <Q2Header />

    <Container className="questions-container">

      <h1 className="question-title">DECIMOPRIMERA PREGUNTA</h1>

      <h3 className="question-font mb-5">¿Qué nota le das a tu equipo en las transiciones ataque-defensa?</h3>

      <StarRating sendAnswer={sendAnswer} route={route} prevRoute={prevRoute}/>

    </Container>

    </>
  );
}

export default EleventhQuestion;