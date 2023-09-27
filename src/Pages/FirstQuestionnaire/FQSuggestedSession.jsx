import React, { useContext, useEffect, useState } from "react";
import QHeader from '../../Components/QHeader';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SpinnerLoading from "../../Components/SpinnerLoading";
import { useParams, useNavigate } from "react-router";
import { LoginContext } from "../../Context/LoginContext";
import { Link } from "react-router-dom";

//import Table from 'react-bootstrap/Table';
//import checkbox from "./pullCheck";


export default function RecordList() {

  const [etiquetas, setEtiquetas] = useState([]);
  const [answerId, setAnswerId] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const context = useContext(LoginContext)
  const params = useParams();

  /* CONEXIÓN A API */
  useEffect(() => {

    async function getEtiquetas() {
      const responseAnswer = await fetch(`https://afectactic.xyz/AnswerC1/respuestas/${params.id.toString()}`);
      const records = await responseAnswer.json();
      //console.log(records)
      
      setAnswerId(records);
      context.handleFreeTrialDone();

      const responseEtiquetas = await fetch(`https://afectactic.xyz/etiquetas`);
      let etiquetas = await responseEtiquetas.json();

      setEtiquetas(etiquetas.data);
      setIsLoading(false)

    }
    getEtiquetas();
    return;
  }, [etiquetas.length]);

  /* EXTRAIGO DATOS DE CUESTIONARIO */
  const AQ1 = answerId.q1
  const AQ2 = answerId.q2
  const AQ7 = answerId.q7
  const AQ8 = answerId.q8
  const AQ9 = answerId.q9
  /*
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
  if (AQ1 === "Momento sin balón") {
    AQ1 = "MSB"
  } else if (AQ1 === "Momento con balón") {
    AQ1 = "MCB"
  }
  if (AQ2 === "Tras recuperación") {
    AQ2 = "Momento tras recuperación"
  }
  if (AQ2 === "Presión Bloque Alto") {
    AQ2 = "Presión"
  }
  if (AQ2 === "Tras Pérdida") {
    AQ2 = "Momento tras pérdida"
  }
  if (AQ7 === "Espacios amplios") {
    AQ7 = "Amplios"
  }
  if (AQ7 === "Espacios medios") {
    AQ7 = "Medios"
  }
  if (AQ7 === "Espacios reducidos") {
    AQ7 = "Reducido"
  }



  /*DEFINO MI FILTRO Y COMPARO VALORES */
  const filtroMac = etiquetas.filter((e) => {
    const filtroMomento = e.momento.includes(AQ1)
    const filtroFase = e.fase.includes(AQ2)
    const filtroSiete = e.espacios.includes(AQ7)
    const filtroOcho = e.direccion.includes(AQ8)
    const filtroNueve = e.igualdad.includes(AQ9)


   
    

    if (filtroMomento === true) {
      if (filtroFase === true) {
        if (filtroSiete === true || filtroOcho === true || filtroNueve === true) {
          return e
        }
      }
    }
    
  })
  const indexFilter = params.index.toString()
  console.log(parseFloat(indexFilter) + 1)


  /*LLAMO A FILTRO Y MAPEO VALORES*/
  function filtroMacro() {
    return filtroMac.slice(0,5).map((e) => {
      return (
        <Col xs={12}>
        <div key={e.id}>
          <Card style={{ width: '50rem' }} className="mt-5 mx-auto">
            <Card.Img variant="top" src={e.img} />
            <Card.Body>
              <Button variant="primary" href={e.video}>Ver vídeo</Button>
            </Card.Body>
          </Card>
        </div>
        </Col>

      )
    })
  }


  return (
    <div>
      <QHeader />
      <Container className="suggested-questions-container">
        <h1 className="question-title">SESIÓN DE ENTRENAMIENTO SUGERIDA</h1>
        <Button className="chooseq-btn mx-auto mt-5" as={Link} to='/profile'>IR AL PERFIL</Button>
        <Row className="justify-content-center">
          <SpinnerLoading loading={isLoading}>
            {filtroMacro()}
          </SpinnerLoading>
        </Row>

      </Container>
    </div>
  );
}