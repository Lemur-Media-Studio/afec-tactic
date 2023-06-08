import React from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";



function SignUp(){

    return(

        <Card style={{ width: '22rem' }} className="mx-auto login-card">
            <Card.Body>

                <Card.Title className="card-login-title">REGISTRARSE</Card.Title>

                <Card.Text>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingresar nombre" className="login-input" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Ingresar apellido" className="login-input" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Ingresar email" className="login-input" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingresar contraseña" className="login-input" />
                        </Form.Group>

                        <Button className="btn-login" type="submit">
                            Registrarse
                        </Button>
                    </Form>
                </Card.Text>

                <Card.Text href="#">Al registrarte, aceptas nuestros <Card.Link href="#" className="login-link">Términos y Condiciones</Card.Link></Card.Text>

            </Card.Body>
        </Card>

    )
}

export default SignUp