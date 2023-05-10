import styled from 'styled-components';
import { Props } from './PokeCardDetail';

export const PokeCardDetailStyled = styled.article<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 20px;
  margin: 0 auto;
  max-width: 768px;
  text-transform: capitalize;

  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 5px 18px 0 rgba(31, 38, 135, 0.37);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  .pokemon-info {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 5px 15px;
    justify-content: space-between;

    h2 {
      font-size: x-large;
      max-width: 150px;
    }

    p {
      visibility: ${(props) =>
        props.pokemon.id < 10000 ? `visible` : 'hidden'};
    }
  }

  .pokemon-details {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
    img {
      width: 300px;
    }
    .types {
      display: flex;
      width: 100%;
      justify-content: center;
      margin: 1rem 0;
    }
  }

  @media (max-width: 426px) {
    .pokemon-details {
      flex-direction: column;
      img {
        width: 200px;
      }
    }
  }
`;

export const DetailStyled = styled.section`
  max-width: 1440px;
`;
