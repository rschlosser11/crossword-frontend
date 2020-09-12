import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import GridBox from './GridBox';

class Grid extends React.Component {
    render () {
        let crossword = this.props.chosenCrswd
        let style = {
            width: `${42 * crossword.cols}px`,
        }
        return(
            <Container style={style} >
                {crossword.grid.map((box, i) => {
                    return <GridBox letter={box} num={crossword.gridnums[i]} />
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

export default connect(mapStateToProps)(Grid)
