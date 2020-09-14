import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchChosenCrswd } from '../actions/crosswordActions';

class CrosswordListItem extends React.Component {
    handleClick = (e) => {
        this.props.fetchChosenCrswd(this.props.crossword.id)
    }
    
    render() {
        let crossword = this.props.crossword
        let id = this.props.crossword.id;
        return (
            <p><Link to={`/crosswords/${id}`} onClick={this.handleClick}>{crossword.title}</Link></p>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchChosenCrswd: (id) => dispatch(fetchChosenCrswd(id))
    }
}

export default connect(null, mapDispatchToProps)(CrosswordListItem)