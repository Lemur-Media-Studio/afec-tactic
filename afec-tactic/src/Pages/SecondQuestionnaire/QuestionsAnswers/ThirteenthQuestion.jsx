import React from 'react'
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Q2Header from '../../../Components/Q2Header';
import StarRating from '../../../Components/StarRaiting';

function ThirteenthQuestion() {

  const sendAnswer = (Q13) => {
    const answer = {Q13}
    localStorage.setItem('B-Q13', JSON.stringify(answer))
  }

  return (

    <>

    <Q2Header />

    <Container className="questions-container">

      <h1 className="question-title">DECIMOTERCERA PREGUNTA</h1>

      <div>
        <h3 className="question-font mb-5">¿Qué nota le das a tu equipo en las ABP defensivas?</h3>
        <StarRating sendAnswer={sendAnswer} />
        <Button className="nextq-btn" as={Link} to='/form2-question14'>Enviar y avanzar</Button>
      </div>


      <div className='mt-5'>
          <Link as={Link} to='/form2-question12' className='mx-2 question-link'>Anterior pregunta</Link>
          <Link as={Link} to='/form2-question14' className='mx-2 question-link'>Siguiente pregunta</Link>
      </div>

    </Container>

    </>
  );
}

export default ThirteenthQuestion;