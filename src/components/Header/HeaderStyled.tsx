import styled from 'styled-components';

export const HeaderStyled = styled.header`
  height: 210px;
  background-color: #1e1e1e;
  position: relative;

  display: grid;
  justify-content: center;
  align-content: center;

  img {
    width: 280px;
  }

  .socials {
    position: absolute;
    right: 25px;
    top: 20%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 2rem;
    color: aliceblue;
    a {
      color: aliceblue;
      text-decoration: none;
    }
  }

  @media (max-width: 769px) {
    img {
      width: 220px;
    }

    height: 210px;

    .socials {
      flex-direction: row;
      bottom: 0;
      top: auto;
      right: 50%;
      transform: translate(50%);
      font-size: 1.5rem;
    }
  }
`;
