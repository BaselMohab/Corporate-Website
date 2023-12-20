import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import worksData from './worksData';
import Pagination from 'react-bootstrap/Pagination';

const Works = () => {
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
        {number}
        </Pagination.Item>,
    );
}
    
return (
    <section id='works' className='works'>
        <Container fluid>
            <div className="works-title">
                <h2>Our works</h2>
                <p>our awesome works</p>
            </div> 
        <Row className='works-col'>
            {worksData.map((work)=> {
                const {id, link, image, title, subtitle} = work
                return (
                    <Col md={4} sm={6} key={id}>
                        <div className="works-grid">
                            <a href={link}>
                                <img src={image} />
                                <div className="works-info text-center">
                                    <h3>{title}</h3>
                                    <p>{subtitle}</p>
                                </div>
                            </a>
                        </div>
                    </Col>
                )
            })}
        </Row>
        <Pagination className='d-flex justify-content-center pagination'>{items}</Pagination>
        </Container>
    </section>
)
}

export default Works

