import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AlertCustom from '../../../Components/AlertCustom';
import QHeader from '../../../Components/QHeader';
import { Form1Q4 } from '../../../utils/Form1Q4';

function FourthQuestion() {

    const [selectedOptions, setSelectedOptions] = useState([])
    const [alert, setAlert] = useState({color: "", text: ""})

    const answer1 = JSON.parse(localStorage.getItem('A-Q1'))
    const a1list = Object.values(answer1)

    useEffect(() => {
      // Leer las opciones almacenadas en el localStorage y establecer el estado
      const storedOptions = Object.keys(localStorage).filter((key) => key.startsWith('CH1-Q4-'));
      setSelectedOptions(storedOptions.map((key) => parseInt(key.replace('CH1-Q4-', ''))));
    }, []);
  
    const handleOptionChange = (optionId, optionAnswer) => {
      if (selectedOptions.includes(optionId)) {
        setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
        localStorage.removeItem(`CH1-Q4-${optionId}`);
        localStorage.removeItem(`CH2-Q4-${optionId}`);
      } else {
        if (selectedOptions.length < 15) {
          setSelectedOptions([...selectedOptions, optionId]);
          const check1Q4 = { optionAnswer };
          localStorage.setItem(`CH1-Q4-${optionId}`, JSON.stringify(check1Q4));
          const check2Q4 = { optionAnswer };
          localStorage.setItem(`CH2-Q4-${optionId}`, JSON.stringify(check2Q4));
        }
      }
    };

    const isOptionDisabled = (optionId) =>
    selectedOptions.length === 15 && !selectedOptions.includes(optionId);

    const showAlert = () => {
      setAlert({color:'yellow', text:'Debes seleccionar una opción'})
    }

  return (

    <>

    <QHeader />

    <Container className="questions-container">

      <h1 className="question-title">CUARTA PREGUNTA</h1>

      <div className="checkbox-questions-container">
        <h3 className="question-font">¿Cuál es el contenido a nivel micro?</h3>
        <h4>(Máximo quince opciones)</h4>

        { a1list == 'Momento con balón' &&
          <div className="mb-3 mt-5 row checkbox-questions container">
          {Form1Q4[0].map((option) => (
              <Col key={option.id} className="col-3">
                <Form.Check
                  type="checkbox"
                  id={`option-${option.id}`}
                  label={option.answer}
                  checked={selectedOptions.includes(option.id, option.answer)}
                  onChange={() => handleOptionChange(option.id, option.answer)}
                  disabled={isOptionDisabled(option.id)}
                />
              </Col>
          ))}
        </div>
        }

        { a1list == 'Momento sin balón' &&
          <div className="mb-3 mt-5 row checkbox-questions container">
          {Form1Q4[1].map((option) => (
              <Col key={option.id} className="col-3">
                <Form.Check
                  type="checkbox"
                  id={`option-${option.id}`}
                  label={option.answer}
                  checked={selectedOptions.includes(option.id, option.answer)}
                  onChange={() => handleOptionChange(option.id, option.answer)}
                  disabled={isOptionDisabled(option.id)}
                />
              </Col>
          ))}
        </div>
        }

        <Button 
            className="nextq-btn mb-3" as={Link}
            to={selectedOptions.length === 0 ? '' : '/form1-question5'} 
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
        <Link as={Link} to={selectedOptions.length === 0 ? '' : '/form1-question5'} className='mx-2 question-link'>Siguiente pregunta</Link>
      </div>

    </Container>

    </>
  );
}

export default FourthQuestion;