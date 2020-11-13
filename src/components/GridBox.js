import React from 'react';
import { connect } from 'react-redux';
import { setActiveClue, addActiveBoxes } from '../actions/crosswordActions';

class GridBox extends React.Component {
    state = {
        input: '',
    }

    handleClick = (e) => {
        let num = parseInt(e.target.parentElement.id);
        if (!this.props.activeBoxes.includes(num)) {
            let ansBoxes = this.props.ansBoxes;
            let currentClue = this.props.activeClue;
            let dir = currentClue.direction;
            let letter
            dir === 'across' ? letter = "A" : letter = "D";
            let clues = this.props.chosenCrswd[`${dir}_clues`];
            for (let key in ansBoxes) {
                if (key.includes(letter) && ansBoxes[key].includes(num)) {
                    let boxes = ansBoxes[key];
                    let num = key.split(/[AD]/)[0];
                    let text = clues.find(clue => clue.includes(num));
                    let newClue = {text: text, direction: dir, num: num}
                    this.props.setActiveClue(newClue);
                    this.props.addActiveBoxes(boxes);
                }
            }
        }
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

    handleKeyDown = (e) => {
        e.preventDefault();
        let currentClue = this.props.activeClue;
        let nextClue;
        let dir = currentClue.direction;
        let clues = this.props.chosenCrswd[`${dir}_clues`];
        let currentI;
        if (e.key === 'Tab') {
            currentI = clues.findIndex(clue => clue === currentClue.text)
            nextClue = {text: clues[currentI + 1], direction: dir, num: clues[currentI + 1].split('.')[0]}
            this.props.setActiveClue(nextClue);
            this.setActiveBoxes(nextClue);
        }
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
                onClick={this.handleClick}
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
        activeBoxes: state.activeBoxes,
        ansBoxes: state.ansBoxes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveClue: (clue) => dispatch(setActiveClue(clue)),
        addActiveBoxes: (boxes) => dispatch(addActiveBoxes(boxes)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GridBox);