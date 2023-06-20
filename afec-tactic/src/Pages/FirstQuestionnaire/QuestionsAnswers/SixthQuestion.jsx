import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Answers } from '../../../utils/Answers';

function SixthQuestion() {
  function mandoRespuesta(Q6) {
    const respuestas = { Q6 }
    console.log(respuestas)
    localStorage.setItem('A-Q6', JSON.stringify(respuestas))
  }

  return (

    <Container className="questions-container">

      <h1 className="question-title">SEXTA PREGUNTA</h1>

      <div>
        <h3 className="question-font">¿Tipo de tarea?</h3>
        <ButtonGroup className="align-items-center row container" name="question6" defaultValue={0}>
        {Answers[5].map((option) => (
              <Button className="answers-btn col-2" value={option.answer} onClick={(e) => mandoRespuesta(e.target.value)}>
                {option.answer}
              </Button>
            ))}
        </ButtonGroup>
      </div>
      <div>
          <Button className="answers-btn" to='/form1-question7' as={Link} >Siguiente pregunta</Button>
        </div>

      <div className='mt-5'>
          <Link as={Link} to='/form1-question5' className='mx-2 question-link'>Anterior pregunta</Link>
          <Link as={Link} to='/form1-question7' className='mx-2 question-link'>Siguiente pregunta</Link>
      </div>

    </Container>
  );
}

export default SixthQuestion;