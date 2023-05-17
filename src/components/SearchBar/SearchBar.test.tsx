import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchBar from './SearchBar';

describe('Given a SearchBar component', () => {
  describe('When the user searches for a pokemon', () => {
    test('then it should navigate to the pokemon page', () => {
      const navigate = jest.fn();
      render(
        <MemoryRouter>
          <SearchBar />
        </MemoryRouter>
      );

      const searchInput = screen.getByPlaceholderText('Search pokemon');
      const searchButton = screen.getByTestId('searchById');

      fireEvent.change(searchInput, { target: { value: 'bulbasaur' } });
      fireEvent.click(searchButton);

      waitFor(() => {
        expect(navigate).toHaveBeenCalledWith('/1');
      });
    });
  });

  describe('When the user filters by pokemon type', () => {
    test('then it should navigate to the type filter page', () => {
      const navigate = jest.fn();
      render(
        <MemoryRouter>
          <SearchBar />
        </MemoryRouter>
      );

      const typeSelect = screen.getByRole('combobox');
      const searchButton = screen.getByTestId('searchByType');

      fireEvent.change(typeSelect, { target: { value: 'fire' } });
      fireEvent.click(searchButton);
      waitFor(() => {
        expect(navigate).toHaveBeenCalledWith('/filter/fire');
      });
    });
  });
});
