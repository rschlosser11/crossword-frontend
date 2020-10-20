import React from 'react';
import { connect } from 'react-redux';
import { fetchAllCrosswords } from './actions/crosswordActions';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CrosswordListContainer from './components/CrosswordListContainer';
import Crossword from './components/Crossword';

class App extends React.Component {
  componentDidMount () {
    this.props.fetchCrosswords();
  }
  render () {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={CrosswordListContainer} />
          <Route exact path='/crosswords/:id' component={Crossword} />
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
    fetchCrosswords: () => dispatch(fetchAllCrosswords()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
