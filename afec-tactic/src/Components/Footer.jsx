import React from "react";
import { Col, Row } from "react-bootstrap";
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
                                    <div className="footer-social">
                                        <li><BsTwitter /></li>
                                        <li className="mx-2"><BsInstagram /></li>
                                        <li><BsFacebook /></li>
                                        <li className="mx-2"><BsYoutube /></li>
                                        <li><BsLinkedin /></li>
                                    </div>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </footer>

                <section className="footer-end">
                    <Container>
                        <Row>
                            <Col>
                                <p className="footer-end-p">Copyright © 2023 AFEC Football Academy. Todos los derechos reservados.</p>
                            </Col>

                            <Col>
                                <p className="footer-end-p">Términos y Condiciones</p>
                            </Col>

                            <Col>
                                <p className="footer-end-p">Aviso Legal</p>
                            </Col>

                            <Col>
                                <p className="footer-end-p">Política de cookies</p>
                            </Col>

                            <Col>
                                <p className="footer-end-p">Política de privacidad</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        )
}

export default Footer