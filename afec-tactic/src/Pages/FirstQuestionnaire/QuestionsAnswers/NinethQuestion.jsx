import React, { useState } from 'react'
import { Button, ButtonGroup, Container, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AlertCustom from '../../../Components/AlertCustom';
import QHeader from '../../../Components/QHeader';
import { Answers } from '../../../utils/Answers';

function NinethQuestion() {

  const [selectedBtn, setSelectedBtn] = useState(null);
  const [alert, setAlert] = useState({color: "", text: ""})
  const [hover, setHover] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function mandoRespuesta(Q9) {
    const respuestas = { Q9 }
    console.log(respuestas)
    localStorage.setItem('A-Q9', JSON.stringify(respuestas))
  }

  const showAlert = () => {
    setAlert({color:'yellow', text:'Debes seleccionar una opción'})
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

      {selectedBtn===null &&
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
          <Button variant="primary" onClick={handleClose} as={Link} to='/form1-suggested-session'>
            Enviar y finalizar
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default NinethQuestion;