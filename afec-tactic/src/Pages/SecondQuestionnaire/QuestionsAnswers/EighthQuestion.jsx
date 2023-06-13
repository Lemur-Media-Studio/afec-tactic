import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Subquestions } from '../../../utils/Subquestions';

function EighthQuestion() {

  return (

    <Container className="questions-container">

      <h1 className="question-title">OCTAVA PREGUNTA</h1>

      <div>
        <h3 className="question-font">¿Cómo planteaste el partido en Tras Pérdida?</h3>
        <ButtonGroup  name="question1" defaultValue={0}>
                {Subquestions[6].map((option) => (
                <Button className="answers-btn" as={Link} to='/form2-question9' value={option.answer}>
                    {option.answer}
                </Button>
            ))}
            </ButtonGroup>
      </div>

      <div className='mt-5'>
          <Link as={Link} to='/form2-question8' className='mx-2 question-link'>Anterior pregunta</Link>
          <Link as={Link} to='/form2-question9' className='mx-2 question-link'>Siguiente pregunta</Link>
      </div>

    </Container>
  );
}

export default EighthQuestion;