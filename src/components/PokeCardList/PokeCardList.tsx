import { FC } from 'react';
import { Pokemon } from '../../models/pokemon.model';
import PokeCard from '../PokeCard/PokeCard';
import styled from 'styled-components';

interface Props {
  pokemons: Pokemon[] | undefined;
}

const CardListStyled = styled.ul`
  display: grid;
  padding: 2%;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  justify-items: center;

  gap: 1.5rem;
  @media (max-width: 769px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

const PokeCardList: FC<Props> = ({ pokemons }) => {
  return (
    <CardListStyled>
      {pokemons?.map((pokemon) => (
        <li key={pokemon.id}>
          <PokeCard pokemon={pokemon} />
        </li>
      ))}
    </CardListStyled>
  );
};
export default PokeCardList;
