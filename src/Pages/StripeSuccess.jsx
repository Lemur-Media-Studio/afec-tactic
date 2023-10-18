import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import STRIPE_KEYS from ".././services/stripeKeys";
import { Link } from "react-router-dom"
import LoginLoader from "../Components/LoginLoader";
import { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

function StripeSuccess() {

  const [loading, setLoading] = useState(false);
  const context = useContext(LoginContext)

  useEffect(() => {
    document.title = 'Pago exitoso';

    return () => {
      document.title = 'AFEC Tactic';
    };
  }, []);

  const fetchOptions = {
    headers: {
      //Authorization: `Bearer ${STRIPE_KEYS.secret}`
      Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`
    },
  }
  
  const navigation = useNavigate()

  useEffect(() => {
    Promise.all([
      fetch('https://api.stripe.com/v1/invoices', fetchOptions)
    ])
      .then(responses => Promise.all(responses.map((res) => res.json())))
      .then(json => {
        //console.log(json[0].data[0]) 
        // GUARDAR SUBSCRIPTION INVOICE PDF CUSTOMERID
        localStorage.setItem("customerID", json[0].data[0].customer);
        localStorage.setItem("subscriptionID", json[0].data[0].subscription);
        localStorage.setItem("invoicePDF", json[0].data[0].invoice_pdf);
        localStorage.setItem("invoiceID", json[0].data[0].id);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [fetchOptions]);

  function subscriptionSuccess() {
    const customerID = localStorage.getItem("customerID");
    const subscriptionID = localStorage.getItem("subscriptionID");
    const invoicePDF = localStorage.getItem("invoicePDF");
    const idUser = localStorage.getItem("idUser");
    const idPrice = localStorage.getItem("StripePay");
    const idInvoice = localStorage.getItem("invoiceID");
    context.handleSubscriptionOn();
    console.log(context);

    const submit = async (e) => {
      setLoading(true)
      try {
        const response = await fetch('https://afectactic.xyz/pago/success', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: idUser,
            idSub: subscriptionID,
            linkIn: invoicePDF,
            refUser: customerID,
            idPrice: idPrice,
            state: "active",
            idInvoice: idInvoice

          })
        });
        const data = await response.json();
        console.log(data);
 
        if (data) {
          context.handleSubscriptionOn();
          navigation("/profile");
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    return (
      <>
{/*         <Table striped bordered hover>
          <thead>
            <tr>

              <th>Referencia de usuario</th>
              <th>Número de suscripción</th>
              <th>Comprobante</th>
            </tr>
          </thead>
          <tbody>
            <tr>

              <td>{customerID}</td>
              <td>{subscriptionID}</td>
              <td><Link to={invoicePDF}>Descargar comprobante de pago</Link> </td>
            </tr>
          </tbody>
        </Table> */}
        
        <button className="home-button px-5 py-2" type="submit" onClick={submit}>Ir al perfil<LoginLoader loading={loading} /></button>
      </>
    )
  }
 

  return (
    <Container className='stripe-result-container'>
      <img src={require('.././img/logo-afectactic.png')} alt="Logo AFEC Tactic" height='100' />
      <h1>GRACIAS POR TU COMPRA</h1>
      <p>Tu pago ha sido sido aceptado.</p>
      {subscriptionSuccess()}
    </Container>
  )

}

export default StripeSuccess