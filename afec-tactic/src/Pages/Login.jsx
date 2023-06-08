import React from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";



function Login(){

    return(

        <Card style={{ width: '22rem' }} className="mx-auto login-card">
            <Card.Body>

                <Card.Title className="card-login-title">INICIAR SESIÓN</Card.Title>
{/*                 <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}

                <Card.Text>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Ingresar email" className="login-input" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingresar contraseña" className="login-input" />
                        </Form.Group>

                        <Button className="btn-login" type="submit">
                            Iniciar sesión
                        </Button>
                    </Form>
                </Card.Text>

                <Card.Text href="#">¿Aún no eres usuario? <Card.Link as={Link} to='/signup' className="login-link">Regístrate aquí</Card.Link></Card.Text>

            </Card.Body>
        </Card>

    )
}

export default Login