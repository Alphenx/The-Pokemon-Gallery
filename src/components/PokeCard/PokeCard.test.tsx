import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { pokemon1, pokemon2 } from '../../mocks/pokemon-mocks';
import PokeCard from './PokeCard';

describe('Given a PokeCard component', () => {
  describe('When it is rendered', () => {
    test('Then it should display pokemon name, id and image', () => {
      render(
        <MemoryRouter>
          <PokeCard pokemon={pokemon1} />
        </MemoryRouter>
      );

      const name = screen.getByText(pokemon1.name);
      const id = screen.getByText(
        `#${pokemon1.id.toString().padStart(4, '0')}`
      );
      const image = screen.getByAltText(pokemon1.name);

      expect(name).toBeInTheDocument();
      expect(id).toBeInTheDocument();
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', pokemon1.imgUrl);
    });

    test('Then it should display pokemon types', () => {
      render(
        <MemoryRouter>
          <PokeCard pokemon={pokemon1} />
        </MemoryRouter>
      );

      const types = screen.getAllByTestId(`type`);

      expect(types[0]).toHaveAttribute('type', `${pokemon1.type1}`);
      expect(types[1]).toHaveAttribute('type', `${pokemon1.type2}`);
      expect(types).toHaveLength(2);
    });

    test('Then it should have a link to the pokemon detail page', () => {
      render(
        <MemoryRouter>
          <PokeCard pokemon={pokemon1} />
        </MemoryRouter>
      );

      const link = screen.getByRole('link');

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', `/${pokemon1.id}`);
    });
    test('If id is higher than 10000 then it should not be displayed', () => {
      render(
        <MemoryRouter>
          <PokeCard pokemon={pokemon2} />
        </MemoryRouter>
      );

      const id = screen.getByTestId('id');

      expect(id).toHaveStyle('visibility:hidden');
    });
  });
});
