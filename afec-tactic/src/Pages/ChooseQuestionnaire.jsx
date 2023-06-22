import React from 'react'
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ChooseQuestionnaire() {

  return (

    <Container className="suggested-questions-container">

      <h1 className="question-title">SELECCIONE EL CUESTIONARIO</h1>

        <Row className="chooseq-row">
          <Col>
              <Card className="chooseq-card" style={{ width: '35rem', height:'20rem' }}>
                <Card.Body>
                  <Card.Title className='chooseq-title'>OBJETIVOS DE ENTRENAMIENTO</Card.Title>
                  <Card.Text className="chooseq-p">
                    En este cuestionario nuestra lA te preguntará cuáles son tus objetivos de entrenamiento para prepararte una sesión con las tareas que
                    mejor se adapten a tus respuestas.
                  </Card.Text>
                  <Card.Footer><Button className="chooseq-btn mx-3" as={Link} to='/form1-question1'>IR AL CUESTIONARIO</Button></Card.Footer>
                </Card.Body>
            </Card>
          </Col>

          <Col>
              <Card className="chooseq-card" style={{ width: '35rem', height:'20rem' }}>
                <Card.Body>
                  <Card.Title className='chooseq-title'>PLAN DE PARTIDO</Card.Title>
                  <Card.Text className="chooseq-p">
                  En este cuestionario nuestra lA te preguntará sobre tú plan de partido en tú último encuentro disputado, junto con otras preguntas valorativas del mismo. 
                  El objetivo es crearte una sesión con las tareas de entrenamiento que apliquen única y exclusivamente a las áreas de mejora.
                  </Card.Text>
                  <Card.Footer><Button className="chooseq-btn mx-3" as={Link} to='/form2-question1'>IR AL CUESTIONARIO</Button></Card.Footer>
                </Card.Body>
            </Card>
          </Col>
        </Row>




    </Container>
  );
}

export default ChooseQuestionnaire;