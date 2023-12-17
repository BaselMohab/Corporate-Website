import React from 'react';
import hero from './herodata'
import Carousel from 'react-bootstrap/Carousel';

const Hero = () => {
return (
    <section className="hero" id='home'>
        <Carousel>
        {hero.map((hero) => {
            const {id, title, desc, image} = hero
            return (
        <Carousel.Item key={id} className='slider' >
                <img src={image}  
                className="d-block w-100"
                alt={"slide " + id}/>
            <Carousel.Caption className='slider-content'>
                <h3>{title}</h3>
                <p>{desc}</p>
                <a className="btn slider-btn" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
            </Carousel.Caption>
        </Carousel.Item>
            )
        })}   
        </Carousel>
    </section>
)
}

export default Hero;





