import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Answers } from '../../../utils/Answers';

function FifthQuestion() {

  return (

    <Container className="questions-container">

      <h1 className="question-title">QUINTA PREGUNTA</h1>

      <div>
        <h3 className="question-font">¿Momento del entrenamiento?</h3>
        <ButtonGroup  name="question1" defaultValue={0}>
        {Answers[4].map((option) => (
              <Button className="answers-btn" as={Link} to='/form1-question6' value={option.answer}>
                {option.answer}
              </Button>
            ))}
        </ButtonGroup>
      </div>

      <div className='mt-5'>
          <Link as={Link} to='/form1-question4' className='mx-2 question-link'>Anterior pregunta</Link>
          <Link as={Link} to='/form1-question6' className='mx-2 question-link'>Siguiente pregunta</Link>
      </div>

    </Container>
  );
}

export default FifthQuestion;