import { Button, Container } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { Browser } from "leaflet";
import NavBar from "../Components/NavBar";
import { Link, useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { LoginContext } from "../Context/LoginContext";
import SpinnerLoading from "../Components/SpinnerLoading";
import STRIPE_KEYS from ".././services/stripeKeys";
import { loadStripe } from '@stripe/stripe-js';
import context from "react-bootstrap/esm/AccordionContext";

const Stripe = require('stripe');
const stripe = Stripe('sk_test_51NpwRSDCxZVJxL3fgj7tsJ85VkpWy2DsDKp0rhMItM3EoJHyBryBlk6JKMaFnqoFvoiKmchq9pK5lgzFYCrRjubo00EflBfuoM');

let seleccionPrice = 0
const date = new Date();





function reverseDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
}

const Record = (props) => (
  <tr className='profile-table-body'>
    <td>
      <Link className="btn btn-link" to={`/form1-suggested-session/${props.record._id}/${props.numeroKey}`}>
        {reverseDate(props.record.createdAt.slice(0, props.record.createdAt.length - 14))}
      </Link>
    </td>
    <td>{props.idCuestionario}</td>
    <td>{props.record.q1} - {props.record.q2} - {props.record.q7} {"..."}</td>
  </tr>
);

const Record2 = (props) => (
  <tr className='profile-table-body'>

    <td ><Link className="btn btn-link" to={`/form2-suggested-session/${props.record._id}/${props.numeroKey}`} >{reverseDate(props.record.createdAt.slice(0, props.record.createdAt.length - 14))} </Link></td>
    <td>{props.idCuestionario} </td>
    <td>
      <div>Salida de Balón: {props.record.q1}</div>
      <div>Juego Campo Contrario: {props.record.q2}</div>
      <div>Ataque Última Línea: {props.record.q3}</div>
      <div>Tras Recuperación: {props.record.q4}</div>
      <div>Presión Bloque Alto: {props.record.q5}</div>
      <div>Bloque Medio: {props.record.q6}</div>
      <div>Defensa de Área: {props.record.q7}</div>
      <div>Tras Pérdida: {props.record.q8}</div>

    </td>

  </tr>
);

const Record3 = (props) => {

  const context = useContext(LoginContext)
  const { startDate, endDate } = props


  function calculateAvailableQ(subs) {
    switch (subs) {
      case 'price_1NpwVkDCxZVJxL3fJNHGpzm2':
        return { cuestionario1: 8, cuestionario2: 24 };
      case 'price_1NpwURDCxZVJxL3fdZAGlnqQ':
        return { cuestionario1: 4, cuestionario2: 12 };
      case 'price_1NpwTeDCxZVJxL3fo1YjtMLB':
        return { cuestionario1: 1, cuestionario2: 4 };
      default:
        return { cuestionario1: 0, cuestionario2: 0 };
    }
  }

  const cancelSub = async (e) => {

    const response = await fetch(`https://afectactic.xyz/pago/success/${props.record._id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        state: "cancel"
      })
    });

    const { error } = await stripe.subscriptions.cancel(props.record.idSub);

    if (!error) {
      context.handleSubscriptionOff();
      window.location.reload(); // Reload to update
    }

  }


  return (
    <tr className='profile-table-body'>

      <td>

        {props.record.idPrice === 'price_1NpwVkDCxZVJxL3fJNHGpzm2' && 'Plan Premium Mensual'}
        {props.record.idPrice === 'price_1NpwVkDCxZVJxL3fC12Fuyki' && 'Plan Premium Anual'}

        {props.record.idPrice === 'price_1NpwURDCxZVJxL3fdZAGlnqQ' && 'Plan Standard Mensual'}
        {props.record.idPrice === 'price_1NpwURDCxZVJxL3fYmpi0Iz4' && 'Plan Standard Anual'}

        {props.record.idPrice === 'price_1NpwTeDCxZVJxL3fo1YjtMLB' && 'Plan Basic Mensual'}
        {props.record.idPrice === 'price_1NpwTeDCxZVJxL3fELqtn5cS' && 'Plan Basic Anual'}

      </td>

      <td>
        {startDate.toLocaleString()}
      </td>

      <td>{endDate.toLocaleString()}</td>

      <td className='py-3'>
        Cuestionario 1: {calculateAvailableQ(props.record.idPrice).cuestionario1}
        <hr />
        Cuestionario 2: {calculateAvailableQ(props.record.idPrice).cuestionario2}
      </td>

      <td><button className='profile-cancel-btn' onClick={cancelSub}>Cancelar</button></td>

    </tr>

  );

}

function Profile({ idPrice }) {

  const [records, setRecords] = useState([]);
  const [records2, setRecords2] = useState([]);
  const [sub, setSub] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startSubPeriod, setStartSubPeriod] = useState();
  const [endSubPeriod, setEndSubPeriod] = useState();

  //const navigate = useNavigate()

  const subscriptionId = localStorage.getItem("subscriptionID"); // ID de la suscripción

  const context = useContext(LoginContext)

  //console.log('idPrice', idPrice)

  //console.log('context', context)

  useEffect(() => {
    async function getSubscriptionData() {
      try {
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        const startDate = new Date(subscription.current_period_start * 1000);
        const endDate = new Date(subscription.current_period_end * 1000);

        setStartSubPeriod(startDate);
        setEndSubPeriod(endDate);
      } catch (error) {
        console.error('Error al obtener la suscripción:', error);
      }
    }

    async function getRecords() {
      const response = await fetch(`https://afectactic.xyz/AnswerC1/respuestas`);
      const response2 = await fetch(`https://afectactic.xyz/AnswerC2/respuestas`);
      const responseSub = await fetch(`https://afectactic.xyz/pago/success`);
      const sub = await responseSub.json();
      setSub(sub.data);
      //console.log('sub-data', sub.data);
      const records2 = await response2.json();

      const idUser = localStorage.getItem("idUser");

      setRecords2(records2.data);
      //console.log('records2', records2);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      context.handleFreeTrialDone();
      setRecords(records.data);
      setLoading(false);
    }

    getSubscriptionData();
    getRecords();
  }, [records.length]);


  const idUser = localStorage.getItem("idUser");



  function recordList() {
    const filtroIndex = records.reduce((a, item) => {
      if (item.id === idUser) {
        a.push({
          ...item,
          index: a.length
        });
      }
      return a;

    }, [])

    return filtroIndex.map((record, index) => {
      const idUser = localStorage.getItem("idUser");
      const idCuestionario = "Cuestionario 1"
      let setStart = startSubPeriod
      let setEnd = endSubPeriod
      let setDate = date

      function validarFechaEnRango(fecha1, fecha2, fecha3) {
        return fecha3 >= fecha1 && fecha3 <= fecha2;
      }
   
      //console.log(idUser)
      if (validarFechaEnRango(setStart, setEnd, setDate) === true) {
        if (record.id === idUser) {
          let maxAns = 0
          if (maxAns === 0) {
            if (seleccionPrice === "price_1NpwTeDCxZVJxL3fo1YjtMLB") {
              maxAns = 0;
              if (index <= maxAns) {
                return (
                  <Record
                    record={record}
                    numeroKey={index}
                    idCuestionario={idCuestionario}
                    key={record._id}
                  />
                );
              }
            }
          }
  
        }

      }       


    });
  }

  function record2List() {
    const filtroIndex = records2.reduce((a, item) => {
      if (item.id === idUser) {
        a.push({
          ...item,
          index: a.length
        });
      }
      return a;

    }, [])

    return filtroIndex.map((record, index) => {
      const idUser = localStorage.getItem("idUser");
      const idCuestionario = "Cuestionario 2"
      let setStart = startSubPeriod
      let setEnd = endSubPeriod
      let setDate = date

      function validarFechaEnRango(fecha1, fecha2, fecha3) {
        return fecha3 >= fecha1 && fecha3 <= fecha2;
      }

      if (validarFechaEnRango(setStart, setEnd, setDate) === true) {
      //console.log(idUser)
      if (record.id === idUser) {
        let maxAns = 0
        if (maxAns === 0) {
          if (seleccionPrice === "price_1NpwTeDCxZVJxL3fo1YjtMLB") {
            maxAns = 4;
            if (index <= maxAns) {
              return (
                <Record2
                  record={record}
                  numeroKey={index}
                  idCuestionario={idCuestionario}
                  key={record._id}
                />
              );
            }
          }
        }
      }

      }else{
        alert("no podes usar la app")
      }






    });
  }

  function recordSuccesspayment() {
    return sub.map((record, index) => {

      const idUser = localStorage.getItem("idUser");
      if (idUser === record.id) {
        if (record.state === "active") {
          seleccionPrice = record.idPrice
          return (
            <Record3
              record={record}
              numeroKey={index}
              startDate={startSubPeriod}
              endDate={endSubPeriod}
              key={record._id}
            />
          );
        }
      }
    });
  }

  /*   const logout = (e) => {
      e.preventDefault();
      context.handleLogout();
      context.handleFreeTrialAvailable();
      navigate('/');
    } */

  return (

    <Container className='profile-container'>
      <NavBar />

      <div className='d-flex align-items-center'>
        {context.subscriptionOn
          ? <Button className="chooseq-btn mx-3 mt-5" as={Link} to='/choose-questionnaire'>NUEVO CUESTIONARIO</Button>
          : <Button className="chooseq-btn mx-3 mt-5" as={Link} to='/subscriptions'>SUSCRIBIRSE</Button>
        }

        {!recordList && !record2List &&
          <Button className="chooseq-btn mx-3 mt-5" as={Link} to='/subscriptions'>PRUEBA GRATIS AQUÍ</Button>
        }

        <Button className="chooseq-btn mx-3 mt-5" as={Link} onClick={context.handleLogout}>CERRAR SESIÓN</Button>
      </div>


      <SpinnerLoading loading={loading}>
        <Table className="profile-table" striped bordered hover>
          <thead>
            <tr className='profile-table-title'>


              <th>PLAN ACTIVO</th>
              <th>INICIO</th>
              <th>RENOVACIÓN</th>
              <th>CUESTIONARIOS DISPONIBLES</th>
              <th>CANCELAR SUSCRIPCIÓN</th>

            </tr>
          </thead>
          <tbody>{recordSuccesspayment()}</tbody>



        </Table>

        <Table className="profile-table" striped bordered hover>
          <thead>
            <tr className='profile-table-title'>


              <th>FECHA</th>
              <th>CUESTIONARIO</th>
              <th>REFERENCIA</th>

            </tr>
          </thead>

          <tbody>{recordList()}</tbody>
          <tbody>{record2List()}</tbody>

        </Table>


      </SpinnerLoading>

    </Container>

  )

}





export default Profile