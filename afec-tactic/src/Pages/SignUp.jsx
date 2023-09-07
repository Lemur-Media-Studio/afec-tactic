import React, { useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Button, Container } from "react-bootstrap";
import { useState } from "react";
import AlertCustom from "../Components/AlertCustom";
import { useNavigate } from "react-router-dom";
import FormPopover from "../Components/FormPopover";
import ProgressBar from 'react-bootstrap/ProgressBar';
import LoginLoader from "../Components/LoginLoader";

function SignUp(){

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [alert, setAlert] = useState({color: "", text: ""})
    const [emailAlert, setEmailAlert] = useState({className: "", text: ""})
    const [requiredField, setRequiredField] = useState({className: "", text: ""})
    const [alertPassword, setAlertPassword] = useState({className: "", text: ""})
    const [alertCharacters, setAlertCharacters] = useState({className:"", text:""})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'Registrarse';
    
        return () => {
          document.title = 'AFEC Tactic';
        };
      }, []);

    const submit = async (e) => {
        
        e.preventDefault();
        setLoading(true)

        if(password !== repeatPassword){
            setAlert({color: 'yellow', text: 'Por favor, chequea los errores e inténtalo nuevamente'});
            setAlertPassword({className: 'error-alert-login', text:"--LAS CONTRASEÑAS NO COINCIDEN--"});
            setLoading(false)
        }else if(name==="" || surname==="" || email==="" || password===""){
            setAlert({color: 'yellow', text:'Todos los campos son obligatorios'});
            setLoading(false)
        }else{
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
                    setLoading(false)
                    setEmailAlert({className: 'error-alert-login', text: '---EMAIL EN USO---'});
                 }else if(data.msg === "usuarios validation failed: password: Path `password` is required." || 
                 data.msg === "usuarios validation failed: user: El campo usuario es obligatorio"){
                    setAlert({color: 'yellow', text: 'Por favor, chequea los errores e inténtalo nuevamente'});
                    setLoading(false)
                    setRequiredField({className: 'error-alert-login', text:"--CAMPO OBLIGATORIO--"})
                 }else if(data.msg === "usuarios validation failed: name: Name should be between 3 and 50 characters" ||
                 data.msg === "usuarios validation failed: surname: Name should be between 3 and 50 characters" ||
                 data.msg === "usuarios validation failed: password: Password should be between 6 and 20 characters"){
                    setAlert({color: 'yellow', text: 'Por favor, chequea los errores e inténtalo nuevamente'});
                    setLoading(false)
                    setAlertCharacters({className: 'error-alert-login', text:"--SE REQUIEREN ENTRE 6 Y 20 CARACTERES--"})
                 }else{
                     setAlert({color: "yellow", text:`Bienvenido, ${name}. Gracias por regisrtarte. Aguarda que serás redirigido.`})
                     setTimeout(() => {
                         navigate ("/login")
                         setLoading(false)
                     },2000)
                 }
                 
               } catch(error) {
                console.log(error)
                } 
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
                            <Form.Label className="login-label">Nombre <FormPopover text={"Se permiten entre 3 y 50 caracteres alfanuméricos."} />
                            {(name.length < 3 || name.length > 50) && <span className={alertCharacters.className}>{alertCharacters.text}</span>}                            
                            </Form.Label>
                            <Form.Control type="text" className="login-input" onChange={(e) => setName(e.target.value)}/>
                        </Form.Group>

                         <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label className="login-label">Apellido <FormPopover text={"Se permiten entre 3 y 50 caracteres alfanuméricos."} />
                            {(surname.length < 3 || surname.length > 50) && <span className={alertCharacters.className}>{alertCharacters.text}</span>}
                            </Form.Label>
                            <Form.Control type="text" className="login-input" onChange={(e) => setSurname(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label className="login-label">Correo electrónico <FormPopover text={"El campo no puede quedar vacío. Estructura: ejemplo@email.com"} />
                            <span className={emailAlert.className}>{emailAlert.text}</span>
                            {email==="" && <span className={requiredField.className}>{requiredField.text}</span>}</Form.Label> 
                            <Form.Control type="email" className="login-input" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label className="login-label">Contraseña <FormPopover text={"Entre 6 y 20 caracteres."} />
                            {password==="" && <span className={requiredField.className}>{requiredField.text}</span>}
                            <span className={alertPassword.className}>{alertPassword.text}</span>
                            {(password.length < 3 || password.length > 50) && <span className={alertCharacters.className}>{alertCharacters.text}</span>}
                            </Form.Label>
                            <Form.Control type="password" className="login-input" onChange={(e) => setPassword(e.target.value)} />
                            {(password.length === 6 && 
                            <ProgressBar className="progress-bar-container">
                                <ProgressBar label="Insegura" animated striped variant="danger" now={10} key={1} />
                                <ProgressBar label="" animated striped variant="warning" now={0} key={2} />
                                <ProgressBar label="" animated striped variant="success" now={0} key={3} />
                            </ProgressBar>) ||
                            ((password.length > 6 && password.length <= 10) && 
                            <ProgressBar className="progress-bar-container">
                                <ProgressBar label="Insegura" animated striped variant="danger" now={33} key={1} />
                                <ProgressBar label="" animated striped variant="warning" now={0} key={2} />
                                <ProgressBar label="" animated striped variant="success" now={0} key={3} />
                            </ProgressBar>) ||
                            ((password.length > 10 && password.length <= 12) && 
                            <ProgressBar className="progress-bar-container">
                                <ProgressBar label="" animated striped variant="danger" now={33} key={1} />
                                <ProgressBar label="Segura" animated striped variant="warning" now={10} key={2} />
                                <ProgressBar label="" animated striped variant="success" now={0} key={3} />
                            </ProgressBar>) ||
                            ((password.length > 12 && password.length <= 15) && 
                            <ProgressBar className="progress-bar-container">
                                <ProgressBar label="" animated striped variant="danger" now={33} key={1} />
                                <ProgressBar label="Segura" animated striped variant="warning" now={33} key={2} />
                                <ProgressBar label="" animated striped variant="success" now={0} key={3} />
                            </ProgressBar>) ||
                            ((password.length > 15 && password.length <= 18) && 
                            <ProgressBar className="progress-bar-container">
                                <ProgressBar label="" animated striped variant="danger" now={33} key={1} />
                                <ProgressBar label="" animated striped variant="warning" now={33} key={2} />
                                <ProgressBar label="Muy segura" animated striped variant="success" now={20} key={3} />
                            </ProgressBar>) ||
                            ((password.length > 18) && 
                            <ProgressBar className="progress-bar-container">
                                <ProgressBar label="" animated striped variant="danger" now={33} key={1} />
                                <ProgressBar label="" animated striped variant="warning" now={33} key={2} />
                                <ProgressBar label="Muy segura" animated striped variant="success" now={34} key={3} />
                            </ProgressBar>)
                            }
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label className="login-label">Repetir contraseña <span className={alertPassword.className}>{alertPassword.text}</span></Form.Label>
                            <Form.Control type="password" className="login-input" onChange={(e) => setRepeatPassword(e.target.value)} />
                        </Form.Group>

                        <Button className="btn-login" type="submit">
                            Registrarse
                            <LoginLoader loading={loading} />
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