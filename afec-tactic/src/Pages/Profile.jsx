import { Button, Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import { Browser } from "leaflet";
import NavBar from "../Components/NavBar";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

let idUser = localStorage.getItem("idUser");
const Record = (props) => (
  <tr>
    <td ><Link className="btn btn-link" to={`/form1-suggested-session/${props.record._id}`}>{props.record.createdAt} </Link></td>
    <td>{props.record.q1} - {props.record.q2} - {props.record.q7} {"..."}</td>


  </tr>
);
function Profile() {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`https://afecapp.onrender.com/AnswerC1/respuestas`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records.data);
    }

    getRecords();
    console.log(records)

    return;
  }, [records.length]);


  function recordList() {
    return records.map((record) => {
      console.log(idUser)
      if (record.id === idUser) {
        return (
          <Record
            record={record}

            key={record._id}
          />
        );
      }

    });
  }

  return (

    <Container>
      <NavBar />
      <Link as={Button} to='/choose-questionnaire'>
        Agregar
      </Link>
      <Table  className="mt-5" striped bordered hover>
        <thead>
          <tr>

            <th>Fecha</th>
            <th>Referencia</th>

          </tr>
        </thead>
        <tbody>{recordList()}</tbody>

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








    </Container>

  )

}





export default Profile