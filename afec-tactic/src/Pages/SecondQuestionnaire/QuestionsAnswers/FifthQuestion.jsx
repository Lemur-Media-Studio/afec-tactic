import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Q2Header from '../../../Components/Q2Header';

function FifthQuestion() {

  const [selectedBtn, setSelectedBtn] = useState(null);
  const [selectedBtnSubanswer, setSelectedBtnSubanswer] = useState(null);

  const sendAnswer = (Q5) => {
    const answer = {Q5}
    localStorage.setItem('B-Q5', JSON.stringify(answer))
  }

  return (

    <>

    <Q2Header />

    <Container className="questions-container">

      <h1 className="question-title">QUINTA PREGUNTA</h1>

      <div>
        <h3 className="question-font">¿Cómo planteaste el partido en Presión Bloque Alto?</h3>
        <ButtonGroup type="radio" name="options" defaultValue={0}>
            <Button
              onClick={() => {
                setSelectedBtn(1);
                setSelectedBtnSubanswer(null);
              }}
              style={{
                backgroundColor: '#006cff',
                border: selectedBtn === 1 ? '2px solid #fff' : '1px solid #10224a',
                marginTop: '50px',
                padding: '15px',
                fontSize: '16px',
              }}
            >
              Reinicio
            </Button>
  
            <Button
              onClick={() => {
                setSelectedBtn(2);
                setSelectedBtnSubanswer(null);
              }}
              style={{
                backgroundColor: '#006cff',
                border: selectedBtn === 2 ? '2px solid #fff' : '1px solid #10224a',
                marginTop: '50px',
                padding: '15px',
                fontSize: '16px',
              }}
            >
              Juego lanzado
            </Button>
          </ButtonGroup>
        </div>

        {selectedBtn === 1 && (
          <ButtonGroup>
            <Button
              value="Reinicio - Orientada"
              onClick={(e) => {
                sendAnswer(e.target.value);
                setSelectedBtnSubanswer(10);
              }}
              style={{
                backgroundColor: '#006cff',
                border: selectedBtnSubanswer === 10 ? '2px solid #fff' : '1px solid #10224a',
                marginTop: '50px',
                padding: '15px',
                fontSize: '16px',
              }}
            >
              Orientada
            </Button>
            
            <Button
              value="Reinicio - Zonal"
              onClick={(e) => {
                sendAnswer(e.target.value);
                setSelectedBtnSubanswer(11);
              }}
              style={{
                backgroundColor: '#006cff',
                border: selectedBtnSubanswer === 11 ? '2px solid #fff' : '1px solid #10224a',
                marginTop: '50px',
                padding: '15px',
                fontSize: '16px',
              }}
            >
              Zonal
            </Button>
  
            <Button
              value="Reinicio - Total"
              onClick={(e) => {
                sendAnswer(e.target.value);
                setSelectedBtnSubanswer(12);
              }}
              style={{
                backgroundColor: '#006cff',
                border: selectedBtnSubanswer === 12 ? '2px solid #fff' : '1px solid #10224a',
                marginTop: '50px',
                padding: '15px',
                fontSize: '16px',
              }}
            >
              Total
            </Button>
  
          </ButtonGroup>
        )}
  
        {selectedBtn === 2 && (
          <ButtonGroup>
            <Button
              value="Juego asociativo en bloque alto"
              onClick={(e) => {
                sendAnswer(e.target.value);
                setSelectedBtnSubanswer(13);
              }}
              style={{
                backgroundColor: '#006cff',
                border: selectedBtnSubanswer === 13 ? '2px solid #fff' : '1px solid #10224a',
                marginTop: '50px',
                padding: '15px',
                fontSize: '16px',
              }}
            >
              Juego asociativo en bloque alto
            </Button>
  
            <Button
              value="Juego vertical en bloque alto"
              onClick={(e) => {
                sendAnswer(e.target.value);
                setSelectedBtnSubanswer(14);
              }}
              style={{
                backgroundColor: '#006cff',
                border: selectedBtnSubanswer === 14 ? '2px solid #fff' : '1px solid #10224a',
                marginTop: '50px',
                padding: '15px',
                fontSize: '16px',
              }}
            >
              Juego vertical en bloque alto
            </Button>
  
            <Button
              value="Juego directo en bloque alto"
              onClick={(e) => {
                sendAnswer(e.target.value);
                setSelectedBtnSubanswer(15);
              }}
              style={{
                backgroundColor: '#006cff',
                border: selectedBtnSubanswer === 15 ? '2px solid #fff' : '1px solid #10224a',
                marginTop: '50px',
                padding: '15px',
                fontSize: '16px',
              }}
            >
              Juego directo en bloque alto
            </Button>
          </ButtonGroup>
        )}
  
        <div>
          <Button className="nextq-btn" to='/form2-question6' as={Link} >Siguiente pregunta</Button>
        </div>

      <div className='mt-5'>
          <Link as={Link} to='/form2-question4' className='mx-2 question-link'>Anterior pregunta</Link>
          <Link as={Link} to='/form2-question6' className='mx-2 question-link'>Siguiente pregunta</Link>
      </div>

    </Container>

    </>
  );
}

export default FifthQuestion;