import React from 'react';
import { connect } from 'react-redux';
import { setActiveClue, addActiveBoxes } from '../actions/crosswordActions';

class GridBox extends React.Component {
    state = {
        input: '',
    }

    handleChange = (e) => {
        let input = e.target.value
        let i = parseInt(e.target.parentNode.id);
        let cols = parseInt(this.props.chosenCrswd.cols);
        this.setState(() => ({input: input}));
        if (this.props.activeClue.direction === 'down') {
            this.handleFocus(i + cols, e.target);
        } else {
            this.handleFocus(i + 1, e.target);
        }
    }

    handleFocus = (nextI, currentEl) => {
        let grid = Array.from(document.querySelectorAll('div.box'));
        let activeBoxes = this.props.activeBoxes;
        !!activeBoxes.includes(nextI) ? grid[nextI].lastChild.focus() : currentEl.focus(); 
    }

    isActiveBox = (i) => {
        return !!this.props.activeBoxes.find(x => x === i) ? true : false;
    }
    
    render() {
        let i = this.props.i;
        let letter = this.props.letter;
        let num = this.props.num;
        let activeBoxes = this.props.activeBoxes;
        return (
            <div 
                id={i} 
                className={
                    `${letter === '.' ? 'box empty' : 'box'}`
                }
            >
                {num === 0 ? '' : <span className='box-label'>{num}</span>}
                {letter === '.' ? '' : 
                <input 
                    className={`box-input ${activeBoxes && activeBoxes.includes(i) ? 'highlight' : ''}`}
                    type='text'
                    maxLength='1'
                    onChange={this.handleChange}
                    value={this.state.input}
                    onKeyDown={this.handleKeyDown}
                    >
                </input>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        chosenCrswd: state.chosenCrswd,
        activeClue: state.activeClue,
        activeBoxes: state.activeBoxes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveClue: (clue) => dispatch(setActiveClue(clue)),
        addActiveBoxes: (boxes) => dispatch(addActiveBoxes(boxes)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GridBox);