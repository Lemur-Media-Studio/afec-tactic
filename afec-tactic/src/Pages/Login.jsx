import React from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";



function Login(){

    return(

        <Container>

            <Card style={{ width: '30rem' }} className="login-card">
                <Card.Body>

                    <Card.Title className="card-login-title">INICIAR SESIÓN</Card.Title>

                    <Card.Text>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" className="login-input" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" className="login-input" />
                            </Form.Group>

                            <Button className="btn-login" type="submit">
                                Iniciar sesión
                            </Button>
                        </Form>
                    </Card.Text>

                    <Card.Text href="#">Si has olvidado tu contraseña, <Card.Link as={Link} to='/signup' className="login-link">recupérala aquí</Card.Link></Card.Text>
                    <Card.Text href="#">¿Aún no eres usuario? <Card.Link as={Link} to='/signup' className="login-link">Regístrate aquí</Card.Link></Card.Text>

                </Card.Body>
            </Card>

        </Container>

    )
}

export default Login