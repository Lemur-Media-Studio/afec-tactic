import { useContext } from "react";
import { Button } from "react-bootstrap";
import { LanguageContext } from "../Context/LanguageContext";

function Navbar(){

    const context = useContext(LanguageContext);

    const english = (e) => {
        e.preventDefault()
        context.handleEnglish()
    }

    const german = (e) => {
        e.preventDefault()
        context.handleGerman()
    }

    const spanish = (e) => {
        e.preventDefault()
        context.handleSpanish()
    }

    return(
        <ul className='mt-5' style={{ listStyle:'none', display:'flex', justifyContent:'center' }}>
            <li><Button onClick={english}>English</Button></li>
            <li className='mx-2'><Button onClick={german}>German</Button></li>
            <li><Button onClick={spanish}>Spanish</Button></li>
        </ul>
    )

}

export default Navbar