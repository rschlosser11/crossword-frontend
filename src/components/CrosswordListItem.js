import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchChosenCrswd } from '../actions/crosswordActions';

function CrosswordListItem ({ crossword, fetchChosenCrswd}) {
    return (
        <p><Link to={`/crosswords/${crossword.id}`} onClick={fetchChosenCrswd(crossword.id)}>{crossword.title}</Link></p>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchChosenCrswd: (id) => dispatch(fetchChosenCrswd(id))
    }
}

export default connect(null, mapDispatchToProps)(CrosswordListItem)