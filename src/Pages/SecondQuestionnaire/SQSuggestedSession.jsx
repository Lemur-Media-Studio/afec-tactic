import React, { useEffect, useState } from "react";
import Q2Header from '../../Components/Q2Header';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SpinnerLoading from "../../Components/SpinnerLoading";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

function SQSuggestedSession() {

  const [etiquetas, setEtiquetas] = useState([]);
  const [answerId, setAnswerId] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const params = useParams();

  /* CONEXIÓN A API */
  useEffect(() => {
    async function getEtiquetas() {
      const responseAnswer = await fetch(`https://afectactic.xyz/AnswerC2/respuestas/${params.id.toString()}`);
      const records = await responseAnswer.json();
      console.log(records)
      
      setAnswerId(records);

      const response = await fetch(`https://afectactic.xyz/etiquetas`);
      let etiquetas = await response.json();

      setEtiquetas(etiquetas.data);
      setIsLoading(false)

    }
    getEtiquetas();
    return;
  }, [etiquetas.length]);


  let BQ1 = answerId.q1
  let BQ2 = answerId.q2
  let BQ3 = answerId.q3
  let BQ4 = answerId.q4
  let BQ5 = answerId.q5
  let BQ6 = answerId.q6
  let BQ7 = answerId.q7
  let BQ8 = answerId.q8
 
  

  if (BQ1 === "Muy mala" || BQ1 === "Mala" ) {
    BQ1 = "Salida de balón"
  }

  if (BQ2 === "Muy mala" || BQ2 === "Mala") {
    BQ2 = "Juego en campo contrario"
  }
  if (BQ3 === "Muy mala" || BQ3 === "Mala") {
    BQ3 = "Ataque de última línea"
  }
  if (BQ4 === "Muy mala" || BQ4 === "Mala") {
    BQ4 = "Momento tras recuperación"
  }
  if (BQ5 === "Muy mala" || BQ5 === "Mala") {
    BQ5 = "Presión"
  }
  if (BQ6 === "Muy mala" || BQ6 === "Mala") {
    BQ6 = "Bloque medio"
  }
  if (BQ7 === "Muy mala" || BQ7 === "Mala") {
    BQ7 = "Defensa de área"
  }
  if (BQ8 === "Muy mala" || BQ8 === "Mala") {
    BQ8 = "Momento tras pérdida"
  }
  

 


  /*DEFINO MI FILTRO Y COMPARO VALORES */
  const filtroFaseQ1 = etiquetas.filter((e) => {
    const filtroFase = e.fase.includes(BQ1)
    if (filtroFase === true) {
      return e
    }
  })
  const filtroFaseQ2 = etiquetas.filter((e) => {
    const filtroFase = e.fase.includes(BQ2)
    if (filtroFase === true) {
      return e
    }
  })
  const filtroFaseQ3 = etiquetas.filter((e) => {
    const filtroFase = e.fase.includes(BQ3)
    if (filtroFase === true) {
      return e
    }
  })
  const filtroFaseQ4 = etiquetas.filter((e) => {
    const filtroFase = e.fase.includes(BQ4)
    if (filtroFase === true) {
      return e
    }
  })
  const filtroFaseQ5 = etiquetas.filter((e) => {
    const filtroFase = e.fase.includes(BQ5)
    if (filtroFase === true) {
      return e
    }
  })
  const filtroFaseQ6 = etiquetas.filter((e) => {
    const filtroFase = e.fase.includes(BQ6)
    if (filtroFase === true) {
      return e
    }
  })
  const filtroFaseQ7 = etiquetas.filter((e) => {
    const filtroFase = e.fase.includes(BQ7)
    if (filtroFase === true) {
      return e
    }
  })
  const filtroFaseQ8 = etiquetas.filter((e) => {
    const filtroFase = e.fase.includes(BQ8)
    //console.log(filtroFase)
    if (filtroFase === true) {
      return e
    }
  })

  const filter1 = params.index.toString()
  const filter2 = parseFloat(filter1) + 1
  

  /*LLAMO A FILTRO Y MAPEO VALORES*/
  function filtroListQ1() {
    return filtroFaseQ1.slice(filter1, filter2).map((e) => {
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
    return filtroFaseQ2.slice(filter1, filter2).map((e) => {
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
    return filtroFaseQ3.slice(filter1, filter2).map((e) => {
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
    return filtroFaseQ4.slice(filter1, filter2).map((e) => {
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
    return filtroFaseQ5.slice(filter1, filter2).map((e) => {
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
    return filtroFaseQ6.slice(filter1, filter2).map((e) => {

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
    return filtroFaseQ7.slice(filter1, filter2).map((e) => {
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
    return filtroFaseQ8.slice(filter1, filter2).map((e) => {
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

        <Button className="chooseq-btn mx-auto mt-5" as={Link} to='/profile'>IR AL PERFIL</Button>

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