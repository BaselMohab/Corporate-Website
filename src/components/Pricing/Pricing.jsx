import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import pricingData from './pricingData';


const Pricing = () => {
return (
    <section id='pricing' className='pricing'>
        <Container fluid>
                <div className="pricing-title">
                    <h2>PRICING & PLANS</h2>
                    <p>- check our pricing & plans -</p>
                </div>
            <Row>
                {pricingData.map((pricing)=>{
                    const {id, plan, price, features, link} = pricing;
                    return (
                        <Col sm={4} key={id}>
                            <div className="heading">
                                <h3>{plan}</h3>
                                <p>{price}</p>
                            </div>
                            <div className="content">
                                <ListGroup>
                                    {features.map((feature, index)=>{
                                        return (
                                            <ListGroup.Item key={index}>{feature}</ListGroup.Item>
                                        )
                                    })}
                                </ListGroup>
                            </div>
                            <div className="pricing-btn">
                                <a href={link}>Order Now</a>   
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </section>
)
}

export default Pricing
