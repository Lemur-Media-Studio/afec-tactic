import { Button, Container } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { Browser } from "leaflet";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { LoginContext } from "../Context/LoginContext";
import SpinnerLoading from "../Components/SpinnerLoading";


const Record = (props) => (
  <tr className='profile-table-body'>
  
    <td ><Link className="btn btn-link"  to={`/form1-suggested-session/${props.record._id}/${props.numeroKey}`} >Dia: {props.record.createdAt.replace("T"," Hora:").slice(0, props.record.createdAt.length - 3)} </Link></td>
    <td>{props.idCuestionario}</td>
    <td>{props.record.q1} - {props.record.q2} - {props.record.q7} {"..."}</td>

  </tr>
);

const Record2 = (props) => (
  <tr className='profile-table-body'>
   
    <td ><Link className="btn btn-link"  to={`/form2-suggested-session/${props.record._id}/${props.numeroKey}`} >Dia: {props.record.createdAt.replace("T"," Hora:").slice(0, props.record.createdAt.length - 3)} </Link></td>
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
function Profile() {

  const [records, setRecords] = useState([]);
  const [records2, setRecords2] = useState([]);
  const [loading, setLoading] = useState(true)

  const context = useContext(LoginContext)

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`https://afecapp.onrender.com/AnswerC1/respuestas`);
      const response2 = await fetch(`https://afecapp.onrender.com/AnswerC2/respuestas`);
      const records2 = await response2.json();

      const idUser = localStorage.getItem("idUser");



      
    
      setRecords2(records2.data);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records.data);
      setLoading(false)
    }

    getRecords();
    //console.log(records)

    return;
  }, [records.length]);
  const idUser = localStorage.getItem("idUser");



  function recordList() {
    
    return records.map((record, index) => {
      const idUser = localStorage.getItem("idUser");
      const idCuestionario = "Cuestionario 1"
      //console.log(idUser)
      if (record.id === idUser) {



        return (
          <Record
            record={record}
            numeroKey={index}
            idCuestionario={idCuestionario}

            key={record._id}
          />
        );
      }

    });
  }

  function record2List() {
     const filtroPrueba = records2.reduce((a, item) => {
        if (item.id === idUser) {
          a.push({
            ...item,
            index: a.length
          });
        }
        return a;
   
      }, [])
    
   

    return filtroPrueba.map((record, index) => {
      const idUser = localStorage.getItem("idUser");
      const idCuestionario = "Cuestionario 2"
      //console.log(idUser)
      if (record.id === idUser) {
        console.log(record)

        return (
          <Record2
            record={record}
            numeroKey={index}
            idCuestionario={idCuestionario}

            key={record._id}
          />
        );
      }

    });
  }

  return (

    <Container className='profile-container'>
      <NavBar />

      <Button className="chooseq-btn mx-3 mt-5" as={Link} to='/choose-questionnaire'>NUEVO CUESTIONARIO</Button>

      <Button className="chooseq-btn mx-3 mt-5" as={Link} to='/' onClick={context.handleLogout}>CERRAR SESIÓN</Button>

      <SpinnerLoading loading={loading}>

      <Table className="profile-table" striped bordered hover>
        <thead>
          <tr className='profile-table-title'>
     

            <th>Fecha</th>
            <th>Cuestionario</th>
            <th>Referencia</th>

          </tr>
        </thead>

          <tbody>{recordList()}</tbody>
          <tbody>{record2List()}</tbody>


        {/*
        <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
  
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
  
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td>Thornton</td>
  
        </tr>
      </tbody>
      */
        }

      </Table>

      </SpinnerLoading>

    </Container>

  )

}





export default Profile