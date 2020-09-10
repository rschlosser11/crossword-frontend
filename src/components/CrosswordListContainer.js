import React from 'react';
import { connect } from 'react-redux';
import CrosswordListItem from './CrosswordListItem';
import { Container, Tabs, Tab } from 'react-bootstrap';

function CrosswordListContainer({ crosswords }) {
    return (
        <Container>
            <h1>Crossword Puzzles</h1>
            <Tabs defaultActiveKey='easy'>
                <Tab eventKey='easy' title="Easy">
                    {crosswords.map(crossword => <CrosswordListItem key={crossword.id}crossword={crossword} />)}
                </Tab>
                <Tab eventKey='medium' title="Medium">
                    {crosswords.map(crossword => <CrosswordListItem key={crossword.id}crossword={crossword} />)}
                </Tab>
                <Tab eventKey='hard' title="Hard">
                    {crosswords.map(crossword => <CrosswordListItem key={crossword.id}crossword={crossword} />)}
                </Tab>
                <Tab eventKey='sunday' title="Sunday">
                    {crosswords.map(crossword => <CrosswordListItem key={crossword.id}crossword={crossword} />)}
                </Tab>
            </Tabs>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        crosswords: state.crosswords
    }
}

export default connect(mapStateToProps)(CrosswordListContainer)