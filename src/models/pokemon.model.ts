// Poke API
export interface PokemonsPage {
  count: number;
  results: PokemonInfo[];
}

export interface PokemonsByType {
  results: PokemonInfo[];
}

export interface PokemonsByTypeRes {
  pokemon: { pokemon: PokemonInfo; slot: number }[];
}

export interface PokemonInfo {
  name: string;
  url: string;
}

export interface PokemonResponse {
  id: number;
  name: string;
  weight: number;
  height: number;
  stats: Stat[];
  types: Type[] | undefined[];
  sprites: {
    front_default?: string;
    versions: {
      'generation-v': {
        'black-white': {
          animated: {
            front_default?: string;
          };
        };
      };
    };
  };
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

// Pokemon APP
export interface Pokemon {
  id: number;
  name: string;
  imgUrl: string;
  size: { weight: number; height: number };
  stats: { name: string; value: number }[];
  type1: keyof typeof pokeType;
  type2: keyof typeof pokeType;
}

export const pokeType = {
  normal: [0, 0],
  fighting: [0, 1],
  flying: [0, 2],
  poison: [0, 3],
  ground: [0, 4],
  rock: [0, 5],
  bug: [1, 0],
  ghost: [1, 1],
  steel: [1, 2],
  fire: [1, 3],
  water: [1, 4],
  grass: [1, 5],
  electric: [2, 0],
  psychic: [2, 1],
  ice: [2, 2],
  dragon: [2, 3],
  dark: [2, 4],
  fairy: [2, 5],
  undefined: [0, 0],
};
