import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/pokemonReducer';
import { PokemonActionTypes, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE, Pokemon } from '../types/pokemonTypes';
import { fetchPokemonList } from '../services/api';

export const fetchPokemonData = (
  limit: number,
  offset: number
): ThunkAction<void, RootState, unknown, PokemonActionTypes> => {
  return async (dispatch: Dispatch<PokemonActionTypes>, getState: () => RootState) => {
    try {
      const pokemonData: Pokemon[] = await fetchPokemonList(limit, offset);

      dispatch({
        type: FETCH_POKEMON_SUCCESS,
        payload: pokemonData,
      });
    } catch (error) {
      dispatch({
        type: FETCH_POKEMON_FAILURE,
        payload: 'Failed to fetch Pokemon data',
      });
    }
  };
};
