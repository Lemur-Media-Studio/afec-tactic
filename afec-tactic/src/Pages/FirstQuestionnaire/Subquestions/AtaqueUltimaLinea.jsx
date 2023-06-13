import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Subquestions } from '../../../utils/Subquestions';

function AtaqueUltimaLinea() {

  return (

    <Container className="questions-container">

        <h1 className="question-title">ATAQUE ÚLTIMA LÍNEA</h1>

        <div>
            <h3 className="question-font">Selecciona una opción</h3>
            <ButtonGroup  name="question1" defaultValue={0}>
                {Subquestions[2].map((option) => (
                <Button className="answers-btn" as={Link} to='/form1-question3' value={option.answer}>
                    {option.answer}
                </Button>
            ))}
            </ButtonGroup>
        </div>
        
        <div className='mt-5'>
            <Link as={Link} to='/form1-question2' className='mx-2 question-link'>Anterior pregunta</Link>
            <Link as={Link} to='/form1-question3' className='mx-2 question-link'>Siguiente pregunta</Link>
        </div>

    </Container>
  );
}

export default AtaqueUltimaLinea;