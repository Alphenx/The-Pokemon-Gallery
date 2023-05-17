import { render, screen, waitFor } from '@testing-library/react';
import Home from './Home';
import { MemoryRouter } from 'react-router-dom';

describe('Given a Home page', () => {
  describe('When it is rendered', () => {
    test('then it should render a Loading component', () => {
      render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
      waitFor(() => {
        const loadingElement = screen.getByText(/Loading.../i);
        expect(loadingElement).toBeInTheDocument();
      });
    });

    test('then it should render a ErrorMsg component when there is an error loading pokemons', async () => {
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: false,
        json: jest.fn().mockResolvedValue(undefined),
      });

      render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
      await waitFor(() => {
        const errorMsgElement = screen.getByText(
          /Ops...something went wrong. Please try again later./i
        );
        expect(errorMsgElement).toBeInTheDocument();
      });
    });
  });
});
