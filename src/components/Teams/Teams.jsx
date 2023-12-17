import React from 'react';
import teamsData from './teamsData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Teams = () => {
return (
    <section id='teams' className='teams'>
        <Container fluid>
            <div className="teams-title">
                <h2>Our Teams</h2>
                <p>some of our experts</p>
            </div> 
        <Row>
            {teamsData.map((team)=> {
                const {id, image, fbLink, twitterLink, linkedinLink, fbIcon, twitterIcon, linkedinIcon, name, designation, description } = team;
                return (
                        <Col sm={3} key={id} className='teams-col text-center'>
                            <div className="image">
                                <img src={image} alt={name} />
                                <div className="overlay">
                                    <div className="socials">
                                        <ul>
                                            <li><a href={fbLink}>{fbIcon}</a></li>
                                            <li><a href={twitterLink}>{twitterIcon}</a></li>
                                            <li><a href={linkedinLink}>{linkedinIcon}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <h3>{name}</h3>
                                <span className='designation'>{designation}</span>
                                <p className='description'>{description}</p>
                            </div>
                        </Col>
                )
            })}
        </Row>
    </Container>
    </section>
)
}

export default Teams
