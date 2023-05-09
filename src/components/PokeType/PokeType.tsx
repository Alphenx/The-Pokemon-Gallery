import { FC } from 'react';
import styled from 'styled-components';
import { pokeType } from '../../models/pokemon.model';

const TypeStyled = styled.div<Props>`
  width: 50px;
  height: 50px;
  background-image: url('/assets/types.webp');
  background-repeat: no-repeat;
  background-size: 300px;

  display: ${({ type }) => (type ? `block` : 'none')};

  background-position: ${({ type }) =>
    type
      ? `-${pokeType[type][1] * 50}px -${pokeType[type][0] * 50}px`
      : '50px 0px'};
`;

interface Props {
  type: keyof typeof pokeType | undefined;
}

const PokeType: FC<Props> = ({ type }) => {
  return <TypeStyled data-testid="type" type={type}></TypeStyled>;
};
export default PokeType;
