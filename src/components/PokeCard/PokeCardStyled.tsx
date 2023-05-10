import styled from 'styled-components';
import { Props } from './PokeCard';

export const CardStyled = styled.article<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: 8px;
  width: 250px;
  height: 300px;

  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 5px 18px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  .pokemon-info {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 10px 15px;
    justify-content: space-between;

    h2 {
      font-size: larger;
      text-transform: capitalize;
      max-width: 150px;
    }

    p {
      visibility: ${(props) =>
        props.pokemon.id < 10000 ? `visible` : 'hidden'};
    }
  }

  img {
    min-width: 100px;
    max-height: 150px;
  }

  .types {
    display: flex;
    align-items: center;
  }

  @media (max-width: 769px) {
    width: 170px;
    height: 250px;

    img {
      min-width: 80px;
      max-height: 100px;
    }

    .pokemon-info {
      h2 {
        font-size: small;
      }
      p {
        font-size: smaller;
      }
    }
  }
`;
