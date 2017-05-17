import React from 'react';
import { Link } from 'react-router';
import CharactersContainer from './characters/characters_container';

const App = ({ children }) => (
  <div>
    <main>
      <CharactersContainer />
      {children}
    </main>
  </div>
);

export default App;
