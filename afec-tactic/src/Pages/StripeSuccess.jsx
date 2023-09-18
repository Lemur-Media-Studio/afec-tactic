import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import STRIPE_KEYS from ".././services/stripeKeys";
import { Link } from "react-router-dom"
import LoginLoader from "../Components/LoginLoader";

function StripeSuccess() {
  const [loading, setLoading] = useState(false);

  const fetchOptions = {
    headers: {
      Authorization: `Bearer ${STRIPE_KEYS.secret}`
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
        localStorage.setItem("customerID", json[0].data[0].customer)
        localStorage.setItem("subscriptionID", json[0].data[0].subscription)
        localStorage.setItem("invoicePDF", json[0].data[0].invoice_pdf)
        localStorage.setItem("invoiceID", json[0].data[0].id)
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
    const submit = async (e) => {
      setLoading(true)
      try {
        const response = await fetch('https://afecapp.onrender.com/pago/success', {
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
          navigation("/")
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    return (
      <><Table striped bordered hover>
        <thead>
          <tr>

            <th>referencia de usuario</th>
            <th>numero de suscripción</th>
            <th>comprobante</th>
          </tr>
        </thead>
        <tbody>
          <tr>

            <td>{customerID}</td>
            <td>{subscriptionID}</td>
            <td><Link to={invoicePDF}>Descargar comprobante de pago</Link> </td>
          </tr>
        </tbody>
      </Table><button type="submit" onClick={submit}>Volver al inicio<LoginLoader loading={loading} /></button></>
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