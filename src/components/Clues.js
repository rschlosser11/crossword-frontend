import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

class Clues extends React.Component {
    render() {
        let chosenCrswd = this.props.chosenCrswd;
        return (
            <Container>
                <Container className='clues'>
                    <h5>ACROSS</h5>
                    <hr />
                    {chosenCrswd.across_clues.map((clue, idx) => {
                        return (
                            <p key={idx} cluenum={clue[0]} direction='across' onClick={this.handleClick} className='clue'>{clue}</p>
                            )
                        })
                    }
                </Container>
                <Container className='clues'>
                    <h5>DOWN</h5>
                    <hr />
                    {chosenCrswd.down_clues.map((clue, idx) => {
                        return (
                            <p key={idx} cluenum={clue.split('.')[0]} direction='down' className='clue'>{clue}</p>
                            )
                        })
                    }
                </Container>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        chosenCrswd: state.chosenCrswd,
        activeClue: state.activeClue
    }
}

export default connect(mapStateToProps)(Clues)