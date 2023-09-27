import React, { useContext, useState } from 'react'
import { Button, ButtonGroup, Container, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AlertCustom from '../../../Components/AlertCustom';
import QHeader from '../../../Components/QHeader';
import { LoginContext } from '../../../Context/LoginContext';
import { Answers } from '../../../utils/Answers';

function NinethQuestion() {

  let [id, setId] = useState("")
  let [q1, setQ1] = useState("")
  let [q2, setQ2] = useState("")
  let [q3, setQ3] = useState("")
  let [q4, setQ4] = useState("")
  let [q5, setQ5] = useState("")
  let [q6, setQ6] = useState("")
  let [q7, setQ7] = useState("")
  let [q8, setQ8] = useState("")
  let [q9, setQ9] = useState("")

  const [selectedBtn, setSelectedBtn] = useState(null);
  const [alert, setAlert] = useState({ color: "", text: "" })
  const [hover, setHover] = useState(0);
  const [show, setShow] = useState(false);
  const context = useContext(LoginContext)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function mandoRespuesta(Q9) {
    const respuestas = { Q9 }
    console.log(respuestas)
    localStorage.setItem('A-Q9', JSON.stringify(respuestas))
  }




  const showAlert = () => {
    setAlert({ color: 'yellow', text: 'Debes seleccionar una opción' })
  }
  const submit = async (e) => {
        /* EXTRAIGO DATOS DE CUESTIONARIO */
        const AQ1 = JSON.parse(localStorage.getItem('A-Q1'))
        const AQ2 = JSON.parse(localStorage.getItem('A-Q2'))
        const AQ7 = JSON.parse(localStorage.getItem('A-Q7'))
        const AQ8 = JSON.parse(localStorage.getItem('A-Q8'))
        const AQ9 = JSON.parse(localStorage.getItem('A-Q9'))
        let asnwMomento = Object.values(AQ1)[0]
        let asnwFase = Object.values(AQ2)[0]
        let asnwFaseNull = ""
        let asnwSiete = Object.values(AQ7)[0]
        let asnwOcho = Object.values(AQ8)[0]                                
        let asnwNueve = Object.values(AQ9)[0]  
      
        /* ADAPTO RESPUESTAS A FORMATO DE ETIQUETA */
        if (asnwMomento === "Momento sin balón") {
          asnwMomento = "MSB"
        } else if (asnwMomento === "Momento con balón") {
          asnwMomento = "MCB"
        }
        if (asnwFase === "Tras recuperación") {
          asnwFase = "Momento tras recuperación"
        }
        if (asnwFase === "Presión Bloque Alto") {
          asnwFase = "Presión"
        }
        if (asnwFase === "Tras Pérdida") {
          asnwFase = "Momento tras pérdida"
        }
        if (asnwSiete === "Espacios amplios") {
          asnwSiete = "Amplios"
        }
        if (asnwSiete === "Espacios medios") {
          asnwSiete = "Medios"
        }
        if (asnwSiete === "Espacios reducidos") {
          asnwSiete = "Reducido"
        }
        let idUser = localStorage.getItem("idUser");
        id = idUser
        q1 = asnwMomento
        q2 = asnwFase
        q7 = asnwSiete
        q8 = asnwOcho
        q9 = asnwNueve

        console.log(q1, q2, q7, q8, q9)

    try {
      const response = await fetch('https://afectactic.xyz/AnswerC1/respuestas', {
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
          q9: q9,
        })
      });
      const data = await response.json();

      console.log(data);
      context.handleFreeTrialDone();




    } catch (error) {
      console.log(error)
    }
  }


  return (

    <>

      <QHeader />

      <Container className="questions-container">

        <h1 className="question-title">NOVENA PREGUNTA</h1>

        <div>
          <h3 className="question-font">¿Igualdad?</h3>
          <ButtonGroup name="question1" defaultValue={0}>
            {Answers[8].map((option, index) => (
              <Button key={index} className="answers-btn" to='/form1-question2' value={option.answer}
                onClick={(e) => {
                  mandoRespuesta(e.target.value);
                  setSelectedBtn(index);
                }}
                style={{
                  backgroundColor: '#006cff;',
                  border: selectedBtn === index ? '2px solid #fff' : '1px solid #10224a',
                  marginTop: '50px',
                  padding: '15px',
                  fontSize: '16px',
                }}>
                {option.answer}
              </Button>
            ))}
          </ButtonGroup>
        </div>

        <Button className="nextq-btn mb-3" onClick={selectedBtn === null ? showAlert : handleShow}>Enviar y finalizar</Button>

        {selectedBtn === null &&
          <AlertCustom {...alert} />
        }

        <div className='mt-5'>
          <Link as={Link} to='/form1-question8' className='mx-2 question-link'>Anterior pregunta</Link>
        </div>

      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modal-header' closeButton>
          <Modal.Title>Fin del cuestionario 1</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>Felicitaciones, acabas de completar el cuestionario 1. Si quieres cambiar alguna respuesta, selecciona "Seguir editando". Por favor,
          ten en cuenta que si decides enviar y finalizar, obtendrás tu sesión de entrenamiento y ya no podrás volver a editar tus opciones. Para obtener una sesión distinta,
          deberás completar un nuevo cuestionario.
        </Modal.Body>
        <Modal.Footer className='modal-footer'>
          <Button variant="secondary" onClick={handleClose}>
            Seguir editando
          </Button>
          <Button variant="primary" type="submit" onClick={submit} as={Link} to={!context.subscriptionOn ? '/profilefree/' : '/profile'}>
            Enviar y finalizar
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default NinethQuestion;