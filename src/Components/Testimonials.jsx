import {
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
import ZoomIn from "./Animations/ZoomIn";

function Testimonials(){
    return(    
        <MDBContainer className="py-5 testimonials-container">
        <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
            <p className="mb-4 pb-2 mb-md-5 pb-md-0 p-testimonials">
            Descubre lo que otros entrenadores tienen que decir sobre su experiencia con TACTIC. Sus testimonios reflejan cómo nuestra plataforma ha transformado la forma en que planifican y desarrollan sus sesiones de entrenamiento. ¡Lee lo que dicen a continuación!
            </p>
        </MDBCol>
        </MDBRow>
        <MDBRow className="text-center">
            <MDBCol md="4" className="mb-5 mb-md-0">
                <ZoomIn>
                <div className="d-flex justify-content-center mb-4">
                <img
                    src={require("../img/Unknown-7.jpeg")}
                    alt='Sergio de la Paz'
                    className="rounded-circle shadow-1-strong"
                    width="150"
                    height="150"
                />
                </div>
                <h5 className="mb-3 h5-testimonials">Sergio de la Paz</h5>
                <h6 className="text-primary mb-3 h6-testimonials">Entrenador</h6>
                <p className="px-xl-3 p-testimonials">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                    Entrenar en fútbol base y compaginarlo con mi trabajo a veces es complicado. Gracias a TACTIC
                    puedo elaborar mis sesiones de entrenamiento en 1 minuto y tener la garantía de tener tareas realizadas 
                    por entrenadores profesionales.
                </p>
                <MDBTypography
                listUnStyled
                className="d-flex justify-content-center mb-0"
                >
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                </MDBTypography>
                </ZoomIn>
            </MDBCol>

            <MDBCol md="4" className="mb-5 mb-md-0">
                <ZoomIn>
                <div className="d-flex justify-content-center mb-4">
                <img
                    src={require('.././img/danigarcia.jpeg')}
                    alt='Dani García'
                    className="rounded-circle shadow-1-strong"
                    width="150"
                    height="150"
                />
                </div>
                <h5 className="mb-3 h5-testimonials">Dani García</h5>
                <h6 className="text-primary mb-3 h6-testimonials">Entrenador</h6>
                <p className="px-xl-3 p-testimonials">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Es increíble poder tener mi sesión de entrenamiento en minutos. Simplemente he tenido que responder
                el cuestionario para que me envíen tareas de entrenamiento adaptadas a mis objetivos. Espectacular.
                </p>
                <MDBTypography
                listUnStyled
                className="d-flex justify-content-center mb-0"
                >
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                </MDBTypography>
                </ZoomIn>
            </MDBCol>

            <MDBCol md="4" className="mb-5 mb-md-0">
                <ZoomIn>
                <div className="d-flex justify-content-center mb-4">
                <img
                    src={require('.././img/carlosferris.jpeg')}
                    alt='Carlos Ferris'
                    className="rounded-circle shadow-1-strong"
                    width="150"
                    height="150"
                />
                </div>
                <h5 className="mb-3 h5-testimonials">Carlos Ferris</h5>
                <h6 className="text-primary mb-3 h6-testimonials">Entrenador</h6>
                <p className="px-xl-3 p-testimonials">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Desconocía el potencial de esta herramienta. Destaco su facilidad de uso, su bajo coste y la gran variedad
                de tareas que me permite crear sesiones de entrenamiento super completas. Enhorabuena por la iniciativa.
                </p>
                <MDBTypography
                listUnStyled
                className="d-flex justify-content-center mb-0"
                >
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                <li>
                    <MDBIcon fas icon="star" size="sm" className="text-warning" />
                </li>
                </MDBTypography>
                </ZoomIn>
            </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Testimonials