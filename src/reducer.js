import { combineReducers } from "redux"
import axios from 'axios'

export const ADD_NEW_CATFACT = 'ADD_NEW_CATFACT'

export const getCatFact = () => dispatch => {
    axios.get('https://catfact.ninja/fact')
        .then(res => {
            console.log(res.data.fact)
            dispatch({ type: ADD_NEW_CATFACT, payload: res.data.fact })
        })
        .catch(err => {
            console.log(err)
        })
}

const initialFacts = []
function catFacts(state = initialFacts, action) {
    switch (action.type) {
        case ADD_NEW_CATFACT:
            return [...state, action.payload]
        default:
            return state
    }
}

const initialError = ''
function error(state = initialError, action) {
  switch (action.type) {
    case 'SET_ERROR':
      return action.payload
    default:
      return state
  }
}

export default combineReducers({ catFacts, error })