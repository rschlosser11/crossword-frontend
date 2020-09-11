import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

class Grid extends React.Component {
    render () {
        let crossword = this.props.chosenCrswd
        return(
            <Container>
                {crossword.cols}
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        chosenCrswd: state.chosenCrswd
    }
}

export default connect(mapStateToProps)(Grid)
