import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import GridBox from './GridBox';
import { removeCrswd } from '../actions/crosswordActions';

class Grid extends React.Component {
    componentWillUnmount() {
        this.props.removeCrswd();
    }

    render () {
        let crossword = this.props.chosenCrswd
        let style = {
            width: `${42 * crossword.cols}px`,
        }
        return(
            <Container style={style} >
                {crossword.grid.map((box, i) => {
                    return <GridBox key={i} letter={box} i={i} num={crossword.gridnums[i]} />
                })}
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        chosenCrswd: state.chosenCrswd
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeCrswd: () => dispatch(removeCrswd())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid)
