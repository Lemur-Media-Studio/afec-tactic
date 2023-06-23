import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import QHeader from '../../../Components/QHeader';

function FourthQuestion() {

    const [selectedOptions, setSelectedOptions] = useState([])

    /* Handle Checkbox */
    const handleOptionChange = (optionId, a) => {
        if (selectedOptions.includes(optionId)) {
          setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
        } else {
          if (selectedOptions.length < 2) {
            setSelectedOptions([...selectedOptions, optionId]);
        
              const respuestas = {a}
              console.log(respuestas)
              localStorage.setItem('CH1-Q4', JSON.stringify(respuestas))
            
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
                value="Percepción"
                checked={selectedOptions.includes(1)}
                onChange={(e) => handleOptionChange(1, e.target.value)}
                disabled={isOptionDisabled(1)}
              />

              <Form.Check className="col-5"// prettier-ignore
                key="pase"
                type="checkbox"
                id="pase"
                label="Pase"
                value="Pase"
                checked={selectedOptions.includes(2)}
                onChange={(e) => handleOptionChange(2, e.target.value)}
                disabled={isOptionDisabled(2)}
              />

              <Form.Check className="col-5"// prettier-ignore
                key="control"
                type="checkbox"
                id="control"
                label="Control"
                value="Control"
                checked={selectedOptions.includes(3)}
                onChange={(e) => handleOptionChange(3, e.target.value)}
                disabled={isOptionDisabled(3)}
              />

              <Form.Check className="col-5"// prettier-ignore
                key="conduccion"
                type="checkbox"
                id="conduccion"
                value="Conducción"
                label="Conducción"
                checked={selectedOptions.includes(4)}
                onChange={(e) => handleOptionChange(4, e.target.value)}
                disabled={isOptionDisabled(4)}
              />

              <Form.Check className="col-5"// prettier-ignore
                key="tiro"
                type="checkbox"
                id="tiro"
                label="Tiro"
                value="Tiro"
                checked={selectedOptions.includes(5)}
                onChange={(e) => handleOptionChange(5, e.target.value)}
                disabled={isOptionDisabled(5)}
              />

              <Form.Check className="col-5"// prettier-ignore
                key="perfiles"
                type="checkbox"
                id="perfiles"
                label="Perfiles"
                value="Perfiles"
                checked={selectedOptions.includes(6)}
                onChange={(e) => handleOptionChange(6, e.target.value)}
                disabled={isOptionDisabled(6)}
              />

              <Form.Check className="col-5"// prettier-ignore
                key="trayectoria"
                type="checkbox"
                id="trayectoria"
                label="Trayectoria"
                value="Trayectoria"
                checked={selectedOptions.includes(7)}
                onChange={(e) => handleOptionChange(7, e.target.value)}
                disabled={isOptionDisabled(7)}
              />

              <Form.Check className="col-5"// prettier-ignore
                key="distancias"
                type="checkbox"
                id="distancias"
                label="Distancias"
                value="Distancias"
                checked={selectedOptions.includes(8)}
                onChange={(e) => handleOptionChange(8, e.target.value)}
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