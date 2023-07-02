import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Container, FormLabel, Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  nacionalidades,
  languages,
  maritalStatusValues,
  childsValues,
  positionValues,
  footValues,
  tecnicoValues,
  mentalValues,
  fisicoValues,
  gkValues,
  contractValues,
} from "../Utils/playersInfo";
//import InputLabel from "@mui/material/InputLabel";
//import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
//import Grid from "@mui/material/Grid";

import {
  AlternateEmail,
  FourMp,
  Instagram,
  Phone,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import SaveIcon from "@mui/icons-material/Save";

import "../Pages/AddToSquad/AddToSquad.css";

export default function Edit() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    img: "",
    fn: "",
    age0: "",
    na0: "",
    na1: "",
    age1: "",
    s1: "",
    s2: "",
    s3: "",
    pn: "",
    ps: "",
    ph: "",
    alt: "",
    peso: "",

    //tecnicoValues
    tec: "",
    tec1: "",
    tec2: "",
    tec3: "",
    tec4: "",
    tec5: "",
    tec6: "",
    tec7: "",
    tec8: "",
    tec9: "",
    tec10: "",
    tec11: "",
    tec12: "",
    tec13: "",
    tec14: "",

    //fisicoValues
    fisico: "",
    fi1: "",
    fi2: "",
    fi3: "",
    fi4: "",
    fi5: "",
    fi6: "",
    fi7: "",
    fi8: "",

    //mentalValues
    mental: "",
    men1:"",
    men2:"",
    men3:"",
    men4:"",
    men5:"",
    men6:"",
    men7:"",
    men8:"",
    men9:"",
    men10:"",
    men11:"",
    men12:"",
    men13:"",
    men14:"",
    men15:"",

    //gkValues
    gk: "",
    por1:"",
    por2:"",
    por3:"",
    por4:"",
    por5:"",
    por6:"",
    por7:"",

    c: "",
    sb: "",
    ss: "",
    com: "",
    fin: "",
    agente: "",
    por0: "",
    asis: "",
    gol: "",
    cpo: "",
    gll: "",
    sc: "",
    cp: "",
    ca: "",
    phone: "",
    email: "",
    face: "",
    ig: "",
    tw: "",
    tf: "",
    bs: "",
    yt: "",
    inci: "",

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

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      name: form.name,
      surname: form.surname,
      img: form.img,
      fn: form.fn,
      age0: form.age0,
      na0: form.na0,
      na1: form.na1,
      age1: form.age1,
      s1: form.s1,
      s2: form.s2,
      s3: form.s3,
      pn: form.pn,
      ps: form.ps,
      ph: form.ph,
      alt: form.alt,
      peso: form.peso,
      
      //tecnicoValues
      tec: form.tec,
      tec1: form.tec1,
      tec2: form.tec2,
      tec3: form.tec3,
      tec4: form.tec4,
      tec5: form.tec5,
      tec6: form.tec6,
      tec7: form.tec7,
      tec8: form.tec8,
      tec9: form.tec9,
      tec10: form.tec10,
      tec11: form.tec11,
      tec12: form.tec12,
      tec13: form.tec13,
      tec14: form.tec14,

      //fisicoValues
      fisico: form.fisico,
      fi1: form.fi1,
      fi2: form.fi2,
      fi3: form.fi3,
      fi4: form.fi4,
      fi5: form.fi5,
      fi6: form.fi6,
      fi7: form.fi7,
      fi8: form.fi8,

      //mentalValues
      mental: form.mental,
      men1:form.men1,
      men2:form.men2,
      men3:form.men3,
      men4:form.men4,
      men5:form.men5,
      men6:form.men6,
      men7:form.men7,
      men8:form.men8,
      men9:form.men9,
      men10:form.men10,
      men11:form.men11,
      men12:form.men12,
      men13:form.men13,
      men14:form.men14,
      men15:form.men15,

      //gkValues
      gk: form.gk,
      por1:form.por1,
      por2:form.por2,
      por3:form.por3,
      por4:form.por4,
      por5:form.por5,
      por6:form.por6,
      por7:form.por7,


      c: form.c,
      sb: form.sb,
      ss: form.ss,
      com: form.com,
      fin: form.fin,
      agente: form.agente,
      por0: form.por0,
      asis: form.asis,
      gol: form.gol,
      cpo: form.cpo,
      gll: form.gll,
      sc: form.sc,
      cp: form.cp,
      ca: form.ca,
      phone: form.phone,
      email: form.email,
      face: form.face,
      ig: form.ig,
      tw: form.tw,
      tf: form.tf,
      bs: form.bs,
      yt: form.yt,
      inci: form.inci,
    };

    // This will send a post request to update the data in the database.
    await fetch(`https://lemurpromanagement-mdg.app/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <Container sx={{ mt: 5, color: "#fff" }}>
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{
          "& .MuiTextField-root": { mt: 5, mx: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <h2>DATOS PERSONALES</h2>

        <TextField
          sx={{ width: "24ch", color: "white !important" }}
          required
          label={"Nombre"}
          id="name"
          value={form.name}
          onChange={(e) => updateForm({ name: e.target.value })}
        />
        <TextField
          sx={{ width: "24ch" }}
          required
          label="Apellido"
          id="surname"
          value={form.surname}
          onChange={(e) => updateForm({ surname: e.target.value })}
        />

        <TextField
          sx={{ width: "24ch" }}
          required
          label="IMG"
          id="img"
          value={form.img}
          onChange={(e) => updateForm({ img: e.target.value })}
        />
        <TextField
          type="date"
          sx={{ width: "24ch" }}
          required
          id="fn"
          label="Fecha de nacimiento"
          InputLabelProps={{ shrink: true, required: true }}
          value={form.fn}
          onChange={(e) => updateForm({ fn: e.target.value })}
        
        />


        <TextField
          sx={{ width: "24ch" }}
          required
          id="outlined-select-currency"
          select
          label="Nacionalidad"
          value={form.na0}
          onChange={(e) => updateForm({ na0: e.target.value })}
        >
          {nacionalidades.map((option) => (
            <MenuItem key={option.value} className='dropdown-item' value={option.imgValue}>
              <img
                alt="nacionalidad"
                src={option.imgValue}
                key={option.imgValue}
              ></img>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          sx={{ width: "24ch" }}
          required
          id="outlined-select-currency"
          select
          label="Segunda nacionalidad"
          value={form.na1}
          onChange={(e) => updateForm({ na1: e.target.value })}
        >
          {nacionalidades.map((option) => (
            <MenuItem key={option.value} className='dropdown-item' value={option.imgValue}>
              <img
                alt="nacionalidad"
                src={option.imgValue}
                key={option.imgValue}
              ></img>
              {option.value}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          sx={{ width: "24ch" }}
          required
          id="outlined-select-currency"
          select
          label="Idiomas"
          value={form.s1}
          onChange={(e) => updateForm({ s1: e.target.value })}
        >
          {languages.map((option) => (
            <MenuItem key={option.value} className='dropdown-item' value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          sx={{ width: "24ch" }}
          required
          id="outlined-select-currency"
          select
          label="Estado Civil"
          value={form.s2}
          onChange={(e) => updateForm({ s2: e.target.value })}
        >
          {maritalStatusValues.map((option) => (
            <MenuItem key={option.value} className='dropdown-item' value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          sx={{ width: "24ch" }}
          required
          id="outlined-select-currency"
          select
          label="Hijos"
          value={form.s3}
          onChange={(e) => updateForm({ s3: e.target.value })}
        >
          {childsValues.map((option) => (
            <MenuItem key={option.value} className='dropdown-item' value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        {/**/}
        <div className="line-form"></div>
        <h2>PERFIL FUTBOLÍSTICO</h2>
        <TextField
          sx={{ width: "24ch" }}
          required
          id="outlined-select-currency"
          select
          label="Posicion natural"
          value={form.pn}
          onChange={(e) => updateForm({ pn: e.target.value })}
        >
          {positionValues.map((option) => (
            <MenuItem key={option.value} className='dropdown-item' value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          sx={{ width: "24ch" }}
          required
          id="outlined-select-currency"
          select
          label="Posicion secundaria"
          value={form.ps}
          onChange={(e) => updateForm({ ps: e.target.value })}
        >
          {positionValues.map((option) => (
            <MenuItem key={option.value} className='dropdown-item' value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          sx={{ width: "24ch" }}
          required
          id="outlined-select-currency"
          select
          label="Perfil habil"
          value={form.ph}
          onChange={(e) => updateForm({ ph: e.target.value })}
        >
          {footValues.map((option) => (
            <MenuItem key={option.value} className='dropdown-item' value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>

        <FormLabel sx={{ mt: 5 }} className='form-label'>FÍSICO</FormLabel>

        <TextField
          sx={{ width: "14ch" }}
          label="Altura"
          value={form.alt}
          onChange={(e) => updateForm({ alt: e.target.value })}
        />
        <TextField
          sx={{ width: "14ch" }}
          label="Peso"
          value={form.peso}
          onChange={(e) => updateForm({ peso: e.target.value })}
        />


        <Grid
          className="attributes"
          container
          display="flex"
          wrap="wrap"
          justifyContent="center"
          textAlign="left"
          sx={{ mt: 8 }}
        >

          <Grid xs={12} sx={{ textAlign: 'center', mt: 4, mb: 2 }}>
            <h3>ATRIBUTOS</h3>
          </Grid>

          <Grid xs={3}>
            <FormLabel
              sx={{ mt: 2, pl: 5 }}
              component="legend"
              className="attributes-label"
            >
               TÉCNICO
            </FormLabel>
            <ul>
              <li><FormControlLabel label="Cabeceo" control={<Checkbox value="Cabeceo" onChange={(e) => updateForm({ tec1: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Centros" control={<Checkbox value="Centros" onChange={(e) => updateForm({ tec2: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Control" control={<Checkbox value="Control" onChange={(e) => updateForm({ tec3: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Entradas" control={<Checkbox value="Entradas" onChange={(e) => updateForm({ tec4: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Marcaje" control={<Checkbox value="Marcaje" onChange={(e) => updateForm({ tec5: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Pases" control={<Checkbox value="Pases" onChange={(e) => updateForm({ tec6: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Penalties" control={<Checkbox value="Penalties" onChange={(e) => updateForm({ tec7: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Regate" control={<Checkbox value="Regate" onChange={(e) => updateForm({ tec8: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Remate" control={<Checkbox value="Remate" onChange={(e) => updateForm({ tec9: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Saques de esquina" control={<Checkbox value="Saques de esquina" onChange={(e) => updateForm({ tec10: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Técnica" control={<Checkbox value="Técnica" onChange={(e) => updateForm({ tec11: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Tiros lejanos" control={<Checkbox value="Tiros lejanos" onChange={(e) => updateForm({ tec12: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Tiros Libres" control={<Checkbox value="Tiros Libres" onChange={(e) => updateForm({ tec13: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Uno contra uno" control={<Checkbox value="Uno contra uno" onChange={(e) => updateForm({ tec14: e.target.value })}></Checkbox>}></FormControlLabel></li>

              {/*{tecnicoValues.map((option) => (
                <li>
                  <FormControlLabel
                    value={option.value}
                    control={<Checkbox value={option.value} checked={(option.value)} onChange={(e) =>
                      updateForm({ tec: e.target.value })
                    } />}
                    label={option.value}
                    labelPlacement="right"
                  />
                </li>
              ))}  */
              }
            </ul>
          </Grid>

          <Grid xs={3}>
            <FormLabel
              sx={{ mt: 2, pl: 5 }}
              component="legend"
              className="attributes-label"
            >
              FISICO
            </FormLabel>
            <ul>
              <li><FormControlLabel label="Aceleración" control={<Checkbox value="Aceleración" onChange={(e) => updateForm({ fi1: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Agilidad" control={<Checkbox value="Agilidad" onChange={(e) => updateForm({ fi2: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Alcance de salto" control={<Checkbox value="Alcance de salto" onChange={(e) => updateForm({ fi3: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Equilibrio" control={<Checkbox value="Equilibrio" onChange={(e) => updateForm({ fi4: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Fuerza" control={<Checkbox value="Fuerza" onChange={(e) => updateForm({ fi5: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Recuperación física" control={<Checkbox value="Recuperación física" onChange={(e) => updateForm({ fi6: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Resistencia" control={<Checkbox value="Resistencia" onChange={(e) => updateForm({ fi7: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Velocidad" control={<Checkbox value="Velocidad" onChange={(e) => updateForm({ fi8: e.target.value })}></Checkbox>}></FormControlLabel></li>
            </ul>
          </Grid>
          <Grid xs={3}>
            <FormLabel
              sx={{ mt: 2, pl: 5 }}
              component="legend"
              className="attributes-label"
            >
              MENTAL
            </FormLabel>
            <ul>
            <li><FormControlLabel label="Blocaje" control={<Checkbox value="Blocaje" onChange={(e) => updateForm({ men1: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Comunicación" control={<Checkbox value="Comunicación" onChange={(e) => updateForm({ men2: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Excentricidad" control={<Checkbox value="Excentricidad" onChange={(e) => updateForm({ men3: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Agresividad" control={<Checkbox value="Agresividad" onChange={(e) => updateForm({ men4: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Anticipación" control={<Checkbox value="Anticipación" onChange={(e) => updateForm({ men5: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Colocación" control={<Checkbox value="Colocación" onChange={(e) => updateForm({ men6: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Decisiones" control={<Checkbox value="Decisiones" onChange={(e) => updateForm({ men7: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Desmarques" control={<Checkbox value="Desmarques" onChange={(e) => updateForm({ men8: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Determinación" control={<Checkbox value="Determinación" onChange={(e) => updateForm({ men9: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Juego en equipo" control={<Checkbox value="Juego en equipo" onChange={(e) => updateForm({ men10: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Liderazgo" control={<Checkbox value="Liderazgo" onChange={(e) => updateForm({ men11: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Sacrificio" control={<Checkbox value="Sacrificio" onChange={(e) => updateForm({ men12: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Talento" control={<Checkbox value="Talento" onChange={(e) => updateForm({ men13: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Valentía" control={<Checkbox value="Valentía" onChange={(e) => updateForm({ men14: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Visión" control={<Checkbox value="Visión" onChange={(e) => updateForm({ men15: e.target.value })}></Checkbox>}></FormControlLabel></li>
            </ul>
          </Grid>
          <Grid xs={3}>
            <FormLabel
              sx={{ mt: 2, pl: 5 }}
              component="legend"
              className="attributes-label"
            >
              PORTERO
            </FormLabel>
            <ul>
              <li><FormControlLabel label="Alcance aéreo" control={<Checkbox value="Alcance aéreo" onChange={(e) => updateForm({ por1: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Golpeo de puños" control={<Checkbox value="Golpeo de puños" onChange={(e) => updateForm({ por2: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Mando en el area" control={<Checkbox value="Mando en el area" onChange={(e) => updateForm({ por3: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Reflejos" control={<Checkbox value="Reflejos" onChange={(e) => updateForm({ por4: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Salidas (tendecia)" control={<Checkbox value="Salidas (tendecia)" onChange={(e) => updateForm({ por5: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Saques con la mano" control={<Checkbox value="Saques con la mano" onChange={(e) => updateForm({ por6: e.target.value })}></Checkbox>}></FormControlLabel></li>
              <li><FormControlLabel label="Saques de puerta" control={<Checkbox value="Saques de puerta" onChange={(e) => updateForm({ por7: e.target.value })}></Checkbox>}></FormControlLabel></li>
            </ul>
    
          </Grid>
        </Grid>

        <div>
          <TextField
            sx={{ width: { xs: "30ch", sm: "65ch" } }}
            label="Características"
            id="outlined-multiline-static"
            rows={6}
            multiline
            value={form.c}
            onChange={(e) => updateForm({ c: e.target.value })}
          />
        </div>

        <div className="line-form"></div>

        <h2>CONTRATO</h2>

        <TextField
          sx={{ width: '24ch' }}
          id="outlined-required"
          label="Salario bruto"
          value={form.sb}
          onChange={(e) => updateForm({ sb: e.target.value })}

        />

        <TextField
          sx={{ width: '24ch' }}
          id="outlined-required"
          label="Alta en SS"
          value={form.ss}
          onChange={(e) => updateForm({ ss: e.target.value })}

        />

        <TextField
          sx={{ width: '24ch' }}
          id="outlined-required"
          label="Comienzo"
          value={form.com}
          onChange={(e) => updateForm({ com: e.target.value })}

        />

        <TextField
          sx={{ width: '24ch' }}
          id="outlined-required"
          label="Final"
          value={form.fin}
          onChange={(e) => updateForm({ fin: e.target.value })}

        />

        <TextField
          sx={{ width: { xs: "30ch", sm: "24ch" } }}
          required
          label="Agente"
          id="Agente"
          value={form.agente}
          onChange={(e) => updateForm({ agente: e.target.value })}
        />

        <FormLabel className='form-label' sx={{ mt: 5 }}>PRIMAS</FormLabel>

        <TextField
          sx={{ width: '24ch' }}
          id="outlined-required"
          label="Portería en 0"
          value={form.por0}
          onChange={(e) => updateForm({ por0: e.target.value })}

        />

        <TextField
          sx={{ width: '24ch' }}
          id="outlined-required"
          label="Asistencia"
          value={form.asis}
          onChange={(e) => updateForm({ asis: e.target.value })}

        />

        <TextField
          sx={{ width: '24ch' }}
          id="outlined-required"
          label="Gol"
          value={form.gol}
          onChange={(e) => updateForm({ gol: e.target.value })}

        />

        <TextField
          sx={{ width: '24ch' }}
          id="outlined-required"
          label="Clasificar a Playoff"
          value={form.cpo}
          onChange={(e) => updateForm({ cpo: e.target.value })}

        />

        <TextField
          sx={{ width: '24ch' }}
          id="outlined-required"
          label="Ganar la Liga"
          value={form.gll}
          onChange={(e) => updateForm({ gll: e.target.value })}

        />

        <div className="line-form"></div>

        <h2>CONTACTO Y LINKS</h2>
        <TextField
          sx={{ width: "24ch" }}
          required
          label={<Phone />}
          id="img"
          value={form.phone}
          onChange={(e) => updateForm({ phone: e.target.value })}
        />
        <TextField
          sx={{ width: "24ch" }}
          required
          label={<AlternateEmail />}
          id="img"
          value={form.email}
          onChange={(e) => updateForm({ email: e.target.value })}
        />
        <FormLabel className='form-label' sx={{ mt: 5 }}>
          REDES SOCIALES
        </FormLabel>
        <TextField
          sx={{ width: "24ch" }}
          required
          label={<FacebookIcon />}
          id="img"
          value={form.face}
          onChange={(e) => updateForm({ face: e.target.value })}
        />
        <TextField
          sx={{ width: "24ch" }}
          required
          label={<Instagram />}
          id="img"
          value={form.ig}
          onChange={(e) => updateForm({ ig: e.target.value })}
        />
        <TextField
          sx={{ width: "24ch" }}
          required
          label={<Twitter />}
          id="img"
          value={form.tw}
          onChange={(e) => updateForm({ tw: e.target.value })}
        />
        <FormLabel className='form-label' sx={{ mt: 5 }}>
          LINKS
        </FormLabel>
        <TextField
          sx={{ width: "24ch" }}
          required
          label="Transfermarkt"
          id="img"
          value={form.tf}
          onChange={(e) => updateForm({ tf: e.target.value })}
        />
        <TextField
          sx={{ width: "24ch" }}
          required
          label="Besoccer"
          id="img"
          value={form.bs}
          onChange={(e) => updateForm({ bs: e.target.value })}
        />
        <TextField
          sx={{ width: "24ch" }}
          required
          label={<YouTube />}
          id="img"
          value={form.yt}
          onChange={(e) => updateForm({ yt: e.target.value })}
        />
        <div className="line-form"></div>

        <h2>INCIDENCIAS</h2>

        <div>
          <TextField
            sx={{ width: { xs: "30ch", sm: "65ch" } }}
            label="Ingresar incidencias"
            id="outlined-multiline-static"
            rows={6}
            multiline
            value={form.inci}
            onChange={(e) => updateForm({ inci: e.target.value })}
          />
        </div>

        <div className="form-group">
          <Button
            type="submit"
            sx={{
              mt: 5,
              mb: 5,
              backgroundColor: "#9b0181 !important",
              color: "#fff !important",
            }}
            size="small"
            startIcon={<SaveIcon />}
            variant="contained"
            value="Create person"
          >
            Guardar
          </Button>
        </div>
      </Box>
    </Container>
  );
}
