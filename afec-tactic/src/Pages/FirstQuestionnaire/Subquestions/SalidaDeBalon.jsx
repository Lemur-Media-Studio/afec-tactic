import React, { useState } from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import QHeader from '../../../Components/QHeader';

const SalidaDeBalon = () => {

  const [selectedBtn, setSelectedBtn] = useState(null);
  const [selectedBtnSubanswer, setSelectedBtnSubanswer] = useState(null);
  function mandoRespuesta(Q2) {
    const respuestas = { Q2 }
    console.log(respuestas)
    localStorage.setItem('A-Q2', JSON.stringify(respuestas))
  }

  return (

    <>

    <QHeader />

    <Container className="questions-container">
      <h1 className="question-title">SALIDA DE BALÓN</h1>

      <div>
        <h3 className="question-font">Selecciona una opción</h3>
        <ButtonGroup type="radio" name="options" defaultValue={0}>
          <Button
            onClick={() => {
              setSelectedBtn(1);
              setSelectedBtnSubanswer(null); // Reinicio seleccionado, reinicia selectedBtnSubanswer
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
            onClick={(e) => {
              mandoRespuesta(e.target.value);
              setSelectedBtn(2);
              setSelectedBtnSubanswer(null); // Juego lanzado seleccionado, reinicia selectedBtnSubanswer
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
        <Button className="nextq-btn" to='/form1-question3' as={Link} >Siguiente pregunta</Button>
      </div>

      <div className="mt-5">
        <Link as={Link} to="/form1-question2" className="mx-2 question-link">
          Anterior pregunta
        </Link>
        <Link className="mx-2 question-link">Siguiente pregunta</Link>
      </div>
    </Container>

    </>
  );
};

export default SalidaDeBalon;