import React, { useEffect } from 'react';
import './App.css';

import { connect } from 'react-redux'
import { getCatFact } from './reducer'

import CatFacts from './CatFacts';

function App(props) {
  const { catFacts, getCatFact } = props

  useEffect(() => {
    getCatFact()
  }, [])

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

const mapActionsToProps = () => {
  return {
    getCatFact
  }
}

export default connect(mapStateToProps, mapActionsToProps())(App);