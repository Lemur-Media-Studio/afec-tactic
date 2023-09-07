import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import FallDown from "./Animations/FallDown";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RiMenu5Fill } from "react-icons/ri";
import { LoginContext } from "../Context/LoginContext";


function NavBar(){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const context = useContext(LoginContext)

    return(
        
        <FallDown>

            <Navbar className="navbar-bg d-flex justify-content-center mt-5 mt-lg-none" expand="md">
                <Container className="navbar-container">

                    <Navbar.Brand as={Link} to='/'><img src={require('../img/logo-afectactic.png')} className="logo" alt="Logo AFEC Tactic" height="140" /></Navbar.Brand>

                        <Nav className="ms-auto d-none d-md-flex">
                            <Nav.Link as={Link} to='/' className="navbar-link">INICIO</Nav.Link>
                            {context.login
                                ? <Nav.Link as={Link} to='/profile' className="navbar-link">PERFIL</Nav.Link>
                                : <Nav.Link as={Link} to='/login' className="navbar-link">INGRESAR</Nav.Link>
                            }
                        </Nav>

                    <div className="d-block align-items-center d-md-none">
                        <Button variant="primary" onClick={handleShow} className="canvas-nav-btn">
                            <RiMenu5Fill />
                        </Button>

                        <Offcanvas show={show} onHide={handleClose} placement="top">
                            <Offcanvas.Body className="d-flex justify-content-center align-items-center canvas-nav-body">
                                        <Nav className="text-center d-block d-md-none">
                                            <Nav.Link as={Link} to='/' className="navbar-link">INICIO</Nav.Link>
                                            {context.login
                                                ? <Nav.Link as={Link} to='/profile' className="navbar-link">PERFIL</Nav.Link>
                                                : <Nav.Link as={Link} to='/login' className="navbar-link">INGRESAR</Nav.Link>
                                            }
                                        </Nav>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>

                </Container>
            </Navbar>

        </FallDown>
    )
}

export default NavBar