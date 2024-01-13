import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/pokemonReducer';
import { PokemonState, PokemonActionTypes } from '../types/pokemonTypes'; // Import your types/interfaces

// Ensure the rootReducer is correctly importing and combining your reducers
// Example:
// import { combineReducers } from 'redux';
// const rootReducer = combineReducers({ pokemon: pokemonReducer });

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware());
  return store;
};

export default configureStore;
