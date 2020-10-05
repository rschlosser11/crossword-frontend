import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setActiveClue, removeActiveClue, addActiveBoxes, removeActiveBoxes } from '../actions/crosswordActions';

class Clues extends React.Component {
    handleClick = (e) => {
        let clue = {text: e.target.innerText, direction: e.target.getAttribute('direction'), num: e.target.getAttribute('cluenum'), ans: this.findAnswer(e.target.innerText, e.target.getAttribute('direction'))}
        this.props.setActiveClue(clue)
        console.log(this.props.activeClue)
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
        let length = clue.ans.length;
        let arrBoxes = Array.from(document.querySelectorAll('div.box'))
        let arrSpans = Array.from(document.querySelectorAll('span.box-label'))
        let firstBox = arrSpans.find(span => span.innerText === clue.num).parentElement
        let boxes = arrBoxes.slice(parseInt(firstBox.id), (parseInt(firstBox.id) + length))
        this.props.addActiveBoxes(boxes.map(box => box.id));
    }

    findAnswer = (clue, direction) => {
        let crossword = this.props.chosenCrswd;
        if (direction === 'across') {
            let i = crossword.across_clues.indexOf(clue)
            return crossword.across_ans[i];
        } else {
            let i = crossword.down_clues.indexOf(clue)
            return crossword.down_ans[i];
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
        this.props.removeActiveBoxesI();
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
        activeClue: state.activeClue
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