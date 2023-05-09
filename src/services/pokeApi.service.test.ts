import { waitFor } from '@testing-library/react';
import {
  mockPokemonsByType,
  mockPokemonsPage,
  pokemon1,
  pokemonRes,
} from '../mocks/pokemon-mocks';
import { PokemonResponse } from '../models/pokemon.model';
import {
  getPokemonDetail,
  getPokemonPage,
  getPokemonsByType,
  getPokemonsData,
  mapPokemonApiData,
} from './pokeApi.service';

afterEach(() => {
  jest.clearAllMocks();
});

describe('Given a getPokemonDetail fetching function', () => {
  test('When response is resolved, then it should return a Pokemon', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(pokemonRes),
    });

    const result = await getPokemonDetail('bulbasaur');
    expect(result).toEqual(pokemon1);
  });

  test('When response is rejected, then it should return undefined', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue(undefined),
    });

    const result = await getPokemonDetail('bulbasaur');
    expect(result).toEqual(undefined);
  });
});

describe('Given a getPokemonsData function', () => {
  test('When it is called, then it should return an array of pokemon data', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(pokemonRes),
    });

    const result = await getPokemonsData(mockPokemonsPage);

    expect(result).toEqual([pokemon1, pokemon1]);

    if (result) {
      expect(result.length).toBe(mockPokemonsPage.results.length);
      expect(result[0].name).toBe('bulbasaur');
      expect(result[0].id).toBe(1);
    }
  });

  test('When an error occurs, then it should return undefined', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue(undefined),
    });
    const result = await getPokemonsData(mockPokemonsPage);
    expect(result).toEqual(undefined);
  });
});

describe('Given a getPokemonPage function', () => {
  test('When it is called, then it should return an object with pokemons data and max pages', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockPokemonsPage),
    });

    const result = await getPokemonPage();

    expect(result?.maxPages).toEqual(1);

    expect(global.fetch).toHaveBeenCalledWith(
      'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20'
    );
  });

  test('When an error occurs, then it should return undefined', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue(undefined),
    });

    const result = await getPokemonPage(2, 20);

    expect(result).toBeUndefined();
  });
});

describe('Given a getPokemonsByType function', () => {
  test('When it is called, then it should return an array of pokemon data', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockPokemonsByType),
    });

    const result = await getPokemonsByType('grass');

    waitFor(() => {
      expect(result).toEqual([pokemon1]);
    });

    expect(global.fetch).toHaveBeenCalledWith(
      'https://pokeapi.co/api/v2/type/grass'
    );

    if (result) {
      expect(result.length).toBe(mockPokemonsByType.pokemon.length);
      expect(result[0].name).toBe('bulbasaur');
      expect(result[0].id).toBe(1);
    }
  });

  test('When an error occurs, then it should return undefined', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue(undefined),
    });

    const result = await getPokemonsByType('fire');

    expect(result).toBeUndefined();
  });
});

describe('Given a mapPokemonApiData function', () => {
  test('When it is called, then it should return a mapped Pokemon object', () => {
    const pokemonInfo: PokemonResponse = pokemonRes;
    const pokemon = mapPokemonApiData(pokemonInfo);

    expect(pokemon).toEqual(pokemon1);
  });

  test('When pokemon does not have animated picture, then it should return a static picture', () => {
    const pokemonInfo: PokemonResponse = pokemonRes;

    delete pokemonRes.sprites.versions['generation-v']['black-white'].animated
      .front_default;

    const pokemon = mapPokemonApiData(pokemonInfo);

    expect(pokemon).toEqual(pokemon1);
  });

  test('When pokemon does not have picture, then it should return default picture', () => {
    const pokemonInfo: PokemonResponse = pokemonRes;

    delete pokemonRes.sprites.versions['generation-v']['black-white'].animated
      .front_default;

    delete pokemonRes.sprites.front_default;

    const pokemon = mapPokemonApiData(pokemonInfo);

    expect(pokemon.imgUrl).toEqual('/assets/pokeball-default.gif');
  });
});
