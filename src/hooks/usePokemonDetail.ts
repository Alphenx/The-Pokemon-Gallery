import { useState, useEffect } from 'react';
import { Pokemon } from '../models/pokemon.model';
import { getPokemonDetail } from '../services/pokeApi.service';

const usePokemonDetail = (pokemonRef: string | number | undefined) => {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();
  const [loading, setLoading] = useState(false);
  const [isFulfilled, setIsFulfilled] = useState(false);

  useEffect(() => {
    if (!pokemonRef) {
      return;
    }

    setLoading(true);

    getPokemonDetail(pokemonRef)
      .then((data) => {
        setPokemon(data);
      })
      .finally(() => {
        setIsFulfilled(true);
        setLoading(false);
      });
  }, [pokemonRef]);

  return { loading, pokemon, isFulfilled };
};
export default usePokemonDetail;
