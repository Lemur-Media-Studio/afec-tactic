import React, { useState } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Q2Header from '../../../Components/Q2Header';
import { Subquestions } from '../../../utils/Subquestions';

function SecondQuestion() {

  const [selectedBtn, setSelectedBtn] = useState(null);

  const sendAnswer = (Q2) => {
    const answer = {Q2}
    localStorage.setItem('B-Q2', JSON.stringify(answer))
  }

  return (

    <>

    <Q2Header />

    <Container className="questions-container">

      <h1 className="question-title">SEGUNDA PREGUNTA</h1>

      <div>
            <h3 className="question-font">¿Cómo planteaste el partido en Juego Campo Contrario?</h3>
            <ButtonGroup  name="question1" defaultValue={0}>
                  {Subquestions[1].map((option, index) => (
                  <Button key={index} className="answers-btn" value={option.answer}
                  onClick={(e) => {
                    sendAnswer(e.target.value);
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
  
              <div>
                  <Button className="nextq-btn" to='/form2-question3' as={Link} >Siguiente pregunta</Button>
              </div>
       </div>
        
        <div className='mt-5'>
          <Link as={Link} to='/form2-question1' className='mx-2 question-link'>Anterior pregunta</Link>
          <Link as={Link} to='/form2-question3' className='mx-2 question-link'>Siguiente pregunta</Link>
        </div>

    </Container>

    </>
  );
}

export default SecondQuestion;