import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setActiveClue, removeActiveClue, addActiveBoxes, removeActiveBoxes } from '../actions/crosswordActions';

class Clues extends React.Component {
    handleClick = (e) => {
        let clue = {text: e.target.innerText, direction: e.target.getAttribute('direction'), num: e.target.getAttribute('cluenum')}
        this.props.setActiveClue(clue)
        if (this.props.activeClue) {
            let activeClue = this.props.activeClue;
            if (activeClue.direction === 'across') {
                let down = this.props.chosenCrswd.down_clues.find(clue => clue.split('.')[0] === activeClue.num)
                this.removeHighlight(activeClue.text, down)
            } else {
                let across = this.props.chosenCrswd.across_clues.find(clue => clue.split('.')[0] === activeClue.num)
                this.removeHighlight(across, activeClue.text)
            } 
        }
        this.setActiveBoxes(clue);
    }


    setActiveBoxes = (clue) => {
        let num = parseInt(clue.num);
        let obj = this.props.ansBoxes;
        if (obj && clue.direction === 'across') {
            return this.props.addActiveBoxes(obj[`${num}A`])
        } else {
            return this.props.addActiveBoxes(obj[`${num}D`])
        }
    }

    removeHighlight = (clueAcross, clueDown) => {
        let arr = Array.from(document.querySelectorAll('p.clue'));
        if (!!arr.find(p => p.innerText === clueAcross)) {
            arr.find(p => p.innerText === clueAcross).classList.remove('highlight');
        }
        if (!!arr.find(p => p.innerText === clueDown)) {
            arr.find(p => p.innerText === clueDown).classList.remove('highlight');
        }
    }

    addHighlight = (clueAcross, clueDown) => {
        let arr = Array.from(document.querySelectorAll('p.clue'));
        if (!!arr.find(p => p.innerText === clueAcross)) {
            arr.find(p => p.innerText === clueAcross).classList.add('highlight');
        }
        if (!!arr.find(p => p.innerText === clueDown)) {
            arr.find(p => p.innerText === clueDown).classList.add('highlight');
        }
    }

    componentDidMount () {
        let chosen = this.props.chosenCrswd
        let clue = {text: chosen.across_clues[0], direction: 'across', num: 1}
        this.props.setActiveClue(clue);
        this.setActiveBoxes(clue);
    }

    componentDidUpdate() {
        let crossword = this.props.chosenCrswd;
        let activeClue = this.props.activeClue;
        let across = crossword.across_clues.find(clue => {
            return clue.split('.')[0] === activeClue.num
        });
        let down = crossword.down_clues.find(clue => clue.split('.')[0] === activeClue.num);
        this.addHighlight(across, down)
    }

    componentWillUnmount() {
        this.props.removeActiveClue();
        this.props.removeActiveBoxes();
    }

    render() {
        let chosenCrswd = this.props.chosenCrswd;
        return (
            <Container>
                <Container className='clues'>
                    <h5>ACROSS</h5>
                    <hr />
                    {chosenCrswd.across_clues.map((clue, idx) => {
                        return (
                            <p key={idx} cluenum={clue.split('.')[0]} direction='across' onClick={this.handleClick} className='clue'>{clue}</p>
                            )
                        })
                    }
                </Container>
                <Container className='clues'>
                    <h5>DOWN</h5>
                    <hr />
                    {chosenCrswd.down_clues.map((clue, idx) => {
                        return (
                            <p key={idx} cluenum={clue.split('.')[0]} direction='down' onClick={this.handleClick} className='clue'>{clue}</p>
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
        removeActiveClue: () => dispatch(removeActiveClue()),
        addActiveBoxes: (boxes) => dispatch(addActiveBoxes(boxes)),
        removeActiveBoxes: () => dispatch(removeActiveBoxes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Clues)