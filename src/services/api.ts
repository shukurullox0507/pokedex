// api.ts

import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Example function to fetch Pokemon list
export const fetchPokemonList = async (limit: number, offset: number) => {
    try {
        const response = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch Pokemon list');
    }
};

// Add more functions for different API endpoints if needed

export default api;
