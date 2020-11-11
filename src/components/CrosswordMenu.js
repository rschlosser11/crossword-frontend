import React from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/crossword-logo.png';
import { connect } from 'react-redux';

class CrosswordMenu extends React.Component {
    checkGrid = () => {
        let guesses = Array.from(document.querySelectorAll('div.box'));
        let answers = this.props.chosenCrswd.grid;
        
        answers.forEach((ans, i) => {
            let guess = guesses[i].lastChild;
            if (ans[i] !== guess.innerText) {
                guess.classList.add('wrong');
            }
        })
    }

    render() {
        return (
            <Navbar bg='light' expand='lg'>
                <Navbar.Brand><Link to='/'><img style={{width: '250px'}} src={logo} alt='Crossword Puzzles' /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='justify-content-end' style={{width: '100%'}}>
                        <NavDropdown title='Check' id='basic-nav-dropdown'>
                            <NavDropdown.Item>Check Letter</NavDropdown.Item>
                            <NavDropdown.Item>Check Clue</NavDropdown.Item>
                            <NavDropdown.Item onClick={this.checkGrid}>Check Entire Grid</NavDropdown.Item>
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
}

const mapStateToProps = (state) => {
    return {
        chosenCrswd: state.chosenCrswd,
        activeClue: state.activeClue,
        activeBoxes: state.activeBoxes,
    }
}

export default connect(mapStateToProps)(CrosswordMenu);