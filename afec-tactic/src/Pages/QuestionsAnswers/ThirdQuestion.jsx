import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Answers } from '../../utils/Answers';

function ThirdQuestion() {

    const [selectedOptions, setSelectedOptions] = useState([])

    /* Handle Checkbox */
    const handleOptionChange = (optionId) => {
        if (selectedOptions.includes(optionId)) {
          setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
        } else {
          if (selectedOptions.length < 2) {
            setSelectedOptions([...selectedOptions, optionId]);
          }
        }
      };

    const isOptionDisabled = (optionId) =>
    selectedOptions.length === 2 && !selectedOptions.includes(optionId);


  return (

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
                checked={selectedOptions.includes(option.id)}
                onChange={() => handleOptionChange(option.id)}
                disabled={isOptionDisabled(option.id)}
              />
            ))}
        </div>

        <Button className="answers-btn" as={Link} to='/question4'>Enviar y avanzar</Button>
      </div>



      <div className='mt-5'>
          <Link as={Link} to='/question2' className='mx-2 question-link'>Anterior pregunta</Link>
          <Link as={Link} to='/question4' className='mx-2 question-link'>Siguiente pregunta</Link>
      </div>

    </Container>
  );
}

export default ThirdQuestion;