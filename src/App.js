import React from 'react';
import './App.css';

import { connect } from 'react-redux'
import { getCatFact } from './reducer'

import CatFacts from './CatFacts';

function App(props) {
  const { catFacts } = props

  const onClick = () => {
    console.log('click')
    getCatFact()
    
  }

  return (
    <div className="App">
      Async Redux Project
      <CatFacts 
        catFacts={catFacts}
        onClick={onClick}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    catFacts: state.catFacts
  }
}

export default connect(mapStateToProps, getCatFact)(App);