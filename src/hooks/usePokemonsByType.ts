import { useState, useEffect } from 'react';
import { Pokemon } from '../models/pokemon.model';
import { getPokemonsByType } from '../services/pokeApi.service';

const usePokemonsByType = (pokemonType: string | undefined) => {
  const [pokemons, setPokemon] = useState<Pokemon[] | undefined>([]);
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      setLoading(true);
      getPokemonsByType(pokemonType).then((data) => {
        setPokemon(data);
        setLoading(false);
      });
    },
    [pokemonType]
  );

  return { loading, pokemons };
};
export default usePokemonsByType;
