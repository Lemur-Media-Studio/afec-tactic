import { Container, Table } from "react-bootstrap";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";

function Cookies(){

    return(

        <>

            <NavBar />

            <Container className='legal-container'>

                <h1>POLÍTICA DE COOKIES</h1>

                <h2>UTILIZAMOS COOKIES PROPIAS Y DE TERCEROS PARA OBTENER DATOS ESTADÍSTICOS DE LA NAVEGACIÓN DE NUESTROS USUARIOS Y MEJORAR NUESTROS SERVICIOS.</h2>

                <h2>¿QUÉ SON LAS COOKIES?</h2>

                <p>
                    Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, 
                    almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma 
                    en que utilice su equipo, pueden utilizarse para reconocer al usuario.
                </p>

                <h2>TIPOS DE COOKIES</h2>

                <p>
                    <span>Cookies de análisis:</span> Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y 
                    análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar 
                    la oferta de productos o servicios que le ofrecemos.
                </p>

                <p>
                    <span>Cookies técnicas:</span> Son aquellas que permiten al usuario la navegación a través del área restringida y la utilización de sus diferentes funciones, como por ejemplo, 
                    llevar a cambio el proceso de compra de un artículo.
                </p>

                <p>
                    <span>Cookies de personalización:</span> Son aquellas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una 
                    serie de criterios en el terminal del usuario como por ejemplo serian el idioma o el tipo de navegador a través del cual se conecta al servicio.
                </p>

                <p>
                    <span>Cookies publicitarias:</span> Son aquellas que, bien tratadas por esta web o por terceros, permiten gestionar de la forma más eficaz posible la oferta de los espacios 
                    publicitarios que hay en la página web, adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que realice de nuestra página web. Para ello podemos 
                    analizar sus hábitos de navegación en Internet y podemos mostrarle publicidad relacionada con su perfil de navegación.
                </p>

                <p>
                    <span>Cookies de publicidad comportamental:</span> Son aquellas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor 
                    haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado. Este tipo de cookies almacenan información del comportamiento de los visitantes 
                    obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar avisos publicitarios en función del mismo.
                </p>

                <h2>TIPOS DE COOKIES EXISTENTES EN LA WEB</h2>

                <Table bordered variant="dark">
                    <thead>
                        <tr>
                        <th>Cookies</th>
                        <th>Tipo de cookies</th>
                        <th>Definición</th>
                        <th>Duración</th>
                        <th>Gestión</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1P_JAR</td>
                        <td>Cookies técnicas</td>
                        <td>Estádisticas</td>
                        <td>2019-06-16</td>
                        <td>Afecfa</td>
                        </tr>
                        <tr>
                        <td>_fbp</td>
                        <td>Cookies de análisis</td>
                        <td>Estádisticas</td>
                        <td>2019-07-31</td>
                        <td>Facebook</td>
                        </tr>
                    </tbody>
                </Table>

                <h2>CONSENTIMIENTO</h2>

                <p>
                    Le informamos que sólo utilizaremos cookies en su equipo a condición de que haya dado su consentimiento a través del banner de acceso y la configuración habilitada a través del panel 
                    de configuración, salvo en los supuestos en los que las cookies sean necesarias para la navegación en el equipo y/o para prestar el servicio solicitado por el usuario (cookies técnicas). 
                    Las cookies técnicas están exceptuadas del cumplimiento de las obligaciones establecidas en la LSSI del deber de información y obtención del consentimiento 
                    (ver definición de cookies técnicas).
                </p>

                <h2>REVOCAR EL CONSENTIMIENTO Y DESACTIVAR LAS COOKIES</h2>

                <p>
                    El usuario podrá modificar o revocar su consentimiento en cualquier momento configurando las opciones en el Panel de Configuración. El usuario tiene acceso al Panel de Configuración 
                    de forma permanente a través del siguiente enlace.
                </p>

                <p>
                    No obstante, a pesar de que conservaremos la selección realizada por el usuario con un máximo de 24 meses, periódicamente, solicitaremos la actualización de tu consentimiento.
                </p>

                <p>
                    Puede usted permitir, <em>bloquear o eliminar las cookies</em> instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador, así como borrar  
                    sus datos de navegación (incluidas las cookies) desde el navegador instalado en su terminal.
                </p>

                <h2>ADVERTENCIA SOBRE ELIMINAR COOKIES</h2>

                <p>
                    La desactivación de las cookies no impide la navegación por el sitio web, aunque el uso de algunos de sus servicios podrá ser limitado y, por tanto, su experiencia de navegación 
                    podrá ser menos satisfactoria.
                </p>

            </Container>

            <Footer />

        </>
    )

}

export default Cookies