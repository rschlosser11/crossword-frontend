import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setActiveClue, addActiveBoxes } from '../actions/crosswordActions';

class Clues extends React.Component {
    handleClick = (e) => {
        let clue = {text: e.target.innerText, direction: e.target.getAttribute('direction'), num: e.target.getAttribute('cluenum')}
        this.props.setActiveClue(clue)
        this.setActiveBoxes(clue);
    }

    setActiveBoxes = (clue) => {
        let num = parseInt(clue.num);
        let obj = this.props.ansBoxes;
        let boxes 
        if (obj && clue.direction === 'across') {
            boxes = obj[`${num}A`]
            this.props.addActiveBoxes(obj[`${num}A`])
        } else {
            boxes = obj[`${num}D`]
            this.props.addActiveBoxes(obj[`${num}D`])
        }
        this.setInitialFocus(boxes);
        return boxes
    }

    setInitialFocus = (arr) => {
        let grid = Array.from(document.querySelectorAll('div.box'));
        grid[arr[0]].lastChild.focus();
    }

    render() {
        let chosenCrswd = this.props.chosenCrswd;
        let activeText
        this.props.activeClue ? activeText = this.props.activeClue.text : activeText = '';
        return (
            <Container>
                <Container className='clues'>
                    <h5>ACROSS</h5>
                    <hr />
                    {chosenCrswd.across_clues.map((clue, idx) => {
                        return (
                            <p key={idx} cluenum={clue.split('.')[0]} direction='across' onClick={this.handleClick} className={`clue ${clue === activeText ? 'highlight' : ''}`}>{clue}</p>
                            )
                        })
                    }
                </Container>
                <Container className='clues'>
                    <h5>DOWN</h5>
                    <hr />
                    {chosenCrswd.down_clues.map((clue, idx) => {
                        return (
                            <p key={idx} cluenum={clue.split('.')[0]} direction='down' onClick={this.handleClick} className={`clue ${clue === activeText ? 'highlight' : ''}`}>{clue}</p>
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
        activeClue: state.activeClue,
        ansBoxes: state.ansBoxes,
        activeBoxes: state.activeBoxes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveClue: (clue) => dispatch(setActiveClue(clue)),
        addActiveBoxes: (boxes) => dispatch(addActiveBoxes(boxes)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Clues)