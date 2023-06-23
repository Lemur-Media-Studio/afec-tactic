import React from 'react'
import { useState } from 'react';
import { Button, ButtonGroup, Container, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Q2Header from '../../../Components/Q2Header';
import { Subquestions } from '../../../utils/Subquestions';

function FirstQuestion() {

  const [selectedBtn, setSelectedBtn] = useState(null);
  const [selectedBtnSubanswer, setSelectedBtnSubanswer] = useState(null);

  return (

    <>

    <Q2Header />

    <Container className="questions-container">

      <h1 className="question-title">PRIMERA PREGUNTA</h1>

      <div>
        <h3 className="question-font">¿Cómo planteaste el partido en Salida de Balón?</h3>
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
            onClick={() => {
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
            Juego asociativo
          </Button>
          
          <Button
            onClick={() => {
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
            Juego vertical
          </Button>

          <Button
            onClick={() => {
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
            Juego directo
          </Button>

        </ButtonGroup>
      )}

      {selectedBtn === 2 && (
        <ButtonGroup>
          <Button
            onClick={() => {
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
            Juego lanzado asociativo
          </Button>

          <Button
            onClick={() => {
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
            Juego lanzado vertical
          </Button>

          <Button
            onClick={() => {
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
            Juego lanzado directo
          </Button>
          {/* Otros botones de Juego lanzado */}
        </ButtonGroup>
      )}

      <div>
        <Button className="nextq-btn" to='/form2-question2' as={Link} >Siguiente pregunta</Button>
      </div>

    </Container>

    </>
  );
}

export default FirstQuestion;