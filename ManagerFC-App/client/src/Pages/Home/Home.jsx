import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import "./Home.css"

function Home(){

    return(
        <>
            <img src="https://escudoscr.stg7.net/escudos/manchego2020.png" className='manechego-badge' height="500" alt="Escudo Deportivo Manchego" />
            <Grid
            className='main-grid'
            container
            display="flex"
            wrap="wrap"
            justifyContent="center"
            textAlign="left"
            sx={{ mt: -45 }}
            >
                <Grid xs={12} sm={4}>
                    <h1 className='home-title'>BIENVENIDO A TU ASISTENTE PERSONAL</h1>
                    <h2 className='home-subtitle'>Administra rápidamente tu plantilla</h2>
                    <div className='home-btn-container'>
                        <Button as={Link} to={'/add-to-squad'} className='btn-home'>Agregar a Plantilla</Button>
                        <Button as={Link} to={'/new-profile'} className='btn-home'>Agregar a Preselección</Button>
                    </div>
                </Grid>
            
                <Grid xs={12} sm={2}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Soccer_pitch_transparent_25p_grey.svg/1200px-Soccer_pitch_transparent_25p_grey.svg.png" height="400" alt="Campo de fútbol" />
                </Grid>
            </Grid>

             <section className='main-apps-containter'>
                <h2 className='home-secondary-title'>Aplicaciones favoritas</h2>
                <div>
                    <Button className='btn-home'><a href="https://es.besoccer.com/" target="_blank" rel="noreferrer" className="btn-link-home">Besoccer</a></Button>
                    <Button className='btn-home'><a href="https://www.transfermarkt.es/" target="_blank" rel="noreferrer" className="btn-link-home">Transfermarkt</a></Button>
                    <Button className='btn-home'><a href="https://instatscout.com/" target="_blank" rel="noreferrer" className="btn-link-home">InStat</a></Button>
                    <Button className='btn-home'><a href="https://www.cmmedia.es/play" target="_blank" rel="noreferrer" className="btn-link-home">CMM Play</a></Button>
                </div>  
            </section>
        </>
    )
}

export default Home