import { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import NavBar from "../Components/NavBar";
import STRIPE_KEYS from ".././services/stripeKeys";
import { loadStripe } from '@stripe/stripe-js';
import LoginLoader from "../Components/LoginLoader";
import ZoomIn from "../Components/Animations/ZoomIn";
import SpinnerLoading from "../Components/SpinnerLoading";

let stripePromise;
//console.log(process.env.REACT_APP_SECRET_KEY)
//console.log(process.env.REACT_APP_PUBLIC_KEY)

const getStripe = () => {
  if (!stripePromise) {
    //stripePromise = loadStripe(STRIPE_KEYS.public);
    stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_KEY);
  }

  return stripePromise;
};

function Subscriptions() {

  const [stripeError, setStripeError] = useState(null)
  const [monthlyPlans, setMonthlyPlans] = useState([]);
  const [annualPlans, setAnnualPlans] = useState([]);
  const [loading, setLoading] = useState(false)
  const [loading2, setLoading2] = useState(true)

  useEffect(() => {
    document.title = 'Suscripciones';

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

  const redirectToCheckout = async (el) => {
  console.log("redirectToCheckout");
  setLoading(true);
  localStorage.setItem("StripePay", el.id)

  

  const checkoutOptions = {
    lineItems: [{ price: el.id, quantity: 1 }],
    mode: "subscription",
    successUrl: `${window.location.origin}/#/success`,
    cancelUrl: `${window.location.origin}/#/cancel`,
    };

  const stripe = await getStripe();

  const { error } = await stripe.redirectToCheckout(checkoutOptions);
  console.log("Stripe checkout error", error);

  if(error) setStripeError(error.message);

  if (stripeError) alert(stripeError)

  };

  useEffect(() => {
    Promise.all([
      fetch('https://api.stripe.com/v1/products', fetchOptions),
      fetch('https://api.stripe.com/v1/prices', fetchOptions)
    ])
    .then(responses => Promise.all(responses.map((res) => res.json())))
    .then(json => {
      console.log(json)
      const products = json[0].data;
      const prices = json[1].data;

      setLoading2(false);

      const monthlyPrices = [4.99, 7.99, 14.99];
      const annualPrices = [49.99, 79.99, 149.99];

      const monthlyPlans = [];
      const annualPlans = [];

      prices.forEach(el => {
        const productData = products.find(product => product.id === el.product);
        const price = el.unit_amount_decimal / 100;

        if (monthlyPrices.includes(price)) {
          monthlyPlans.push(
            <Card style={{ width: '18rem', height: '24rem', border: 'none' }} className='mx-2' key={el.id}>
              <Card.Body className="subscriptions-card d-flex flex-column justify-content-around">
                <Card.Title className="subscriptions-card-title">{productData.name}</Card.Title>
                <Card.Subtitle className="mb-2 subscriptions-card-price text-muted">{price} € / mes</Card.Subtitle>
                <Card.Text>
                  {productData.description}
                </Card.Text>
                <Button className='subscriptions-btn' onClick={() => redirectToCheckout(el)}>
                    Suscribirse
                    <LoginLoader loading={loading} />
                </Button>
              </Card.Body>
            </Card>
          );
        } else if (annualPrices.includes(price)) {
          annualPlans.push(
            <Card style={{ width: '18rem', height: '24rem', border: 'none' }} className='mx-2' key={el.id}>
              <Card.Body className="subscriptions-card yearly d-flex flex-column justify-content-around">
                <span className='subscriptions-span'>Ahorra dinero pagando anualmente</span>
                <Card.Title className="subscriptions-card-title">{productData.name}</Card.Title>
                <Card.Subtitle className="mb-2 subscriptions-card-price">{price} € / año</Card.Subtitle>
                <Card.Text>
                  {productData.description}
                </Card.Text>
                <Button className='subscriptions-btn' onClick={() => redirectToCheckout(el)}>
                    Suscribirse
                    <LoginLoader loading={loading} />
                </Button>
              </Card.Body>
            </Card>
          );
        }
      });

      setMonthlyPlans(monthlyPlans);
      setAnnualPlans(annualPlans);
    })
    .catch(error => console.error('Error fetching data:', error));
  }, [fetchOptions]);

  return (
    <>
      <NavBar />
      <Container className='mb-5'>
        <h1 className="home-title subscriptions-underline mt-5 text-center">ELIGE TU PLAN</h1>
        <SpinnerLoading loading={loading2}>
          <h2 className="subscriptions-plans-title">PLANES MENSUALES</h2>
          <ZoomIn>
            <div className='d-flex justify-content-center mt-4'>
              {monthlyPlans}
            </div>
          </ZoomIn>
          <h2 className="subscriptions-plans-title mt-5">PLANES ANUALES</h2>
          <ZoomIn>
            <div className='d-flex justify-content-center mt-4'>
              {annualPlans}
            </div>
          </ZoomIn>
        </SpinnerLoading>
      </Container>
    </>
  );
}

export default Subscriptions;