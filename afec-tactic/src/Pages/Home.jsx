import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";

function Home(){

    return(
        <Container fluid="md" className="home-container">
            <Row className="justify-content-center align-items-center">
                <Col />
                <Col>
                    <h1 className="home-title">LA APP PARA <span className="blue-word">ENTRENADORES</span> DE FÚTBOL</h1>
                    <Button className="home-button">Prueba tu primer mes gratis</Button>
                </Col>

                <Col><img src={require('../img/devices.png')} alt="" /></Col>
                <Col />
            </Row>
      </Container>
    )
}

export default Home