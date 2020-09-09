import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchCrosswords } from './actions/crosswordActions';

class App extends React.Component {
  componentDidMount () {
    this.props.fetchCrosswords();
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
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
