import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import testimonialsData from './testimonialsData';

const Testimonials = () => {
return (
    <section id='testimonials' className='testimonials'>
        <Container fluid>
            <div className="testimonials-title">
                <h2>CLIENT TESTIMONIALS</h2>
                <p>- what client says about us -</p>
            </div> 
            <Carousel controls={false}>
                {testimonialsData.map((testimonial)=>{
                const {id, description, name, designation} = testimonial;
                return (
                <Carousel.Item key={id}>
                    <blockquote>
                        <p>{description}</p>
                        <cite>
                            <h3>{name}</h3>
                            <p>{designation}</p>
                        </cite>
                    </blockquote>
                </Carousel.Item>
                )
                })}
            </Carousel>
        </Container>
    </section>
)
}

export default Testimonials
