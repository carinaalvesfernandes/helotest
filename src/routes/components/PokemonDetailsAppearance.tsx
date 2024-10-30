import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography,
} from "@mui/material";
import { Pokemon } from "../../types";

type PokemonDetailsAppearanceProps = {
    pokemon: Pokemon;
};

const PokemonDetailsAppearance = ({
    pokemon,
}: PokemonDetailsAppearanceProps) => {
    return (
        <Box>
            <Typography variant='body2' sx={{ fontWeight: 600 }}>
                Appearance
            </Typography>
            <Table sx={{ height: "fit-content" }} size='small'>
                <TableBody>
                    <TableRow
                        sx={{
                            "& td, & th": {
                                border: 0,
                            },
                        }}>
                        <TableCell component='th' scope='row'>
                            Weight
                        </TableCell>
                        <TableCell component='th' scope='row'>
                            {pokemon.weight}
                        </TableCell>
                    </TableRow>
                    <TableRow
                        sx={{
                            "& td, & th": {
                                border: 0,
                            },
                        }}>
                        <TableCell component='th' scope='row'>
                            Height
                        </TableCell>

                        <TableCell component='th' scope='row'>
                            {pokemon.height}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    );
};

export default PokemonDetailsAppearance;
