import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QHeader from '../../Components/QHeader';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import Table from 'react-bootstrap/Table';
//import checkbox from "./pullCheck";


export default function RecordList() {
  const [etiquetas, setEtiquetas] = useState([]);

  /* CONEXIÓN A API */
  useEffect(() => {
    async function getEtiquetas() {
      const response = await fetch(`https://afecapp.onrender.com/etiquetas`);
      let etiquetas = await response.json();

      setEtiquetas(etiquetas.data);
    }
    getEtiquetas();
    return;
  }, [etiquetas.length]);

  /* EXTRAIGO DATOS DE CUESTIONARIO */
  const AQ1 = JSON.parse(localStorage.getItem('A-Q1'))
  const AQ2 = JSON.parse(localStorage.getItem('A-Q2'))
  const AQ7 = JSON.parse(localStorage.getItem('A-Q7'))
  const AQ8 = JSON.parse(localStorage.getItem('A-Q8'))
  const AQ9 = JSON.parse(localStorage.getItem('A-Q9'))
  let asnwMomento = Object.values(AQ1)[0]
  let asnwFase = Object.values(AQ2)[0]
  let asnwFaseNull = ""
  let asnwSiete = Object.values(AQ7)[0]
  let asnwOcho = Object.values(AQ8)[0]
  let asnwNueve = Object.values(AQ9)[0]

  /* ADAPTO RESPUESTAS A FORMATO DE ETIQUETA */
  if (asnwMomento === "Momento sin balón") {
    asnwMomento = "MSB"
  } else if (asnwMomento === "Momento con balón") {
    asnwMomento = "MCB"
  }
  if (asnwFase === "Tras recuperación") {
    asnwFase = "Momento tras recuperación"
  }
  if (asnwFase === "Presión Bloque Alto") {
    asnwFase = "Presión"
  }
  if (asnwFase === "Tras Pérdida") {
    asnwFase = "Momento tras pérdida"
  }
  if (asnwSiete === "Espacios amplios") {
    asnwSiete = "Amplios"
  }
  if (asnwSiete === "Espacios medios") {
    asnwSiete = "Medios"
  }
  if (asnwSiete === "Espacios reducidos") {
    asnwSiete = "Reducido"
  }

  /*DEFINO MI FILTRO Y COMPARO VALORES */
  const filtroMac = etiquetas.filter((e) => {
    const filtroMomento = e.fase.includes(asnwFase)
    const filtroFase = e.fase.includes(asnwFase)
    const filtroSiete = e.espacios.includes(asnwSiete)
    const filtroOcho = e.direccion.includes(asnwOcho)
    const filtroNueve = e.igualdad.includes(asnwNueve)

    if (filtroMomento === true) {
      if (filtroFase === true) {
        if (filtroSiete === true || filtroOcho === true || filtroNueve === true) {
          return e
        }
      }
    }
  })

  /*LLAMO A FILTRO Y MAPEO VALORES*/
  function filtroMacro() {
    return filtroMac.slice(0, 5).map((e) => {
      return (
        <div key={e.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={e.img} />
            <Card.Body>
              <Button variant="primary" href={e.video}>Ver video</Button>
            </Card.Body>
          </Card>
        </div>

      )
    })
  }


  return (
    <div>
      <QHeader />
      <Container className="suggested-questions-container">
        <h1 className="question-title">SESIÓN DE ENTRENAMIENTO SUGERIDA</h1>
        {filtroMacro()}
      </Container>
    </div>
  );
}