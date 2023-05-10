import { render, screen } from '@testing-library/react';
import PokeCardList from './PokeCardList';
import { Pokemon } from '../../models/pokemon.model';
import { pokemon1 } from '../../mocks/pokemon-mocks';
import { MemoryRouter } from 'react-router-dom';

describe('Given a PokeCardList component', () => {
  describe('When it is rendered with a list of pokemons', () => {
    test('Then it should display all the pokemon cards', () => {
      const pokemons = [pokemon1];
      render(
        <MemoryRouter>
          <PokeCardList pokemons={pokemons} />
        </MemoryRouter>
      );

      const pokeCards = screen.getAllByRole('listitem');

      expect(pokeCards).toHaveLength(pokemons.length);
    });

    test('Then it should display no pokemon cards', () => {
      const pokemons: Pokemon[] = [];
      render(
        <MemoryRouter>
          <PokeCardList pokemons={pokemons} />
        </MemoryRouter>
      );

      const pokeCards = screen.queryAllByRole('listitem');

      expect(pokeCards).toHaveLength(pokemons.length);
    });
  });
});
