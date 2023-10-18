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
//console.log(process.env.REACT_APP_SECRET_KEY)
//console.log(process.env.REACT_APP_PUBLIC_KEY)
const Stripe = require('stripe');
//const stripe = Stripe('sk_test_51NpwRSDCxZVJxL3fgj7tsJ85VkpWy2DsDKp0rhMItM3EoJHyBryBlk6JKMaFnqoFvoiKmchq9pK5lgzFYCrRjubo00EflBfuoM');
const stripe = Stripe(process.env.REACT_APP_SECRET_KEY);


let seleccionPrice = 0

const date = new Date();


/* funciones globales */
function validarFechaEnRango(fecha1, fecha2, fecha3) {
  return fecha3 >= fecha1 && fecha3 <= fecha2;
}

/* funcion para calcular meses activos de la cuenta */
function calcularDiferenciaMeses(fecha1, fecha2) {
  let diferencia = (fecha2.getTime() - fecha1.getTime()) / 1000 / (3600 * 24 * 7 * 4);

  return Math.abs(Math.round(diferencia));
}

/* funcion para calcular años activos de la cuenta */
function calcularDiferenciaAnios(fecha1, fecha2) {
  const diferenciaEnMilisegundos = fecha2 - fecha1;
  const milisegundosEnUnAnio = 1000 * 60 * 60 * 24 * 365.25; // Tomamos en cuenta años bisiestos
  const diferenciaEnAnios = diferenciaEnMilisegundos / milisegundosEnUnAnio;

  return Math.abs(Math.round(diferenciaEnAnios));
}

function reverseDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
}
/* fin funciones globales */

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

  if (props.record.price) {
    context.handleFreeTrialDone();
  }

  function calculateAvailableQ(subs) {
    //ACA ESTAN LOS MAXIMOS
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
        Cuestionario 1: {localStorage.getItem("calculoC1Disponibles")}
        <hr />
        Cuestionario 2: {localStorage.getItem("calculoC2Disponibles")}
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
  const [createdSub, setCreated] = useState();
  const [startSubPeriod, setStartSubPeriod] = useState();
  const [endSubPeriod, setEndSubPeriod] = useState();
  const [isDisabled, setIsDisabled] = useState("chooseq-btn mx-3 mt-5");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Perfil';

    return () => {
      document.title = 'AFEC Tactic';
    };
  }, []);

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
        const created = new Date(subscription.created * 1000)

        setCreated(created);
        setStartSubPeriod(startDate);
        setEndSubPeriod(endDate);
        context.handleFreeTrialDone();
        context.handleSubscriptionOn();
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
      //context.handleFreeTrialDone();
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
      //let setEnd = new Date(2023, 10, 26) //PRUEBA FECHA
      let setDate = date


      //console.log(idUser)
      if (validarFechaEnRango(setStart, setEnd, setDate) === true) {
        if (record.id === idUser) {
          // muestro freetrial
          if (index === 0) {
            return (
              <Record
                record={record}
                numeroKey={index}
                idCuestionario={idCuestionario}
                key={record._id}
              />
            );
          }


          //PLAN 1 CHEACKQ1 BASICO MENSUAL
          if (seleccionPrice === "price_1NpwTeDCxZVJxL3fo1YjtMLB") {

            let maxAns = 1; //uno por el free trial
            //console.log(calcularDiferenciaMeses(createdSub, setEnd))
            const calculoMeses = calcularDiferenciaMeses(createdSub, setEnd);
            if (calculoMeses > 1) {
              maxAns = maxAns + calculoMeses
              //console.log(maxAns)
            }
            if (index === maxAns - 1 || index === maxAns) {
              //setIsDisabled('disabled chooseq-btn mx-3 mt-5')
              //console.log(index)
            }
            if (index <= maxAns) {
              const calculoCuestionariosDisponibles = maxAns - index //ACA CALCULO CUESTIONARIOS DISPONIBLES
              localStorage.setItem("calculoC1Disponibles", calculoCuestionariosDisponibles)
              return (
                <Record
                  record={record}
                  numeroKey={index}
                  idCuestionario={idCuestionario}
                  calculoCuestionariosDisponibles={calculoCuestionariosDisponibles}
                  key={record._id}
                />
              );
            }
          }

          //PLAN 1 CHEACKQ1 BASICO ANUAL
          if (seleccionPrice === "price_1NpwTeDCxZVJxL3fELqtn5cS") {

            let maxAns = 1; //uno por el free trial
            //console.log(calcularDiferenciaMeses(createdSub, setEnd))

            const calculoMeses = calcularDiferenciaMeses(createdSub, setDate);
            if (calculoMeses > 1) {
              maxAns = maxAns + calculoMeses
              //console.log(maxAns)
            }
            if (index === maxAns - 1 || index === maxAns) {
              //setIsDisabled('disabled chooseq-btn mx-3 mt-5')
              //console.log(index)
            }
            if (index <= maxAns) {
              const calculoCuestionariosDisponibles = maxAns - index //ACA CALCULO CUESTIONARIOS DISPONIBLES
              localStorage.setItem("calculoC1Disponibles", calculoCuestionariosDisponibles)
              return (
                <Record
                  record={record}
                  numeroKey={index}
                  idCuestionario={idCuestionario}
                  calculoCuestionariosDisponibles={calculoCuestionariosDisponibles}
                  key={record._id}
                />
              );
            }
          }

          //PLAN 2 CHEACKQ1 STANDARD MENSUAL
          if (seleccionPrice === "price_1NpwURDCxZVJxL3fdZAGlnqQ") {
            let maxAns = 4 * calcularDiferenciaMeses(createdSub, setEnd);
            //console.log(calcularDiferenciaMeses(createdSub, setEnd))
            if (calcularDiferenciaMeses(createdSub, setEnd) > 1) {
              maxAns = maxAns + calcularDiferenciaMeses(createdSub, setEnd)
            }

            if (index === maxAns - 1 || index === maxAns) {
              //setIsDisabled('disabled chooseq-btn mx-3 mt-5')
            }
            if (index <= maxAns) {
              const calculoCuestionariosDisponibles = maxAns - index //ACA CALCULO CUESTIONARIOS DISPONIBLES
              localStorage.setItem("calculoC1Disponibles", calculoCuestionariosDisponibles)
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

          //PLAN 2 CHEACKQ1 STANDARD ANUAL
          if (seleccionPrice === "price_1NpwURDCxZVJxL3fYmpi0Iz4") {
            let maxAns = 4 * calcularDiferenciaMeses(createdSub, setDate);
            //console.log(calcularDiferenciaMeses(createdSub, setEnd))
            if (calcularDiferenciaMeses(createdSub, setEnd) > 1) {
              maxAns = maxAns + calcularDiferenciaMeses(createdSub, setDate)
            }

            if (index === maxAns - 1 || index === maxAns) {
              //setIsDisabled('disabled chooseq-btn mx-3 mt-5')
            }
            if (index <= maxAns) {
              const calculoCuestionariosDisponibles = maxAns - index //ACA CALCULO CUESTIONARIOS DISPONIBLES
              localStorage.setItem("calculoC1Disponibles", calculoCuestionariosDisponibles)
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


          //PLAN 3 CHEACKQ1 STANDARD MENSUAL
          if (seleccionPrice === "price_1NpwVkDCxZVJxL3fJNHGpzm2") {
            let maxAns = 8 * calcularDiferenciaMeses(createdSub, setEnd);
            //console.log(calcularDiferenciaMeses(createdSub, setEnd))
            if (calcularDiferenciaMeses(createdSub, setEnd) > 1) {
              maxAns = maxAns + calcularDiferenciaMeses(createdSub, setEnd)
            }

            if (index === maxAns - 1 || index === maxAns) {
              //setIsDisabled('disabled chooseq-btn mx-3 mt-5')
            }
            if (index <= maxAns) {
              const calculoCuestionariosDisponibles = maxAns - index //ACA CALCULO CUESTIONARIOS DISPONIBLES
              localStorage.setItem("calculoC1Disponibles", calculoCuestionariosDisponibles)
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


          //PLAN 3 CHEACKQ1 STANDARD ANUAL
          if (seleccionPrice === "price_1NpwVkDCxZVJxL3fC12Fuyki") {
            let maxAns = 8 * calcularDiferenciaMeses(createdSub, setDate);
            //console.log(calcularDiferenciaMeses(createdSub, setEnd))
            if (calcularDiferenciaMeses(createdSub, setDate) > 1) {
              maxAns = maxAns + calcularDiferenciaMeses(createdSub, setDate)
            }

            if (index === maxAns - 1 || index === maxAns) {
              //setIsDisabled('disabled chooseq-btn mx-3 mt-5')
            }
            if (index <= maxAns) {
              const calculoCuestionariosDisponibles = maxAns - index //ACA CALCULO CUESTIONARIOS DISPONIBLES
              localStorage.setItem("calculoC1Disponibles", calculoCuestionariosDisponibles)
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
      //let setEnd = new Date(2023, 10, 23) //prueba fecha
      //console.log(setEnd)
      let setDate = date

      //console.log(validarFechaEnRango(setStart, setEnd, setDate))
      //console.log(calcularDiferenciaMeses(createdSub, setEnd))

      if (validarFechaEnRango(setStart, setEnd, setDate) === true) {
        //console.log(idUser)
        if (record.id === idUser) {
          // muestro freetrial
          if (index === 0) {
            return (
              <Record
                record={record}
                numeroKey={index}
                idCuestionario={idCuestionario}
                key={record._id}
              />
            );
          }

          //PLAN 1 CHEACKQ2 BASICO MENSUAL
          if (seleccionPrice === "price_1NpwTeDCxZVJxL3fo1YjtMLB") {
            context.handleSubscriptionOn();
            context.handleFreeTrialDone();;
            let maxAns = 4 * calcularDiferenciaMeses(createdSub, setEnd);
            if (index <= maxAns) {
              //console.log(maxAns)
              //console.log(index)
              if (index === maxAns) {
                //setIsDisabled('disabled chooseq-btn mx-3 mt-5')
              }
              const calculoCuestionariosDisponibles = maxAns - index //ACA CALCULO CUESTIONARIOS DISPONIBLES
              localStorage.setItem("calculoC2Disponibles", calculoCuestionariosDisponibles)
              //console.log(calculoCuestionariosDisponibles)
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

          //PLAN 1 CHEACKQ2 BASICO ANUAL
          if (seleccionPrice === "price_1NpwTeDCxZVJxL3fELqtn5cS") {
            context.handleSubscriptionOn();
            context.handleFreeTrialDone();;
            let maxAns = 4 * calcularDiferenciaMeses(createdSub, setDate);
            if (index <= maxAns) {
              //console.log(maxAns)
              //console.log(index)
              if (index === maxAns) {
                //setIsDisabled('disabled chooseq-btn mx-3 mt-5')
              }
              const calculoCuestionariosDisponibles = maxAns - index //ACA CALCULO CUESTIONARIOS DISPONIBLES
              localStorage.setItem("calculoC2Disponibles", calculoCuestionariosDisponibles)
              //console.log(calculoCuestionariosDisponibles)
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

          //PLAN 2 CHEACKQ2 STANDARD MENSUAL
          if (seleccionPrice === "price_1NpwURDCxZVJxL3fdZAGlnqQ") {
            context.handleSubscriptionOn();
            context.handleFreeTrialDone();;
            let maxAns = 12 * calcularDiferenciaMeses(createdSub, setEnd);
            if (index <= maxAns) {
              //console.log(maxAns)
              //console.log(index)
              if (index === maxAns) {
                //setIsDisabled('disabled chooseq-btn mx-3 mt-5')
              }
              const calculoCuestionariosDisponibles = maxAns - index //ACA CALCULO CUESTIONARIOS DISPONIBLES
              localStorage.setItem("calculoC2Disponibles", calculoCuestionariosDisponibles)
              //console.log(calculoCuestionariosDisponibles)
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


          //PLAN 2 CHEACKQ2 STANDARD ANUAL
          if (seleccionPrice === "price_1NpwURDCxZVJxL3fYmpi0Iz4") {
            context.handleSubscriptionOn();
            context.handleFreeTrialDone();;
            let maxAns = 12 * calcularDiferenciaMeses(createdSub, setDate);
            if (index <= maxAns) {
              //console.log(maxAns)
              //console.log(index)
              if (index === maxAns) {
                //setIsDisabled('disabled chooseq-btn mx-3 mt-5')
              }
              const calculoCuestionariosDisponibles = maxAns - index //ACA CALCULO CUESTIONARIOS DISPONIBLES
              localStorage.setItem("calculoC2Disponibles", calculoCuestionariosDisponibles)
              //console.log(calculoCuestionariosDisponibles)
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

          //PLAN 3 CHEACKQ2 PREMIUM MENSUAL
          if (seleccionPrice === "price_1NpwVkDCxZVJxL3fJNHGpzm2") {
            context.handleSubscriptionOn();
            context.handleFreeTrialDone();
            let maxAns = 24 * calcularDiferenciaMeses(createdSub, setEnd);
            if (index <= maxAns) {
              //console.log(maxAns)
              //console.log(index)
              if (index === maxAns) {
                //setIsDisabled('disabled chooseq-btn mx-3 mt-5')
              }
              const calculoCuestionariosDisponibles = maxAns - index //ACA CALCULO CUESTIONARIOS DISPONIBLES
              localStorage.setItem("calculoC2Disponibles", calculoCuestionariosDisponibles)
              //console.log(calculoCuestionariosDisponibles)
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
          //PLAN 3 CHEACKQ2 PREMIUM ANUAL
          if (seleccionPrice === "price_1NpwVkDCxZVJxL3fC12Fuyki") {
            context.handleSubscriptionOn();
            context.handleFreeTrialDone();
            let maxAns = 24 * calcularDiferenciaMeses(createdSub, setDate);
            if (index <= maxAns) {
              //console.log(maxAns)
              //console.log(index)
              if (index === maxAns) {
                //setIsDisabled('disabled chooseq-btn mx-3 mt-5')
              }
              const calculoCuestionariosDisponibles = maxAns - index //ACA CALCULO CUESTIONARIOS DISPONIBLES
              localStorage.setItem("calculoC2Disponibles", calculoCuestionariosDisponibles)
              //console.log(calculoCuestionariosDisponibles)
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
    });
  }

  function recordSuccesspayment() {
    return sub.map((record, index) => {

      const idUser = localStorage.getItem("idUser");
      if (idUser === record.id) {
        if (record.state === "active") {
          seleccionPrice = record.idPrice;
          //console.log(record.id);
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

  const logout = (e) => {
    e.preventDefault();
    context.handleLogout();
    context.handleFreeTrialAvailable();
    context.handleSubscriptionOff();
    navigate('/');
  }

  return (

    <Container className='profile-container'>
      <NavBar />

      <div className='d-flex align-items-center'>

        {context.subscriptionOn
          ? <Button className={isDisabled} as={Link} to='/choose-questionnaire'>NUEVO CUESTIONARIO</Button>
          : <>
            <Button className="chooseq-btn mx-3 mt-5" as={Link} to='/choose-questionnaire'>PRUEBA GRATIS AQUÍ</Button>
            <Button className="chooseq-btn mx-3 mt-5" as={Link} to='/subscriptions'>SUSCRIBIRSE</Button>
          </>
        }

        <Button className="chooseq-btn mx-3 mt-5" as={Link} onClick={logout}>CERRAR SESIÓN</Button>
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