import React from 'react'
import { Container } from 'react-bootstrap';
import Q2Header from '../../Components/Q2Header';

function SQSuggestedSession() {

  const f2q1 = JSON.parse(localStorage.getItem('B-Q1'))
  const f2q1List = Object.values(f2q1)
  const f2q2 = JSON.parse(localStorage.getItem('B-Q2'))
  const f2q2List = Object.values(f2q2)
  const f2q3 = JSON.parse(localStorage.getItem('B-Q3'))
  const f2q3List = Object.values(f2q3)
  const f2q4 = JSON.parse(localStorage.getItem('B-Q4'))
  const f2q4List = Object.values(f2q4)
  const f2q5 = JSON.parse(localStorage.getItem('B-Q5'))
  const f2q5List = Object.values(f2q5)
  const f2q6 = JSON.parse(localStorage.getItem('B-Q6'))
  const f2q6List = Object.values(f2q6)
  const f2q7 = JSON.parse(localStorage.getItem('B-Q7'))
  const f2q7List = Object.values(f2q7)
  const f2q8 = JSON.parse(localStorage.getItem('B-Q8'))
  const f2q8List = Object.values(f2q8)

  return (

    <>

    <Q2Header />

    <Container className="suggested-questions-container">

      <h1 className="question-title">SESIÓN DE ENTRENAMIENTO SUGERIDA</h1>

      <small>Resp1: {f2q1List}</small>
      <small>Resp2: {f2q2List}</small>
      <small>Resp3: {f2q3List}</small>
      <small>Resp4: {f2q4List}</small>
      <small>Resp5: {f2q5List}</small>
      <small>Resp6: {f2q6List}</small>
      <small>Resp7: {f2q7List}</small>
      <small>Resp8: {f2q8List}</small>

    </Container>

    </>
  );
}

export default SQSuggestedSession;