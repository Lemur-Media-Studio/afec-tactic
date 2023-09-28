import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import MainLoading from "../Components/MainLoading";
import Testimonials from "../Components/Testimonials";
import ZoomIn from "../Components/Animations/ZoomIn";
import FadeInLeft from "../Components/Animations/FadeInLeft";
import FadeInRight from "../Components/Animations/FadeInRight";
import { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

function Home(){

    const[isLoading, setIsLoading] = useState(true)
    const context = useContext(LoginContext)

    console.log(context)

    const children = <>
                        <section className="bg-ia">

                            <NavBar />

                            <section className="whatsapp-sticky">
                                <a href="https://wa.me/+34661232683" target="_blank" rel="noopener noreferrer">
                                    <img src={require('../img/whatsapp.png')} alt="WhatsApp" />
                                </a>
                            </section>
                            
                            <ZoomIn>
                            <Container fluid="md" className="home-container row-mobile-center">
                                    <Row className="mx-auto align-items-center">
                                        <Col className="d-none d-md-block" />
                                        <Col xs={12} lg={4}>
                                            <h1 className="home-title">LA IA PARA <span className="blue-word">ENTRENADORES</span> DE FÚTBOL</h1>
                                            {
                                                context.freeTrialDone && context.login
                                                ?
                                                <Button className="home-button px-5" as={Link} to={!context.subscriptionOn ? '/profilefree' : '/profile'}>Ir al Perfil</Button>
                                                :
                                                <Button className="home-button" as={Link} to={!context.login ? '/signup' : '/profile'}>Completa un cuestionario gratis</Button>
                                            }
                                        </Col>

                                        <Col xs={12} lg={4}><img src={require('../img/devices.png')} className="img-mobile-home" alt="Imagen de una tablet y un móvil con los logos de AFEC Tactic" /></Col>
                                        <Col className="d-none d-md-block" />
                                    </Row>
                            </Container>
                            </ZoomIn>
                        </section>

                        <section className="home-sectionblue-container">
                            <Container className="text-center">
                                <h2 className="home-subtitle mx-auto">TACTIC elabora sesiones de entrenamiento <br /> <span className="blue-word">adaptadas 100%</span> a tus objetivos</h2>
                                {
                                    context.freeTrialDone && context.login
                                    ?
                                    <Button className="home-button px-5" as={Link} to={!context.subscriptionOn ? '/profilefree' : '/profile'}>Ir al Perfil</Button>
                                    :
                                    <Button className="home-button" as={Link} to={!context.login ? '/signup' : '/profile'}>Completa un cuestionario gratis</Button>
                                }
                            </Container>
                        </section>

                        <section className="home-trainingsession-container">
                            <div className="home-grid">

                                <Container>
                                
                                <h2 className="home-subtitle text-center mx-auto">TÚ SESIÓN DE ENTRENAMIENTO <br /> EN 3 PASOS</h2>
                                <FadeInLeft>
                                    <Row className="home-training-first-row justify-content-center align-items-center">
                                        <Col>
                                            <img src="https://www.pngall.com/wp-content/uploads/2016/05/Tablet-PNG-HD.png" className="img-mobile-ipad-home" height="280" alt="Imagen de una tablet y un móvil con los logos de AFEC Tactic" />
                                        </Col>

                                        <Col>
                                            <p className="home-p">1. Escoge uno de los cuestionarios</p>
                                        </Col>
                                    </Row>
                                </FadeInLeft>

                                <FadeInRight>
                                    <Row className="mt-5 justify-content-center align-items-center">
                                        <Col>
                                            <p className="home-p">2. Responde a TACTIC todas las preguntas</p>
                                        </Col>

                                        <Col>
                                            <img src="https://www.pngall.com/wp-content/uploads/2016/05/Tablet-PNG-HD.png" className="img-mobile-ipad-home" height="280" alt="Imagen de una tablet y un móvil con los logos de AFEC Tactic" />
                                        </Col>
                                    </Row>
                                </FadeInRight>

                                <FadeInLeft>
                                    <Row className="mt-5 justify-content-center align-items-center">
                                        <Col>
                                            <img src="https://www.pngall.com/wp-content/uploads/2016/05/Tablet-PNG-HD.png" className="img-mobile-ipad-home" height="280" alt="Imagen de una tablet y un móvil con los logos de AFEC Tactic" />
                                        </Col>

                                        <Col>
                                            <p className="home-p">3. Guarda tú sesión de entrenamiento (vídeos e imágenes explicativas)</p>
                                        </Col>                                    
                                    </Row>
                                </FadeInLeft>

                                </Container>
                            </div>
                        </section>

                        <section className="home-testimonials-container">
                            <div className="home-grid-testimonials">

                                <Container>
                                
                                <h2 className="home-subtitle-testimonials text-center mx-auto">TESTIMONIOS</h2>
                                              
                                <Testimonials />

                                </Container>
                                </div>
                        </section>

                        <Footer />    
                    </>

    useEffect(
        () => {
            if(children){
                setTimeout(() => {
                    setIsLoading(false);
                }, 3000);        
            }
        }
    )

    useEffect(() => {
        document.title = 'AFEC Tactic - Home';
    
        return () => {
          document.title = 'AFEC Tactic';
        };
      }, []);

    return(
        <>
        <MainLoading loading={isLoading}>
            {children}
        </MainLoading>
      </>
    )
}

export default Home