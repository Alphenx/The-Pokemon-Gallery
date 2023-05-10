import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';
import Loading from '../../components/Loading/Loading';
import Pagination from '../../components/Pagination/Pagination';
import PokeCardList from '../../components/PokeCardList/PokeCardList';
import usePokemons from '../../hooks/usePokemons';

const Home = () => {
  const { loading, pokemons, page, maxPages, setPage, setLimit } =
    usePokemons();

  return (
    <>
      <Pagination
        setLimit={setLimit}
        setPage={setPage}
        page={page}
        maxPages={maxPages}
      />
      {loading ? (
        <Loading />
      ) : (
        (pokemons && <PokeCardList pokemons={pokemons} />) || <ErrorMsg />
      )}
    </>
  );
};

export default Home;
