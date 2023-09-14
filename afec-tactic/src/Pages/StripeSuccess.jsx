import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function StripeSuccess(){

    const navigation = useNavigate()

    return(
        <Container className='stripe-result-container'>
            <img src={require('.././img/logo-afectactic.png')} alt="Logo AFEC Tactic" height='100' />
            <h1>GRACIAS POR TU COMPRA</h1>
            <p>Tu pago ha sido sido aceptado.</p>
            <button onClick={() => navigation('/')}>Volver al inicio</button>
        </Container>
    )

}

export default StripeSuccess