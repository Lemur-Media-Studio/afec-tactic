import React, { useContext } from "react"
import { Container } from "react-bootstrap";
import { LanguageContext } from "../Context/LanguageContext"

function Home(){

    const context = useContext(LanguageContext);

    return(
        <Container>
            <h1 className='mt-5'>
                {!context.german && !context.spanish && 'Hello'}
                {context.german && 'Hallo'}
                {context.spanish && 'Hola'}
            </h1>
        </Container>
    )

}

export default Home