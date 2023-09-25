import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import AlertCustom from "./AlertCustom";

function StarRating({ sendAnswer, route, qTitle, prevRoute }) {

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [alert, setAlert] = useState({ color: '', text: '' })
  const [show, setShow] = useState(false);

  let [id, setId] = useState("")
  let [q1, setQ1] = useState("")
  let [q2, setQ2] = useState("")
  let [q3, setQ3] = useState("")
  let [q4, setQ4] = useState("")
  let [q5, setQ5] = useState("")
  let [q6, setQ6] = useState("")
  let [q7, setQ7] = useState("")
  let [q8, setQ8] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showAlert = () => {
    setAlert({ color: "yellow", text: "Debes ingresar una calificación" })
  }

  console.log(rating)
  const submit = async (e) => {
    /* EXTRAIGO DATOS DE CUESTIONARIO */
    const BQ1 = JSON.parse(localStorage.getItem('B-Q1'))
    const BQ2 = JSON.parse(localStorage.getItem('B-Q2'))
    const BQ3 = JSON.parse(localStorage.getItem('B-Q3'))
    const BQ4 = JSON.parse(localStorage.getItem('B-Q4'))
    const BQ5 = JSON.parse(localStorage.getItem('B-Q5'))
    const BQ6 = JSON.parse(localStorage.getItem('B-Q6'))
    const BQ7 = JSON.parse(localStorage.getItem('B-Q7'))
    const BQ8 = JSON.parse(localStorage.getItem('B-Q8'))
    let asnw1 = Object.values(BQ1)[0]
    let asnw2 = Object.values(BQ2)[0]
    let asnw3 = Object.values(BQ3)[0]
    let asnw4 = Object.values(BQ4)[0]
    let asnw5 = Object.values(BQ5)[0]                                
    let asnw6 = Object.values(BQ6)[0]  
    let asnw7 = Object.values(BQ7)[0]  
    let asnw8 = Object.values(BQ8)[0]  




    let idUser = localStorage.getItem("idUser");
    id = idUser
    q1 = asnw1
    q2 = asnw2
    q3 = asnw3
    q4 = asnw4
    q5 = asnw5
    q6 = asnw6
    q7 = asnw7
    q8 = asnw8


    console.log(q1, q2, q7, q8)

    try {
      const response = await fetch('https://afectactic.xyz/AnswerC2/respuestas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id,
          q1: q1,
          q2: q2,
          q3: q3,
          q4: q4,
          q5: q5,
          q6: q6,
          q7: q7,
          q8: q8,
        })
      });
      const data = await response.json();

      console.log(data);




    } catch (error) {
      console.log(error)
    }
  }
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
              onClick={() => { setRating(index); sendAnswer(index === 1 ? "Muy mala" : index === 2 ? "Mala" : index === 3 ? "Buena" : index === 4 ? "Muy buena" : "Excelente") }}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>

      <Button className="nextq-btn mb-3" as={Link}
        to={rating && qTitle !== "OCTAVA PREGUNTA" ? route : '#'}
        onClick={qTitle === "OCTAVA PREGUNTA" && rating ? handleShow : showAlert}
      >
        {qTitle !== "OCTAVA PREGUNTA" ? "Enviar y avanzar" : "Enviar y finalizar"}
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
          <Button variant="primary"  type="submit" onClick={submit} as={Link} to='/profile'>
            Enviar y finalizar
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default StarRating;