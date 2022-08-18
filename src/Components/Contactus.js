import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Contactus() {
  return (
    <div>
    <div className='mt-5 display-6 mb-2 text-center'>Contact us</div>
    <br />
  <Container>
    
    <Row className='mt-5 ms-5 '>
      <Col md={6}>
      <Card style={{ width: '18rem' }}>
        <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title>Meghana Ganji</Card.Title>
            <Card.Text>
              <p>7670831731</p>
              <p>meghana-ganji-728161202</p>
            </Card.Text>
          </Card.Body>
      </Card>
      </Col>
      <Col md={{span:4, offset:2}}>
      <Card style={{ width: '18rem' }}>
        <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title>Akhila Kurmandla</Card.Title>
            <Card.Text>
              <p>8074198450</p>
              <p>akhila-kurmandla-86614a227/</p>
            </Card.Text>
          </Card.Body>
      </Card>
      </Col>
    </Row>
      <Row className='mt-5 mb-5 ms-5'>
      <Col md={6}>
      <Card style={{ width: '18rem' }}>
        <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title>Puja Bondada </Card.Title>
            <Card.Text>
              <p>8500753666</p>
              <p>puja-bondada-1bb78622a</p>
            </Card.Text>
          </Card.Body>
      </Card>
      </Col>
      <Col md={{span:4, offset:2}}>
      <Card style={{ width: '18rem' }}>
        <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title>Kondam Sai Sruthin Reddy</Card.Title>
            <Card.Text>
              <p>8522048603</p>
              <p>sai-sruthin-reddy-2b5644234</p>
            </Card.Text>
          </Card.Body>
      </Card>
      </Col>
      </Row>
  </Container>
  </div>
  )
}

export default Contactus;