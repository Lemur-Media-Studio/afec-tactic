import React, { useState } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AlertCustom from '../../../Components/AlertCustom';
import QHeader from '../../../Components/QHeader';
import { Subquestions } from '../../../utils/Subquestions';

function TrasRecuperacion() {

    const [selectedBtn, setSelectedBtn] = useState(null);
    const [alert, setAlert] = useState({color: "", text: ""})

    function mandoRespuesta(Q2) {
        const respuestas = { Q2 }
        console.log(respuestas)
        localStorage.setItem('A-Q2', JSON.stringify(respuestas))
      }
    
    const showAlert = () => {
        setAlert({color:'yellow', text:'Debes seleccionar una opción'})
    }

    return (

      <>  

      <QHeader />  
  
      <Container className="questions-container">
  
          <h1 className="question-title">TRAS RECUPERACIÓN</h1>
  
          <div>
              <h3 className="question-font">Selecciona una opción</h3>
              <ButtonGroup  name="question1" defaultValue={0}>
                  {Subquestions[3].map((option, index) => (
                  <Button key={index} className="answers-btn" value={option.answer}
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
                  }} >
                      {option.answer}
                  </Button>
              ))}
              </ButtonGroup>
  
              <div>
                <Button 
                    className="nextq-btn mb-3" as={Link}
                    to={selectedBtn===null ? '' : '/form1-question3'} 
                    onClick={showAlert}
                    >
                    Siguiente pregunta
                </Button>
              </div>
          </div>

          {selectedBtn===null &&
            <AlertCustom {...alert} />
          }
          
          <div className='mt-5'>
            <Link as={Link} to='/form1-question2' className='mx-2 question-link'>Anterior pregunta</Link>
            <Link className="mx-2 question-link" as={Link} to={selectedBtn===null ? '' : '/form1-question3'} onClick={showAlert}>Siguiente pregunta</Link>
          </div>
  
      </Container>

      </>
  );
}

export default TrasRecuperacion;