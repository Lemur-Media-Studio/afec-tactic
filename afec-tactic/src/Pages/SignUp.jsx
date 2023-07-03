import React from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Button, Container } from "react-bootstrap";
import { useState } from "react";
import AlertCustom from "../Components/AlertCustom";
import { useNavigate } from "react-router-dom";

function SignUp(){

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [alert, setAlert] = useState({color: "", text: ""})
    const [emailAlert, setEmailAlert] = useState({className: "", text: ""})
    const [requiredField, setRequiredField] = useState({className: "", text: ""})
    const navigate = useNavigate()

    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://afecapp.onrender.com/usuarios/registro', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                name: name,
                surname: surname,
                user: email,
                password: password,
               })
             });
             const data = await response.json();

             console.log(data);

             if(data.code === 11000){
                setAlert({color: 'yellow', text: 'Por favor, chequea los errores e inténtalo nuevamente'});
                setEmailAlert({className: 'error-alert-login', text: '---EMAIL EN USO---'});
             }else if(data.msg === "usuarios validation failed: password: Path `password` is required." || 
             data.msg === "usuarios validation failed: user: El campo usuario es obligatorio"){
                setAlert({color: 'yellow', text: 'Por favor, chequea los errores e inténtalo nuevamente'});
                setRequiredField({className: 'error-alert-login', text:"--CAMPO OBLIGATORIO--"})
             }else{
                 setAlert({color: "yellow", text:`Bienvenido, ${name}. Gracias por regisrtarte. Aguarda que serás redirigido.`})
                 setTimeout(() => {
                     navigate ("/login")
                 },2000)
             }
             
           } catch(error) {
            console.log(error)
            } 

    }

    return(

        <Container>

        <Card style={{ width: '30rem' }} className=" login-card">
            <Card.Body>

                <Card.Title className="card-login-title">REGISTRARSE</Card.Title>

                <Card.Text>
                    <Form onSubmit={submit}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" className="login-input" onChange={(e) => setName(e.target.value)}/>
                        </Form.Group>

                         <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" className="login-input" onChange={(e) => setSurname(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Correo electrónico <span className={emailAlert.className}>{emailAlert.text}</span>
                            {email==="" && <span className={requiredField.className}>{requiredField.text}</span>}</Form.Label> 
                            <Form.Control type="email" className="login-input" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Contraseña {password==="" && <span className={requiredField.className}>{requiredField.text}</span>}</Form.Label>
                            <Form.Control type="password" className="login-input" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Button className="btn-login" type="submit">
                            Registrarse
                        </Button>
                    </Form>
                </Card.Text>

                <Card.Text href="#">Al registrarte, aceptas nuestros <Card.Link href="#" className="login-link">Términos y Condiciones</Card.Link></Card.Text>

                <AlertCustom {...alert} />

            </Card.Body>
            
        </Card>

        </Container>

    )
}

export default SignUp