import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Image from 'react-bootstrap/Image';


const About = () => {
    
    const html = 80;
    const responsive = 95;
    const photoshop = 60;
return (
    <section className="about" id='about'>
        <Container fluid>
            <div className="about-title">
                <h2>About Us</h2>
                <p>learn more about us</p>
            </div>
            <Row>
                <Col sm={6} >
                    <Image src='../assets/images/img1.jpg' fluid className='about-img' />
                </Col>
                <Col sm={6} >
                    <div className='about-content'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, 
                            magnam, eveniet consequatur possimus nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Vitae alias ex error distinctio laudantium recusandae, iure. Vel nisi soluta, 
                            minus consectetur reiciendis laborum, laudantium perspiciatis quos molestias quam eum.</p>  
                        <div className="progress-content">
                            <h4>HTML / CSS / JAVASCRIPT</h4>
                            <ProgressBar
                            now={html} 
                            label={`${html}%`} />
                        </div>
                        <div className="progress-content">
                            <h4>RESPONSIVE</h4>
                            <ProgressBar  
                            now={responsive} 
                            label={`${html}%`} />
                        </div>
                        <div className="progress-content">
                            <h4>PHOTOSHOP</h4>
                            <ProgressBar
                            now={photoshop} 
                            label={`${html}%`} />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)
}

export default About

