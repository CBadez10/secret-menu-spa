import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Container, NavDropdown } from 'react-bootstrap';
import logo from '../../images/header-icon.jpg';
import './NavigationBar.css'
import { Link } from 'react-router-dom';


const NavigationBar = (props) => {
    return (
        <Navbar bg='white' bsPrefix='navbar' fixed='top' expand="lg">
            <Container>
                <img className='header logo' src={logo} />
                <Navbar.Brand href="/">Pocket Barista</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Coffee" id="basic-nav-dropdown">
                        <NavDropdown.Item href="hotCoffee"><Link to="/hotCoffee">Hot Coffee</Link></NavDropdown.Item>
                        <NavDropdown.Item href="icedCoffee"><Link to="/icedCoffee">Iced Coffee</Link></NavDropdown.Item>
                        <NavDropdown.Item href="frappuccinos"><Link to="/frappuccinos">Frappuccinos</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="create">Create your own</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Tea" id="basic-nav-dropdown">
                        <NavDropdown.Item href="hotTea"><Link to="/hotTea">Hot Tea</Link></NavDropdown.Item>
                        <NavDropdown.Item href="icedTea"><Link to="/icedTea">Iced Tea</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="secretMenu"><Link to="/secretMenu">Secret Menu</Link></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;