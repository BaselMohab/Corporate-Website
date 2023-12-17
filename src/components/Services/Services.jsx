import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import services  from './servicesData';



const Services = () => {
return (
    <section id='services' className='services'>
    <Container fluid>
            <div className="services-title">
                <h2>Our Services</h2>
                <p>Services we provide</p>
            </div>
        <Row>
            {services.map((service)=>{
                const {id, icon, title, description } = service;
                return(
                <Col sm={4} key={id} className='services-col'>
                    <div className="icon">
                        {icon}
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </Col>  )
            })}
        </Row>
    </Container>
    </section>
)
}

export default Services
