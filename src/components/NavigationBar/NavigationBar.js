import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Container, NavDropdown } from 'react-bootstrap';
import logo from '../../images/header-icon.jpg';
import './NavigationBar.css'


const NavigationBar = (props) => {
    return (
        <Navbar bg='white' bsPrefix='navbar' fixed='top' expand="lg">
            <Container>
                <img className='header logo' src={logo} />
                <Navbar.Brand href="#home">Pocket Barista</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Coffee" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#hotCoffee">Hot Coffee</NavDropdown.Item>
                        <NavDropdown.Item href="#icedCoffee">Iced Coffee</NavDropdown.Item>
                        <NavDropdown.Item href="#frappucinnos">Frappuccinos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#create">Create your own</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Tea" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#hotTea">Hot Tea</NavDropdown.Item>
                        <NavDropdown.Item href="#icedTea">Iced Tea</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#secretMenu">Secret Menu</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;