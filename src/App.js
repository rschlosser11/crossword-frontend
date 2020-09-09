import React from 'react';
import { connect } from 'react-redux';
import { fetchCrosswords } from './actions/crosswordActions';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CrosswordListContainer from './components/CrosswordListContainer';

class App extends React.Component {
  componentDidMount () {
    this.props.fetchCrosswords();
  }
  render () {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' render={() => <h1>Crossword Puzzles</h1>} />
          <Route exact path='/crosswords' component={CrosswordListContainer} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    crosswords: state.crosswords
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCrosswords: () => dispatch(fetchCrosswords()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
