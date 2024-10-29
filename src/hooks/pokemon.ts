import axios from "axios";
import { queryOptions } from "@tanstack/react-query";
import { Pokemon, PokemonGeneration } from "../types";

const fetchPokemon = async (id: string): Promise<Pokemon> =>
    (await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;

const fetchAllPokemonsGen1 = async (offset:number, limit: number = 20): Promise<PokemonGeneration> =>
    (await axios(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)).data;

export const pokemonQueryOptions = (pokemonId: string) =>
    queryOptions({
        queryKey: ["pokemons", pokemonId],
        queryFn: () => fetchPokemon(pokemonId),
    });

export const allPokemonsQueryOptions =  (offset: number = 0) => queryOptions({
    queryKey: ["pokemons"],
    queryFn: ()=> fetchAllPokemonsGen1(offset),
    select: (data) => data.results
});