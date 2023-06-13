import React from 'react'
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ChooseQuestionnaire() {

  return (

    <Container className="suggested-questions-container">

      <h1 className="question-title">SELECCIONE EL CUESTIONARIO</h1>
      
      <div>
        <Button className="answers-btn mx-3" as={Link} to='/form1-question1'>CUESTIONARIO 1</Button>
        <Button className="answers-btn mx-3" as={Link} to='/form2-question1'>CUESTIONARIO 2</Button>
      </div>

      

    </Container>
  );
}

export default ChooseQuestionnaire;