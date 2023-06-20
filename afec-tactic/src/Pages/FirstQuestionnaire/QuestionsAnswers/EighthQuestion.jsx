import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Answers } from '../../../utils/Answers';

function EighthQuestion() {
  function mandoRespuesta(Q8) {
    const respuestas = { Q8 }
    console.log(respuestas)
    localStorage.setItem('A-Q8', JSON.stringify(respuestas))
  }

  return (

    <Container className="questions-container">

      <h1 className="question-title">OCTAVA PREGUNTA</h1>

      <div>
        <h3 className="question-font">¿Presencia de porterías?</h3>
        <ButtonGroup  name="question1" defaultValue={0}>
        {Answers[7].map((option) => (
              <Button className="answers-btn" onClick={(e) => mandoRespuesta(e.target.value)} value={option.answer}>
                {option.answer}
              </Button>
            ))}
        </ButtonGroup>
      </div>
      <div>
        <Button className="answers-btn" as={Link} to='/form1-question9'>Siguiente pregunta</Button>
        </div>

      <div className='mt-5'>
          <Link as={Link} to='/form1-question7' className='mx-2 question-link'>Anterior pregunta</Link>
          <Link as={Link} to='/form1-question9' className='mx-2 question-link'>Siguiente pregunta</Link>
      </div>

    </Container>
  );
}

export default EighthQuestion;