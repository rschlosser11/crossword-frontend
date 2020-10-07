import React from 'react';
import { connect } from 'react-redux';

class GridBox extends React.Component {
    state = {
        input: '',
    }

    handleKeyDown = (e) => {
        let input = e.target.value
        if (!!input.match(/\b[a-zA-Z]{1}\b/)) {
            let i = parseInt(e.target.parentNode.id);
            let cols = parseInt(this.props.chosenCrswd.cols);
            console.log(cols)
            if (this.props.activeClue.direction === 'down') {
                this.setState(() => ({input: input}));
                this.handleFocus(i + cols, e.target);
            } else {
                this.setState({input: input})
                this.handleFocus(i + 1, e.target);
            }
        }
    }

    handleFocus = (i, prev) => {
        let grid = Array.from(document.querySelectorAll('div.box'));
        !grid[i].classList.contains('empty') ? grid[i].lastChild.focus() : prev.focus();
        
    }
    
    render() {
        let i = this.props.i;
        let letter = this.props.letter;
        let num = this.props.num;
        return (
            <div 
                id={i} 
                className={
                    `${letter === '.' ? 'box empty' : 'box'}`
                }
            >
                {num === 0 ? '' : <span className='box-label'>{num}</span>}
                {letter === '.' ? '' : <input className={`box-input ${this.props.activeBoxes.includes(i.toString()) ? 'highlight' : ''}`} type='text' maxLength='1' onChange={this.handleKeyDown} value={this.state.input}></input>}
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

export default connect(mapStateToProps)(GridBox);