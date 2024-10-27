import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { PokemonClient, GameClient } from "pokenode-ts"; // Import the Client

const gameApi = new GameClient();
const pokemonApi = new PokemonClient();

const fetchPokemon = async (name: string) => pokemonApi.getPokemonByName(name);

const fetchAllPokemonsGen1 = async () => gameApi.getGenerationById(1);

// const fetchAllPokemonsGen1 = async () =>
//     (await axios(`https://pokeapi.co/api/v2/generation/1`)).data;

export const useFetchPokemon = (pokemonName: string) =>
    useQuery({
        queryKey: ["pokemons", pokemonName],
        queryFn: () => fetchPokemon(pokemonName),
    });

export const useFetchAllPokemonGen1 = () =>
    useQuery({
        queryKey: ["pokemons"],
        queryFn: fetchAllPokemonsGen1,
        select: data => {
            return data.pokemon_species;
        },
    });
