import React from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/crossword-logo.png'

function CrosswordMenu () {
    return (
        <Navbar bg='light' expand='lg'>
            <Navbar.Brand><img style={{width: '250px'}} src={logo} /></Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='justify-content-end' style={{width: '100%'}}>
                    <NavDropdown title='Check' id='basic-nav-dropdown'>
                        <NavDropdown.Item>Check Letter</NavDropdown.Item>
                        <NavDropdown.Item>Check Clue</NavDropdown.Item>
                        <NavDropdown.Item>Check Entire Grid</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title='Reveal' id='basic-nav-dropdown'>
                        <NavDropdown.Item>Reveal Letter</NavDropdown.Item>
                        <NavDropdown.Item>Reveal Clue</NavDropdown.Item>
                        <NavDropdown.Item>Reveal Entire Grid</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default CrosswordMenu;