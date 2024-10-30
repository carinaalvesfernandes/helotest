export interface NamedResource {
    name: string;
    url: string;
}

export interface PokemonGeneration {
    results: NamedResource[],
    count: number
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

export interface PokemonMove {
    move: NamedResource;
}

export interface PokemonStat {
    stat: NamedResource;
    effort: number;
    base_stat: number;
}

interface PokemonType {
    type: NamedResource;
}
