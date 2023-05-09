import {
  PokemonsPage,
  PokemonResponse,
  Pokemon,
  pokeType,
  PokemonInfo,
  PokemonsByType,
} from '../models/pokemon.model';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const mapPokemonApiData = (pokemonInfo: PokemonResponse) => {
  const pokemon: Pokemon = {
    id: pokemonInfo.id,
    name: pokemonInfo.name,
    imgUrl:
      pokemonInfo.sprites.versions['generation-v']['black-white'].animated
        .front_default ||
      pokemonInfo.sprites.front_default ||
      '/assets/pokeball-default.gif',
    size: {
      weight: pokemonInfo.weight,
      height: pokemonInfo.height,
    },
    stats: pokemonInfo.stats.map((s) => ({
      name: s.stat.name,
      value: s.base_stat,
    })),
    type1: pokemonInfo.types[0]?.type.name as keyof typeof pokeType,
    type2: pokemonInfo.types[1]?.type.name as keyof typeof pokeType,
  };

  return pokemon;
};

export const getPokemonPage = async (page: number = 1, limit: number = 20) => {
  try {
    const response = await fetch(
      `${BASE_URL}/pokemon/?limit=${limit}&offset=${page * limit}`
    );

    const pokemonsPage: PokemonsPage = await response.json();
    const pokemonsPageData = await getPokemonsData(pokemonsPage);

    return {
      pokemonsPageData,
      maxPages: Math.ceil(pokemonsPage.count / limit - 1),
    };
  } catch (error) {
    return undefined;
  }
};

export const getPokemonsByType = async (type: string) => {
  try {
    const response = await fetch(`${BASE_URL}/type/${type}`);
    const pokemonsResponse = await response.json();

    const pokemonsByType: PokemonsByType = {
      results: pokemonsResponse.pokemon.map(
        (info: { pokemon: PokemonInfo }) => info.pokemon
      ),
    };

    const pokemonsByTypeData = await getPokemonsData(pokemonsByType);

    return pokemonsByTypeData;
  } catch (error) {
    return undefined;
  }
};

export const getPokemonsData = async (
  pokemonsPage: PokemonsPage | PokemonsByType
) => {
  const pokemonPromises = pokemonsPage.results.map(async (pokemonRef) => {
    const response = await fetch(pokemonRef.url);
    const pokemonInfo: PokemonResponse = await response.json();
    const pokemon = mapPokemonApiData(pokemonInfo);

    return pokemon;
  });

  try {
    const pokemonsData = await Promise.all(pokemonPromises);
    pokemonsData.sort((a, b) => a.id - b.id);

    return pokemonsData;
  } catch (error) {
    return undefined;
  }
};

export const getPokemonDetail = async (pokemonRef: string | number) => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${pokemonRef}`);

    const pokemonInfo: PokemonResponse = await response.json();
    const pokemon = mapPokemonApiData(pokemonInfo);

    return pokemon;
  } catch (error) {
    return undefined;
  }
};
