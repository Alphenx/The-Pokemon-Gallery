import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import PokeCardList from '../../components/PokeCardList/PokeCardList';
import usePokemonsByType from '../../hooks/usePokemonsByType';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';

const Filtered = () => {
  const { type } = useParams();

  const { loading, pokemons } = usePokemonsByType(type);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        (pokemons && <PokeCardList pokemons={pokemons} />) || <ErrorMsg />
      )}
    </>
  );
};

export default Filtered;
