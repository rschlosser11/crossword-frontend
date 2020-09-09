import React from 'react';
import { connect } from 'react-redux';

function CrosswordListContainer({ crosswords }) {
    return (
        <div className='crossword-list-container'>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        crosswords: state.crosswords
    }
}

export default connect(mapStateToProps)(CrosswordListContainer)