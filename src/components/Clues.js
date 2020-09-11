import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

function Clues ({ chosenCrswd }) {
    return (
        <Container>
            <Container className='clues'>
                <h5>ACROSS</h5>
                <hr />
                {chosenCrswd.across_clues.map((clue, idx) => {
                    return (
                        <p key={idx} className='clue'>{clue}</p>
                        )
                    })
                }
            </Container>
            <Container className='clues'>
                <h5>DOWN</h5>
                <hr />
                {chosenCrswd.down_clues.map((clue, idx) => {
                    return (
                        <p key={idx} className='clue'>{clue}</p>
                        )
                    })
                }
            </Container>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        chosenCrswd: state.chosenCrswd
    }
}

export default connect(mapStateToProps)(Clues)