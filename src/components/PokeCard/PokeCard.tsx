import { FC } from 'react';
import { Pokemon } from '../../models/pokemon.model';
import PokeType from '../PokeType/PokeType';
import { CardStyled } from './PokeCardStyled';
import { Link } from 'react-router-dom';

export interface Props {
  pokemon: Pokemon;
}

const PokeCard: FC<Props> = ({ pokemon }) => {
  const { name, id, imgUrl, type1, type2 } = pokemon;

  return (
    <CardStyled pokemon={pokemon}>
      <div className="pokemon-info">
        <h2>{name}</h2>
        <p data-testid="id">#{id.toString().padStart(4, '0')}</p>
      </div>
      <Link to={`/${id}`}>
        <img src={imgUrl} alt={name} />
      </Link>
      <div className="types">
        <PokeType type={type1} />
        <PokeType type={type2} />
      </div>
    </CardStyled>
  );
};
export default PokeCard;
