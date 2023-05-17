import styled from 'styled-components';

export const SearchBarStyled = styled.section`
  width: fit-content;
  display: flex;
  margin: 0 auto;
  padding: 20px;
  gap: 2rem;

  label {
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
    font-size: small;

    div {
      padding: 0.5rem 1rem;
      background: rgba(255, 255, 255, 0.35);
      box-shadow: 0 3px 15px 0 rgba(31, 38, 135, 0.37);
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.18);
    }
    input {
      width: 200px;
    }
    input,
    button,
    select {
      font-size: 0.9rem;
      background-color: transparent;
      border: 0;

      :focus {
        outline: none;
      }
    }

    select {
      text-transform: capitalize;
      margin-right: 1rem;
    }
  }

  @media (max-width: 540px) {
    gap: 1rem;
    padding: 20px 10px;

    label {
      font-size: 0.8rem;
      input {
        width: 100px;
      }
      input,
      button,
      select {
        font-size: 0.7rem;
      }
    }
  }
`;
