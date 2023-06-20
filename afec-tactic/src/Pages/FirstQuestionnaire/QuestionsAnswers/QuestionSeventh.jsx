import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Answers } from '../../../utils/Answers';

function SeventhQuestion() {
  function mandoRespuesta(Q7) {
    const respuestas = { Q7 }
    console.log(respuestas)
    localStorage.setItem('A-Q7', JSON.stringify(respuestas))
  }

  return (

    <Container className="questions-container">

      <h1 className="question-title">SÉPTIMA PREGUNTA</h1>

      <div>
        <h3 className="question-font">¿Tipo de espacios?</h3>
        <ButtonGroup  name="question1" defaultValue={0}>
        {Answers[6].map((option) => (
              <Button className="answers-btn" onClick={(e) => mandoRespuesta(e.target.value)} value={option.answer}>
                {option.answer}
              </Button>
            ))}
        </ButtonGroup>
      </div>
      <div>
          <Button className="answers-btn" to='/form1-question8' as={Link} >Siguiente pregunta</Button>
        </div>

      <div className='mt-5'>
          <Link as={Link} to='/form1-question6' className='mx-2 question-link'>Anterior pregunta</Link>
          <Link as={Link} to='/form1-question8' className='mx-2 question-link'>Siguiente pregunta</Link>
      </div>

    </Container>
  );
}

export default SeventhQuestion;