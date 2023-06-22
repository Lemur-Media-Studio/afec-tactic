import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

function Home(){

    return(
        <>
        <NavBar />
        
        <Container fluid="md" className="home-container">
                <Row className="justify-content-center align-items-center">
                    <Col />
                    <Col>
                        <h1 className="home-title">LA APP PARA <span className="blue-word">ENTRENADORES</span> DE FÚTBOL</h1>
                        <Button className="home-button">Prueba tu primera semana gratis</Button>
                    </Col>

                    <Col><img src={require('../img/devices.png')} alt="" /></Col>
                    <Col />
                </Row>
        </Container>

        <Footer />
      </>
    )
}

export default Home