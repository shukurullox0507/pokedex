// App.tsx

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/pokemonStore';
import PokemonList from './component/PokemonList';

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Pokedex App</h1>
        <PokemonList />
        {/* Add other components and routing if needed */}
      </div>
    </Provider>
  );
};

export default App;
