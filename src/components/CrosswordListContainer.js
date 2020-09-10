import React from 'react';
import { connect } from 'react-redux';
import CrosswordListItem from './CrosswordListItem'

function CrosswordListContainer({ crosswords }) {
    return (
        <div className='crossword-list-container'>
            <h1>Crossword Puzzles</h1>
            <ul>
                {crosswords.map(crossword => <CrosswordListItem key={crossword.id}crossword={crossword} />)}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        crosswords: state.crosswords
    }
}

export default connect(mapStateToProps)(CrosswordListContainer)