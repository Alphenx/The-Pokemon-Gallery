import { render, screen } from '@testing-library/react';
import Home from './Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home component', () => {
  test('renders Loading component when loading is true', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const loadingElement = screen.getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();
  });

  test('renders ErrorMsg component when there is an error loading pokemons', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue(undefined),
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const errorMsgElement = await screen.findByText(
      /Ops...something went wrong. Please try again later./i
    );
    expect(errorMsgElement).toBeInTheDocument();
  });
});
