import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Grid from './Grid';
import Clues from './Clues';
import { connect } from 'react-redux';

function Crossword ({ chosenCrswd, activeClue }) {
    return (
        chosenCrswd ? 
            <Container>
                <Container>
                    <div className='highlight active-clue'>
                        <h5>{activeClue ? `${activeClue.direction.toUpperCase()} | ${activeClue.text}` : ''}</h5>
                    </div>
                </Container>
                <Row>
                    <Col>
                        <Grid />
                        <Container className='crswd-info'>
                            <h5>{chosenCrswd.title}</h5>
                            <h6>Author: {chosenCrswd.author}</h6>
                            <h6>Editor: {chosenCrswd.editor}</h6>
                        </Container>
                    </Col>
                    <Col>
                        <Clues />
                    </Col>
                </Row>
                
            </Container>
        : ''
    )
}

const mapStateToProps = (state) => {
    return {
        chosenCrswd: state.chosenCrswd,
        activeClue: state.activeClue
    }
}

export default connect(mapStateToProps)(Crossword)