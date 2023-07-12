import React from 'react'
import { useState } from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AlertCustom from '../../../Components/AlertCustom';
import QHeader from '../../../Components/QHeader';

function PresionBloqueAlto() {

    const [selectedBtn, setSelectedBtn] = useState(null);
    const [selectedBtnSubanswer, setSelectedBtnSubanswer] = useState(null);
    const [alert, setAlert] = useState({color: "", text: ""})

    function mandoRespuesta(Q2) {
      const respuestas = { Q2 }
      console.log(respuestas)
      localStorage.setItem('A-Q2', JSON.stringify(respuestas))
    }

    const showAlert = () => {
      setAlert({color:'yellow', text:'Debes seleccionar una opción'})
    }
  
    return (
      
      <>

      <QHeader />

      <Container className="questions-container">
        <h1 className="question-title">PRESIÓN BLOQUE ALTO</h1>
  
        <div>
          <h3 className="question-font">Selecciona una opción</h3>
          <ButtonGroup type="radio" name="options" defaultValue={0}>
            <Button
              onClick={(e) => {
                mandoRespuesta(e.target.value);
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
              onClick={(e) => {
                mandoRespuesta(e.target.value);
                setSelectedBtnSubanswer(10);
              }}
              value = "Orientada"
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
              onClick={(e) => {
                mandoRespuesta(e.target.value);
                setSelectedBtnSubanswer(11);
              }}
              value = "Zonal"
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
              onClick={(e) => {
                mandoRespuesta(e.target.value);
                setSelectedBtnSubanswer(12);
              }}
              value = "Total"
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
              onClick={(e) => {
                mandoRespuesta(e.target.value);
                setSelectedBtnSubanswer(13);
              }}
              value="Juego asociativo en bloque alto"
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
              onClick={(e) => {
                mandoRespuesta(e.target.value);
                setSelectedBtnSubanswer(14);
              }}
              value="Juego vertical en bloque alto"
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
              onClick={(e) => {
                mandoRespuesta(e.target.value);
                setSelectedBtnSubanswer(15);
              }}
              value="Juego directo en bloque alto"
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
          <Button 
              className="nextq-btn mb-3" as={Link}
              to={selectedBtn===null || selectedBtnSubanswer===null ? '' : '/form1-question3'} 
              onClick={showAlert}
              >
                Siguiente pregunta
          </Button>
        </div>

        {selectedBtn===null || selectedBtnSubanswer===null &&
          <AlertCustom {...alert} />
        }
  
        <div className="mt-5">
          <Link as={Link} to="/form1-question2" className="mx-2 question-link">
            Anterior pregunta
          </Link>
          <Link className="mx-2 question-link" as={Link} to={selectedBtn===null || selectedBtnSubanswer===null ? '' : '/form1-question3'} onClick={showAlert}>Siguiente pregunta</Link>
        </div>
      </Container>

      </>
  );
}

export default PresionBloqueAlto
