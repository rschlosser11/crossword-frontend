import React from 'react';
import { Container } from 'react-bootstrap';
import Grid from './Grid';
import { connect } from 'react-redux';
import Clues from './Clues';

function Crossword ({ chosenCrswd }) {
    return (
        <Container>
            <Grid />
            <Clues />
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        chosenCrswd: state.chosenCrswd
    }
  }

export default connect(mapStateToProps)(Crossword)