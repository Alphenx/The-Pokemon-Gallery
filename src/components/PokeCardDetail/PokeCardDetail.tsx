import { FC } from 'react';
import { Pokemon } from '../../models/pokemon.model';
import PokeType from '../PokeType/PokeType';
import { DetailStyled, PokeCardDetailStyled } from './PokeCardDetailStyled';

export interface Props {
  pokemon: Pokemon;
}

const PokeCardDetail: FC<Props> = ({ pokemon }) => {
  const { name, id, imgUrl, type1, type2, size, stats } = pokemon;

  return (
    <DetailStyled>
      <PokeCardDetailStyled pokemon={pokemon}>
        <div className="pokemon-info">
          <h2>{name}</h2>
          <p data-testid="idDetail">#{id.toString().padStart(4, '0')}</p>
        </div>

        <div className="pokemon-details">
          <img src={imgUrl} alt={name} />
          <div>
            <div className="types">
              <PokeType type={type1} />
              <PokeType type={type2} />
            </div>

            <p>
              Weight: <b>{size.weight}</b> kg
            </p>
            <p>
              Height: <b>{size.height}</b> cm
            </p>
            {stats.map((s) => (
              <p key={s.name + id}>
                {s.name} : <b>{s.value}</b>
              </p>
            ))}
          </div>
        </div>
      </PokeCardDetailStyled>
    </DetailStyled>
  );
};
export default PokeCardDetail;
