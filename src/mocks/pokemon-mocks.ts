import {
  Pokemon,
  PokemonResponse,
  PokemonsByTypeRes,
  PokemonsPage,
} from '../models/pokemon.model';

export const pokemon1: Pokemon = {
  name: 'bulbasaur',
  id: 1,
  imgUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  type1: 'grass',
  type2: 'poison',
  size: {
    weight: 10,
    height: 20,
  },
  stats: [
    { name: 'hp', value: 45 },
    { name: 'attack', value: 45 },
    { name: 'defense', value: 45 },
    { name: 'special-attack', value: 45 },
    { name: 'special-defense', value: 45 },
    { name: 'speed', value: 45 },
  ],
};

export const pokemon2: Pokemon = {
  id: 10000,
  name: '',
  imgUrl: '',
  size: {
    weight: 0,
    height: 0,
  },
  stats: [],
  type1: 'undefined',
  type2: 'undefined',
};

export const pokemon3: Pokemon = {
  name: 'ivysaur',
  id: 2,
  imgUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
  type1: 'grass',
  type2: 'poison',
  size: {
    weight: 10,
    height: 20,
  },
  stats: [
    { name: 'hp', value: 45 },
    { name: 'attack', value: 45 },
    { name: 'defense', value: 45 },
    { name: 'special-attack', value: 45 },
    { name: 'special-defense', value: 45 },
    { name: 'speed', value: 45 },
  ],
};

export const mockPokemonsPage: PokemonsPage = {
  count: 40,
  results: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
    },
  ],
};

export const mockPokemonsByType: PokemonsByTypeRes = {
  pokemon: [
    {
      pokemon: {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      },
      slot: 1,
    },
  ],
};

export const pokemonRes: PokemonResponse = {
  id: 1,
  name: 'bulbasaur',
  weight: 10,
  height: 20,
  stats: [
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'hp',
        url: '',
      },
    },
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'attack',
        url: '',
      },
    },
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'defense',
        url: '',
      },
    },
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'special-attack',
        url: '',
      },
    },
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'special-defense',
        url: '',
      },
    },
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'speed',
        url: '',
      },
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: 'grass',
        url: '',
      },
    },
    {
      slot: 2,
      type: {
        name: 'poison',
        url: '',
      },
    },
  ],
  sprites: {
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    versions: {
      'generation-v': {
        'black-white': {
          animated: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          },
        },
      },
    },
  },
};
