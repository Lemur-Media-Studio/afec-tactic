import React from 'react'
import { Button, ButtonGroup, Container, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Answers } from '../../../utils/Answers';

function NinethQuestion() {
  function mandoRespuesta(Q9) {
    const respuestas = { Q9 }
    console.log(respuestas)
    localStorage.setItem('A-Q9', JSON.stringify(respuestas))
  }

  return (

    <Container className="questions-container">

      <h1 className="question-title">NOVENA PREGUNTA</h1>

      <div>
        <h3 className="question-font">¿Igualdad?</h3>
        <ToggleButtonGroup type="radio" name="options" defaultValue={0}>
        {Answers[8].map((option) => (
              <Button id={option.id} className="subanswers-btn" onClick={(e) => mandoRespuesta(e.target.value)} value={option.answer}>
                {option.answer}
              </Button>
            ))}
        </ToggleButtonGroup>
      </div>

      <Button className="answers-btn" as={Link} to='/form1-suggested-session'>Enviar y finalizar</Button>

      <div className='mt-5'>
          <Link as={Link} to='/form1-question8' className='mx-2 question-link'>Anterior pregunta</Link>
      </div>

    </Container>
  );
}

export default NinethQuestion;