export interface NamedResource {
    name: string;
    url: string;
}

export interface PokemonGeneration {
    id: number;
    pokemon_species: NamedResource[];
    types: NamedResource[];
}

export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    moves: PokemonMove[];
    sprites: { front_default: string | null };
    stats: PokemonStat[];
    types: PokemonType[];
}

interface PokemonMove {
    move: NamedResource;
}

interface PokemonStat {
    stat: NamedResource;
    effort: number;
    base_stat: number;
}

interface PokemonType {
    type: NamedResource;
}
