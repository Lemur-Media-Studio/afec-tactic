import React from 'react'
import { useState } from 'react';
import { Button, ButtonGroup, CardGroup, Container, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Answers } from '../../utils/Answers';

function SecondQuestion() {

  return (

    <Container className="questions-container">

      <h1 className="question-title">SEGUNDA PREGUNTA</h1>

      <div>
        <h3 className="question-font">¿En qué situación poner el foco?</h3>
        <ButtonGroup  name="question1" defaultValue={0}>
        {Answers[1].map((option) => (
              <Button className="answers-btn" as={Link} to={option.to} value={option.answer}>
                {option.answer}
              </Button>
            ))}
        </ButtonGroup>
      </div>
        
        <div className='mt-5'>
          <Link as={Link} to='/question1' className='mx-2 question-link'>Anterior pregunta</Link>
          <Link as={Link} to='/question3' className='mx-2 question-link'>Siguiente pregunta</Link>
        </div>

    </Container>
  );
}

export default SecondQuestion;