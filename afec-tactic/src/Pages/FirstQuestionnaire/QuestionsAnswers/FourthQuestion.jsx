import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import QHeader from '../../../Components/QHeader';

function FourthQuestion() {

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

    <>

    <QHeader />

    <Container className="questions-container">

      <h1 className="question-title">CUARTA PREGUNTA</h1>

      <div className="checkbox-questions-container">
        <h3 className="question-font">¿Cuál es el contenido a nivel micro?</h3>
        <h4>(Máximo dos opciones)</h4>

        <div className="mb-3 mt-5 row container checkbox-questions">

                <Form.Check className="col-5"// prettier-ignore
                key="percepcion"
                type="checkbox"
                id="percepcion"
                label="Percepción"
                checked={selectedOptions.includes(1)}
                onChange={() => handleOptionChange(1)}
                disabled={isOptionDisabled(1)}
              />

              <Form.Check className="col-5"// prettier-ignore
                key="pase"
                type="checkbox"
                id="pase"
                label="Pase"
                checked={selectedOptions.includes(2)}
                onChange={() => handleOptionChange(2)}
                disabled={isOptionDisabled(2)}
              />

              <Form.Check className="col-5"// prettier-ignore
                key="control"
                type="checkbox"
                id="control"
                label="Control"
                checked={selectedOptions.includes(3)}
                onChange={() => handleOptionChange(3)}
                disabled={isOptionDisabled(3)}
              />

              <Form.Check className="col-5"// prettier-ignore
                key="conduccion"
                type="checkbox"
                id="conduccion"
                label="Conducción"
                checked={selectedOptions.includes(4)}
                onChange={() => handleOptionChange(4)}
                disabled={isOptionDisabled(4)}
              />

              <Form.Check className="col-5"// prettier-ignore
                key="tiro"
                type="checkbox"
                id="tiro"
                label="Tiro"
                checked={selectedOptions.includes(5)}
                onChange={() => handleOptionChange(5)}
                disabled={isOptionDisabled(5)}
              />

              <Form.Check className="col-5"// prettier-ignore
                key="perfiles"
                type="checkbox"
                id="perfiles"
                label="Perfiles"
                checked={selectedOptions.includes(6)}
                onChange={() => handleOptionChange(6)}
                disabled={isOptionDisabled(6)}
              />

              <Form.Check className="col-5"// prettier-ignore
                key="trayectoria"
                type="checkbox"
                id="trayectoria"
                label="Trayectoria"
                checked={selectedOptions.includes(7)}
                onChange={() => handleOptionChange(7)}
                disabled={isOptionDisabled(7)}
              />

              <Form.Check className="col-5"// prettier-ignore
                key="distancias"
                type="checkbox"
                id="distancias"
                label="Distancias"
                checked={selectedOptions.includes(8)}
                onChange={() => handleOptionChange(8)}
                disabled={isOptionDisabled(8)}
              />

        </div>

        <Button className="nextq-btn" as={Link} to='/form1-question5'>Enviar y avanzar</Button>
      </div>



      <div className='mt-5'>
          <Link as={Link} to='/form1-question3' className='mx-2 question-link'>Anterior pregunta</Link>
          <Link as={Link} to='/form1-question5' className='mx-2 question-link'>Siguiente pregunta</Link>
      </div>

    </Container>

    </>
  );
}

export default FourthQuestion;