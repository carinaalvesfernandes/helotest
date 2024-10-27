import {
    Box,
    Card,
    CardContent,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { useFetchPokemon } from "../hooks/pokemon";
import { useParams } from "react-router-dom";

function PokemonDetailPage() {
    const params = useParams();
    const { data: pokemon, isError } = useFetchPokemon(params.pokemon || "");

    if (isError) {
        return (
            <Box sx={{ mt: "25vh" }}>
                <Typography gutterBottom variant='h6' align='center'>
                    Something went wrong, try again later
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "20vh" }}>
            {pokemon && (
                <Card sx={{ width: "500px" }}>
                    <CardContent>
                        <Box sx={{ display: "flex" }}>
                            <img
                                src={pokemon.sprites.front_default ?? ""}
                                alt={pokemon.name}
                            />
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

                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Table size='small' sx={{ width: "50%" }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Stats</TableCell>
                                        <TableCell>Base</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {pokemon.stats.map(stats => (
                                        <TableRow
                                            key={stats.stat.name}
                                            sx={{
                                                "& td, & th": { border: 0 },
                                            }}>
                                            <TableCell
                                                component='th'
                                                scope='row'>
                                                {stats.stat.name}
                                            </TableCell>
                                            <TableCell
                                                component='th'
                                                scope='row'>
                                                {stats.base_stat}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}>
                                <Box>
                                    <Typography
                                        variant='body2'
                                        sx={{ fontWeight: 600 }}>
                                        Appearance
                                    </Typography>
                                    <Table
                                        sx={{ height: "fit-content" }}
                                        size='small'>
                                        <TableBody>
                                            <TableRow
                                                sx={{
                                                    "& td, & th": { border: 0 },
                                                }}>
                                                <TableCell
                                                    component='th'
                                                    scope='row'>
                                                    Weight
                                                </TableCell>
                                                <TableCell
                                                    component='th'
                                                    scope='row'>
                                                    {pokemon.weight}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow
                                                sx={{
                                                    "& td, & th": { border: 0 },
                                                }}>
                                                <TableCell
                                                    component='th'
                                                    scope='row'>
                                                    Height
                                                </TableCell>

                                                <TableCell
                                                    component='th'
                                                    scope='row'>
                                                    {pokemon.height}
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </Box>
                                <Box>
                                    <Typography
                                        variant='body2'
                                        sx={{ fontWeight: 600 }}>
                                        Moves
                                    </Typography>
                                    <Table size='small'>
                                        <TableBody>
                                            {pokemon.moves
                                                .filter(
                                                    (_x, index) => index < 5
                                                )
                                                .map(p => (
                                                    <TableRow
                                                        key={p.move.name}
                                                        sx={{
                                                            "& td, & th": {
                                                                border: 0,
                                                            },
                                                        }}>
                                                        <TableCell
                                                            component='th'
                                                            scope='row'>
                                                            {p.move.name}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                        </TableBody>
                                    </Table>
                                </Box>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            )}
        </Box>
    );
}

export default PokemonDetailPage;
