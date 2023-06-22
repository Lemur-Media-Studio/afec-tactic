import React from 'react'
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Q2Header from '../../../Components/Q2Header';
import StarRating from '../../../Components/StarRaiting';

function FourteenthQuestion() {

  return (

    <>

    <Q2Header />

    <Container className="questions-container">

      <h1 className="question-title">DECIMOCUARTA PREGUNTA</h1>

      <div>
        <h3 className="question-font mb-5">¿Qué nota le das a tu equipo en las ABP ofensivas?</h3>
        <StarRating />
        <Button className="nextq-btn" as={Link} to='/form2-suggested-session'>Enviar y finalizar</Button>
      </div>


      <div className='mt-5'>
          <Link as={Link} to='/form2-question13' className='mx-2 question-link'>Anterior pregunta</Link>
      </div>

    </Container>

    </>
  );
}

export default FourteenthQuestion;