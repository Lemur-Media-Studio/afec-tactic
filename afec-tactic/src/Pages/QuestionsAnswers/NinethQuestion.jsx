import React from 'react'
import { Button, ButtonGroup, Container, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Answers } from '../../utils/Answers';

function NinethQuestion() {

  return (

    <Container className="questions-container">

      <h1 className="question-title">NOVENA PREGUNTA</h1>

      <div>
        <h3 className="question-font">¿Igualdad?</h3>
        <ToggleButtonGroup type="radio" name="options" defaultValue={0}>
        {Answers[8].map((option) => (
              <ToggleButton id={option.id} value={option.value} className="subanswers-btn" value={option.answer}>
                {option.answer}
              </ToggleButton>
            ))}
        </ToggleButtonGroup>
      </div>

      <Button className="answers-btn" as={Link} to='/suggested-session'>Enviar y finalizar</Button>

      <div className='mt-5'>
          <Link as={Link} to='/question8' className='mx-2 question-link'>Anterior pregunta</Link>
      </div>

    </Container>
  );
}

export default NinethQuestion;