// Weather.js
//******************************************************************
//*****  Client side -- client/frontend/src/pages/Weather.js (Private)  *****
//*****  This is the client Weather Page for the app           *****
//******************************************************************

import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ErrorIcon from '../../assets/icons/error.png'

const Weather = () => {
  return (
    <div className='page-content'>
      <Container>
        <Row>
          <Col style={{ textAlign: 'center', marginTop: '5rem' }}>
          <h3 className="text-danger">
            <img src={ ErrorIcon } alt='error' style={{ width: '2rem' }} /> Weather is a Placeholder Page For Now <img src={ ErrorIcon } alt='error' style={{ width: '2rem' }} />
          </h3>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Weather