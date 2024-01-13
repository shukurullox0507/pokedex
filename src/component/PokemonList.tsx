// PokemonList.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers/pokemonReducer';
import { fetchPokemonData } from '../actions/pokemonActions';
import { Pokemon } from '../types/pokemonTypes'; // Define your Pokemon interface

const PokemonList: React.FC = () => {
    const dispatch = useDispatch();
    const { pokemonList, loading, error } = useSelector((state: RootState) => state.pokemon);

    useEffect(() => {
        dispatch(fetchPokemonData(10, 0)); // Fetch first 10 Pokemon
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Pokemon List</h1>
            <div className="pokemon-list">
                {pokemonList.map((pokemon: Pokemon) => (
                    <div key={pokemon.name} className="pokemon-item">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} />
                        <p>{pokemon.name}</p>
                        {/* Render other Pokemon details as needed */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonList;
