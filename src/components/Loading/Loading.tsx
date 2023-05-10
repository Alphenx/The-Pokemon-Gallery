import styled from 'styled-components';

const LoadingStyled = styled.div`
  text-align: center;
  padding: 5rem 0;

  p {
    padding-top: 1rem;
    font-weight: bold;
  }
`;
const Loading = () => {
  return (
    <LoadingStyled>
      <img width={200} src="/assets/loading-mew.gif" alt="Loading" />
      <p>Loading pokemons...</p>
    </LoadingStyled>
  );
};
export default Loading;
