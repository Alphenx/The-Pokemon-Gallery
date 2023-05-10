import styled from 'styled-components';

const ErrorStyled = styled.article`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  img {
    padding: 1rem;
    width: 100%;
  }
`;
const ErrorMsg = () => {
  return (
    <ErrorStyled>
      <img src="/assets/error.png" alt="Error" />
      <h2>Ops...something went wrong. Please try again later.</h2>
    </ErrorStyled>
  );
};
export default ErrorMsg;
