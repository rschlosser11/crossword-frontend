import React from 'react';
import { Container } from 'react-bootstrap';

export default class Grid extends React.Component {
    render () {
        let crossword = this.props.crossword
        return(
            <Container>
                {crossword.cols}
            </Container>
        )
    }
}