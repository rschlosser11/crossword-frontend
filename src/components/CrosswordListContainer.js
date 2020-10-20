import React from 'react';
import { connect } from 'react-redux';
import CrosswordListItem from './CrosswordListItem';
import { Container, Tabs, Tab } from 'react-bootstrap';
import { fetchCrswdsByDifficulty } from '../actions/crosswordActions';
import logo from '../images/crossword-logo.png';

class CrosswordListContainer extends React.Component {
    componentDidMount() {
        this.props.fetchCrswdsByDifficulty('easy');
        this.props.fetchCrswdsByDifficulty('medium');
        this.props.fetchCrswdsByDifficulty('hard');
        this.props.fetchCrswdsByDifficulty('sunday');
    }

    render() {
        return (
            <Container className='list-container'>
                <img id='logo' src={logo} alt='crossword puzzles' />
                <Tabs defaultActiveKey='easy'>
                    <Tab eventKey='easy' title="Easy">
                        {this.props.easyCrswds.map(crossword => <CrosswordListItem key={crossword.id} crossword={crossword} />)}
                    </Tab>
                    <Tab eventKey='medium' title="Medium">
                        {this.props.medCrswds.map(crossword => <CrosswordListItem key={crossword.id} crossword={crossword} />)}
                    </Tab>
                    <Tab eventKey='hard' title="Hard">
                        {this.props.hardCrswds.map(crossword => <CrosswordListItem key={crossword.id} crossword={crossword} />)}
                    </Tab>
                    <Tab eventKey='sunday' title="Sunday">
                        {this.props.sunCrswds.map(crossword => <CrosswordListItem key={crossword.id} crossword={crossword} />)}
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        easyCrswds: state.easyCrswds,
        medCrswds: state.medCrswds,
        hardCrswds: state.hardCrswds,
        sunCrswds: state.sunCrswds
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCrswdsByDifficulty: (level) => dispatch(fetchCrswdsByDifficulty(level))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CrosswordListContainer)