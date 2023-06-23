import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Carousel } from "react-bootstrap";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { Link } from 'react-router-dom';

function Home(){

    return(
        <>
        <NavBar />
        
        <Container fluid="md" className="home-container">
                <Row className="justify-content-center align-items-center">
                    <Col />
                    <Col>
                        <h1 className="home-title">LA IA PARA <span className="blue-word">ENTRENADORES</span> DE FÚTBOL</h1>
                        <Button className="home-button" as={Link} to='/form1-question1'>Prueba tu primera semana gratis</Button>
                    </Col>

                    <Col><img src={require('../img/devices.png')} alt="Imagen de una tablet y un móvil con los logos de AFEC Tactic" /></Col>
                    <Col />
                </Row>
        </Container>

        <section className="home-sectionblue-container">
            <Container className="text-center">
                <h2 className="home-subtitle mx-auto">TACTIC elabora sesiones de entrenamiento <br /> <span className="blue-word">adaptadas 100%</span> a tus objetivos</h2>
                <Button className="home-button mt-5" as={Link} to='/form1-question1'>Comienza con tu prueba de 7 días gratis</Button>
            </Container>
        </section>

        <section className="home-trainingsession-container">
            <div className="home-grid">

                <Container>
                
                <h2 className="home-subtitle text-center mx-auto">TÚ SESIÓN DE ENTRENAMIENTO <br /> EN 3 PASOS</h2>
                <Row className="home-training-first-row justify-content-center align-items-center">
                    
                    <Col>
                        <img src="https://www.pngall.com/wp-content/uploads/2016/05/Tablet-PNG-HD.png" height="280" alt="Imagen de una tablet y un móvil con los logos de AFEC Tactic" />
                    </Col>

                    <Col>
                        <p className="home-p">1. Escoge uno de los cuestionarios</p>
                    </Col>
                    
                </Row>

                <Row className="mt-5 justify-content-center align-items-center">
                    
                    <Col>
                        <p className="home-p">2. Responde a TACTIC todas las preguntas</p>
                    </Col>

                    <Col>
                        <img src="https://www.pngall.com/wp-content/uploads/2016/05/Tablet-PNG-HD.png" height="280" alt="Imagen de una tablet y un móvil con los logos de AFEC Tactic" />
                    </Col>
                    
                </Row>

                <Row className="mt-5 justify-content-center align-items-center">
                    
                    <Col>
                        <img src="https://www.pngall.com/wp-content/uploads/2016/05/Tablet-PNG-HD.png" height="280" alt="Imagen de una tablet y un móvil con los logos de AFEC Tactic" />
                    </Col>

                    <Col>
                        <p className="home-p">3. Guarda tú sesión de entrenamiento (vídeos e imágenes explicativas)</p>
                    </Col>
                    
                </Row>
                </Container>
            </div>
        </section>

        <section className="home-testimonials-container">
            <div className="home-grid">

                <Container>
                
                <h2 className="home-subtitle-testimonials text-center mx-auto">TESTIMONIOS</h2>

{/*                 <Carousel className="home-carousel">

                        <Carousel.Item>
                            <h2 className="home-carousel-title">TESTIMONIO 1</h2>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                            </Carousel.Item>

                            <Carousel.Item>
                            <h2 className="home-carousel-title">TESTIMONIO 2</h2>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Item>

                            <Carousel.Item>
                            <h2 className="home-carousel-title">TESTIMONIO 3</h2>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Item>

                </Carousel>
                 */}
                </Container>
            </div>
        </section>


        <Footer />
      </>
    )
}

export default Home