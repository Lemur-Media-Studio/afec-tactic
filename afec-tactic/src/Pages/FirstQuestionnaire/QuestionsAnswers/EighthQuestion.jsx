import React, { useState } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import QHeader from '../../../Components/QHeader';
import { Answers } from '../../../utils/Answers';

function EighthQuestion() {
  function mandoRespuesta(Q8) {
    const respuestas = { Q8 }
    console.log(respuestas)
    localStorage.setItem('A-Q8', JSON.stringify(respuestas))
  }

  const [selectedBtn, setSelectedBtn] = useState(null);

  return (

    <>

    <QHeader />

    <Container className="questions-container">

      <h1 className="question-title">OCTAVA PREGUNTA</h1>

      <div>
        <h3 className="question-font">¿Presencia de porterías?</h3>
        <ButtonGroup name="question1" defaultValue={0}>
          {Answers[7].map((option, index) => (
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
      <div>
        <Button className="nextq-btn" as={Link} to='/form1-question9'>Siguiente pregunta</Button>
        </div>

      <div className='mt-5'>
          <Link as={Link} to='/form1-question7' className='mx-2 question-link'>Anterior pregunta</Link>
          <Link as={Link} to='/form1-question9' className='mx-2 question-link'>Siguiente pregunta</Link>
      </div>

    </Container>

    </>
  );
}

export default EighthQuestion;