import { Box, Chip, Typography } from "@mui/material";
import { Pokemon } from "../../types";

type PokemonDetailsHeaderProps = {
    pokemon: Pokemon;
};

const PokemonDetailsHeader = ({ pokemon }: PokemonDetailsHeaderProps) => {
    return (
        <Box sx={{ display: "flex" }}>
            <img src={pokemon.sprites.front_default ?? ""} alt={pokemon.name} />
            <Box>
                <Typography
                    gutterBottom
                    variant='h5'
                    style={{ textTransform: "capitalize" }}>
                    {pokemon.name}
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                    {pokemon.types.map(t => (
                        <Chip
                            key={t.type.name}
                            label={t.type.name}
                            size='small'
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default PokemonDetailsHeader;
