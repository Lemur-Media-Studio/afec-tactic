import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Answers } from '../../utils/Answers';

function SixthQuestion() {

  return (

    <Container className="questions-container">

      <h1 className="question-title">SEXTA PREGUNTA</h1>

      <div>
        <h3 className="question-font">¿Tipo de tarea?</h3>
        <ButtonGroup className="align-items-center row container" name="question6" defaultValue={0}>
        {Answers[5].map((option) => (
              <Button className="answers-btn col-2" as={Link} to='/question7' value={option.answer}>
                {option.answer}
              </Button>
            ))}
        </ButtonGroup>
      </div>

      <div className='mt-5'>
          <Link as={Link} to='/question5' className='mx-2 question-link'>Anterior pregunta</Link>
          <Link as={Link} to='/question7' className='mx-2 question-link'>Siguiente pregunta</Link>
      </div>

    </Container>
  );
}

export default SixthQuestion;