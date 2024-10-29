import axios from "axios";
import { queryOptions } from "@tanstack/react-query";
import { Pokemon, PokemonGeneration } from "../types";

const fetchPokemon = async (id: string): Promise<Pokemon> =>
    (await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;

const fetchAllPokemonsGen1 = async (): Promise<PokemonGeneration> =>
    (await axios(`https://pokeapi.co/api/v2/generation/1`)).data;

export const pokemonQueryOptions = (pokemonId: string) =>
    queryOptions({
        queryKey: ["pokemons", pokemonId],
        queryFn: () => fetchPokemon(pokemonId),
    });

export const allPokemonsQueryOptions = queryOptions({
    queryKey: ["pokemons"],
    queryFn: fetchAllPokemonsGen1,
});