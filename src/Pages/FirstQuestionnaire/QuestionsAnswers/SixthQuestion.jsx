import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AlertCustom from '../../../Components/AlertCustom';
import QHeader from '../../../Components/QHeader';
import { Q6ParteFinal } from '../../../utils/Q6ParteFinal';
import { Q6ParteInicial } from '../../../utils/Q6ParteInicial';
import { Q6PartePrincipal } from '../../../utils/Q6PartePrincipal';

function SixthQuestion() {

  const [selectedOptions, setSelectedOptions] = useState([])
  const [alert, setAlert] = useState({color: "", text: ""})

  const answer5check1 = JSON.parse(localStorage.getItem('CH1-Q5-1'))
  const a5check1 = answer5check1 ? Object.values(answer5check1) : null
  
  const answer5check2 = JSON.parse(localStorage.getItem('CH1-Q5-2'))
  const a5check2 = answer5check2 ? Object.values(answer5check2) : null
  
  const answer5check3 = JSON.parse(localStorage.getItem('CH1-Q5-3'))
  const a5check3 = answer5check3 ? Object.values(answer5check3) : null

  useEffect(() => {
    // Leer las opciones almacenadas en el localStorage y establecer el estado
    const storedOptions = Object.keys(localStorage).filter((key) => key.startsWith('CH1-Q6-'));
    setSelectedOptions(storedOptions.map((key) => parseInt(key.replace('CH1-Q6-', ''))));
  }, []);

  const handleOptionChange = (optionId, Q6) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
      localStorage.removeItem(`CH1-Q6-${optionId}`);
      localStorage.removeItem(`CH2-Q6-${optionId}`);
    } else {
      if (selectedOptions.length < 3) {
        setSelectedOptions([...selectedOptions, optionId]);
        const check1Q6 = { Q6 };
        localStorage.setItem(`CH1-Q6-${optionId}`, JSON.stringify(check1Q6));
        const check2Q6 = { Q6 };
        localStorage.setItem(`CH2-Q6-${optionId}`, JSON.stringify(check2Q6));
      }
    }
  };

  const isOptionDisabled = (optionId) =>
    selectedOptions.length === 3 && !selectedOptions.includes(optionId);

  const showAlert = () => {
    setAlert({color:'yellow', text:'Debes seleccionar una opción'})
  }

  return (

    <>

    <QHeader />

    <Container className="questions-container">

      <h1 className="question-title">SEXTA PREGUNTA</h1>

      <div>
        <h3 className="question-font">¿Tipo de tarea?</h3>
        <div className="mb-3 mt-5 row container checkbox-questions">

          {a5check1 &&
            Q6ParteInicial.map((option) => (
              <Form.Check className="col-4 mx-auto"// prettier-ignore
                key={option.id}
                type="checkbox"
                id={`option-${option.id}`}
                label={option.answer}
                checked={selectedOptions.includes(option.id, option.answer)}
                onChange={() => handleOptionChange(option.id, option.answer)}
                disabled={isOptionDisabled(option.id)}
              />
            ))
          }

          {a5check2 && 
            Q6PartePrincipal.map((option) => (
              <Form.Check className="col-4 mx-auto"// prettier-ignore
                key={option.id}
                type="checkbox"
                id={`option-${option.id}`}
                label={option.answer}
                checked={selectedOptions.includes(option.id, option.answer)}
                onChange={() => handleOptionChange(option.id, option.answer)}
                disabled={isOptionDisabled(option.id)}
              />
            ))
          }

          {a5check3 && 
            Q6ParteFinal.map((option) => (
              <Form.Check className="col-4 mx-auto"// prettier-ignore
                key={option.id}
                type="checkbox"
                id={`option-${option.id}`}
                label={option.answer}
                checked={selectedOptions.includes(option.id, option.answer)}
                onChange={() => handleOptionChange(option.id, option.answer)}
                disabled={isOptionDisabled(option.id)}
              />
            ))
          }

{/*           {Answers[5].map((option) => (
            <Form.Check className="col-4 mx-auto"// prettier-ignore
              key={option.id}
              type="checkbox"
              id={`option-${option.id}`}
              label={option.answer}
              checked={selectedOptions.includes(option.id, option.answer)}
              onChange={() => handleOptionChange(option.id, option.answer)}
              disabled={isOptionDisabled(option.id)}
            />
          ))} */}
        </div>
      </div>
      <div>
        <Button 
          className="nextq-btn mb-3" as={Link}
          to={selectedOptions.length === 0 ? '' : '/form1-question7'} 
          onClick={showAlert}
          >
            Siguiente pregunta
        </Button>
      </div>

      {selectedOptions.length === 0 &&
        <AlertCustom {...alert} />
      }

      <div className='mt-5'>
          <Link as={Link} to='/form1-question5' className='mx-2 question-link'>Anterior pregunta</Link>
          <Link as={Link} to={selectedOptions.length === 0 ? '' : '/form1-question7'} className='mx-2 question-link'>Siguiente pregunta</Link>
      </div>

    </Container>

    </>
  );
}

export default SixthQuestion;