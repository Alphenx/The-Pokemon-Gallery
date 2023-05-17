import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Filtered from './Filtered';
import { render, screen, waitFor } from '@testing-library/react';
import { mockPokemonsByType } from '../../mocks/pokemon-mocks';

describe('Given a Filtered page', () => {
  describe('When it is rendered with a valid type', () => {
    test('then it should render a Loading component', () => {
      render(
        <MemoryRouter initialEntries={['/filter/normal']}>
          <Routes>
            <Route path="/filter/:type" element={<Filtered />} />
          </Routes>
        </MemoryRouter>
      );
      waitFor(() => {
        const loadingElement = screen.getByText(/Loading pokemons.../i);
        expect(loadingElement).toBeInTheDocument();
      });
    });

    test('then it should render the Pokemon type cardList', async () => {
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockPokemonsByType),
      });
      render(
        <MemoryRouter initialEntries={['/filter/grass']}>
          <Routes>
            <Route path="/filter/:type" element={<Filtered />} />
          </Routes>
        </MemoryRouter>
      );

      waitFor(() => {
        const pokemonName = screen.getByText(/bulbasaur/i);
        const pokemonImage = screen.getByAltText(/bulbasaur/i);

        expect(pokemonName).toBeInTheDocument();
        expect(pokemonImage).toBeInTheDocument();
      });
    });
  });

  describe('When it is rendered with an invalid pokemon type', () => {
    test('then it should render an error message', async () => {
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: false,
        json: jest.fn().mockRejectedValue(undefined),
      });
      render(
        <MemoryRouter initialEntries={['/filter/invalid-type']}>
          <Routes>
            <Route path="/filter/:type" element={<Filtered />} />
          </Routes>
        </MemoryRouter>
      );

      await waitFor(() => {
        const errorMessage = screen.getByText(
          /Ops...something went wrong. Please try again later./i
        );
        expect(errorMessage).toBeInTheDocument();
      });
    });
  });
});
