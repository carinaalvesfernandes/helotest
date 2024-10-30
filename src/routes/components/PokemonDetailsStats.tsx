import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import { PokemonStat } from "../../types";

type PokemonDetailsStatsProps = {
    pokemonStats: PokemonStat[];
};

const PokemonDetailsStats = ({ pokemonStats }: PokemonDetailsStatsProps) => {
    return (
        <Table size='small' sx={{ width: "50%" }}>
            <TableHead>
                <TableRow>
                    <TableCell>Stats</TableCell>
                    <TableCell>Base</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {pokemonStats.map(stats => (
                    <TableRow
                        key={stats.stat.name}
                        sx={{
                            "& td, & th": { border: 0 },
                        }}>
                        <TableCell component='th' scope='row'>
                            {stats.stat.name}
                        </TableCell>
                        <TableCell component='th' scope='row'>
                            {stats.base_stat}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default PokemonDetailsStats;
