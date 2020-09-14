import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Grid from './Grid';
import Clues from './Clues';
import { connect } from 'react-redux';

function Crossword ({ chosenCrswd }) {
    return (
        chosenCrswd ? 
            <Container>
                <Container>
                    <h3>{chosenCrswd.title}</h3>
                </Container>
                <Row>
                    <Col>
                        <Grid />
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
        chosenCrswd: state.chosenCrswd
    }
}

export default connect(mapStateToProps)(Crossword)