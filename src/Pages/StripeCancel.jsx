import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function StripeCancel(){
    
    const navigation = useNavigate()

    return(
        <Container className='stripe-result-container'>
            <img src={require('.././img/logo-afectactic.png')} alt="Logo AFEC Tactic" height='100' />
            <h1>LA COMPRA HA SIDO CANCELADA</h1>
            <p>Tu pago ha sido rechazado.</p>
            <button onClick={() => navigation('/')}>Volver al inicio</button>
        </Container>
    )

}

export default StripeCancel