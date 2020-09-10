import React from 'react';
import { Container } from 'react-bootstrap';
import Grid from './Grid';
import { connect } from 'react-redux';
import Clues from './Clues';

function Crossword (props) {
    let id = parseInt(props.match.params.id);
    let crossword = props.crosswords.find(cross => cross.id === id)
    return (
        <Container>
            <Grid crossword={crossword} />
            <Clues crossword={crossword} />
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
      crosswords: state.crosswords
    }
  }

export default connect(mapStateToProps)(Crossword)