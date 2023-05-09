import { useState, useEffect } from 'react';
import { Pokemon } from '../models/pokemon.model';
import { getPokemonPage } from '../services/pokeApi.service';

const usePokemons = () => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(20);
  const [pokemons, setPokemons] = useState<Pokemon[] | undefined>([]);
  const [maxPages, setMaxPages] = useState<any>(1);
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      if (maxPages && page <= maxPages) {
        setLoading(true);
        getPokemonPage(page, limit).then((pageData) => {
          setPokemons(pageData?.pokemonsPageData);
          setMaxPages(pageData?.maxPages);
          setLoading(false);
        });
      }
    },
    [page, limit]
  );

  return { loading, pokemons, setPage, page, setLimit, maxPages };
};
export default usePokemons;
