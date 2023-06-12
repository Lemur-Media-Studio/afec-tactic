import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import { BsTwitter, BsInstagram, BsFacebook, BsYoutube, BsLinkedin } from "react-icons/bs";


function Footer(){

    return(
            <>
                <footer className="footer">
                    <Container>
                        <Row>
                            <Col>
                                <img src={require('../img/logo-afectactic.png')} alt="Logo AFEC Tactic" height="200" />
                            </Col>

                            <Col>
                                <ul className="footer-list">
                                    <h3 className="footer-title">Sitemap</h3>
                                    <li>Inicio</li>
                                    <li>Empleo</li>
                                    <li>Opiniones</li>
                                    <li>Mi cuenta</li>
                                </ul>
                            </Col>

                            <Col>
                                <ul className="footer-list">
                                    <h3 className="footer-title">Contacto</h3>
                                    <li>Email</li>
                                    <li>Teléfono</li>
                                </ul>
                            </Col>

                            <Col>
                                <ul>
                                    <h3 className="footer-title">¡Síguenos!</h3>
                                    <div className="footer-social-container">
                                        <li className="footer-social"><BsTwitter /></li>
                                        <li className="mx-3 footer-social"><BsInstagram /></li>
                                        <li className="footer-social"><BsFacebook/></li>
                                        <li className="mx-3 footer-social"><BsYoutube /></li>
                                        <li className="footer-social"><BsLinkedin /></li>
                                    </div>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </footer>

                <section className="footer-end">
                    <Navbar className="navbar-bg container" expand="lg">
                            <Navbar.Brand className="footer-copyright">Copyright © 2023 AFEC Football Academy. Todos los derechos reservados.</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                <Nav.Link as={Link} to='/' className="footer-end-link">Términos y Condiciones</Nav.Link>
                                <Nav.Link as={Link} to='/' className="footer-end-link">Aviso Legal</Nav.Link>
                                <Nav.Link as={Link} to='/' className="footer-end-link">Política de Cookies</Nav.Link>
                                <Nav.Link as={Link} to='/' className="footer-end-link">Politica de privacidad</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                    </Navbar>
                </section>
            </>
        )
}

export default Footer