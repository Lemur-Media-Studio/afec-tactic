import React, { useEffect, useState } from "react";
import Q2Header from '../../Components/Q2Header';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SpinnerLoading from "../../Components/SpinnerLoading";
import MainLoading from "../../Components/MainLoading";

function SQSuggestedSession() {

  const [etiquetas, setEtiquetas] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  /* CONEXIÓN A API */
  useEffect(() => {
    async function getEtiquetas() {
      const response = await fetch(`https://afecapp.onrender.com/etiquetas`);
      let etiquetas = await response.json();

      setEtiquetas(etiquetas.data);
      setIsLoading(false)

    }
    getEtiquetas();
    return;
  }, [etiquetas.length]);


  const f2q1 = JSON.parse(localStorage.getItem('B-Q1'))
  const f2q1List = Object.values(f2q1)
  const f2q2 = JSON.parse(localStorage.getItem('B-Q2'))
  const f2q2List = Object.values(f2q2)
  const f2q3 = JSON.parse(localStorage.getItem('B-Q3'))
  const f2q3List = Object.values(f2q3)
  const f2q4 = JSON.parse(localStorage.getItem('B-Q4'))
  const f2q4List = Object.values(f2q4)
  const f2q5 = JSON.parse(localStorage.getItem('B-Q5'))
  const f2q5List = Object.values(f2q5)
  const f2q6 = JSON.parse(localStorage.getItem('B-Q6'))
  const f2q6List = Object.values(f2q6)
  const f2q7 = JSON.parse(localStorage.getItem('B-Q7'))
  const f2q7List = Object.values(f2q7)
  const f2q8 = JSON.parse(localStorage.getItem('B-Q8'))
  const f2q8List = Object.values(f2q8)

  if (f2q1List[0] === "Muy mala" || f2q1List[0] === "Mala") {
    f2q1List[0] = "Salida de balón"
  }
  if (f2q2List[0] === "Muy mala" || f2q2List[0] === "Mala") {
    f2q2List[0] = "Juego campo contrario"
  }
  if (f2q3List[0] === "Muy mala" || f2q3List[0] === "Mala") {
    f2q3List[0] = "Ataque de última línea"
  }
  if (f2q4List[0] === "Muy mala" || f2q4List[0] === "Mala") {
    f2q4List[0] = "Momento tras recuperación"
  }
  if (f2q5List[0] === "Muy mala" || f2q5List[0] === "Mala") {
    f2q5List[0] = "Presión"
  }
  if (f2q6List[0] === "Muy mala" || f2q6List[0] === "Mala") {
    f2q6List[0] = "Bloque medio"
  }
  if (f2q7List[0] === "Muy mala" || f2q7List[0] === "Mala") {
    f2q7List[0] = "Defensa de área"
  }
  if (f2q8List[0] === "Muy mala" || f2q8List[0] === "Mala") {
    f2q8List[0] = "Momento tras pérdida"
  }

  /*DEFINO MI FILTRO Y COMPARO VALORES */
  const filtroFaseQ1 = etiquetas.filter((e) => {
    const filtroFase = e.fase.includes(f2q1List[0])
    if (filtroFase === true) {
      return e
    }
  })
  const filtroFaseQ2 = etiquetas.filter((e) => {
    const filtroFase = e.fase.includes(f2q2List[0])
    if (filtroFase === true) {
      return e
    }
  })
  const filtroFaseQ3 = etiquetas.filter((e) => {
    const filtroFase = e.fase.includes(f2q3List[0])
    if (filtroFase === true) {
      return e
    }
  })
  const filtroFaseQ4 = etiquetas.filter((e) => {
    const filtroFase = e.fase.includes(f2q4List[0])
    if (filtroFase === true) {
      return e
    }
  })
  const filtroFaseQ5 = etiquetas.filter((e) => {
    const filtroFase = e.fase.includes(f2q5List[0])
    if (filtroFase === true) {
      return e
    }
  })
  const filtroFaseQ6 = etiquetas.filter((e) => {
    const filtroFase = e.fase.includes(f2q6List[0])
    if (filtroFase === true) {
      return e
    }
  })
  const filtroFaseQ7 = etiquetas.filter((e) => {
    const filtroFase = e.fase.includes(f2q7List[0])
    if (filtroFase === true) {
      return e
    }
  })
  const filtroFaseQ8 = etiquetas.filter((e) => {
    const filtroFase = e.fase.includes(f2q8List[0])
    if (filtroFase === true) {
      return e
    }
  })

  /*LLAMO A FILTRO Y MAPEO VALORES*/
  function filtroListQ1() {
    return filtroFaseQ1.slice(0, 1).map((e) => {
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
  function filtroListQ2() {
    return filtroFaseQ2.slice(0, 1).map((e) => {
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
  function filtroListQ3() {
    return filtroFaseQ3.slice(0, 1).map((e) => {
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
  function filtroListQ4() {
    return filtroFaseQ4.slice(0, 1).map((e) => {
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
  function filtroListQ5() {
    return filtroFaseQ5.slice(0, 1).map((e) => {
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
  function filtroListQ6() {
    return filtroFaseQ6.slice(0, 1).map((e) => {
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
  function filtroListQ7() {
    return filtroFaseQ7.slice(0, 1).map((e) => {
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
  function filtroListQ8() {
    return filtroFaseQ8.slice(0, 1).map((e) => {
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

    <>

      <Q2Header />

      <Container className="suggested-questions-container">

        <h1 className="question-title">SESIÓN DE ENTRENAMIENTO SUGERIDA</h1>

        <Row className="justify-content-center">
          <SpinnerLoading loading={isLoading}>
            {filtroListQ1()}
            {filtroListQ2()}
            {filtroListQ3()}
            {filtroListQ4()}
            {filtroListQ5()}
            {filtroListQ6()}
            {filtroListQ7()}
            {filtroListQ8()}
          </SpinnerLoading>
        </Row>
        {/*
        
        <small>Resp1: {f2q1List}</small>
        <small>Resp2: {f2q2List}</small>
        <small>Resp3: {f2q3List}</small>
        <small>Resp4: {f2q4List}</small>
        <small>Resp5: {f2q5List}</small>
        <small>Resp6: {f2q6List}</small>
        <small>Resp7: {f2q7List}</small>
        <small>Resp8: {f2q8List}</small>
        */

        }

      </Container>

    </>
  );
}

export default SQSuggestedSession;