import React, { useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'Iniciar sesión';

        return () => {
            document.title = 'AFEC Tactic';
        };
    }, []);
    const submit = async (e) => {

        e.preventDefault();
        setLoading(true)

        try {
            const response = await fetch('https://afecapp.onrender.com/usuarios/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: user,
                    password: password,
                })
            });
            const data = await response.json();
            console.log(data);
        

        } catch (error) {
            console.log(error)

        }

    }

    return (

        <Container>

            <Card style={{ width: '30rem' }} className="login-card">
                <Card.Body>

                    <Card.Title className="card-login-title">INICIAR SESIÓN</Card.Title>

                    <Card.Text>
                        <Form onSubmit={submit}>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" className="login-input" onChange={(e) => setUser(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" className="login-input" onChange={(e) => setPassword(e.target.value)} />
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