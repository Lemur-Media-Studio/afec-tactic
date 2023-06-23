import React from 'react'
import { Container } from 'react-bootstrap';
import QHeader from '../../Components/QHeader';

function FQSuggestedSession() {
  const a1 = JSON.parse(localStorage.getItem('A-Q1'))
  const a1list = Object.values(a1)
  const a2 = JSON.parse(localStorage.getItem('A-Q2'))
  const a2list = Object.values(a2)
  const a3 = JSON.parse(localStorage.getItem('A-Q3'))
  const a3list = Object.values(a3)
  
  
  const a4 = JSON.parse(localStorage.getItem('CH1-Q4'))
  const a4list = Object.values(a4)
  
  const a5 = JSON.parse(localStorage.getItem('A-Q5'))
  const a5list = Object.values(a5)
  const a6 = JSON.parse(localStorage.getItem('A-Q6'))
  const a6list = Object.values(a6)
  const a7 = JSON.parse(localStorage.getItem('A-Q7'))
  const a7list = Object.values(a7)
  const a8 = JSON.parse(localStorage.getItem('A-Q8'))
  const a8list = Object.values(a8)
  const a9 = JSON.parse(localStorage.getItem('A-Q9'))
  const a9list = Object.values(a9)
  return (

    <>

    <QHeader />

    <Container className="suggested-questions-container">
      <h1 className="question-title">SESIÓN DE ENTRENAMIENTO SUGERIDA</h1>
      <small>Resp1: {a1list}</small>
      <small>Resp2: {a2list}</small>
      <small>Resp3: {a3list}</small>
      <small>Resp4: {a4list}</small>
      <small>Resp5: {a5list}</small>
      <small>Resp6: {a6list}</small>
      <small>Resp7: {a7list}</small>
      <small>Resp8: {a8list}</small>
      <small>Resp9: {a9list}</small>
    </Container>

    </>
  );
}

export default FQSuggestedSession;