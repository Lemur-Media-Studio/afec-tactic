import React from 'react'
import { Button, ButtonGroup, Container, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function FifthQuestion() {

  const [subquestion, setSubquestion] = useState("")

  const subanswersJuegoLanzado = () => {
      setSubquestion(    
          <ButtonGroup>
                <Button className="answers-btn" as={Link} to='/form2-question6'>
                    Juego asociativo
                </Button>
                <Button className="answers-btn" as={Link} to='/form2-question6'>
                    Juego vertical
                </Button>
                <Button className="answers-btn" as={Link} to='/form2-question6'>
                    Juego directo
                </Button>
          </ButtonGroup>
      )
  }

const subanswersReinicio = () => {
    setSubquestion(    
        <ButtonGroup>
              <Button className="answers-btn" as={Link} to='/form2-question6'>
                  Orientada
              </Button>
              <Button className="answers-btn" as={Link} to='/form2-question6'>
                  Zonal
              </Button>
              <Button className="answers-btn" as={Link} to='/form2-question6'>
                  Total
              </Button>
        </ButtonGroup>
    )
}

  return (

    <Container className="questions-container">

      <h1 className="question-title">QUINTA PREGUNTA</h1>

      <div>
        <h3 className="question-font">¿Cómo planteaste el partido en Presión Bloque Alto?</h3>
        <ToggleButtonGroup type="radio" name="options" defaultValue={0}>
                <ToggleButton id="tbg-radio-1" value={1} className="subanswers-btn" onClick={subanswersReinicio}>
                    Reinicio
                </ToggleButton>

                <ToggleButton id="tbg-radio-2" value={2} className="subanswers-btn" onClick={subanswersJuegoLanzado}>
                    Juego lanzado
                </ToggleButton>
            </ToggleButtonGroup>
        </div>

        <div>
            {subquestion}
        </div>

      <div className='mt-5'>
          <Link as={Link} to='/form2-question4' className='mx-2 question-link'>Anterior pregunta</Link>
          <Link as={Link} to='/form2-question6' className='mx-2 question-link'>Siguiente pregunta</Link>
      </div>

    </Container>
  );
}

export default FifthQuestion;