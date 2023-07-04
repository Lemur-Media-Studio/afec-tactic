import React, { useState } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AlertCustom from '../../../Components/AlertCustom';
import Q2Header from '../../../Components/Q2Header';
import { Subquestions } from '../../../utils/Subquestions';

function FourthQuestion() {

  const [selectedBtn, setSelectedBtn] = useState(null);
  const [alert, setAlert] = useState({color:"", text: ""})

  const sendAnswer = (Q4) => {
    const answer = {Q4}
    localStorage.setItem('B-Q4', JSON.stringify(answer))
  }

  const showAlert = () => {
    setAlert({color:"yellow", text:"Debes seleccionar una opción"})
  }

  return (

    <>

    <Q2Header />

    <Container className="questions-container">

      <h1 className="question-title">CUARTA PREGUNTA</h1>

      <div className="checkbox-questions-container">
        <h3 className="question-font">¿Cómo planteaste el partido en Tras Recuperación?</h3>
        <ButtonGroup  name="question1" defaultValue={0}>
                  {Subquestions[3].map((option, index) => (
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
                  <Button className="nextq-btn mb-3" as={Link} 
                  to={selectedBtn===null ? "" : '/form2-question5'}
                  onClick={showAlert}
                  >
                    Siguiente pregunta
                  </Button>
              </div>
      </div>

      <AlertCustom {...alert} />

      <div className='mt-5'>
          <Link as={Link} to='/form2-question3' className='mx-2 question-link'>Anterior pregunta</Link>
          <Link as={Link} to={selectedBtn===null ? "" : '/form2-question5'} className='mx-2 question-link'>Siguiente pregunta</Link>
      </div>

    </Container>

    </>
  );
}

export default FourthQuestion;