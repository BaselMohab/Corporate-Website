import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import blogData from './blogData';
import Card from 'react-bootstrap/Card';

const Blog = () => {
return (
    <section id='blog' className='blog'>
        <Container fluid>
            <div className="blog-title">
                <h2>latest blogs</h2>
                <p>- get our latest news from blog -</p>
            </div> 
            <Row>
                {blogData.map((blog)=>{
                    const {id, image, date, title, description, link} = blog;
                    return(
                        <Col md={4} sm={12} key={id} className='blog-col'>
                            <Card>
                                <Card.Img src={image} />
                                <Card.Body>
                                    <h4>{date}</h4>
                                    <Card.Title className='card-title'>{title}</Card.Title>
                                    <Card.Text>
                                        <p>{description}</p>
                                    </Card.Text>
                                    <a href={link} className="blog-btn">Read More <i className="fas fa-chevron-right"></i></a>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>    
    </section>
)
}

export default Blog
