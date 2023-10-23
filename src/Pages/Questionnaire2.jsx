import React, { useEffect } from 'react'
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Questionnaire2() {

  useEffect(() => {
    document.title = 'Seleccione el cuestionario';

    return () => {
      document.title = 'AFEC Tactic';
    };
  }, []);

  return (

    <Container className="suggested-questions-container">

      <h1 className="question-title text-center w-75">CUESTIONARIO DE PARTIDO</h1>

        <Row className="chooseq-row d-flex flex-wrap wrap">

          <Col xs={12}>
              <Card className="text-center chooseq-card mt-5 mt-md-0">
                <Card.Header className="chooseq-card-header">Cuestionario 2</Card.Header>
                <Card.Body>
                  <Card.Title className='chooseq-title'>PLAN DE PARTIDO</Card.Title>
                  <Card.Text className="chooseq-p">
                  En este cuestionario nuestra lA te preguntará sobre tú plan de partido en tú último encuentro disputado, junto con otras preguntas valorativas del mismo. El objetivo es crearte una sesión con las tareas de entrenamiento que apliquen única y exclusivamente a las áreas de mejora.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted"><Button className="chooseq-btn mx-3" as={Link} to='/form2-question1'>IR AL CUESTIONARIO</Button></Card.Footer>
              </Card>
          </Col>

        </Row>




    </Container>
  );
}

export default Questionnaire2;