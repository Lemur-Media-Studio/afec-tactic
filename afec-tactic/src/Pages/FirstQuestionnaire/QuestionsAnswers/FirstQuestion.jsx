import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Answers } from '../../../utils/Answers';

import { useState, useEffect } from 'react';

function FirstQuestion() {
  function mandoRespuesta(Q1) {
    const respuestas = { Q1 }
    console.log(respuestas)
    localStorage.setItem('A-Q1', JSON.stringify(respuestas))
  }
  return (

    <Container className="questions-container">

      <h1 className="question-title">PRIMERA PREGUNTA</h1>

      <div>
        <h3 className="question-font">¿Qué fase del juego quieres trabajar?</h3>
        <ButtonGroup name="question1" defaultValue={0}>
          {Answers[0].map((option) => (
            <Button className="answers-btn" to='/form1-question2' value={option.answer}
              onClick={(e) => mandoRespuesta(e.target.value)}>

              {option.answer}
            </Button>
          ))}
        </ButtonGroup>
        <div>
          <Button className="answers-btn" to='/form1-question2' as={Link} >Siguiente pregunta</Button>
        </div>

      </div>

    </Container>
  );
}

export default FirstQuestion;