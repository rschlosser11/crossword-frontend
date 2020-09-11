import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

function Clues ({ chosenCrswd }) {
    return (
        <Container>
            {chosenCrswd.across_clues[0]}
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        chosenCrswd: state.chosenCrswd
    }
}

export default connect(mapStateToProps)(Clues)