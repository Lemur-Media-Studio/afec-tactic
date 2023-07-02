import React, { useEffect, useState } from "react";
import {
  Button, Container, Grid,
} from "@mui/material";

// Tables imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from "react-router-dom";
import "./SquadPlayer.css";
import Loading from "../../Components/Spinner/Spinner";
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import "./SquadField.css";


function calculateAge(dateString) {
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000));
}

// List only POR players function
const RecordPOR = (props) => (
  <TableBody>

    <TableRow

    >
      <TableCell component="th" scope="row" sx={{ color: 'white' }} as={Link} className='player-name-table' to={`/detail/${props.record._id}`}>
        {props.record.name + " " + props.record.surname}

      </TableCell>

      <TableCell align="center" sx={{ color: 'white' }}>{props.record.pn + " - " + props.record.ps}</TableCell>
      <TableCell align="center" sx={{ color: 'white' }}>{calculateAge(props.record.fn)} años</TableCell>
      <TableCell align="center" sx={{ color: 'white' }}><img src={props.record.na0} alt="Nacionalidad"></img></TableCell>
      <TableCell align="left">
        <Button

          as={Link}
          to={`/edit/${props.record._id}`}


        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
          </svg>
        </Button>
      </TableCell>
      <TableCell align="center">


        <Button


          onClick={() => {
            props.deleteRecord(props.record._id + props.record.name + props.record.surname);
          }}

        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-x-fill" viewBox="0 0 14 14">
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.854 7.146 8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 1 1 .708-.708z" />
          </svg>
        </Button>

      </TableCell>
    </TableRow>

  </TableBody>
);

// List only POR players function
const RecordDEF = (props) => (
  <TableBody>

    <TableRow

    >
      <TableCell component="th" scope="row" sx={{ color: 'white' }} as={Link} className='player-name-table' to={`/detail/${props.record._id}`}>
        {props.record.name + " " + props.record.surname}

      </TableCell>

      <TableCell align="center" sx={{ color: 'white' }}>{props.record.pn + " - " + props.record.ps}</TableCell>
      <TableCell align="center" sx={{ color: 'white' }}>{calculateAge(props.record.fn)} años</TableCell>
      <TableCell align="center" sx={{ color: 'white' }}><img src={props.record.na0} alt="Nacionalidad"></img></TableCell>
      <TableCell align="left">
        <Button

          as={Link}
          to={`/edit/${props.record._id}`}


        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
          </svg>
        </Button>
      </TableCell>
      <TableCell align="center">


        <Button


          onClick={() => {
            props.deleteRecord(props.record._id + props.record.name + props.record.surname);
          }}

        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-x-fill" viewBox="0 0 14 14">
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.854 7.146 8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 1 1 .708-.708z" />
          </svg>
        </Button>

      </TableCell>
    </TableRow>

  </TableBody>
);

// List only MED players function
const RecordMED = (props) => (
  <TableBody>

    <TableRow

    >
      <TableCell component="th" scope="row" sx={{ color: 'white' }} as={Link} className='player-name-table' to={`/detail/${props.record._id}`}>
        {props.record.name + " " + props.record.surname}

      </TableCell>

      <TableCell align="center" sx={{ color: 'white' }}>{props.record.pn + " - " + props.record.ps}</TableCell>
      <TableCell align="center" sx={{ color: 'white' }}>{calculateAge(props.record.fn)} años</TableCell>
      <TableCell align="center" sx={{ color: 'white' }}><img src={props.record.na0} alt="Nacionalidad"></img></TableCell>
      <TableCell align="left">
        <Button

          as={Link}
          to={`/edit/${props.record._id}`}


        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
          </svg>
        </Button>
      </TableCell>
      <TableCell align="center">


        <Button


          onClick={() => {
            props.deleteRecord(props.record._id + props.record.name + props.record.surname);
          }}

        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-x-fill" viewBox="0 0 14 14">
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.854 7.146 8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 1 1 .708-.708z" />
          </svg>
        </Button>

      </TableCell>
    </TableRow>

  </TableBody>
);

// List only DEL players function
const RecordDEL = (props) => (
  <TableBody>

    <TableRow

    >
      <TableCell component="th" scope="row" sx={{ color: 'white' }} as={Link} className='player-name-table' to={`/detail/${props.record._id}`}>
        {props.record.name + " " + props.record.surname}

      </TableCell>

      <TableCell align="center" sx={{ color: 'white' }}>{props.record.pn + " - " + props.record.ps}</TableCell>
      <TableCell align="center" sx={{ color: 'white' }}>{calculateAge(props.record.fn)} años</TableCell>
      <TableCell align="center" sx={{ color: 'white' }}><img src={props.record.na0} alt="Nacionalidad"></img></TableCell>
      <TableCell align="left">
        <Button

          as={Link}
          to={`/edit/${props.record._id}`}


        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
          </svg>
        </Button>
      </TableCell>
      <TableCell align="center">


        <Button


          onClick={() => {
            props.deleteRecord(props.record._id + props.record.name + props.record.surname);
          }}

        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-x-fill" viewBox="0 0 14 14">
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.854 7.146 8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 1 1 .708-.708z" />
          </svg>
        </Button>

      </TableCell>
    </TableRow>

  </TableBody>
);

export default function SquadField() {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [search, setSearch] = useState('');



  // This method fetches the player data from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`https://lemurpromanagement-mdg.app/record/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
      setIsLoading(false)
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will delete a player
  async function deleteRecord(id, name, surname) {
    if (window.confirm('¿Esta seguro que desea eliminar el jugador ' + name + ' ' + surname + ' ?')) {
      await fetch(`https://lemurpromanagement-mdg.app/${id}`, {
        method: "DELETE",
      });

      const newRecords = records.filter((el) => el._id !== id);
      setRecords(newRecords);

    }




  }


  // map data id & pn = POR
  function recordListPOR() {
    return results.map((record) => {
      if (record.pn === "POR") {
        //console.log(record)
        return (
          <RecordPOR
            record={record}
            deleteRecord={() => deleteRecord(record._id, record.name, record.surname)}
            key={record._id}
          />
        );
      }
    });
  }

  // map data id & pn = DC-LD-LI-CRD-CRI
  function recordListDEF() {
    return results.map((record) => {
      if (record.pn === "DC" || record.pn === "LD" || record.pn === "LI" || record.pn === "CRD" || record.pn === "CRI") {
        //console.log(record)
        return (
          <RecordDEF
            record={record}
            deleteRecord={() => deleteRecord(record._id, record.name, record.surname)}
            key={record._id}
          />
        );
      }
    });
  }

  // map data id & pn = PIV DEF-MC-MP
  function recordListMED() {
    return results.map((record) => {
      if (record.pn === "PIV DEF" || record.pn === "MC" || record.pn === "MP") {
        //console.log(record)
        return (
          <RecordMED
            record={record}
            deleteRecord={() => deleteRecord(record._id, record.name, record.surname)}
            key={record._id}
          />
        );
      }
    });
  }

  // map data id & pn = PIV DEF-MC-MP
  function recordListDEL() {
    return results.map((record) => {
      if (record.pn === "DEL" || record.pn === "EXI" || record.pn === "EXD") {
        //console.log(record)
        return (
          <RecordDEL
            record={record}
            deleteRecord={() => deleteRecord(record._id, record.name, record.surname)}
            key={record._id}
          />
        );
      }
    });
  }
  //función de búsqueda
  const searcher = (e) => {
    setSearch(e.target.value)
    //console.log(e.target.value)

  }


  //metodo de filtrado 1 
  let results = []
  if (!search) {
    results = records
  } else {
    results = records.filter((dato) => dato.name.toLowerCase().includes(search.toLocaleLowerCase())
      || dato.pn.toLowerCase().includes(search.toLocaleLowerCase()))

    if (search === "CRI" || search === "CRD" || search === "PIV DEF" || search === "MC" ||
      search === "MP" || search === "DEL" || search === "POR" || search === "DC" || search === "LD" || search === "LI") {
      results = records.filter((dato) => dato.pn.toLowerCase().includes(search.toLocaleLowerCase()))
    }

    //Filtro centrales por posición y perfil hábil
    if (search === "dcdiestra") {
      console.log(search)
      results = records.filter((dato) => (dato.pn.toLowerCase() + dato.ph.toLocaleLowerCase()).includes(search.toLocaleLowerCase()))
    }
    if (search === "dczurda") {
      console.log(search)
      results = records.filter((dato) => (dato.pn.toLowerCase() + dato.ph.toLocaleLowerCase()).includes(search.toLocaleLowerCase()))
    }
  }









  // This following section will display the table with the records of individuals.
  return (
    <>

      <h1 className="page-title">PLANTILLA</h1>
      <Container>
        <Grid container>

          <Grid xs={6}>

            <Box
              sx={{
                width: 520,
                height: 650,
                backgroundImage: 'url(https://sharemytactics.com/images/pitch.png)',
              }}
              className="field-img"
            >

              <Button sx={{ width: 60, height: 50, top: "60px", left: "316px" }} color="secondary" variant="contained" value="POR" onClick={searcher}>POR</Button>
              <Button sx={{ width: 60, height: 50, top: "150px", left: "190px" }} color="primary" variant="contained" value="dcdiestra" onClick={searcher}>DC</Button>
              <Button sx={{ width: 60, height: 50, top: "150px", left: "250px" }} color="primary" variant="contained" value="dczurda" onClick={searcher}>DC</Button>
              <Button sx={{ width: 60, height: 50, top: "210px", right: "30px" }} color="primary" variant="contained" value="LD" onClick={searcher}>LD</Button>
              <Button sx={{ width: 60, height: 50, top: "210px", left: "210px" }} color="primary" variant="contained" value="LI" onClick={searcher}>LI</Button>
              <Button sx={{ width: 60, height: 50, top: "270px", right: "3px" }} color="primary" variant="contained" value="PIV DEF" onClick={searcher}>PIV DEF</Button>
              <Button sx={{ width: 60, height: 50, top: "344px", right: "132px" }} color="primary" variant="contained" value="MC" onClick={searcher}>MC</Button>
              <Button sx={{ width: 60, height: 50, top: "344px", right: "66px" }} color="primary" variant="contained" value="MC" onClick={searcher}>MC</Button>
              <Button sx={{ width: 60, height: 50, top: "450px", right: "350px" }} color="primary" variant="contained" value="EXD" onClick={searcher}>EXD</Button>
              <Button sx={{ width: 60, height: 50, top: "450px", right: "110px" }} color="primary" variant="contained" value="EXI" onClick={searcher}>EXI</Button>
              <Button sx={{ width: 60, height: 50, top: "520px", right: "324px" }} color="primary" variant="contained" value="DEL" onClick={searcher}>DEL</Button>

            </Box>



          </Grid>

          <Grid xs={6}>
            <Loading loading={isLoading}>

              <div className="buscar" >

                <Input className="input-filter-table" placeholder="Nombre" onChange={searcher}></Input>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
              <TableContainer>
                <Table sx={{ maxWidth: 700 }} aria-label="simple table" className="table-players">
                  <TableHead>
                    <TableRow >
                      <TableCell sx={{ color: '#fff' }}>NOMBRE</TableCell>
                      <TableCell sx={{ color: '#fff' }} align="center">POSICIÓN</TableCell>
                      <TableCell sx={{ color: '#fff' }} align="center">EDAD</TableCell>
                      <TableCell sx={{ color: '#fff' }} align="center">NACIONALIDAD</TableCell>
                      <TableCell sx={{ color: '#fff' }} align="center">EDITAR</TableCell>
                      <TableCell sx={{ color: '#fff' }} align="center">ELIMINAR</TableCell>
                    </TableRow>
                  </TableHead>

                  {recordListPOR()}
                  {recordListDEF()}
                  {recordListMED()}
                  {recordListDEL()}

                </Table>
              </TableContainer>
            </Loading>
          </Grid>
        </Grid>
      </Container>

    </>
  );
}