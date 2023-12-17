import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navdata from './navdata';

const Header = () => {
return (
        <section className="navbar" id="home">
            <Navbar bg="light" expand="lg" fixed="top">
                <Container>
                <Navbar.Brand class="navbar-logo" href="#home">Corporate</Navbar.Brand>
                <Nav className="navbar-nav ms-auto">
                    {navdata.map((list) => {
                    const { id, name, href } = list;
                    return (
                        <Nav.Link class="nav-link" key={id} href={href}>
                        {name}
                        </Nav.Link>
                    );
                    })}
                </Nav>
                </Container>
            </Navbar>
        </section>
)
}

export default Header;

