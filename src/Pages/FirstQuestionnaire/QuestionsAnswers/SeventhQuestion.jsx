import React, { useState } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AlertCustom from '../../../Components/AlertCustom';
import QHeader from '../../../Components/QHeader';
import { Answers } from '../../../utils/Answers';

function SeventhQuestion() {

  const [selectedBtn, setSelectedBtn] = useState(null);
  const [alert, setAlert] = useState({color: "", text: ""})

  function mandoRespuesta(Q7) {
    const respuestas = { Q7 }
    console.log(respuestas)
    localStorage.setItem('A-Q7', JSON.stringify(respuestas))
  }

  const showAlert = () => {
    setAlert({color:'yellow', text:'Debes seleccionar una opción'})
  }

  return (

    <>

    <QHeader />

    <Container className="questions-container">

      <h1 className="question-title">SÉPTIMA PREGUNTA</h1>

      <div>
        <h3 className="question-font">¿Tipo de espacios?</h3>
        <ButtonGroup name="question1" defaultValue={0}>
          {Answers[6].map((option, index) => (
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
        <Button 
          className="nextq-btn mb-3" as={Link}
          to={selectedBtn===null ? '' : '/form1-question8'} 
          onClick={showAlert}
          >
            Siguiente pregunta
        </Button>
      </div>

      {selectedBtn===null &&
        <AlertCustom {...alert} />
      }

      <div className='mt-5'>
          <Link as={Link} to='/form1-question6' className='mx-2 question-link'>Anterior pregunta</Link>
          <Link as={Link} to={selectedBtn===null ? '' : '/form1-question8'} className='mx-2 question-link'>Siguiente pregunta</Link>
      </div>

    </Container>

    </>
  );
}

export default SeventhQuestion;