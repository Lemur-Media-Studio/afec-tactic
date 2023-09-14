import { Container, Table } from "react-bootstrap";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";

function LegalWarning(){

    return(

        <>

            <NavBar />

            <Container className='legal-container'>

                <h1>AVISO LEGAL</h1>

                <h2>OBJETO</h2>

                <p>
                    Las presentes condiciones legales son establecidas por AFEC Football Academy LLC con el fin de determinar los criterios y condiciones de uso de la página web www.afectactic.es
                </p>

                <h2>Identificación y contacto:</h2>

                <p>
                    Denominación social: AFEC Football Academy LLC
                </p>

                <p>
                    Denominación comercial: AFEC Football Academy
                </p>

                <p>
                    EIN: 38-4254159
                </p>

                <p>
                    Dirección: 2093 Philadelphia Pike 7578 | Claymont, (19703) Delaware
                </p>

                <p>
                    Teléfono: +34 661232683
                </p>

                <p>
                    E- Mail: info@afecfa.es
                </p>

                <p>
                    Al navegar por este sitio web el navegante adquiere la condición de usuario; el usuario acepta las condiciones de uso planteadas, AFEC Football Academy, se reserva el 
                    derecho a modificar en cualquier momento sus condiciones legales, así como a realizar cualquier mejora técnica o visual que considere oportuno; si las modificaciones afectan 
                    a la privacidad de los usuarios, se avisará con antelación a la entrada en vigor de los cambios.
                </p>

                <h2>POLÍTICA DE ENLACES</h2>

                <p>
                    En esta web se han establecido enlaces a páginas de terceros con el fin de facilitar a los usuarios en acceso a distintas redes sociales y plataformas de internet; AFEC Football 
                    Academy no se hace responsable de los contenidos, ofertas, productos o servicios que pudieran encontrarse.
                </p>

            </Container>

            <Footer />

        </>
    )

}

export default LegalWarning