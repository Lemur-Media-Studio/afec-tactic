import React, { useEffect } from 'react'
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Questionnaire1() {

  useEffect(() => {
    document.title = 'Cuestionario 1';

    return () => {
      document.title = 'AFEC Tactic';
    };
  }, []);

  return (

    <Container className="suggested-questions-container">

      <h1 className="question-title text-center w-75">CUESTIONARIO DE ENTRENAMIENTO</h1>

        <Row className="chooseq-row d-flex flex-wrap wrap">
          <Col xs={12}>
              <Card className="text-center chooseq-card">
                <Card.Header className="chooseq-card-header">Cuestionario 1</Card.Header>
                <Card.Body>
                  <Card.Title className='chooseq-title'>OBJETIVOS DE ENTRENAMIENTO</Card.Title>
                  <Card.Text className="chooseq-p">
                          En este cuestionario nuestra lA te preguntará cuáles son tus objetivos de entrenamiento para prepararte una sesión con las tareas que
                          mejor se adapten a tus respuestas.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted"><Button className="chooseq-btn mx-3" as={Link} to='/form1-question1'>IR AL CUESTIONARIO</Button></Card.Footer>
              </Card>
          </Col>

        </Row>




    </Container>
  );
}

export default Questionnaire1;