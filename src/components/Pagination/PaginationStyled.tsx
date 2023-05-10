import styled from 'styled-components';

interface StyledProps {
  page: number;
}

export const PaginationStyled = styled.section<StyledProps>`
  width: fit-content;
  display: flex;
  margin: 0 auto;
  width: 100%;
  padding: 0 1.5rem;
  align-items: center;

  .buttons {
    width: fit-content;
    display: flex;
    margin: 0 auto;
    padding: 20px;

    li {
      button {
        width: 34px;
        border: none;
        border-radius: 6px;
        padding: 10px;
        background-color: transparent;
        font-weight: 600;

        :disabled:not(.arrow, .active) {
          color: transparent;
        }

        :hover:not(.active, :disabled) {
          background: #ddd;
        }
      }

      .active {
        background-color: #1b45ff;
        color: #fff;
      }
    }
  }

  .results {
    position: absolute;
    display: flex;
    align-items: center;
    label {
      font-size: smaller;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      select {
        padding: 2px 6px;
        border-radius: 15px;
      }
    }
  }

  @media (max-width: 580px) {
    flex-direction: column;
    padding: 0;
    margin-top: 0.5rem;

    .buttons {
      padding: 20px 0px;
      margin-top: 1rem;
    }
  }
`;
