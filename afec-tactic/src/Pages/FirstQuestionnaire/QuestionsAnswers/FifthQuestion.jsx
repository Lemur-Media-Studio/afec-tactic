import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AlertCustom from '../../../Components/AlertCustom';
import QHeader from '../../../Components/QHeader';
import { Answers } from '../../../utils/Answers';

function FifthQuestion() {

  const [selectedOptions, setSelectedOptions] = useState([])
  const [alert, setAlert] = useState({color: "", text: ""})

  useEffect(() => {
    // Leer las opciones almacenadas en el localStorage y establecer el estado
    const storedOptions = Object.keys(localStorage).filter((key) => key.startsWith('CH1-Q5-'));
    setSelectedOptions(storedOptions.map((key) => parseInt(key.replace('CH1-Q5-', ''))));
  }, []);

  const handleOptionChange = (optionId, Q5) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
      localStorage.removeItem(`CH1-Q5-${optionId}`);
      localStorage.removeItem(`CH2-Q5-${optionId}`);
    } else {
      if (selectedOptions.length < 3) {
        setSelectedOptions([...selectedOptions, optionId]);
        const check1Q5 = { Q5 };
        console.log(check1Q5)
        localStorage.setItem(`CH1-Q5-${optionId}`, JSON.stringify(check1Q5));
/*         const check2Q5 = { Q5 };
        localStorage.setItem(`CH2-Q5-${optionId}`, JSON.stringify(check2Q5)); */
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

      <h1 className="question-title">QUINTA PREGUNTA</h1>

      <div>
        <h3 className="question-font">¿Momento del entrenamiento?</h3>
        <div className="mb-3 mt-5 row">
          {Answers[4].map((option) => (
            <Form.Check className="col-4"// prettier-ignore
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
        <div>
          <Button 
            className="nextq-btn mb-3" as={Link}
            to={selectedOptions.length === 0 ? '' : '/form1-question6'} 
            onClick={showAlert}
            >
              Siguiente pregunta
          </Button>
        </div>
      </div>

      {selectedOptions.length === 0 &&
        <AlertCustom {...alert} />
      }

      <div className='mt-5'>
          <Link as={Link} to='/form1-question4' className='mx-2 question-link'>Anterior pregunta</Link>
          <Link as={Link} to={selectedOptions.length === 0 ? '' : '/form1-question6'} className='mx-2 question-link'>Siguiente pregunta</Link>
      </div>

    </Container>

    </>
  );
}

export default FifthQuestion;