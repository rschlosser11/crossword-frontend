import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Grid from './Grid';
import Clues from './Clues';
import { connect } from 'react-redux';
import { setActiveClue, addActiveBoxes, removeActiveClue, removeActiveBoxes } from '../actions/crosswordActions';

class Crossword extends React.Component {
    componentDidUpdate() {
        if (!this.props.activeClue && this.props.chosenCrswd) {
            let clue = {text: this.props.chosenCrswd.across_clues[0], direction: 'across', num: 1}
            this.props.setActiveClue(clue);
            let grid = Array.from(document.querySelectorAll('div.box'));
            console.log(grid[0])
            grid[0].lastChild.focus();
        } 
        if (!this.props.activeBoxes && this.props.ansBoxes) {
            this.props.addActiveBoxes(this.props.ansBoxes['1A']);
            let grid = Array.from(document.querySelectorAll('div.box'));
            grid[0].lastChild.focus();

        }
    }

    componentWillUnmount() {
        this.props.removeActiveClue();
        this.props.removeActiveBoxes();
    }
    
    render() {
        return (
            this.props.chosenCrswd ? 
                <Container className='crossword'>
                    <Container>
                        <div className='highlight active-clue'>
                            <h5>{this.props.activeClue ? `${this.props.activeClue.direction.toUpperCase()} | ${this.props.activeClue.text}` : ''}</h5>
                        </div>
                    </Container>
                    <Row>
                        <Col>
                            <Grid />
                            <Container className='crswd-info'>
                                <h5>{this.props.chosenCrswd.title}</h5>
                                <h6>Author: {this.props.chosenCrswd.author}</h6>
                                <h6>Editor: {this.props.chosenCrswd.editor}</h6>
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
}
const mapStateToProps = (state) => {
    return {
        chosenCrswd: state.chosenCrswd,
        activeClue: state.activeClue,
        ansBoxes: state.ansBoxes,
        activeBoxes: state.activeBoxes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveClue: (clue) => dispatch(setActiveClue(clue)),
        addActiveBoxes: (boxes) => dispatch(addActiveBoxes(boxes)),
        removeActiveClue: () => dispatch(removeActiveClue()),
        removeActiveBoxes: () => dispatch(removeActiveBoxes()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Crossword)