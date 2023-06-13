import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Answers } from '../../../utils/Answers';

function FirstQuestion() {

  return (

    <Container className="questions-container">

      <h1 className="question-title">PRIMERA PREGUNTA</h1>

      <div>
        <h3 className="question-font">¿Qué fase del juego quieres trabajar?</h3>
        <ButtonGroup  name="question1" defaultValue={0}>
        {Answers[0].map((option) => (
              <Button className="answers-btn" as={Link} to='/form1-question2' value={option.answer}>
                {option.answer}
              </Button>
            ))}
        </ButtonGroup>
      </div>

    </Container>
  );
}

export default FirstQuestion;