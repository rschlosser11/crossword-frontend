import React from 'react';
import { connect } from 'react-redux';

class GridBox extends React.Component {
    
    render() {
        console.log(this.props.activeBoxes)
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
                {letter === '.' ? '' : <input className={`box-input ${this.props.activeBoxes.includes(i.toString()) ? 'highlight' : ''}`} type='text' maxLength='1' ></input>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        activeClue: state.activeClue,
        activeBoxes: state.activeBoxes
    }
}

export default connect(mapStateToProps)(GridBox);