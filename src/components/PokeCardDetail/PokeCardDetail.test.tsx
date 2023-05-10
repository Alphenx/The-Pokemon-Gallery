import { render, screen, waitFor } from '@testing-library/react';
import PokeCardDetail from './PokeCardDetail';
import { MemoryRouter } from 'react-router-dom';
import { pokemon1 } from '../../mocks/pokemon-mocks';

describe('Given a PokeCardDetail component', () => {
  describe('When it is rendered with valid props', () => {
    test('Then it should display pokemon name, id and image', () => {
      render(
        <MemoryRouter>
          <PokeCardDetail pokemon={pokemon1} />
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

    // test('Then it should display pokemon types', () => {
    //   const type1 = screen.getByTestId(`type-${pokemon1.type1}`);
    //   const type2 = screen.getByTestId(`type-${pokemon1.type2}`);

    //   expect(type1).toBeInTheDocument();
    //   expect(type2).toBeInTheDocument();
    // });

    test('Then it should display pokemon size', () => {
      render(
        <MemoryRouter>
          <PokeCardDetail pokemon={pokemon1} />
        </MemoryRouter>
      );
      waitFor(() => {
        const weight = screen.getByText(`Weight: ${pokemon1.size.weight} kg`);
        const height = screen.getByText(`Height: ${pokemon1.size.height} cm`);
        expect(weight).toBeInTheDocument();
        expect(height).toBeInTheDocument();
      });
    });

    test('Then it should display pokemon stats', () => {
      render(
        <MemoryRouter>
          <PokeCardDetail pokemon={pokemon1} />
        </MemoryRouter>
      );
      waitFor(() => {
        const hp = screen.getByText(`HP : ${pokemon1.stats[0].value}`);
        const attack = screen.getByText(`Attack : ${pokemon1.stats[1].value}`);
        const defense = screen.getByText(
          `Defense : ${pokemon1.stats[2].value}`
        );
        const specialAttack = screen.getByText(
          `Special Attack : ${pokemon1.stats[3].value}`
        );
        const specialDefense = screen.getByText(
          `Special Defense : ${pokemon1.stats[4].value}`
        );
        const speed = screen.getByText(`Speed : ${pokemon1.stats[5].value}`);

        expect(speed).toBeInTheDocument();
        expect(specialDefense).toBeInTheDocument();
        expect(specialAttack).toBeInTheDocument();
        expect(defense).toBeInTheDocument();
        expect(attack).toBeInTheDocument();
        expect(hp).toBeInTheDocument();
      });
    });

    test('If id is higher than 10000 then it should not display the id', () => {
      const pokemon = { ...pokemon1, id: 20001 };

      render(
        <MemoryRouter>
          <PokeCardDetail pokemon={pokemon} />
        </MemoryRouter>
      );
      const id = screen.getByTestId('idDetail');

      expect(id).toHaveStyle('visibility:hidden');
    });
  });
});
