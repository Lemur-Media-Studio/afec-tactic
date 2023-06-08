import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function NavBar(){

    return(
        <Navbar className="navbar-bg" expand="lg">
            <Container className="navbar-container">
                <Navbar.Brand as={Link} to='/'><img src={require('../img/logo-afectactic.png')} className="logo" alt="Logo AFEC Tactic" height="140" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link as={Link} to='/' className="navbar-link">INICIO</Nav.Link>
                    <Nav.Link as={Link} to='/login' className="navbar-link">INGRESAR</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
}

export default NavBar