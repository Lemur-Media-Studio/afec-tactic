import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Answers } from '../../../utils/Answers';
import QHeader from '../../../Components/QHeader';
import AlertCustom from '../../../Components/AlertCustom';

function ThirdQuestion() {

  const [selectedOptions, setSelectedOptions] = useState([])
  const [alert, setAlert] = useState({color: "", text: ""})

  /* Handle Checkbox */
  const handleOptionChange = (optionId, optionAnswer) => {

    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
    } else {
      if (selectedOptions.length <= 1) {
        const check1Q3 = { optionAnswer }
        localStorage.setItem('CH1-Q3', JSON.stringify(check1Q3))
        if (selectedOptions.length < 2) {
          const check2Q3 = { optionAnswer }
          localStorage.setItem('CH2-Q3', JSON.stringify(check2Q3))
          setSelectedOptions([...selectedOptions, optionId]);
        }
      }
    }
  };

  const isOptionDisabled = (optionId) =>
    selectedOptions.length === 2 && !selectedOptions.includes(optionId);

  const showAlert = () => {
    setAlert({color:'yellow', text:'Debes seleccionar una opción'})
  }

  return (

    <>

    <QHeader />

    <Container className="questions-container">

      <h1 className="question-title">TERCERA PREGUNTA</h1>

      <div className="checkbox-questions-container">
        <h3 className="question-font">¿Cuál es el contenido a nivel macro?</h3>
        <h4>(Máximo dos opciones)</h4>

        <div className="mb-3 mt-5 row container checkbox-questions">
          {Answers[2].map((option) => (
            <Form.Check className="col-5"// prettier-ignore
              key={option.id}
              type="checkbox"
              id={`option-${option.id}`}
              label={option.answer}
              checked={selectedOptions.includes(option.id, option.answer)}
              onChange={() => handleOptionChange(option.id, option.answer)}
              disabled={isOptionDisabled(option.id)}
            />
          ))}
        </div>

        <Button 
            className="nextq-btn mb-3" as={Link}
            to={selectedOptions.length === 0 ? '' : '/form1-question4'} 
            onClick={showAlert}
            >
            Siguiente pregunta
        </Button>
      </div>

      {selectedOptions.length === 0 &&
        <AlertCustom {...alert} />
      }

      <div className='mt-5'>
        <Link as={Link} to='/form1-question2' className='mx-2 question-link'>Anterior pregunta</Link>
        <Link as={Link} to={selectedOptions.length === 0 ? '' : '/form1-question4'} className='mx-2 question-link'>Siguiente pregunta</Link>
      </div>

    </Container>

    </>
  );
}

export default ThirdQuestion;