import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contact = () => {
return (
    <section id='contact' className='contact'>
        <Container fluid>
            <div className="contact-title">
                <h2>contact us</h2>
                <p>- get connected with us -</p>
            </div>
            <Row>
                <Form className='form'>
                    <Row>
                        <Col md={4} sm={12}>
                            <Form.Control className='name' type='text' placeholder="Enter Full Name" required />
                        </Col>
                        <Col md={4} sm={12}>
                            <Form.Control className='email' type='email' placeholder="Email Address" required />
                        </Col>
                        <Col md={4} sm={12}>
                            <Form.Control className='tel' type='tel' placeholder="Enter Your Contact Number" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Form.Control className='text' as="textarea" placeholder="Enter Your Contact Message" required />
                        </Col>
                    </Row>
                        <Button className='form-btn' type="submit">Submit</Button>
                </Form>
            </Row>
        </Container>
        <Container fluid>
            <div className='contact-info'>
                <ul>
                    <li>
                    <i className="fas fa-envelope"></i>
                    hello@domain.com
                    </li>
                    <li>
                    <i className="fas fa-phone"></i>
                    02-000-0000
                    </li>
                    <li>
                    <i className="fas fa-map-marker-alt"></i>
                    Cairo, Egypt
                    </li>
                </ul>
            </div>
        </Container>
    </section>
)
}

export default Contact
