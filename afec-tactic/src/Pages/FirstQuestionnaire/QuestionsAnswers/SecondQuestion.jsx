import React from 'react'
import { useState } from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AlertCustom from '../../../Components/AlertCustom';
import QHeader from '../../../Components/QHeader';
import { Answers } from '../../../utils/Answers';

function SecondQuestion() {

  function mandoRespuesta(Q2) {
    const respuestas = { Q2 }
    console.log(respuestas)
    localStorage.setItem('A-Q2', JSON.stringify(respuestas))
  }

  const [selectedBtn, setSelectedBtn] = useState(null);
  const [alert, setAlert] = useState({color: "", text: ""})

  const showAlert = () => {
    setAlert({color:'yellow', text:'Debes seleccionar una opción'})
  }

  const answer1 = JSON.parse(localStorage.getItem('A-Q1'))
  const a1list = Object.values(answer1)

  return (

    <>

    <QHeader />

    <Container className="questions-container">
      <h1 className="question-title">SEGUNDA PREGUNTA</h1>
      <div>
        <h3 className="question-font">¿En qué situación poner el foco?</h3>

        { a1list == 'Momento con balón' &&
          <ButtonGroup name="question1" defaultValue={0}>
            <Button className="answers-btn" value="Salida de balón"
              onClick={(e) => {
              mandoRespuesta(e.target.value);
              setSelectedBtn("Salida de balón");
              }}
              style={{
              backgroundColor: '#006cff;',
              border: selectedBtn === "Salida de balón" ? '2px solid #fff' : '1px solid #10224a',
              marginTop: '50px',
              padding: '15px',
              fontSize: '16px',
              }}
            >
              Salida de Balón
            </Button>

            <Button className="answers-btn" value="Juego en campo contrario"
              onClick={(e) => {
              mandoRespuesta(e.target.value);
              setSelectedBtn("Juego en campo contrario");
              }}
              style={{
              backgroundColor: '#006cff;',
              border: selectedBtn === "Juego en campo contrario" ? '2px solid #fff' : '1px solid #10224a',
              marginTop: '50px',
              padding: '15px',
              fontSize: '16px',
              }}
            >
              Juego en campo contrario
            </Button>

            <Button className="answers-btn" value="Ataque última línea"
              onClick={(e) => {
              mandoRespuesta(e.target.value);
              setSelectedBtn("Ataque última línea");
              }}
              style={{
              backgroundColor: '#006cff;',
              border: selectedBtn === "Ataque última línea" ? '2px solid #fff' : '1px solid #10224a',
              marginTop: '50px',
              padding: '15px',
              fontSize: '16px',
              }}
            >
              Ataque última línea
            </Button>

            <Button className="answers-btn" value="Tras recuperación"
              onClick={(e) => {
              mandoRespuesta(e.target.value);
              setSelectedBtn("Tras recuperación");
              }}
              style={{
              backgroundColor: '#006cff;',
              border: selectedBtn === "Tras recuperación" ? '2px solid #fff' : '1px solid #10224a',
              marginTop: '50px',
              padding: '15px',
              fontSize: '16px',
              }}
            >
              Tras recuperación
            </Button>

          </ButtonGroup>
        }

        { a1list == 'Momento sin balón' &&
          <ButtonGroup name="question1" defaultValue={0}>
            <Button className="answers-btn" value="Presión Bloque Alto"
            onClick={(e) => {
              mandoRespuesta(e.target.value);
              setSelectedBtn("Presión Bloque Alto");
              }}
              style={{
              backgroundColor: '#006cff;',
              border: selectedBtn === "Presión Bloque Alto" ? '2px solid #fff' : '1px solid #10224a',
              marginTop: '50px',
              padding: '15px',
              fontSize: '16px',
              }}
            >
              Presión Bloque Alto
            </Button>

            <Button className="answers-btn" value="Bloque medio"
            onClick={(e) => {
              mandoRespuesta(e.target.value);
              setSelectedBtn("Bloque medio");
              }}
              style={{
              backgroundColor: '#006cff;',
              border: selectedBtn === "Bloque medio" ? '2px solid #fff' : '1px solid #10224a',
              marginTop: '50px',
              padding: '15px',
              fontSize: '16px',
              }}
            >
              Bloque medio
            </Button>

            <Button className="answers-btn" value="Defensa de área"
            onClick={(e) => {
              mandoRespuesta(e.target.value);
              setSelectedBtn("Defensa de área");
              }}
              style={{
              backgroundColor: '#006cff;',
              border: selectedBtn === "Defensa de área" ? '2px solid #fff' : '1px solid #10224a',
              marginTop: '50px',
              padding: '15px',
              fontSize: '16px',
              }}
            >
              Defensa de área
            </Button>

            <Button className="answers-btn" value="Tras Pérdida"
            onClick={(e) => {
              mandoRespuesta(e.target.value);
              setSelectedBtn("Tras Pérdida");
              }}
              style={{
              backgroundColor: '#006cff;',
              border: selectedBtn === "Tras Pérdida" ? '2px solid #fff' : '1px solid #10224a',
              marginTop: '50px',
              padding: '15px',
              fontSize: '16px',
              }}
            >
              Tras Pérdida
            </Button>
          </ButtonGroup>
        }
      </div>

      <Button 
          className="nextq-btn mb-3" as={Link}
          to={selectedBtn===null ? '' : '/form1-question3'} 
          onClick={showAlert}
          >
            Siguiente pregunta
      </Button>

      {selectedBtn===null &&
        <AlertCustom {...alert} />
      }

      <div className='mt-5'>
        <Link as={Link} to='/form1-question1' className='mx-2 question-link'>Anterior pregunta</Link>
      </div>

    </Container>

    </>
  );
}

export default SecondQuestion;