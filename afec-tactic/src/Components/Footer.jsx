import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import { BsTwitter, BsInstagram, BsFacebook, BsYoutube, BsLinkedin, BsAt, BsFillTelephoneFill } from "react-icons/bs";


function Footer(){

    return(
            <>
                <footer className="footer">
                    <Container>
                        <Row>
                            <Col xs={6} xl={3}>
                                <a href="/"><img src={require('../img/logo-afectactic.png')} alt="Logo AFEC Tactic" className='logo-footer' height="200" /></a>
                            </Col>

                            <Col xs={6} xl={3}>
                                <ul className="footer-list">
                                    <h3 className="footer-title">Sitemap</h3>
                                    <li><a href="/" className="footer-link">Inicio</a></li>
                                    <li><a href="/login" className="footer-link">Ingresar</a></li>
                                </ul>
                            </Col>

                            <Col xs={6} xl={3} className="mt-5 mt-xl-0">
                                <ul className="footer-list">
                                    <h3 className="footer-title">Contacto</h3>
                                    <li><BsAt className="footer-contact-at" /> info@afecfa.es </li>
                                    <li><BsFillTelephoneFill className="footer-contact" /> +34 661 232 683</li>
                                </ul>
                            </Col>

                            <Col xs={6} xl={3} className="mt-5 mt-xl-0">
                                <ul>
                                    <h3 className="footer-title">¡Síguenos!</h3>
                                    <div className="footer-social-container">
                                        <li className="footer-social"><a href="https://twitter.com/afecfa" target="_blank" rel="noopener noreferrer" className="footer-link"><BsTwitter /></a></li>
                                        <li className="mx-3 footer-social"><a href="https://www.instagram.com/afecfa/" target="_blank" rel="noopener noreferrer" className="footer-link"><BsInstagram /></a></li>
                                        <li className="footer-social"><a href="https://www.facebook.com/afecfootballacademy" target="_blank" rel="noopener noreferrer" className="footer-link"><BsFacebook/></a></li>
                                        <li className="mx-3 footer-social"><a href="https://www.youtube.com/channel/UC71lMKSOjJyFQb0OgZPyMlQ" target="_blank" rel="noopener noreferrer" className="footer-link"><BsYoutube /></a></li>
                                        <li className="footer-social"><a href="https://es.linkedin.com/school/afec-football-academy/" target="_blank" rel="noopener noreferrer" className="footer-link"><BsLinkedin /></a></li>
                                    </div>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </footer>

                <section className="footer-end">
                    <Navbar className="navbar-bg container" expand="lg">
                            <Navbar.Brand className="footer-copyright">Copyright © 2023 AFEC Football Academy. Todos los derechos reservados.</Navbar.Brand>

                            <Nav className="ms-auto footer-legal">
                                <Nav.Link as={Link} to='/' className="footer-end-link">Términos y Condiciones</Nav.Link>
                                <Nav.Link as={Link} to='/' className="footer-end-link">Aviso Legal</Nav.Link>
                                <Nav.Link as={Link} to='/' className="footer-end-link">Política de Cookies</Nav.Link>
                                <Nav.Link as={Link} to='/' className="footer-end-link">Politica de privacidad</Nav.Link>
                            </Nav>

                    </Navbar>
                </section>
            </>
        )
}

export default Footer