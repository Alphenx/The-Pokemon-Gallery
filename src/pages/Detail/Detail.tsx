import { useParams } from 'react-router-dom';
import usePokemonDetail from '../../hooks/usePokemonDetail';
import Loading from '../../components/Loading/Loading';
import styled from 'styled-components';
import PokeCardDetail from '../../components/PokeCardDetail/PokeCardDetail';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';

const DetailStyled = styled.section`
  padding: 1rem;
`;
const Detail = () => {
  const { id } = useParams();
  const { pokemon, loading, isFulfilled } = usePokemonDetail(id);

  return (
    <DetailStyled>
      {loading && <Loading />}

      {isFulfilled
        ? (pokemon && <PokeCardDetail pokemon={pokemon} />) || <ErrorMsg />
        : null}
    </DetailStyled>
  );
};

export default Detail;
