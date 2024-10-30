import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography,
} from "@mui/material";
import { Pokemon } from "../../types";

type PokemonDetailsMovesProps = {
    pokemon: Pokemon;
};

const PokemonDetailsMoves = ({ pokemon }: PokemonDetailsMovesProps) => {
    return (
        <Box>
            <Typography variant='body2' sx={{ fontWeight: 600 }}>
                Moves
            </Typography>
            <Table size='small'>
                <TableBody>
                    {pokemon.moves
                        .filter((_x, index) => index < 5)
                        .map(p => (
                            <TableRow
                                key={p.move.name}
                                sx={{
                                    "& td, & th": {
                                        border: 0,
                                    },
                                }}>
                                <TableCell component='th' scope='row'>
                                    {p.move.name}
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </Box>
    );
};

export default PokemonDetailsMoves;
