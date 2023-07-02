import React from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { useState } from "react";

function SignUp(){

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userInfo, setUserInfo] = useState("")

    const submit = async (e) => {
        e.preventDefault();
    
/*         setUserInfo({
            name: name,
            surname: surname,
            user: email,
            password: password,
        }); */

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
          // enter you logic when the fetch is successful
             console.log(data);
           } catch(error) {
         // enter your logic for when there is an error (ex. error toast)

              console.log(error)
             } 
    
/*         try {
        const response = await fetch(requestedOptions.url, requestedOptions);
        const data = await response.json();
        console.log(data);
        } catch (error) {
        console.log(error);
        } */
    }

    return(

        <Card style={{ width: '22rem' }} className="mx-auto login-card">
            <Card.Body>

                <Card.Title className="card-login-title">REGISTRARSE</Card.Title>

                <Card.Text>
                    <Form onSubmit={submit}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingresar nombre" className="login-input" onChange={(e) => setName(e.target.value)}/>
                        </Form.Group>

                         <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Ingresar apellido" className="login-input" onChange={(e) => setSurname(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Ingresar email" className="login-input" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingresar contraseña" className="login-input" onChange={(e) => setPassword(e.target.value)} />
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