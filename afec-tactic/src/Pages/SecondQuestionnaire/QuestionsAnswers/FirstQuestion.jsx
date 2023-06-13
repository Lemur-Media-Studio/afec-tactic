import React from 'react'
import { useState } from 'react';
import { Button, ButtonGroup, Container, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Subquestions } from '../../../utils/Subquestions';

function FirstQuestion() {

  const [subquestion, setSubquestion] = useState("")

  const subanswers = () => {
      setSubquestion(    
          <ButtonGroup>
                <Button className="answers-btn" as={Link} to='/form2-question2'>
                    Juego asociativo
                </Button>
                <Button className="answers-btn" as={Link} to='/form2-question2'>
                    Juego vertical
                </Button>
                <Button className="answers-btn" as={Link} to='/form2-question2'>
                    Juego directo
                </Button>
          </ButtonGroup>
      )
  }

  return (

    <Container className="questions-container">

      <h1 className="question-title">PRIMERA PREGUNTA</h1>

      <div>
        <h3 className="question-font">¿Cómo planteaste el partido en Salida de Balón?</h3>
        <ToggleButtonGroup type="radio" name="options" defaultValue={0}>
            {Subquestions[0].map((option) => (
                <ToggleButton id={option.id} value={option.value} className="subanswers-btn" onClick={subanswers}>
                    {option.answer}
                </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </div>

        <div>
            {subquestion}
        </div>
        
        <div className='mt-5'>
            <Link as={Link} to='/form2-question2' className='mx-2 question-link'>Siguiente pregunta</Link>
        </div>

    </Container>
  );
}

export default FirstQuestion;