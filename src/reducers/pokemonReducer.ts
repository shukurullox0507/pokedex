import { combineReducers } from 'redux';
import { PokemonActionTypes, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE, PokemonState } from '../types/pokemonTypes';

// Define your initial state
const initialState: PokemonState = {
    // Define your initial state properties
    pokemonList: [],
    loading: false,
    error: null,
};

const pokemonReducer = (state = initialState, action: PokemonActionTypes): PokemonState => {
    switch (action.type) {
        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                pokemonList: action.payload,
                loading: false,
                error: null,
            };
        case FETCH_POKEMON_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

// Explicitly exporting RootState
export interface RootState {
    pokemon: PokemonState;
}

export default pokemonReducer;
