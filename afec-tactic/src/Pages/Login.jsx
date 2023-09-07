import React, { useContext, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertCustom from "../Components/AlertCustom";
import LoginLoader from "../Components/LoginLoader";
import { LoginContext } from "../Context/LoginContext";

function Login() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [alert, setAlert] = useState({color: "", text: ""})
    const [emailAlert, setEmailAlert] = useState({className: "", text: ""});
    const [alertPassword, setAlertPassword] = useState({className: "", text: ""});
    const context = useContext(LoginContext);


    useEffect(() => {
        document.title = 'Iniciar sesión';

        return () => {
            document.title = 'AFEC Tactic';
        };
    }, []);

    const submit = async (e) => {

        e.preventDefault();
        setLoading(true)

        if( user==="" || password===""){
            setAlert({color: 'yellow', text:'Todos los campos son obligatorios'});
            setLoading(false)
        }else{
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
    
                if(data.message === "Usuario no existe"){
                    setLoading(false);
                    setAlert({color: 'yellow', text: 'Por favor, chequea los errores e inténtalo nuevamente'});
                    setEmailAlert({className: 'error-alert-login', text:"--EMAIL NO REGISTRADO--"})
                }else if(data.message === "Password incorrecto"){
                    setLoading(false);
                    setAlert({color: 'yellow', text: 'El email y la contraseña no coinciden'});
                    setEmailAlert({className: 'error-alert-login', text:"--CHEQUEAR DATOS--"})
                    setAlertPassword({className: 'error-alert-login', text:"--CHEQUEAR DATOS--"})
                }else{
                    context.handleLogin();
                    setAlert({color: 'green', text: `Bienvenido, ${user}. Gracias por utilizar nuestros servicios. Aguarda y serás redirigido.`})
                    setTimeout(() => {
                        navigate ("/")
                        setLoading(false)
                    },2000);
                }
            
    
            } catch (error) {
                console.log(error)
    
            }
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
                                <span className={emailAlert.className}>{emailAlert.text}</span>
                                <Form.Control type="email" className="login-input" onChange={(e) => setUser(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <span className={alertPassword.className}>{alertPassword.text}</span>
                                <Form.Control type="password" className="login-input" onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>

                            <Button className="btn-login" type="submit">
                                Iniciar sesión
                                <LoginLoader loading={loading} />
                            </Button>
                        </Form>
                    </Card.Text>

                    <Card.Text href="#">Si has olvidado tu contraseña, <Card.Link as={Link} to='/signup' className="login-link">recupérala aquí</Card.Link></Card.Text>
                    <Card.Text href="#">¿Aún no eres usuario? <Card.Link as={Link} to='/signup' className="login-link">Regístrate aquí</Card.Link></Card.Text>

                    <AlertCustom {...alert} />

                </Card.Body>
            </Card>

        </Container>

    )
}

export default Login