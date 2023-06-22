import React, { useState } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import QHeader from '../../../Components/QHeader';
import { Answers } from '../../../utils/Answers';

function NinethQuestion() {
  function mandoRespuesta(Q9) {
    const respuestas = { Q9 }
    console.log(respuestas)
    localStorage.setItem('A-Q9', JSON.stringify(respuestas))
  }

  const [selectedBtn, setSelectedBtn] = useState(null);

  return (

    <>

    <QHeader />

    <Container className="questions-container">

      <h1 className="question-title">NOVENA PREGUNTA</h1>

      <div>
        <h3 className="question-font">¿Igualdad?</h3>
        <ButtonGroup name="question1" defaultValue={0}>
          {Answers[8].map((option, index) => (
            <Button key={index} className="answers-btn" to='/form1-question2' value={option.answer}
            onClick={(e) => {
              mandoRespuesta(e.target.value);
              setSelectedBtn(index);
            }}
            style={{
              backgroundColor: '#006cff;',
              border: selectedBtn === index ? '2px solid #fff' : '1px solid #10224a',
              marginTop: '50px',
              padding: '15px',
              fontSize: '16px',
            }}>
              {option.answer}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      <Button className="nextq-btn" as={Link} to='/form1-suggested-session'>Enviar y finalizar</Button>

      <div className='mt-5'>
          <Link as={Link} to='/form1-question8' className='mx-2 question-link'>Anterior pregunta</Link>
      </div>

    </Container>

    </>
  );
}

export default NinethQuestion;