import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import AlertCustom from "./AlertCustom";

function StarRating({sendAnswer, route, qTitle, prevRoute}){

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [alert, setAlert] = useState({color: '', text: ''})
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const showAlert = () => {
      setAlert({color:"yellow", text:"Debes ingresar una calificación"})
    }

    console.log(rating)

    return (

      <>

      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              id="star-rating"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => {setRating(index); sendAnswer(index===1?"Muy mala":index===2?"Mala":index===3?"Buena":index===4?"Muy buena":"Excelente")}}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>

      <Button className="nextq-btn mb-3" as={Link} 
      to={rating && qTitle!=="OCTAVA PREGUNTA" ? route : '#'}
      onClick={qTitle==="OCTAVA PREGUNTA" && rating ? handleShow : showAlert}
      >
        {qTitle!=="OCTAVA PREGUNTA" ? "Enviar y avanzar" : "Enviar y finalizar"}
      </Button>

      {!rating &&
        <AlertCustom {...alert} />
      }

      <div className='mt-5'>
          <Link as={Link} to={prevRoute} className='mx-2 question-link'>Anterior pregunta</Link>
          {qTitle !== "OCTAVA PREGUNTA" &&
            <Link as={Link} to={rating ? route : '#'} 
            onClick={showAlert}
            className='mx-2 question-link'
            >
              Siguiente pregunta
            </Link>
          }
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modal-header' closeButton>
          <Modal.Title>Fin del cuestionario 2</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>Felicitaciones, acabas de completar el cuestionario 2. Si quieres cambiar alguna respuesta, selecciona "Seguir editando". Por favor,
        ten en cuenta que si decides enviar y finalizar, obtendrás tu sesión de entrenamiento y ya no podrás volver a editar tus opciones. Para obtener una sesión distinta,
        deberás completar un nuevo cuestionario.
        </Modal.Body>
        <Modal.Footer className='modal-footer'>
          <Button variant="secondary" onClick={handleClose}>
            Seguir editando
          </Button>
          <Button variant="primary" onClick={handleClose} as={Link} to={route}>
            Enviar y finalizar
          </Button>
        </Modal.Footer>
      </Modal>

      </>
    );
  };

export default StarRating;