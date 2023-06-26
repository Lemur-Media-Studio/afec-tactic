import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SdCardAlertIcon from '@mui/icons-material/SdCardAlert';
import Paper from '@mui/material/Paper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./SquadPlayerDetails.css"
import { Button, Container, FormLabel } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  AlternateEmail,
  Instagram,
  Phone,
  Twitter,
  YouTube,
} from "@mui/icons-material";

export default function SquadPlayerDetails() {
  const [form, setForm] = useState({
    name: "",
    surname:"",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`https://lemurpromanagement-mdg.app/record/${params.id.toString()}`);

      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);


  const [value, setValue] = React.useState();
  const ref = React.useRef(null);

  const [details, setDetails] = useState();

  const perfil = () => {
    setDetails(
      <Grid
      className="attributes"
      container
      display="flex"
      wrap="wrap"
      justifyContent="center"
      textAlign="left"
      sx={{ mt: 4 }}
      >
      <Grid xs={3}>
      <FormLabel
        sx={{ mt: 2, pl: 5 }}
        component="legend"
        className="playerinfo-container"
      >
        DATOS PERSONALES
      </FormLabel>
      <ul>
        <li>Edad: {form.age1}</li>
        <li>Fecha de nacimiento: {form.fn}</li>
        <li>
          Nacionalidad: <img src={form.na0} alt="Primera nacionalidad"></img>
        </li>
{/*         <li>
          Segunda nacionalidad: <img src={form.na1} alt="Primera nacionalidad"></img>
        </li> */}
        <li>Idiomas: {form.s1}</li>
        <li>Estado civil: {form.s2}</li>
        <li>Hijos: {form.s3}</li>
      </ul>
    </Grid>

    <Grid xs={3}>
      <FormLabel
        sx={{ mt: 2, pl: 5 }}
        component="legend"
        className="playerinfo-container"
      >
        FISICO
      </FormLabel>
      <ul>
        <li>Altura: {form.alt}</li>
        <li>Peso: {form.peso}</li>
{/*         <li>Peso ideal: {form.pesoI}</li> */}
      </ul>
    </Grid>
    <Grid xs={3}>
      <FormLabel
        sx={{ mt: 2, pl: 5 }}
        component="legend"
        className="playerinfo-container"
      >
        ATRIBUTOS FUTBOLÍSTICOS
      </FormLabel>
      <ul>
          <li>Perfil hábil: {form.ph}</li>
          <li>
{/*             {form.tec} */}
            {form.gk}
          </li>
      </ul>
    </Grid>
    <Grid xs={3}>
      <FormLabel
        sx={{ mt: 2, pl: 5 }}
        component="legend"
        className="playerinfo-container"
      >
        ATRIBUTOS MENTALES
      </FormLabel>
      <ul>
          <li>
            {form.mental}
          </li>
      </ul>
    </Grid>
    </Grid>
    )
  }

  const contrato = () => {
    setDetails(
      <Grid
      className="attributes"
      container
      display="flex"
      wrap="wrap"
      justifyContent="center"
      textAlign="left"
      sx={{ mt: 4 }}
      >
      <Grid xs={4}>
      <FormLabel
        sx={{ mt: 2, pl: 5 }}
        component="legend"
        className="playerinfo-container"
      >
        DETALLES
      </FormLabel>
      <ul>
        <li>Salario bruto: {form.sb}</li>
        <li>Comienzo: {form.com}</li>
        <li>Final: {form.fin}</li>
        <li>Alta en SS: {form.ss}</li>
        <li>Agente: {form.agente}</li>
      </ul>
    </Grid>

    <Grid xs={2}>
      <FormLabel
        sx={{ mt: 2, pl: 5 }}
        component="legend"
        className="playerinfo-container"
      >
        PRIMAS
      </FormLabel>
      <ul>
        <li>Portería en 0: {form.por0}</li>
        <li>Asistencia: {form.asis}</li>
        <li>Gol: {form.gol}</li>
        <li>Clasificar a Playoff: {form.cpo}</li>
        <li>Ganar la Liga: {form.gll}</li>
      </ul>
    </Grid>
    </Grid>
    )
  }

  const contacto = () => {
    setDetails(
      <Grid
      className="attributes"
      container
      display="flex"
      wrap="wrap"
      justifyContent="center"
      textAlign="left"
      sx={{ mt: 4 }}
      >
      <Grid xs={4}>
      <FormLabel
        sx={{ mt: 2, pl: 5 }}
        component="legend"
        className="playerinfo-container"
      >
        CONTACTO
      </FormLabel>
      <ul>
        <li>{form.ph}</li>
        <li>{form.email}</li>
      </ul>
    </Grid>

    <Grid xs={4}>
      <FormLabel
        sx={{ mt: 2, pl: 5 }}
        component="legend"
        className="playerinfo-container"
      >
        REDES SOCIALES
      </FormLabel>
      <ul>
        <li><Button><FacebookIcon /> <a href={form.fc} className="social-link">Facebook</a></Button></li>
        <li><Button><Instagram /> <a href={form.fc} className="social-link">Instagram</a></Button></li>
        <li><Button><Twitter /> <a href={form.fc} className="social-link">Twitter</a></Button></li>
      </ul>
    </Grid>

    <Grid xs={2}>
      <FormLabel
        sx={{ mt: 2, pl: 5 }}
        component="legend"
        className="playerinfo-container"
      >
        LINKS
      </FormLabel>
      <ul>
      <li><Button className='btn-social'><a href={form.tf} className="social-link">Transfermarkt</a></Button></li>
        <li><Button><a href={form.bs} className="social-link">Besoccer</a></Button></li>
        <li><Button><YouTube /> <a href={form.yt} className="social-link">YouTube</a></Button></li>
      </ul>
    </Grid>
    </Grid>
    )
  }

    const incidencias = () => {
      setDetails(
        <Grid
        className="attributes"
        container
        display="flex"
        wrap="wrap"
        justifyContent="center"
        textAlign="left"
        sx={{ mt: 4 }}
        >
          <ul>
            <li className='li-inc'>{form.inci}</li>
          </ul>
        </Grid>
      )
  }

  const showPhysicalAttributes = Array.isArray(form.tec) ? form.fisico.filter(attribute => attribute !== null && attribute !== "").join(' - ') : "";
  const showTecAttributes = Array.isArray(form.tec) ? form.tec.filter(attribute => attribute !== null && attribute !== "").join(' - ') : "";
  const showGKAttributes = Array.isArray(form.tec) ? form.gk.filter(attribute => attribute !== null && attribute !== "").join(' - ') : "";
  const showMentalAttributes = Array.isArray(form.tec) ? form.mental.filter(attribute => attribute !== null && attribute !== "").join(' - ') : "";

  // This following section will display the form that takes input from the user to update the data.
  return (
  <Container sx={{pb:50}}>

  <Box sx={{ pb: 7, mt: 8 }} ref={ref}>

  <Grid
      container
      display="flex"
      wrap="wrap"
      justifyContent="left"
      alignItems="center"
      textAlign="left"
      sx={{ mt: 15, mx:0.15, mb:-0.9 }}
      >
      <Grid xs={1}>
      <img src={form.img}  alt="img-jugador" height="150"
            width="115"></img>
    </Grid>

    <Grid xs={11}>
      <ul>
        <li><h1 className='playerName-h1'>{form.name + " " + form.surname}</h1></li>
        <li><h3 className='playerPos-h3'>{form.pn}</h3></li>
      </ul>
    </Grid>
    </Grid>

    <h2 className="spdetails-title">
      PERFIL
    </h2>

    <Grid
      className="attributes"
      container
      display="flex"
      wrap="wrap"
      justifyContent="center"
      textAlign="left"
      sx={{ mt: 0 }}
      >
      <Grid xs={3}>
      <FormLabel
        sx={{ mt: 2, pl: 5 }}
        component="legend"
        className="playerinfo-container"
      >
        DATOS PERSONALES
      </FormLabel>
      <ul>
        <li>Edad: {form.age1}</li>
        <li>Fecha de nacimiento: {form.fn}</li>
        <li>
          Nacionalidad: <img src={form.na0} alt="Primera nacionalidad"></img>
        </li>
{/*         <li>
          Segunda nacionalidad: <img src={form.na1} alt="Primera nacionalidad"></img>
        </li> */}
        <li>Idiomas: {form.s1}</li>
        <li>Estado civil: {form.s2}</li>
        <li>Hijos: {form.s3}</li>
      </ul>
    </Grid>

    <Grid xs={3}>
      <FormLabel
        sx={{ mt: 2, pl: 5 }}
        component="legend"
        className="playerinfo-container"
      >
        FISICO
      </FormLabel>
      <ul>
        <li>Altura: {form.alt} cm.</li>
        <li>Peso: {form.peso} kg.</li>
{/*         <li>Peso ideal: {form.pesoI}</li> */}
      </ul>
    </Grid>
    <Grid xs={3}>
      <FormLabel
        sx={{ mt: 2, pl: 5 }}
        component="legend"
        className="playerinfo-container"
      >
        ATRIBUTOS FUTBOLÍSTICOS
      </FormLabel>
      <ul>
          <li>Perfil hábil: {form.ph}</li>
          <li>Técnicos: {showTecAttributes} {showGKAttributes}</li>
          <li>Físicos: {showPhysicalAttributes}</li>
      </ul>
    </Grid>
    <Grid xs={3}>
      <FormLabel
        sx={{ mt: 2, pl: 5 }}
        component="legend"
        className="playerinfo-container"
      >
        ATRIBUTOS MENTALES
      </FormLabel>
      <ul>
          <li>
            {showMentalAttributes}
          </li>
      </ul>
    </Grid>
    </Grid>
      
    <h2 className="spdetails-title">
      CONTRATO
    </h2>
    <Grid
      className="attributes"
      container
      display="flex"
      wrap="wrap"
      justifyContent="center"
      textAlign="left"
      sx={{ mt: 0 }}
      >
      <Grid xs={4}>
      <FormLabel
        sx={{ mt: 2, pl: 5 }}
        component="legend"
        className="playerinfo-container"
      >
        DETALLES
      </FormLabel>
      <ul>
        <li>Salario bruto: {form.sb}</li>
        <li>Comienzo: {form.com}</li>
        <li>Final: {form.fin}</li>
        <li>Alta en SS: {form.ss}</li>
        <li>Agente: {form.agente}</li>
      </ul>
    </Grid>

    <Grid xs={2}>
      <FormLabel
        sx={{ mt: 2, pl: 5 }}
        component="legend"
        className="playerinfo-container"
      >
        PRIMAS
      </FormLabel>
      <ul>
        <li>Portería en 0: {form.por0}</li>
        <li>Asistencia: {form.asis}</li>
        <li>Gol: {form.gol}</li>
        <li>Clasificar a Playoff: {form.cpo}</li>
        <li>Ganar la Liga: {form.gll}</li>
      </ul>
    </Grid>
    </Grid>

    <h2 className="spdetails-title">
      CONTACTO Y REDES
    </h2>
    <Grid
      className="attributes"
      container
      display="flex"
      wrap="wrap"
      justifyContent="center"
      textAlign="left"
      sx={{ mt: 0 }}
      >
      <Grid xs={4}>
      <FormLabel
        sx={{ mt: 2, pl: 5 }}
        component="legend"
        className="playerinfo-container"
      >
        CONTACTO
      </FormLabel>
      <ul>
        <li>{form.phone}</li>
        <li>{form.email}</li>
      </ul>
    </Grid>

    <Grid xs={4}>
      <FormLabel
        sx={{ mt: 2, pl: 5 }}
        component="legend"
        className="playerinfo-container"
      >
        REDES SOCIALES
      </FormLabel>
      <ul>
        <li><Button><FacebookIcon className='btn-social' /> <a href={form.fc} rel="noreferrer" target="_blank" className="social-link">Facebook</a></Button></li>
        <li><Button><Instagram className='btn-social' /> <a href={form.ig} rel="noreferrer" target="_blank" className="social-link">Instagram</a></Button></li>
        <li><Button><Twitter className='btn-social' /> <a href={form.tw} rel="noreferrer" target="_blank" className="social-link">Twitter</a></Button></li>
      </ul>
    </Grid>

    <Grid xs={2}>
      <FormLabel
        sx={{ mt: 2, pl: 5 }}
        component="legend"
        className="playerinfo-container"
      >
        LINKS
      </FormLabel>
      <ul>
        <li><Button><a href={form.tf} rel="noreferrer" target="_blank" className="social-link">Transfermarkt</a></Button></li>
        <li><Button><a href={form.bs} rel="noreferrer" target="_blank" className="social-link">Besoccer</a></Button></li>
        <li><Button><YouTube className='btn-social' /> <a href={form.yt} className="social-link">YouTube</a></Button></li>
      </ul>
    </Grid>
    </Grid>

    <h2 className="spdetails-title">
      INCIDENCIAS
    </h2>
    <Grid
        className="attributes"
        container
        display="flex"
        wrap="wrap"
        justifyContent="center"
        textAlign="left"
        sx={{ mt: 0 }}
        >
          <ul>
            <li className='li-inc'>{form.inci}</li>
          </ul>
        </Grid>
  </Box>

{/*       <h1>Detalles del jugador</h1>
      <img src={form.img}  alt="img-jugador"></img>
      {form.img}
        <h1>Posicion natural: {form.pn}</h1>
        <h1>Posicion secundaria: {form.ps}</h1>
        <h1>Perfil habil: {form.ph}</h1>
        <h1>Altura: {form.alt}</h1>
        <h1>Peso: {form.peso}</h1>
        <h1>Atributo Tecnico: {form.tec}</h1>
        <h1>Atributo Fisico: {form.fisico}</h1>
        <h1>Atributo Mental: {form.mental}</h1>
        <h1>Atributo Portero: {form.gk}</h1>
        <h1>Caracteristicas: {form.c}</h1>
        <h1>Agente: {form.agente}</h1>
        <h1>Situacion Contractual: {form.sc}</h1>
        <h1>Contratado por: {form.cp}</h1>
        <h1>Cedido a: {form.ca}</h1>
        <h1>Telefono: {form.ph}</h1>
        <h1>Email: {form.email}</h1>
        <h1>Facebook: {form.face}</h1>
        <h1>Instagram: {form.ig}</h1>
        <h1>Twitter: {form.tw}</h1>
        <h1>Transfermarkt: {form.tf}</h1>
        <h1>Besoccer: {form.bs}</h1>
        <h1>YouTube: {form.yt}</h1>
        <h1>incidencias: {form.inci}</h1>
        <br /> */}

  
    </Container>
  );
}