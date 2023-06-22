import React from 'react'
import { useState } from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import QHeader from '../../../Components/QHeader';
import { Answers } from '../../../utils/Answers';




function SecondQuestion() {

  function mandoRespuesta(Q2) {
    const respuestas = { Q2 }
    console.log(respuestas)
    localStorage.setItem('A-Q2', JSON.stringify(respuestas))
  }

  const [selectedBtn, setSelectedBtn] = useState(null);

  return (

    <>

    <QHeader />

    <Container className="questions-container">
      <h1 className="question-title">SEGUNDA PREGUNTA</h1>
      <div>
        <h3 className="question-font">¿En qué situación poner el foco?</h3>
        <ButtonGroup name="question1" defaultValue={0}>
          {Answers[1].map((option, index) => (
              <Button key={index} className="answers-btn" as={Link} to={option.to} value={option.answer} 
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
            }} >
                {option.answer}
              </Button>
          ))}
        </ButtonGroup>
      </div>

      <div className='mt-5'>
        <Link as={Link} to='/form1-question1' className='mx-2 question-link'>Anterior pregunta</Link>
        <Link as={Link} to='/form1-question3' className='mx-2 question-link'>Siguiente pregunta</Link>
      </div>

    </Container>

    </>
  );
}

export default SecondQuestion;