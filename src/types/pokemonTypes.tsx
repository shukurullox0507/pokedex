export interface Pokemon {
    name: string;
    // Other Pokemon properties
  }
  
  export interface PokemonState {
    pokemonList: Pokemon[];
    loading: boolean;
    error: string | null;
  }
  
  export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
  export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';
  
  export interface FetchPokemonSuccessAction {
    type: typeof FETCH_POKEMON_SUCCESS;
    payload: Pokemon[];
  }
  
  export interface FetchPokemonFailureAction {
    type: typeof FETCH_POKEMON_FAILURE;
    payload: string;
  }
  
  export type PokemonActionTypes = FetchPokemonSuccessAction | FetchPokemonFailureAction;
  