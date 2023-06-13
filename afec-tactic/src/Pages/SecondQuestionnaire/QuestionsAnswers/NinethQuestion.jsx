import React from 'react'
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRating from '../../../Components/StarRaiting';

function NinethQuestion() {

  return (

    <Container className="questions-container">

      <h1 className="question-title">NOVENA PREGUNTA</h1>

      <div>
        <h3 className="question-font mb-5">¿Qué nota le das a tu equipo en los momentos con balón?</h3>
        <StarRating />
        <Button className="answers-btn" as={Link} to='/form2-question10'>Enviar y avanzar</Button>
      </div>


      <div className='mt-5'>
          <Link as={Link} to='/form2-question8' className='mx-2 question-link'>Anterior pregunta</Link>
          <Link as={Link} to='/form2-question10' className='mx-2 question-link'>Siguiente pregunta</Link>
      </div>

    </Container>
  );
}

export default NinethQuestion;