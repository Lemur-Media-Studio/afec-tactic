import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Answers } from '../../../utils/Answers';
import { useState } from 'react';
import QHeader from '../../../Components/QHeader';
import AlertCustom from '../../../Components/AlertCustom';

function FirstQuestion() {

  const [selectedBtn, setSelectedBtn] = useState(null);
  const [alert, setAlert] = useState({color: "", text: ""})

  function mandoRespuesta(Q1) {
    const respuestas = { Q1 }
    console.log(respuestas)
    localStorage.setItem('A-Q1', JSON.stringify(respuestas))
  }

  const showAlert = () => {
    setAlert({color:'yellow', text:'Debes seleccionar una opción'})
  }

  return (

    <>

    <QHeader />

    <Container className="questions-container">

      <h1 className="question-title">PRIMERA PREGUNTA</h1>

      <div>
        <h3 className="question-font">¿Qué fase del juego quieres trabajar?</h3>
        <ButtonGroup name="question1" defaultValue={0}>
          {Answers[0].map((option, index) => (
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
        <div>
          <Button 
          className="nextq-btn mb-3" as={Link}
          to={selectedBtn===null ? '' : '/form1-question2'} 
          onClick={showAlert}
          >
            Siguiente pregunta
          </Button>
        </div>

      </div>

      {selectedBtn===null &&
        <AlertCustom {...alert} />
      }

    </Container>

    </>
  );
}

export default FirstQuestion;