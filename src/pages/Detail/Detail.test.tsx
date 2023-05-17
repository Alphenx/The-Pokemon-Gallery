import { render, renderHook, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Detail from './Detail';
import { pokemonRes } from '../../mocks/pokemon-mocks';
import usePokemonDetail from '../../hooks/usePokemonDetail';

describe('Given a Detail page', () => {
  describe('When it is rendered with a valid pokemon ID', () => {
    test('then it should render a Loading component', () => {
      render(
        <MemoryRouter initialEntries={['/1']}>
          <Routes>
            <Route path="/:id" element={<Detail />} />
          </Routes>
        </MemoryRouter>
      );
      waitFor(() => {
        const loadingElement = screen.getByText(/Loading pokemons.../i);
        expect(loadingElement).toBeInTheDocument();
      });
    });

    test('then it should render the Pokemon detail card', async () => {
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(pokemonRes),
      });
      render(
        <MemoryRouter initialEntries={['/1']}>
          <Routes>
            <Route path="/:id" element={<Detail />} />
          </Routes>
        </MemoryRouter>
      );

      await waitFor(() => {
        const pokemonName = screen.getByText(/bulbasaur/i);
        const pokemonImage = screen.getByAltText(/bulbasaur/i);

        expect(pokemonName).toBeInTheDocument();
        expect(pokemonImage).toBeInTheDocument();
      });
    });

    test('then usePokemonDetail should return the expected values', async () => {
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(pokemonRes),
      });

      render(
        <MemoryRouter initialEntries={['/1']}>
          <Routes>
            <Route path="/:id" element={<Detail />} />
          </Routes>
        </MemoryRouter>
      );

      const { result } = renderHook(() => usePokemonDetail(1));

      expect(result.current.loading).toBe(true);
      expect(result.current.isFulfilled).toBe(false);
      expect(result.current.pokemon).toBeUndefined();

      waitFor(() => {
        expect(result.current.loading).toBe(false);
        expect(result.current.isFulfilled).toBe(true);
        expect(result.current.pokemon?.name).toBe('bulbasaur');
      });
    });
  });

  describe('When it is rendered with an invalid pokemon ID', () => {
    test('then it should render an error message', async () => {
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: false,
        json: jest.fn().mockRejectedValue(undefined),
      });
      render(
        <MemoryRouter initialEntries={['/invalid-id']}>
          <Routes>
            <Route path="/:id" element={<Detail />} />
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

    test('then usePokemonDetail should return the expected values', () => {
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: false,
        json: jest.fn().mockRejectedValue(undefined),
      });

      render(
        <MemoryRouter initialEntries={['/invalid-id']}>
          <Routes>
            <Route path="/:id" element={<Detail />} />
          </Routes>
        </MemoryRouter>
      );

      const { result } = renderHook(() => usePokemonDetail(undefined));

      waitFor(() => {
        expect(result.current.loading).toBe(false);
        expect(result.current.isFulfilled).toBe(true);
        expect(result.current.pokemon?.name).toBeUndefined();
      });
    });
  });
});
